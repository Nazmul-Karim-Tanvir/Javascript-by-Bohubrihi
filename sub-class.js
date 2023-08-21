// sub class
// Inheritance

class Person {
    constructor (fname,lname){
        this.firstname = fname;
        this.lastname = lname;

    }
    greeting(){
        return `Hello ${this.firstname} ${this.lastname} `;
    }
}

class Customer extends Person {
    constructor(fname,lname, phone,memberShip){
        super(fname,lname);
        this.phone = phone;
        this.membership = memberShip;
    }

    fullname(){
        return "Nazmul karim tanvir";
    }
}

let Customer1 = new Customer("Fazle", "Rahat","Jashim","fahim");

document.write(Customer1.firstname);