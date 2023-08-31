var student = {
    name: "Rahim",
    age: 26,
    Hometown: "Dhaka"

};
console.log(student);

var studentJson = JSON.stringify(student); // JS object to JSON object

console.log(studentJson);

var studentNew = JSON.parse(studentJson); // JSON object to JS object

console.log(studentNew);

// JSON does not support undefined ,date , function 

var person = {
    name : "Rahim",
    age : 25,
    hometown : "Dhaka",
    married : false,
    dob: "1995-05-12",
    test_null:null,
    test_undefined: undefined,
    greet: function(){
        console.log(`Hello ${this.name}`);
    } 

}

var personJSON = JSON.stringify(person);
console.log(personJSON);