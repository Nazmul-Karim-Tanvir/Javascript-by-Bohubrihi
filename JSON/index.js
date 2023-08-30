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