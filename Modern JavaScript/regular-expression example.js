//Examples

let re;
let str;

//Postal Code
//4700, 4000
re = /^[0-9]{4}$/;
str = "4700";
str = "4000";

//Phone Number
//01717888888 +8801717888888 8801717888888

re = /^(\+)?(88)?01[0-9]{9}$/;
str = "01717888888";
str = "+8801717888888";
str = "8801717888888";


//Email Address 
// bohubrihi8.learn@edu.com.bd
re = /([a-z0-9A-Z]\.?)+[^\.]@([a-z0-9A-Z]\.?)+[^\.]/;
str = "bohubrihi.learn@edu.com.bd";



console.log(re.test(str));