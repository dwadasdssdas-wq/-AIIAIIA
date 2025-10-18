// В реальном приложении добавьте этот код для работы с DeepSeek API
const DEEPSEEK_API_KEY = "sk-b1f36c89e6e7470c8ac8bb643dda88e9"; // Замените на реальный ключ

async function callDeepSeekAPI(message) {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{role: "user", content: message}],
            stream: false
        })
    });
    
    return await response.json();
}
