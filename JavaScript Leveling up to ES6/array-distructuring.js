let array  = ["apple", "mango", "pinapple"];

let [array1,array2,array3] = array;
let [array4,,array5] = array;
console.log(array4,array5);


// Swapping value 

let a,b;
a= 10; b =20;

[a,b] = [b,a]

console.log("a is "+a+"\n"+"b is "+b);