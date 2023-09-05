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
filter_task.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded",getTasks);

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

        storeInLocalStorage(create_task.value);

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
            removeFromLS(ele);
        }
    }
}

// clearTask
function clearTask(e) {
    list_task.innerHTML = "";

    //faster way 
    // while (list_task.firstChild) {
    //     list_task.removeChild(list_task.firstChild);
    // }
    localStorage.clear();

}


// filterTask

function filterTask(e) {
    let liText = e.target.value.toLowerCase();

    let temp = document.querySelectorAll("li");

    temp.forEach(task => {

        let item = task.firstChild.textContent.toLowerCase();

        if (item.includes(liText)) {
            task.style.display = "block";
        }
        else {
            task.style.display = "none";
        }

    });
}

// storeInLocalStorage

function  storeInLocalStorage(task){
    let tasks;
    if (localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else{
        tasks  = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// getTasks // when page reload 

function getTasks(){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task =>{
        let li = document.createElement("li");
        let text = document.createTextNode(task + " ");
        li.appendChild(text);
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        list_task.appendChild(li);
    });
}

// removeFromLS

function removeFromLS(taskItem){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = taskItem;
    li.removeChild(li.lastChild); // <a>x</a>'

    tasks.forEach((task, index) =>{
        if(li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}






