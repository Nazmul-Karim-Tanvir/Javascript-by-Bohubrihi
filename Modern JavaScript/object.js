//creating a object
student = {name:"rahim",age:25,hometown:"Dhaka"};
//finding a specific value 
document.write(student.name);
document.write("<br>");
document.write(student["name"]);
document.write("<br>");
document.write(student.age);
document.write("<br>");
document.write(student.hometown);
document.write("<br>");

//making a object empty
student = {};


//adding value in object
student.name = "Imran";
document.write(student.name);
document.write("<br>");

student["name2"] = "hossain";
document.write(student.name2);
document.write("<br>");

//deleting value from a object
delete student.name2;
document.write(student.name2);
document.write("<br>");