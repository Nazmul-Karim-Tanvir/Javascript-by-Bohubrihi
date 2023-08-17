// while loop 
// print 1 to 10
var i = 1;

while (i <= 10) {
    document.write(i + " ");
    i++;
}

document.write("<br>");

//sum 1 to 10
i = 1;
var sum = 0;
while (i <= 10) {
    sum = sum + i;
    i++;
}
document.write("Sum is: " + sum);
document.write("<br>");

//product 1 to 10

i = 1;
var product = 1;
while (i <= 10) {
    product = product * i;
    i++;
}
document.write("Product is: " + product);
document.write("<br>");

//for loop practice
for (var k = 1; k <= 10; k++) {
    document.write(k + " ");
}

document.write("<br>");

//printing in reverse order using for loop
for (var k = 10; k >= 1; k--) {
    document.write(k + " ");
}

document.write("<br>");


// break 
for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        break; //break or stop the loop when value of i = 5
    }
    else{
        document.write(i+" "); //prints upto 5 
    }
}
document.write("<br>");


//continue
document.write("Printing odd from (1 to 50) : ");
for (var i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        continue;
    }
    else {
        document.write(i + " ");
    }
}
document.write("<br>");

document.write("Printing even from (1 to 50) : ");
for (var i = 1; i <= 50; i++) {
    if (i % 2 == 1) {
        continue;
    }
    else {
        document.write(i + " ");
    }
}
document.write("<br>");