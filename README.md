# Grandson
A ChatGPT-empowered anti-malvertisement Chrome extension.

This Chrome web extension first identifies advertisements in webpages and extracts the advertisement text. The extension then uses this advertisement text to query ChatGPT via an API about the possible malicious nature of the advertisement. The results from ChatGPT are then displayed on the webpage next to the advertisement.

The code for the extension is in the grandsonwebextension folder. See https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked for how to load a Chrome extension from a folder.

The code requires a ChatGPT API key. This should be provided to the apiKey variable on line 76 in grandsonwebextension/scripts/content.js.

## Major Achivments
- Created a browser extenstion.
- Used an ini file to match ads on a web page.
- Used the ChatGPT api to query ChatGPT to detect malicious ads.

## Elevator Pitch
Hey there, Today, let's chat about our pickhacks2024 project Grandson, a trusted Chrome browser extension and how it keeps you safe online. We'll dive into those colorful boxes you might see next to ads.
Grandson starts by scanning web pages for ads, just like a pro. But here's the cool part: when it finds an ad, it gives it a little color code!
Green means ChatGPT thinks the ad looks okay. It's like a big thumbs-up from your favorite tech guru.
But what about yellow? Well, that's when ChatGPT isn't quite sure. It's like saying, 'Hmm, better be cautious.'
And then there's red. That's when ChatGPT says, 'Whoa, hold up! This ad might be trouble.' It's like a bright warning sign.
So, when you're browsing and you see those colorful boxes next to ads, you'll know exactly what they mean.
Green means porbably not harmful, yellow means maybe think twice, and red means it's probably best to steer clear.
With Grandson and its color-coded system, you've got a trusty sidekick to help you navigate the online world safely.
So, next time you're online, keep an eye out for those colorful boxes. And remember, Grandson's got your back every step of the way.
