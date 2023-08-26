// let val = document.getElementById("sample-id");
// val.addEventListener("click",message);

// function message(){
//     alert("Button clicked ");
// }

// more on events 


document.getElementById("name").addEventListener("click",message);

document.getElementById("name").addEventListener("keyup",test2);
//this and e.target is same
// function message(){
//     this.style.backgroundColor = "green";
//     this.style.color = "white";
//     this.style.padding = "50px";
// }

function message(e){
    let val = e;
    val = e.target;
    val = e.target.id;
    val = e.timeStamp;
    val = e.type;
    val = e.clientY;
    val = e.clientX;
    val = e.offsetY;
    val = e.offsetX;
    e.target.style.backgroundColor= `#${e.clientX}`;
    console.log(val);
}

function test2(e){
    document.getElementById("demo").innerText = this.value;
}