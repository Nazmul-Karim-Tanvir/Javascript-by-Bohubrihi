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
    static test(){ // moved to Person class
        return `HI `;
    }
}

class Customer extends Person {
    constructor(fname,lname, phone,memberShip){
        super(fname,lname);
        this.phone = phone;
        this.membership = memberShip;
    }

    fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
}

let Customer1 = new Customer("Fazle", "Rahat","01888383932","New");

document.write(Customer1.firstname);
document.write("<br>");
document.write(Customer1.lastname);
document.write("<br>");
document.write(Customer1.phone);
document.write("<br>");
document.write(Customer1.membership);
document.write("<br>");

document.write(Customer1.fullname());
document.write("<br>");

document.write(Customer1.greeting());
document.write("<br>");

let Person1 = new Person();
//document.write(Person1.fullname()); // parent can not access child class methods 

//document.write(Person1.test());// can not call static function from object
document.write(Person.test());// can call static function from class only
document.write("<br>");