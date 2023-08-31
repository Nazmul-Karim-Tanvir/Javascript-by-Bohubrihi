// Asynchronous Programming 
// AJAX = Asynchronous JavaScript and XML

document.getElementById('get_data').addEventListener("click", loadData);

function loadData() {
    // Create XHR Object (XML Http Request)
    let xhr = new XMLHttpRequest();

    //Open
    xhr.open("GET", "data.txt", true);

    xhr.onprogress = function () {
        console.log(xhr.readyState);
    }

    console.log(xhr);
}