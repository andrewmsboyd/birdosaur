// set a variable containing TreeWalker for all text nodes
var textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT),
  birdRegEx = /bird/g
  replaceWith = "dinosaur";