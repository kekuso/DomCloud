//var doc = document.getElementsByTagName("*");
var docObj = {};
function recurseDOM (element) {
  element = element.firstElementChild;
  while(element) {
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
    recurseDOM(element);
    element = element.nextSibling;
  }


  // if(!element) {
  //   return;
  // }
  // // if key already exists, increment it
  // if(docObj[element]) {
  //   docObj[element] = docObj[element] + 1;
  //   //console.log("Increment property: " + element);
  // }
  // // Otherwise create a new key with value 1
  // else {
  //   //console.log("Creating new property: " + element);
  //   docObj[element] = 1;
  // }

  // // recurse by starting at the last child
  // if(element.hasChildNodes()) {
  //   if (element.firstElementChild.nextSibling) {
  //     recurseDOM(element.firstElementChild.nextSibling);
  //   }
  //   else {
  //     recurseDOM(element.firstElementChild);
  //   }

  // }
  // else if(element.previousSibling) {
  //   recurseDOM(element.previousSibling);
  // }
}

// console.log(doc);
// var node;
// for(var i = 0; i < 20; i++) {
//   node = doc[i].firstElementChild;
//   if(node) {
//     console.log(doc[i].firstElementChild);
//   }
// }
recurseDOM(document.firstElementChild);
