// let fun = () => {
//     let a =6
// };
// console.log(a);

let a = (name) => { 
    return (age) => {console.log(name, age) }
}
console.log(a("Rahim")(25));
