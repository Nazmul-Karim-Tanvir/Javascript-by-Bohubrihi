console.log("Before Error!");


// try{
//     test();
// }
// catch(err){
//     console.log(err.message);
//     console.log(err.type);
// }
// finally{
//     console.log("I am inside finally");
// }
let a = parseInt(prompt("Please enter a number"));
try{
    if(typeof a != "number"){
        console.log("please reload again enter a number");
    }
    else if (a>50){
        console.log("Too Big");
    }
    else{
        console.log("Too Small");
    }
}
catch(err){
    console.log(err.message);
}
finally{
    console.log("your value : "+a);
}


console.log("After Error!");