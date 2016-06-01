var docObj = {};

// Recursively traverse the DOM
function recurseDOM (element) {
  element = element.firstElementChild;
  while(element) {
    // if key already exists, increment it
    if(docObj[element]) {
      docObj[element] = docObj[element] + 1;
    }
    // Otherwise create a new key with value 1
    else {
      docObj[element] = 1;
    }
    recurseDOM(element);
    element = element.nextSibling;
  }
}

recurseDOM(document.firstElementChild);

// Sort the node list into an array of 20 largest elements
var array = [];
for(var element in docObj) {
  array.push([element, docObj[element]]);
  array.sort(function(a, b) {
    return (b[1] - a[1]);
  });
}
array = array.slice(0, 21);