document.write(10>9); //return true
document.write("<br>");
document.write("Hello" == "Hello"); //return true
document.write("<br>");
document.write("Hello" == "World");

var x = "Hello";
var y = Boolean(x);

document.write("<br>");
document.write(x);
document.write(y); //return true as value ir present 

x =null;
document.write("<br>");
document.write(x);
document.write(Boolean(x)); //return false for null value 

x =0;
document.write("<br>");
document.write(x);
document.write(Boolean(x)); //return false for 0 value

var m;
document.write("<br>");
document.write(m);
document.write(Boolean(m));// return false for empty/undefined  value 
