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

