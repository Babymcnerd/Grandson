async function sendRequest(prompt) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = process.env.OPENAI_API_KEY;


    const requestBody = {
        model: 'gpt-3.5-turbo', 
        // prompt: prompt,
        // max_tokens: 150,
        messages: [
            {
            "role": "system",
            "content": "We need you to identify suspicious and malicious html tag return a score from 0-100 based on how likely the html is malicious."
            },
            {
            "role": "user",
            "content": "Is this tag malicious" + prompt + " rate it on a score from 0-100"
            }
        ]
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch response from the server');
        }

        const responseData = await response.json();
        return responseData.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Example usage
async function main() {
    const prompt = "Q: What is the capital of France?\nA:";
    const response = await sendRequest(prompt);
    console.log('ChatGPT Response:', response);
}

// Execute the main function
main();
