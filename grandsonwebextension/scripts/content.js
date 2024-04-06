const allElements = document.getElementsByTagName("*");

for (var i=0, max=allElements.length; i < max; i++) {
     console.log("Grandson says:", allElements[i]);
}
