var doc = document.getElementsByTagName("*");
var docObj = {};
function recurseDOM (element) {
  if(!element) {
    return;
  }
  recurseDOM(element.nextSibling);
  console.log(element);
  // if key already exists
  if(docObj[element]) {
    docObj[element] = docObj[element] + 1;
  }
  else {
    docObj[element] = 1;
  }
}

recurseDOM(document.firstElementChild);