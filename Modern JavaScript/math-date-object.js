// Math Object
let val;

val = Math.PI;
val = Math.E;
val = Math.round(23.5);
val = Math.ceil(23.5);
val = Math.floor(23.5);
val = Math.sqrt(81);
val = Math.abs(-56);
val = Math.pow(2,4);
val = Math.min(2,3,1,0,-8);
val = Math.max(-1,2,4,5);
val = Math.random();
val = Math.random()*100;
val = Math.random()*5;


//document.write(val);

// Date Object
let val1;

val1 = new Date();
val1 = new Date('8-20-2023 9:22:31');
val1 = new Date('8/20/2023 9:22:31:1');
document.write(val1.getMonth()); // month shows 0 to 11
document.write("<br>");
document.write(val1.getDate());
document.write("<br>");
document.write(val1.getDay());
document.write("<br>");
document.write(val1.getFullYear());
document.write("<br>");
document.write(val1.getHours());
document.write("<br>");
document.write(val1.getMinutes());
document.write("<br>");
document.write(val1.getSeconds());
document.write("<br>");
document.write(val1.getUTCMilliseconds());
document.write("<br>");
document.write(val1.getTime());// amount of time past since Jan 1st 1970

let birthday = new Date('10/19/2014');

birthday.setMonth(8);// 0 to 11
birthday.setDate(14);
birthday.setFullYear(1998);

document.write("<br>");
document.write(birthday);


