//Object Method

var person = {
    firstName: prompt("enter first name"),
    lastName: prompt("enter last name"),
    dob: 14-9-1998,

    fullname: function(){
        document.write(`${this.firstName} ${this.lastName}`);
    }

}

console.log(person.fullname());