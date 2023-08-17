
// var age = prompt("Please enter your age");

// if (age >= 50) {
//     document.write("person is old");
// }
// else if (age >= 18) {
//     document.write("person is adult");
// }
// else {
//     document.write("person is minor");
// }

// nested if else condition

var age = prompt("Please enter your age");

while ( age ==="" || age ===null || isNaN(age) || Math.sign(age) <= 0) {
   alert("Invalid input or value Please enter a valid positive number ");
   age = prompt("Please enter your age");

}

if (age > 0 && age >= 18) {
    if (age >= 50) {
        document.write("Person is old");
    }
    else {
        document.write("Person is adult");
    }
}
else {
    document.write("Person is minor");
}
