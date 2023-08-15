document.write("Hello World");
document.write("<br>");
document.write("Hello <br> World");
document.write("<br>");
document.write("Hello \" TANVIR \" World");

// concatation 
var s ="Nazmul Karim " + " Tanvir";
document.write("<br>");
document.write(s);

var sNew = s.concat(" I "+"am a CSE student");
document.write("<br>");
document.write(sNew);

var x = "Hello World";
document.write("<br>");
document.write("length is : "+x.length);

// indexing
document.write("<br>");
document.write(x[0]);
document.write(x[6]);

// some methods
var x = "Hello Worlds";
document.write("<br>");
document.write( x.slice(0,9));
x.slice();

document.write("<br>");
document.write( x.slice(-6,-1));
document.write("<br>");
document.write( x.substr(3,2));

document.write("<br>");
document.write(x = x.replace("Hello","Hi"));
document.write("<br>");
document.write( x);

document.write("<br>");
document.write(s = s.toUpperCase());

document.write("<br>");
document.write( s = s.toLowerCase());

var new1 = "   NK Tanvir   ";
document.write("<br>");
document.write( new1.trim()); //it removes space from start, end side
