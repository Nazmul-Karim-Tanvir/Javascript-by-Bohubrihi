var a = prompt("please enter how many square sum you want");

var series = "";
var sum = 0;
for (var i = 1; i <= a; i++) {
    sum += i*i;
    series += (i*i).toString();
    if (i == a) { 
        continue; 
    }
    series += " + ";
}
document.write(`${series} = ${sum}`);