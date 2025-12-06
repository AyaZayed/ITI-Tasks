require('dotenv').config();
const express = require('express');
const session = require('express-session');
const OpenAI = require('openai');
const multer = require('multer');
const cosineSimilarity = require('compute-cosine-similarity');

// Standard Node.js library configuration
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Storage Configuration (Memory)
const upload = multer({ storage: multer.memoryStorage() });

// 2. Global Vector Store
global.vectorStore = [];

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized: true
}));

app.use((req, res, next) => {
        if (!req.session.chatHistory) req.session.chatHistory = [];
        next();
});

// --- HELPER FUNCTIONS ---

function chunkText(text, chunkSize = 1000, overlap = 200) {
        const chunks = [];
        for (let i = 0; i < text.length; i += (chunkSize - overlap)) {
                chunks.push(text.slice(i, i + chunkSize));
        }
        return chunks;
}

async function getEmbedding(text) {
        const response = await openai.embeddings.create({
                model: "text-embedding-3-small",
                input: text,
        });
        return response.data[0].embedding;
}

function retrieveRelevantChunks(queryVector, store, topK = 3) {
        const scoredChunks = store.map(item => ({
                ...item,
                score: cosineSimilarity(queryVector, item.vector)
        }));
        return scoredChunks.sort((a, b) => b.score - a.score).slice(0, topK);
}

// --- ROUTES ---

app.get('/', (req, res) => {
        res.render('index', {
                messages: req.session.chatHistory,
                isFileUploaded: global.vectorStore.length > 0,
                error: null
        });
});

app.post('/upload', upload.single('document'), async (req, res) => {
        try {
                if (!req.file) throw new Error("Please select a file first.");

                console.log("1. File received:", req.file.originalname);

                // --- FIXED: Read .txt files directly (No external library needed) ---
                let text = "";

                // Convert Buffer to String
                text = req.file.buffer.toString('utf-8');
                // -------------------------------------------------------------------

                if (!text || text.trim().length === 0) throw new Error("File is empty.");

                console.log("2. Text extracted. Length:", text.length);
                const chunks = chunkText(text);

                console.log(`3. Generating Embeddings for ${chunks.length} chunks...`);
                const newVectors = [];

                for (const chunk of chunks) {
                        const vector = await getEmbedding(chunk);
                        newVectors.push({ content: chunk, vector: vector });
                }

                global.vectorStore = newVectors;

                console.log(`4. Success! stored ${global.vectorStore.length} vectors in RAM.`);

                req.session.chatHistory.push({
                        role: 'system',
                        content: `I have read your text file (${req.file.originalname}). Ask me anything about it.`
                });

                res.redirect('/');

        } catch (error) {
                console.error("Upload Error:", error);
                res.render('index', {
                        messages: req.session.chatHistory,
                        isFileUploaded: false,
                        error: 'Error processing file: ' + error.message
                });
        }
});

app.post('/chat', async (req, res) => {
        try {
                const { message } = req.body;
                if (!message || message.trim() === '') return res.redirect('/');

                req.session.chatHistory.push({ role: 'user', content: message.trim() });

                let context = "";

                if (global.vectorStore.length > 0) {
                        console.log("Searching Vector Store...");
                        const queryVector = await getEmbedding(message);
                        const relevantChunks = retrieveRelevantChunks(queryVector, global.vectorStore);
                        context = relevantChunks.map(c => c.content).join("\n\n---\n\n");
                }

                const messagesForAI = [
                        {
                                role: "system",
                                content: "You are a helpful assistant. Use the provided Context to answer the user's question. If the answer is not in the context, say you don't know based on the file."
                        },
                        ...req.session.chatHistory
                ];

                if (context) {
                        messagesForAI[messagesForAI.length - 1] = {
                                role: "user",
                                content: `Context:\n${context}\n\nQuestion:\n${message}`
                        };
                }

                const completion = await openai.chat.completions.create({
                        model: 'gpt-4o-mini',
                        messages: messagesForAI,
                        temperature: 0.7,
                });

                req.session.chatHistory.push({
                        role: 'assistant',
                        content: completion.choices[0].message.content
                });

                res.redirect('/');

        } catch (error) {
                console.error('Chat Error:', error);
                res.redirect('/');
        }
});

app.post('/clear', (req, res) => {
        req.session.chatHistory = [];
        global.vectorStore = [];
        res.redirect('/');
});

app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
});