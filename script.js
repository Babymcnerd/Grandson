console.log("Hola!.This page is loaded!");
const article = document.getElementsByTagName("*");
var articleCopy = JSON.parse(JSON.stringify(article));
var matches = [
  "-xtcore.js",
  "/?livehit=",
  "/?record&key=",
  "/__utm.gif",
  "footer",
  "ads-column",
  "parag",
];
var matchMap = {};
var matchesHit = [];

// function CheckChildren(parent){
//     for (var i = 0; i < parent.length; i++){
//         if (parent[i].indexOf())
//     }
// }

if (articleCopy) {
  for (var j = 0; j < articleCopy.length; j++) {
    const text = articleCopy[j].innerHTML;
    var currentArt = articleCopy[j];
    for (var i = 0; i < matches.length; i++) {
      if (text.indexOf(matches[i]) !== -1) {
        if (!matchesHit.includes(currentArt)) {
          matchesHit.push(currentArt);
          console.log(articleCopy[j]);
        }
      }
    }
  }
  for (var i = 0; i < matchesHit.length; i++) {
    matchesHit[i].insertAdjacentHTML("afterbegin", i);
  }
}

async function sendRequest(prompt) {
  const apiUrl = "https://api.openai.com/v1/chat/completions";
  const apiKey = "";

  const requestBody = {
    model: "gpt-3.5-turbo",
    // prompt: prompt,
    // max_tokens: 150,
    messages: [
      {
        role: "system",
        content:
          "We need you to identify suspicious and malicious html tag return a json object that has a message field and score field where score is a number between 0-100.",
      },
      {
        role: "user",
        content: "Please rate this tag: " + prompt,
      },
    ],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from the server");
    }

    const responseData = await response.json();
    console.log(responseData.choices[0].message.content);
    return responseData.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
