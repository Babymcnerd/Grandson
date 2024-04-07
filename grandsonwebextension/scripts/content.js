// const patterns = ["para"];

const url = chrome.runtime.getURL("matches.txt");
const html = chrome.runtime.getURL("scripts/warning.html");

async function getURL(url) {
  var text = await fetch(url);
  var output = await text.text();
  return output;
}

var URLoutput = getURL(url).then((Response) => {
  var URLoutputtext = Response;
  var patterns = URLoutputtext.split("\n");
  //   console.log(patterns);

  const content = document.documentElement.innerHTML;

  matches = [];
  for (var p = 0; p < patterns.length; p++) {
    i = 0;
    while (i !== -1) {
      i = content.indexOf(patterns[p], i);
      if (i !== -1) {
        matches.push(i);
        i += patterns[p].length;
      }
    }
  }

  matching_elements = [];
  for (var i = 0; i < matches.length; i++) {
    matching_elements.push(null);
  }
  elements_queue = [document.documentElement];
  while (elements_queue.length > 0) {
    if (elements_queue[0].innerHTML.length == 0) {
      elements_queue.shift();
      continue;
    }
    i = 0;
    while (i !== -1) {
      i = content.indexOf(elements_queue[0].innerHTML, i);
      if (i !== -1) {
        for (var m = 0; m < matches.length; m++) {
          if (
            i <= matches[m] &&
            i + elements_queue[0].innerHTML.length >= matches[m]
          ) {
            matching_elements[m] = elements_queue[0];
          }
        }
        i += elements_queue[0].innerHTML.length;
      }
    }
    elements_queue.push(...elements_queue[0].children);
    elements_queue.shift();
  }

  unique_matching_elements = [];
  for (var m = 0; m < matching_elements.length; m++) {
    if (!unique_matching_elements.includes(matching_elements[m])) {
        unique_matching_elements.push(matching_elements[m]);
        addToScreen(matching_elements[m], m)
    }
  }
  console.log(unique_matching_elements);
});

function addToScreen(htmlElement, index) {
    console.log(htmlElement.toString())
    console.log(htmlElement)
    sendRequest(htmlElement).then((response) => {
        data = JSON.parse(response);
        score = data.score;
        if (score < 30) {
            matching_elements[index].insertAdjacentHTML("afterend", `<div style="background-color: #6bff9a; border-left: 6px solid #4CAF50; padding: 10px; margin-bottom: 20px;">score ${score}</div>` );
        } else if (score < 70) {
            matching_elements[index].insertAdjacentHTML("afterend", `<div style="background-color: #edf659; border-left: 6px solid #effa3a; padding: 10px; margin-bottom: 20px;">score ${score}</div>` );
        } else {
            matching_elements[index].insertAdjacentHTML("afterend", `<div style="background-color: #ffdddd; border-left: 6px solid #f44336; padding: 10px; margin-bottom: 20px;">score ${score}</div>` );
        }
    });

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
          "We need you to identify suspicious and malicious ads. We will give you an html tags. Return a json object that has a message field and score field where score is a number between 0-100. Try to not make all of the ads malicious.",
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
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from the server");
    }

    const responseData = await response.json();
    return responseData.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
