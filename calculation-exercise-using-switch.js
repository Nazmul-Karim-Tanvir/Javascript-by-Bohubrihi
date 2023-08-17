var num1 = prompt("Enter 1st number");
var num2 = prompt("Enter 2nd number");
num1 = parseInt(num1);
num2 = parseInt(num2);

var result = null;
var operator = prompt("Choose operator example: + or - or / or *");

if (isNaN(num1) || isNaN(num2) || operator == null) {
    document.write("invalid");
}
else {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;
    }
}

if (result == null) {
    document.write(" <br> no result try again");
}
else {
    document.write("Result is:" + result);
}
