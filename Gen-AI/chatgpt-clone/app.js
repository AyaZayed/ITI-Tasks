const express = require('express');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

let chatHistory = [];

app.get('/', (req, res) => {
        res.render('index', { messages: chatHistory });
});

app.post('/api/chat', async (req, res) => {
        try {
                const { message } = req.body;

                if (!message) {
                        return res.status(400).json({ error: 'Message is required' });
                }

                chatHistory.push({ role: 'user', content: message });

                const completion = await openai.chat.completions.create({
                        model: 'gpt-4o-mini',
                        messages: chatHistory,
                        temperature: 0.7,
                });

                const assistantMessage = completion.choices[0].message.content;

                chatHistory.push({ role: 'assistant', content: assistantMessage });

                res.json({
                        message: assistantMessage,
                        history: chatHistory
                });

        } catch (error) {
                console.error('Error:', error);
                res.status(500).json({
                        error: 'Failed to get response',
                        details: error.message
                });
        }
});

app.post('/api/clear', (req, res) => {
        chatHistory = [];
        res.json({ success: true });
});

app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
});