// read webpage text into a variable
var pageContent = document.body.innerText;

// set the regex string to be replaced within the page
var birdosaur = new RegExp(/bird/gi);


pageContent.replace(birdosaur, 'dinosaur');