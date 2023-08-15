var x ;
x = 3.141;
document.write("<br>");
document.write(x);
x = 34;
document.write("<br>");
document.write(x);
x = 123e5;
document.write("<br>");
document.write(x);

a = "10";
b = "20";

c = a+b;
d = a-b;
e = a/b;
f = a*b;
g = b%a;
document.write("<br>");
document.write(c); // exception returns string value

document.write("<br>");
document.write(d);

document.write("<br>");
document.write(e);

document.write("<br>");
document.write(f);

document.write("<br>");
document.write(g);

// infinity
var num = Infinity;
document.write("<br>");
document.write(num);

document.write("<br>"); 
document.write(25/0);



var x = 0xBB;// hexa number
document.write("<br>");
document.write(x);

var y = 0o273;// octal number
document.write("<br>");
document.write(y);

var z = 0b10111011;//binary number
document.write("<br>");
document.write(z);

x = x.toString(16);
document.write("<br>");
document.write(x);
console.log(x);

var c = 3.1416;
c = c.toPrecision(3);
document.write("<br>");
document.write(c);

var x = "123";
x= parseInt(x);
var result = (x===123); 

document.write("<br>");
document.write(result);

x = "123.45";
x= parseFloat(x);
var result = (x===123.45);
document.write("<br>");
document.write(result);
var m;
m = isNaN(m); // use to check if value of a variable is nun or not 
document.write("<br>");
document.write(m);


