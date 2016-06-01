var doc = document.getElementsByTagName("*");
var docObj = {};
function recurseDOM (element) {
  if(!element) {
    return;
  }
  // if key already exists, increment it
  if(docObj[element]) {
    docObj[element] = docObj[element] + 1;
    //console.log("Increment property: " + element);
  }
  // Otherwise create a new key with value 1
  else {
    //console.log("Creating new property: " + element);
    docObj[element] = 1;
  }

  // recurse by starting at the last child
  if(element.hasChildNodes()) {
    if(element.nextSibling) {
      recurseDOM(element.nextSibling);
    }
    else {
      recurseDOM(element.firstElementChild);
    }
  }
  else {
    recurseDOM(element.parentElement);
  }
}

recurseDOM(document.firstElementChild);