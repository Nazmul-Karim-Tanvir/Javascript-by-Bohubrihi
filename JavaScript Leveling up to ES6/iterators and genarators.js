//Iterating over a string

// const name1 = "W3Schools";


// for (const x of name1) {
//     console.log(x);
// }

// //Iterating over an Array

// const letters = ["", "a", "b", "c"];


// for (const x of letters) {
//     console.log(x);
// }

// //Iterating over set

// const letters1 = new Set([" ", "e", "f", "g"]);

// for (const x of letters1) {
//     console.log(x);
// }

// //Iterating over a map

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);

// for (const y of fruits) {
//     console.log(y);
// }

// More on Iterator 

let iterable = "Hello";

let iter = iterable[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// custom iterable 

let iterable1 = [1, 2, 3, 4, 5, 5];

function customIterator(arr) {
    let i = 0;

    return {
        next: function() {
            return i < arr.length ? 
            { value: arr[i++], done: false} : { value: undefined, done: true };
        }
    };
}

let memmbers = customIterator(iterable1);

console.log(memmbers.next());
console.log(memmbers.next());
console.log(memmbers.next());
console.log(memmbers.next());
console.log(memmbers.next());
console.log(memmbers.next());
console.log(memmbers.next());

// Generators 

function* genFunction() {
    console.log("I am some code");
    yield 1;
    return;
    console.log("I am some code");
    console.log("I am some code");
    console.log("I am some code");
    yield "Rahim";
    yield 4;
    yield "Karim";
    yield "Hello World";
}

let iter1 = genFunction();

console.log(iter1.next().value);
console.log(iter1.next().value);