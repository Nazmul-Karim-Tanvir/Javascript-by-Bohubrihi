//traversing the DOM


let list = document.querySelector("ul");
let listItem = document.querySelector
("ul li:first-child");

let val;
val = listItem;

//get Child Nodes 
// childNodes shows text some cases 
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[3];
val = list.childNodes[4];
val = list.childNodes[5];


val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

//nodeType returns as number these are:
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype

// children do not show text 
val = list.children;


// traversing children to their children
val = list.children[1].children[0];
val = list.children[1].children[0].href;

// first and last-child also shoes text some cases so we can use firstElememtChild and lastElementChild instead

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// now moving children to parent item 
val = listItem.parentElement;
val = listItem.parentNode;
val = list.parentElement.parentElement;

// traversing sibling to sibling front
val = listItem.nextSibling;
val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
// traversing sibling to sibling back
val = document.querySelector("ul li:last-child");
val = val.previousSibling;
val = val.previousElementSibling;
val  = val.previousElementSibling.previousElementSibling;
console.log(val);