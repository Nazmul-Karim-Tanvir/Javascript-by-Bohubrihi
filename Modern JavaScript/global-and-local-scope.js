//Global Scope
// funtion scope does not change any value in global
// if scope change var global value
// for scope change var global value 


//let does not change in any global const is same but const can not be iterate again 

//using let is safe

var a =1;
let b =2;
const c =3;

document.write(`Global Scope: ${a} ${b} ${c}`);
document.write("<br>");

function test(){
    
    var a = 4;
    let b = 5;
    const c = 6;
    document.write(`Functions Scope: ${a} ${b} ${c}`);
}
test();
document.write("<br>");
document.write(`Global Scope: ${a} ${b} ${c}`);


document.write("<br>");
if(true){
    var a = 7;
    let b = 8;
    const c = 9;
    document.write(`If Scope: ${a} ${b} ${c}`);
}

document.write("<br>");
document.write(`Global Scope: ${a} ${b} ${c}`);
document.write("<br>");


for (var a =0; a<10; a++){
    document.write(a+"<br>");
}

document.write("<br>");
document.write(`Global Scope: ${a} ${b} ${c}`);



