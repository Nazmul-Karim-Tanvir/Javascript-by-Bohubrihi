// var student = {
//     name: "Rahim",
//     age: 26,
//     Hometown: "Dhaka"

// };
// console.log(student);

// var studentJson = JSON.stringify(student); // JS object to JSON object

// console.log(studentJson);

// var studentNew = JSON.parse(studentJson); // JSON object to JS object

// console.log(studentNew);

// // JSON does not support undefined ,date , function 

// var person = {
//     name : "Rahim",
//     age : 25,
//     hometown : "Dhaka",
//     married : false,
//     dob: 1995-05-12,
//     test_null:null,
//     test_undefined: undefined,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     } 

// }

// var personJSON = JSON.stringify(person);
// console.log(personJSON);


//JSON Objects and Array

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        // console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(jsonObj) {
    //console.log(jsonObj);
    var jsObj = JSON.parse(jsonObj); //conversting json data into JS data 
    // console.log(jsObj);

    for (x in jsObj.persons) {
        //console.log(x);
        var personN = jsObj.persons;

        //console.log(personN[x]);

        for (y in personN[x]) {
            console.log(personN[x][y]);
        }

    }
}

