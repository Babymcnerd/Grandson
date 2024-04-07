# Grandson
A ChatGPT-empowered anti-malvertisement Chrome extension.

This Chrome web extension first identifies advertisements in webpages and extracts the advertisement text. The extension then uses this advertisement text to query ChatGPT via an API about the possible malicious nature of the advertisement. The results from ChatGPT are then displayed on the webpage next to the advertisement.

The code for the extension is in the grandsonwebextension folder. See https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked for how to load a Chrome extension from a folder.

The code requires a ChatGPT API key. This should be provided to the apiKey variable on line 97 in grandsonwebextension/scripts/content.js.
![image](https://github.com/Babymcnerd/Grandson/assets/53285593/9b41edd6-9f4a-4304-8bc9-c64fd0863fbe)

To load the extension into chrome, go to chrome://extensions on the top right make sure "Developer Mode" is checked
![image](https://github.com/Babymcnerd/Grandson/assets/53285593/75526e4b-d02e-4559-8742-50b6a078cbbb)

After that click Load Unpakced in the top left
![image](https://github.com/Babymcnerd/Grandson/assets/53285593/75f921aa-8c24-4bb6-94d4-5acf302e6a21)

From there find the folder where you downloaded the github repo to and click "Select Folder"
![image](https://github.com/Babymcnerd/Grandson/assets/53285593/554796ff-e43e-4814-9aa4-162d732ede8e)

After that you should be good to go!

![image](https://github.com/Babymcnerd/Grandson/assets/53285593/528fc36d-3c5f-4bb0-ac4a-72aafeb123f2)


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

## Inspiration
The use of online advertising to spread malware (called "malvertising") is an effective and rapidly growing method of spreading malware. Malicious advertisements on web pages can download malware and compromise systems if the advertisements are interacted with. It is particularly dangerous because malicious advertisements can be inserted into reputable, benign websites, making them difficult to easily identify. The Online Trust Alliance, an organization dedicated to Internet security, estimated that there have been nearly 10 billion malicious advertisements, exposing millions of users to malware.

In the past couple years, Large Language Models (such as ChatGPT) have emerged as a flexible and powerful tool for automatically understanding and evaluating natural language. These models excel at providing interpretable, helpful comments and information to users. Our idea was to use ChatGPT to help users identify malicious advertisements.

## What it does
We built a Chrome web extension that first identifies advertisements in webpages and extracts the advertisement text. The extension then uses this advertisement text to query ChatGPT via an API about the possible malicious nature of the advertisement. The results from ChatGPT are then displayed on the webpage next to the advertisement.

## How we built it
The web extension uses JavaScript and webpages are processed and modified with HTML. We started by following tutorials on building simple web extensions and expanded the capabilities of our web extension gradually, adding features incrementally to achieve our goal.

## Challenges we ran into
One challenge we encountered was how to recognize advertisements in a webpage. We read code and borrowed ideas from Adblock Plus, an open-source project that detects advertisements. We used a collection of regular expression patterns found from Adblock Plus and determined that a part of a webpage was an advertisement if it matched any of the regular expression patterns.

Another challenge was detecting the smallest HTML element that contained an advertisement, since HTML elements are often nested and so an advertisement can be included in many elements at once. We used a breadth-first-search algorithm to search through the elements from broadest to smallest, finding the smallest HTML element for each advertisement.

## Accomplishments that we're proud of
Responses from ChatGPT about the advertisements are displayed on the webpage! There were many different parts to this web extension, so seeing the parts come together in a final product is very satisfying. The web extension is very user-friendly, since the process is completely automated. This web extension can also work on websites that ban ad-blockers.

## What we learned
We became more familiar with JavaScript syntax and paradigms, such as asynchronous programming. We are better versed in the HTML format and in modifying HTML with JavaScript. We also learned about how web extensions and advertisement detection methods work, as well as how ChatGPT can be accessed programmatically.

## What's next for Grandson
In the future, this method could be applied to make web extensions for other browsers, such as Firefox or Edge. ChatGPT could also be used to comment on emails viewed in a browser that could be malicious.
