//Promises
//.then

let persons = [
    { firstName: "Simanta", lastName: "Paul" },
    { firstName: "Fazle", lastName: "Rahat" }
];




function createPerson(person) {
    let prom = new Promise(function (resolve, reject) {
        persons.push(person);
        resolve();
    });
    return prom;

}



function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({ firstName: "Rony", lastName: "Chy" }).then(getPerson);
