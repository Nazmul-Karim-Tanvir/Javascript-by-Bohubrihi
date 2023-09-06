// Get the UI elements 

let form = document.querySelector("#book-form");
let booklist = document.querySelector("#book-list");



//Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


//UI class
class UI {

    static addToBookList(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }
    static deleteFromBook(target) {
        if (target.hasAttribute("href")) {
            target.parentElement.parentElement.remove();
            UI.showAlert("Book Removed!", "success");
        }

    }

    static showAlert(message, className) {
        // creating div saction
        let div = document.createElement("div");
        div.className = `alert ${className}`;

        //adding text node to div
        let textNode = document.createTextNode(message);
        div.appendChild(textNode);

        //putting div brfore form in container saction
        let container = document.querySelector(".container");
        let form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        // alert message will disappear after 3 seconds 
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);

    }

}



// Add event listener 
form.addEventListener("submit", newBook);
booklist.addEventListener("click", removeBook);


// newBook 
function newBook(e) {
    let title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector("#isbn").value;



    if (title === "" || author === "" || isbn === "") {
        UI.showAlert("Please fill all the fields!", "error");
    }
    else {
        let book = new Book(title, author, isbn);
        UI.addToBookList(book);
        UI.clearFields();
        UI.showAlert("Book Added!", "success");
    }
    e.preventDefault();
}

// removeBook

function removeBook(e) {
    UI.deleteFromBook(e.target);
    e.preventDefault();
}