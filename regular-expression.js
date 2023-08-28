//Regular expression
//Pattern Matching Technique


let re = /hello/i;

let str  = "Hello World is revolbing";


let result = re.test(str);//returns result in true or false

result = re.exec(str);//returns result in an array for true or null value for false 
result = str.match(re);// match is a string function opposite of excp but do same job
result = str.search(re);// returns first index value where re is found 


let newstr  = str.replace(re,"Hi"); // use to replace in a string 

console.log(result);
console.log(newstr);

