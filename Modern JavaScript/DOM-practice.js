// let val;

// val = this;
// val = window;
// val = window.document;
// val = document;
// val = document.all;
// val = document.all[1];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0].href;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;
// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].getAttribute("src");

// //console.log(val);

// links = document.links;
// let linkArr = Array.from(links);

// linkArr.forEach(function(link){
//     console.log(link.getAttribute("href"));
// });


// console.log(links);

//Single Element
//document.getElementByID()
// getting a element 
// val = document.getElementById("document-title");
// val = document.getElementById("document-title").id;
// val = document.getElementById("document-title").className;


// //changing style
// val = document.getElementById("document-title").style.background = "#333";
// val = document.getElementById("document-title").style.color = "#fff";
// val = document.getElementById("document-title").style.padding = "10px";
// val = document.getElementById("document-title").style.display = "block";

// //changing content
// val = document.getElementById("document-title").textContent = "New Title";
// val = document.getElementById("document-title").textContent = "Again New Title";

// val = document.getElementById("document-title").textContent = "<i>New Title</i>"; //italic not working 

// val = document.getElementById("document-title").innerHTML = "<i>New Title</i>"; // italic worked
// val = document.getElementById("document-title");
// val.innerHTML = "Again new title";

// //document.querySelector()
// val  = document.querySelector("#document-title"); //# for id
// val.innerHTML= "Using querySelector";

// val  = document.querySelector(".title-class"); // . for class
// val.innerHTML= "Using querySelector with class";

// val = document.querySelector("h3"); // no need to add # or . for selecting tag

// val = document.querySelector("ol");

// val = document.querySelector("ul");

// val = document.querySelector("ol li");
// val.style.background = "red";
// val.style.color = "white";

// val = document.querySelector("li:last-child");
// val = document.querySelector("li:first-child");

// val = document.querySelector("li:nth-child(odd)");
// val = document.querySelector("li:nth-child(even)");

// console.log(val);

// Multy selector
// document.getElementsByClassName()

let list  = document.getElementsByClassName("sample-class");
list[0].style.background = "red";
list[0].style.color = "white";
list[0].style.padding = "10px";
list[0].textContent = "Hello world!";

//document.getElementsByTagName()
list = document.getElementsByTagName("li");
list = document.querySelector("ol").getElementsByTagName("li");

let lis = Array.from(list);
lis.forEach(function(item){
    //console.log(item);
});

// document.querySelectorAll()
// id -> #
// classname -> .
// tagname -> nothing

let liodd =  document.querySelectorAll("li:nth-child(odd)");
let liEven = document.querySelectorAll("li:nth-child(even)");

liodd.forEach(function(item){
    item.style.background = "gray";
    item.style.color = "white";
});

liEven.forEach(function(item){
    item.style.background = "green";
    item.style.color = "white";
});




