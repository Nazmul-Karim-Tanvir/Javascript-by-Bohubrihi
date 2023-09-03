//Callback function 

// setTimeout(function(){
//     console.log("Hello World!");
// },5000);


let persons = [
    { firstName: "Simanta", lastName: "Paul" },
    { firstName: "Fazle", lastName: "Rahat" }
];


// function createPerson(person) {
//     setTimeout(function () {
//         persons.push(person);
//     }, 4000);
// }

// function getPerson() {
//     setTimeout(function () {
//         let output = '';
//         persons.forEach(function (person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         });
//         document.getElementById("output").innerHTML = output;
//     },1000);
// }

// createPerson({firstName:"Rony", lastName:"Chy"});
// getPerson();

//Asyncrinous way 

function createPerson(person,callback) {
    setTimeout(function () {
        persons.push(person);
        callback();
    }, 2000);
}

function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById("output").innerHTML = output;
    },1000);
}

createPerson({firstName:"Rony", lastName:"Chy"},getPerson);

