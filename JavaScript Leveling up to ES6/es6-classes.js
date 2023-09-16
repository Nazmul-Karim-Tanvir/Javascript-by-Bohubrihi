// ES5 Constructor 
function person(name1,age){
    this.name = name1;
    this.age = age;
}

person.prototype.getName = function(){
    console.log(this.name);
}

let person1 =  new person("tanvir", 25);

console.log(person1);
person1.getName();

// ESC class

class persons {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        console.log(this.name);
    }
}

let person2 =  new persons("tanvir", 25);
console.log(person2);

person2.getName();