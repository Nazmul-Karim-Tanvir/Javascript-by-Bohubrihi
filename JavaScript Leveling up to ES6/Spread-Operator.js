//Spread Operator
let str = "Bohubrihi";
let newStr = [...str];

console.log(newStr);

let fruit1 = ["Apple", "Pine-apple", "Mango"];

let fruit2 = ["Orange", "Grape"];
let newFruit = "Jackfruit";

let newArr = [...fruit1, ...fruit2, newFruit];

console.log(newArr);

// Spread on Object
let person = {
    fname: "Simanta",
    laname: "Paul"
}

let newPerson = {...person,dob:"08-26-1995"};
console.log(newPerson);

// Spread on Function 

let numbers = [23,1,0,-1,500];
let a = Math.max(...numbers);

console.log(a);

let person2 = ["Simanta","Paul"];

let test  = (fname,lname) => {
    console.log(`Hello ${fname} ${lname}`);
}
test(...person2);