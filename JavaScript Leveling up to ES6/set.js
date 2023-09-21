// Set 


let mySet = new Set([1, 2, 3, 4, 4]);

//Add

mySet.add("Hello");
mySet.add(2);
// mySet.add(5);

// mySet.delete(2);
// console.log(mySet);

// console.log(mySet.has(4)); //true

// console.log(mySet.size);

// //iterating sets in different way

for (x of mySet.values()) { // return value
    console.log(x);
}
for (x of mySet.keys()) { // return keys 
    console.log(x);
}
for ([x] of mySet.entries()) { //return values
    console.log(x);
}

let iter = [...mySet.values()];
console.log(iter);

mySet.forEach(
    value => console.log(value)
);