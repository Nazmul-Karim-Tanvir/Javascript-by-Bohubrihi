document.write("Hello World");

console.log("Practicing javaScript");
alert("Welcome to JS");

document.getElementById("text").innerHTML = "JS is being used in both Front End and Back End Devolopment";

var a = 20;
var b = 10;

var c = a+b;
document.write("<br>"+c);

var x = prompt("enter a number <br>");
document.write("<br>"+x);

var a = 20;
b=a;

a=50;

document.write("<br>"+a);
document.write("<br>"+b);

var myValue =0, myvalue = 30;

document.write("<br>"+myValue+" , "+myvalue);

const a1 = 2;

// Comparison, Logical and Conditional Operators

var a = 10;
var b = 20;
var c = "10";
document.write("<br>");
document.write(a==b); 
document.write("<br>");
document.write(a!=b);
document.write("<br>");
document.write(a===c); // return false as a is int type and c is string type

document.write("<br>");

var d = (a===c); // compare the value and store data in d 
document.write(d);
document.write("<br>");

var e =  (a===c) ? "yes same type":"not same type";
document.write(e);
document.write("<br>");

var f = (a==c)? "same value ": "not same value";
document.write(f);
document.write("<br>");

var g = (a==c) && (a===c)? "same value and same type" : "same value different type"
document.write(g);

