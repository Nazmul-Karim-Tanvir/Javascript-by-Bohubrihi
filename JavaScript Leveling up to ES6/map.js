//Maps

let myMap = new Map(
    [
        ["key1" ,10],
        ["key2","Bohubrihi"]
    ]
);

//Add
console.log(myMap.size);
console.log(myMap);

myMap.set("key3","Hello World");
console.log(myMap.size);
console.log(myMap);

console.log(myMap.get("key2"));
console.log(myMap.has("key3"));

//Iterate 
for(let x of myMap){
    console.log(x);
}
for(let [x,y] of myMap){
    console.log(x,y);
}

for(let x of myMap.keys()){
    console.log(x);
}
for(let x of myMap.values()){
    console.log(x);
}
for(let x of myMap.entries()){
    console.log(x);
}

myMap.forEach((x,y) => {
    console.log(x,y);
});

// map to array
let arr = Array.from(myMap);
arr = Array.from(myMap.keys());
arr = Array.from(myMap.values());
console.log(arr);