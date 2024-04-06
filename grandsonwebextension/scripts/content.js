// const patterns = ["para"];

const url = chrome.runtime.getURL("matches.txt");

async function getURL(url) {
  var text = await fetch(url);
  var output = await text.text();
  return output;
}

var URLoutput = getURL(url).then((Response) => {
  var URLoutputtext = Response;
  var patterns = URLoutputtext.split("\r\n");
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
      matching_elements[m].insertAdjacentHTML("afterbegin", m);
    }
  }
  console.log(unique_matching_elements);
});
