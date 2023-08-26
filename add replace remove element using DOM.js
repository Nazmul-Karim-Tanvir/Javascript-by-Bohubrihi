//Adding Element to DOM
// Create Element
let olItem = document.createElement("li");
//Add ID and class
olItem.className = "a new another-class";
olItem.id = "new-element";

//Add Attribute 
olItem.setAttribute("title", "A title to new Element");
olItem.appendChild(document.createTextNode("JavaScript"));
document.querySelector("ol").appendChild(olItem);

let ulitem = document.createElement("li");
let link = document.createElement("a");
link.setAttribute("href","www.instagram.com");
link.appendChild(document.createTextNode("Instagram"));

ulitem.appendChild(link);
document.querySelector("ul").appendChild(ulitem);

console.log(ulitem);


//Replacing Elements 

let newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("H1 new Heading ")); 

newHeading.className = "sample-class";

let oldHeading  = document.querySelector("h3");

let parent = document.querySelector(".container");
//parent = oldHeading.parentElement;

parent.replaceChild(newHeading,oldHeading);

console.log(newHeading);
console.log(oldHeading);
console.log(parent);

//Remove element
let lis = document.querySelectorAll("li");
let list = document.querySelector("ul");
//lis[0].remove();
//list.removeChild(lis[5]);

list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("test-new");
let val = list.hasAttribute("title");
list.setAttribute("title","yes");
val = list.hasAttribute("title");
list.removeAttribute("title");
val = list.hasAttribute("title");
console.log(val);


