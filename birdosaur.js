// set a variable containing TreeWalker for all text nodes
var textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT),
    iterNode,
    iterText,
    birdRegEx = /bird/ig
    replaceWith = "dinosaur";

  //iterate over each text node and make the replacement
  while (textNodes.nextNode()) {
    iterNode = textNodes.currentNode;
    iterText = iterNode.nodeValue;
    iterNode.nodeValue = iterText.replace(birdRegEx, replaceWith);
  }