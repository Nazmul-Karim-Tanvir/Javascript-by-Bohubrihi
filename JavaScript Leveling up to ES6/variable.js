//Global Scope 
var a = 1; //re deglaration, assign allowed
let b = 2; //re assign allowed only
const c = 3; // constant no assign or declaration 

console.log(`Global Scope`, a, b, c);

// in for local var value does not affect global value 
function demo() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(` local Funtion Scope`, a, b, c);
}
demo();

console.log(`Global Scope`, a, b, c);


// in if var local value changes global var value 
if (true){
    var a = 7;
    let b = 8;
    const c = 9;  
    console.log(`local if Scope`, a, b, c);
}

console.log(`Global Scope`, a, b, c);


// in for local var value does not affect global value 
for (let a = 0; a < 10; a ++) {
    console.log(`Loop: `, a); 
}

console.log(`Global Scope`, a, b, c);