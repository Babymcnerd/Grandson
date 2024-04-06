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
}