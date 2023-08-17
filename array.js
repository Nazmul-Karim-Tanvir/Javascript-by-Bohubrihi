var country = ["Bangladesh","Thailand","China","Maldip"];

document.write(country);
document.write("<br>");

document.write("length = "+country.length);
document.write("<br>");

country[country.length] = "Japan"; // add value in array last position

document.write(country);
document.write("<br>");

document.write("new length = "+country.length);
document.write("<br>");

country.push("India"); // add value in array last position

document.write(country);
document.write("<br>");

country.pop(); //removes array last value

document.write(country);
document.write("<br>");

country.shift(); // remove array value from start position
document.write(country);
document.write("<br>");

country.unshift("Bangladesh"); // add value in arrray first position
document.write(country);
document.write("<br>");

//Empty array
var numbers;
numbers = [];
numbers.push(1)
numbers.push(78)
numbers.push("One")

document.write(numbers);
document.write("<br>");

//string to array convertion
var x = "Bangladesh";
var y = x.split("");
document.write(y);
document.write("<br>");

x = "Bangladesh is a country";
y = x.split(" ");
document.write(y);
document.write("<br>");

x = "Bangladesh,India,China";
y = x.split(",");
document.write(y);
document.write("<br>");

x = "Bangladesh is a country";
y = x.split("n");
document.write(y);
document.write("<br>");


//Array to string conversion

y = ["nepal", "india" , "indonesia"];
y = y.toString(); // converts but add koma in between
document.write(y);
document.write("<br>");

y = ["nepal", "india" , "indonesia"];
y = y.join(" "); // converts and we can specify what we need in between 
document.write(y);
document.write("<br>");

var a = "this is BD ";
var arr = ["Dhaka " , "Nepal", "Maldip"];

document.write(a.concat(arr)); //string+aray = string

document.write(arr.concat(a)); // array + string = array


document.write(country.sort()); //sort in ascending order
document.write("<br>");
document.write(country.reverse()); // sort in descending order
document.write("<br>");


// more on arrays
var array1 = [1,2,3,4,5,6,["NK","Tanvir"],8];

document.write(array1);
document.write("<br>");

document.write(array1[6][0]);
document.write("<br>");

document.write(array1[6][1]);
document.write("<br>");

var a = [1,3,{a:1,b:3,c:[1,3,4,{x:5,y:10}]}];

document.write(a);
document.write("<br>");


//four different ways to access x =5 form a array
document.write("x = "+a[2]["c"][3]["x"]);
document.write("<br>");

document.write("x = "+a[2].c[3].x);
document.write("<br>");

document.write("x = "+a[2]["c"][3].x);
document.write("<br>");

document.write("x = "+a[2].c[3]["x"]);
document.write("<br>");


// Premitive types
// number , string, boolean

var a =10;
var b =20;
a = 50;
document.write(b);
document.write("<br>");
//Reference type 
//array , object

var number1 = [10,20,30];
var number2 = number1;
var number1 = [100];
document.write(number2);


