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

