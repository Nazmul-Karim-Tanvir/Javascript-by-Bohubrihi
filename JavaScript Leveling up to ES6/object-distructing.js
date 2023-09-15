// Object Destructing 

let person = {
    firstName: "Fazle",
    lastName: "Rahat",
    dob: `09-27-1995`
}
// let {firstName: fname, lastName: lname, dob} = person;

// console.log(fname,lname,dob);

function display({firstName: fname, lastName: lname, dob}){
    console.log(fname,lname,dob);
}

display(person);