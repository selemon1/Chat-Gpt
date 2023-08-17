const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const chatContainer = document.getElementById('chat-container');
const chatLog = document.getElementById('chat-log');
const userMessageInput = document.getElementById('user-message');
const sendButton = document.getElementById('send-button');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');

const OPENAI_API_KEY = "AIzaSyCqZvoC0OnzvizDdptoHB5d0k5jObfGeyg"; // Replace with your OpenAI API key

// Initialize OpenAI API
const openai = new OpenAI(OPENAI_API_KEY);

// Firebase Authentication
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // User is signed in
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'none';
        chatContainer.style.display = 'block';
    } else {
        // No user is signed in
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
        chatContainer.style.display = 'none';
    }
});

// User Login
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.error('Login error:', error);
        });
});

// User Sign Up
document.getElementById('signup-button').addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.error('Signup error:', error);
        });
});

// Toggle between Login and Sign Up
showSignupLink.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

showLoginLink.addEventListener('click', () => {
    loginContainer.style.display = 'block';
    signupContainer.style.display = 'none';
});

// Send user message and receive chatbot response
sendButton.addEventListener('click', async () => {
    const userMessage = userMessageInput.value;
    if (!userMessage) return;

    appendMessage(userMessage, 'user');

    const botResponse = await generateBotResponse(userMessage);
    appendMessage(botResponse, 'bot');

    userMessageInput.value = '';
});

async function generateBotResponse(userMessage) {
    const response = await openai.complete({
        prompt: `User: ${userMessage}\nChatGPT:`,
        max_tokens: 50,
        temperature: 0.7,
        stop: '\n',
    });

    return response.choices[0].text.trim();
}

function appendMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}
