var docObj = {};
var doc = document.getElementsByTagName("*");
// Recursively traverse the DOM
function recurseDOM (element) {
  element = element.firstElementChild;
  while(element) {
    // if key already exists, increment it
    if(docObj[element.tagName]) {
      docObj[element.tagName]++;
    }
    // Otherwise create a new key with value 1
    else {
      docObj[element.tagName] = 1;
    }
    recurseDOM(element);
    element = element.nextSibling;
  }
}
//console.log(doc);
//console.log(doc[1].firstElementChild);
recurseDOM(document.firstElementChild);

// Sort the node list into an array of 20 largest elements
var array = [];
for(var element in docObj) {
  //console.log("Element: " + element);
  //console.log("element.tagName: " + element.tagName);
  array.push([element, docObj[element]]);
  array.sort(function(a, b) {
    return (b[1] - a[1]);
  });
}
array = array.slice(1, 21);

// Display the array in dom-cloud-container
var size = 150;
var div = document.createElement("span");
var node = document.createTextNode(array[0][0]);
div.style.fontSize = size.toString() + "%";
div.appendChild(node);
div.appendChild(document.createElement("br"));
var dcc = document.getElementById("dom_cloud_container");
dcc.appendChild(div);
size-=5;
for(var i = 1; i < array.length; i++) {
  div = document.createElement("span");
  node = document.createTextNode(array[i][0] + "\n");
  div.appendChild(node);
  div.appendChild(document.createElement("br"));
  div.style.fontSize = size.toString() + "%";
  dcc.appendChild(div);
  size-=5;
}