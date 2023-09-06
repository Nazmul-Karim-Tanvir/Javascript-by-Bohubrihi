var number = prompt("What is your number?");

number = parseInt(number);
var grade;

if (number <= 100 && number >= 80) {
    grade = "A+";
}
else if (number < 80 && number >= 70) {
    grade = "A";
}
else if (number < 70 && number >= 60) {
    grade = "A-";
}
else if (number < 60 && number >= 50) {
    grade = "B";
}
else if (number < 50 && number >= 40) {
    grade = "C";
}
else if (number < 40 && number >= 33) {
    grade = "D";
}
else if (number < 33 && number >= 0) {
    grade = "F";
}
else {
    grade = "invalid Input!";
}

// Now solution using switch 

/*switch (true) {
    case (number <= 100 && number >= 80):
        grade = "A+"
        break;
    case (number < 80 && number >= 70):
        grade = "A"
        break;
    case (number < 70 && number >= 60):
        grade = "A"
        break;
    case (number < 60 && number >= 50):
        grade = "B"
        break;
    case (number < 50 && number >= 40):
        grade = "C"
        break;
    case (number < 40 && number >= 33):
        grade = "D"
        break;
    case (number < 33 && number >= 0):
        grade = "F"
        break;
}

document.write("Your Grade: " + grade);*/
