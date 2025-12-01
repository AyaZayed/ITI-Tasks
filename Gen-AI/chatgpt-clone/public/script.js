const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const chatContainer = document.getElementById('chatContainer');

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
        }
});

clearBtn.addEventListener('click', async () => {
        if (confirm('Are you sure you want to clear the chat history?')) {
                try {
                        await fetch('/api/clear', { method: 'POST' });
                        location.reload();
                } catch (error) {
                        console.error('Error clearing chat:', error);
                }
        }
});

async function sendMessage() {
        const message = messageInput.value.trim();

        if (!message) return;

        sendBtn.disabled = true;
        messageInput.disabled = true;

        addMessage('user', message);
        messageInput.value = '';

        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'loading';
        loadingDiv.textContent = 'Thinking...';
        loadingDiv.id = 'loading';
        chatContainer.appendChild(loadingDiv);
        scrollToBottom();

        try {
                const response = await fetch('/api/chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ message })
                });

                const data = await response.json();

                document.getElementById('loading').remove();

                if (response.ok) {
                        addMessage('assistant', data.message);
                } else {
                        addMessage('assistant', 'Sorry, I encountered an error: ' + data.error);
                }

        } catch (error) {
                document.getElementById('loading')?.remove();
                addMessage('assistant', 'Sorry, something went wrong. Please try again.');
                console.error('Error:', error);
        } finally {
                sendBtn.disabled = false;
                messageInput.disabled = false;
                messageInput.focus();
        }
}

function addMessage(role, content) {
        const welcomeMsg = chatContainer.querySelector('.welcome-message');
        if (welcomeMsg) welcomeMsg.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}`;

        messageDiv.innerHTML = `
    <div class="message-header">
      ${role === 'user' ? 'You' : 'Assistant'}
    </div>
    <div class="message-content">${content}</div>
  `;

        chatContainer.appendChild(messageDiv);
        scrollToBottom();
}

function scrollToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
}