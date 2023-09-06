//function two type

// built in functions
// example:
// alert();
//console.log();


// User defined function 

function speak() {
    document.write("I am a content creater");
}

function speak(headline) {
    document.write("I am a content creater");
    document.write("<br>");
    document.write(headline);
    document.write("<br>");
}

speak(prompt("give a string"));

// function parameter/argument 

function saySomething(fname = "Empty", lname = "Empty") {
    document.write(`${fname} ${lname}`);
    document.write("<br>");
}

var fname = prompt("give your first name ");

var lname = prompt("give your last name ")
saySomething(fname, lname);


function calculation(a = 0, b = 0) {
    document.write(`${a}+${b} = ${a + b}`);
    document.write("<br>");
}
calculation();
calculation(10,20);
calculation(10.6,12.6);

//Normal Declaration 
function saySomething(name){
    document.write("Hello "+name);
    document.write("<br>");
}

// Function Expression 
let saySomething1 = function(name2){
    document.write("Hi "+name2);
    document.write("<br>");
}

// Arrow Function(ES6)
let saySomething2 = (name3) =>{
    document.write("I am "+name3);
    document.write("<br>");
}

saySomething("Bohubrihi");
saySomething1("Simanta");
saySomething2("JavaScript");