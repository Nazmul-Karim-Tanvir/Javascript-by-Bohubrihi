//class ES6
// class is a template for creating objects

class Person{
    constructor(fname, lname, birthday){
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }

    calculateAge(){
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }

    fullname(){
        return this.firstname+" "+this.lastname;
    }

}

let person1 = new Person("Fazle","Rahat","9-14-1998");


document.write(person1.firstname);
document.write("<br>");
document.write(person1.lastname);
document.write("<br>");
document.write(person1.dob);
document.write("<br>");
document.write(person1.calculateAge());
document.write("<br>");
document.write(person1.fullname());
document.write("<br>");
