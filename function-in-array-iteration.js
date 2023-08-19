//Array iteration using forEach
var foods = ["Cake", "Ice cream", "Chocolates", "Bread"];

// foods.forEach(function(value){
//     document.write(value);
//     document.write("<br>");
// });

var values = function (value,index,fullarray) {
    document.write(value);
    document.write("<br>");
    document.write(index);
    document.write("<br>");
    document.write(fullarray);
    document.write("<br>");
}
foods.forEach(values);

// Array iteration using map

function addSomething(values){
    return `${values} is a Food`;
}
var newArray  = foods.map(addSomething);

document.write(newArray);
document.write("<br>");

var arr = [1,2,3,4,5,6];

function squareValue(valuein){
    return `${valuein*valuein}`;
}

var newSquareArray = arr.map(squareValue);

document.write(newSquareArray);



