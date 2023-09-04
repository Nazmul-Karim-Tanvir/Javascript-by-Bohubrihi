//Define UI Element
let form_task = document.querySelector("#form-task");
let create_task = document.querySelector("#create-task");
let add_task = document.querySelector("#add-task");
let filter_task = document.querySelector("#filter-task");
let list_task = document.querySelector("#list-task");
let clear_task = document.querySelector("#clear-task");


//Define Event Listeners 
form_task.addEventListener("submit", createTask);
list_task.addEventListener("click", removeTask);
clear_task.addEventListener("click", clearTask);

//Define Function

//createTask
function createTask(e) {
    if (create_task.value === "") {
        alert("create a task");
    }
    else {
        //Create li element 
        let li = document.createElement("li");
        let text = document.createTextNode(create_task.value + " ");
        li.appendChild(text);
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        list_task.appendChild(li);

        create_task.value = "";

    }
    e.preventDefault();
}

//removeTask 

function removeTask(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you sure ?")) {
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
}

// clearTask
function clearTask(e){
     list_task.innerHTML = "";
     
     //faster way 
    // while (list_task.firstChild) {
    //     list_task.removeChild(list_task.firstChild);
    // }
    
}
