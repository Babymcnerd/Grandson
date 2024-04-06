console.log('Hola!.This page is loaded!')
const article = document.getElementsByTagName('*');
console.log(article)
var matches = ["-xtcore.js",
    "/?livehit=",
    "/?record&key=",
    "/__utm.gif",
    "footer"]
var matchesHit = [];
if (article) {
    for (var j = 0; j < article.length; j++){
        const text = article[j].innerHTML;
        for (var i = 0; i < matches.length; i++){
            if (text.indexOf(matches[i]) !== -1){
                if (!matchesHit.includes(article[j])) {
                    matchesHit.push(article[j])
                    console.log(article[j])
                }
            }
        }
    }
    console.log(matchesHit.length)
    for (var i = 0; i < matchesHit.length; i++){
        console.log("note here " + matchesHit[i].innerHTML)
    }

    console.log(sendRequest(matchesHit[0]));

}

async function sendRequest(prompt) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey =  '';


    const requestBody = {
        model: 'gpt-3.5-turbo', 
        // prompt: prompt,
        // max_tokens: 150,
        messages: [
            {
            "role": "system",
            "content": "We need you to identify suspicious and malicious html tag return a json object that has a message field and score field where score is a number between 0-100."
            },
            {
            "role": "user",
            "content": "Please rate this tag: " + prompt 
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
        console.log(responseData.choices[0].message.content)
        return responseData.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
