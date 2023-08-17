// for in works in String/array/object
//for off works in String/array only

let name = "I am learning Javascript";
let food = ["Cake", "Chocklate", "Ice cream"];

//for in practice
// object does not have index
// in access index value
let person = {
    name: "Shakib al hasan",
    profession: "cricketer",
    age: 33,
    team: "Bangladesh"
}

for (var x in person) {
    document.write(`property: ${x} Value: ${person[x]}`);
    document.write("<br>");
}
document.write("<br>");
for (var x in name) {
    document.write(`index: ${x} Value: ${name[x]}`);
    document.write("<br>");
}
document.write("<br>");

for (var x in food) {
    document.write(`index: ${x} Value: ${food[x]}`);
    document.write("<br>");
}
document.write("<br>");


//for of practice 
//of directly access value 

for (var x of name) {
    document.write(`Value: ${x}`);
    document.write("<br>");
}
document.write("<br>");

for (var x of food) {
    document.write(`Value: ${x}`);
    document.write("<br>");
}
document.write("<br>");