# Grandson (AKA AdGuardian)
A ChatGPT-empowered anti-malvertisement Chrome extension.

This Chrome web extension first identifies advertisements in webpages and extracts the advertisement text. The extension then uses this advertisement text to query ChatGPT via an API about the possible malicious nature of the advertisement. The results from ChatGPT are then displayed on the webpage next to the advertisement.

The code for the extension is in the grandsonwebextension folder. See https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked for how to load a Chrome extension from a folder.

The code requires a ChatGPT API key. This should be provided to the apiKey variable on line 76 in grandsonwebextension/scripts/content.js.

## Major Achivments
- Created a browser extenstion.
- Used an ini file to match ads on a web page.
- Used the ChatGPT api to query ChatGPT to detect malicious ads.
