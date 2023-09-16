// Rest Operator ...

let fruits = ["apple","grape","mango","jackfruit"];
let [first,second,...third] = fruits;

// console.log(first);
// console.log(second);
// console.log(third);

let person = {
    fname: "Simanta",
    lname: "Paul",
    dob: "8-26-1995"
}

let {fname,...lname} = person;

// console.log(fname);
// console.log(lname);
let num = [78,1,5,8,6]; 

let test = (name,...numbers) =>{
    console.log(name);
    console.log(numbers);
}

test("Tanvir",10,2045);
test("NK",num);