## Table of contents

- [Overview Book List](#overview-bask-list)
- [Features](#features)
- [Procedure](#procedure)
- [My process](#my-process)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Useful resources](#useful-resources)

## Overview Book List
This is a responsive web application that allows you to create and remove book list of your choices . And stores the information in your local browser storage so that keep proper tracks of your item. 

- Desktop view![](images/desktop-view.JPG) 
- Mobile view![](images/mobile-view.JPG)

## Features
- You can add a new task by typing it in the input field and clicking the Add button.
- You can filter the tasks by typing a keyword in the - search field.
- You can delete a single task by clicking the X button next to it.
- You can delete all the tasks by clicking the Clear all list button.
- The tasks are saved in the local storage of the browser, so they will persist even if you close or refresh the page.

### Built with

- HTML5 
- CSS
- Bootstrap
- JavaScript
- Object Oriented Programming 

## My Procedure
To create this web application, I followed these steps:

- I created an HTML file named index.html and added the basic structure of the web page, including the meta tags, the title, and the Bootstrap CDN link.
- I added a div element with the class “container mt-4 p-4” to create a responsive layout and some margin and padding for the content.
- I added an h4 element with the text “Choose Task” and a form element with the id “form-task” and the action attribute set to “”.
- I added a div element with the class “form-group input-group” to create a form group with an input field and a button.
- I added an input element with the id “create-task”, the type “text”, the class “form-control”, and the placeholder “Create task” to create an input field for entering a new task.
- I added a div element with the class “input-group-append” to append a button to the input field.
- I added a button element with the id “add-task”, the type “submit”, and the class “btn btn-primary” to create a button for adding a new task.
- I added an hr element to create a horizontal line to separate the sections of the web page.
- I added another h4 element with the text “To Do List” and another input element with the id “filter-task”, the type “text”, the class “form-control”, and the placeholder “Search/Filter task” to create an input field for filtering the tasks.
- I added an ol element with the id “list-task” to create an ordered list for displaying the tasks.
- I added a button element with the id “clear-task” and the class “btn btn-danger mt-2” to create a button for clearing all the tasks.
- I created a JavaScript file named script.js and linked it to the HTML file using a script tag at the end of the body tag.
- I defined some UI elements by selecting them using document.querySelector() and assigning them to variables.
- I defined some event listeners by adding addEventListener() methods to the UI elements and passing them callback functions as arguments.
- I defined some functions for creating, removing, clearing, filtering, storing, getting, and removing from local storage tasks by using DOM manipulation methods, local storage methods, conditional statements, loops, and array methods.
- I tested the web application by opening it in a web browser and performing some actions such as adding, deleting, filtering, and clearing tasks.

## Author

- LinkedIn - [@nazmul-karim-tanvir-795563159](https://www.linkedin.com/feed/)
- GitHub - [Nazmul-Karim-Tanvir ](https://github.com/Nazmul-Karim-Tanvir)


## Acknowledgments

- [Bohubrihi](https://bohubrihi.com/) - It helped me a lot learning the fundamentals of HTML and CSS and JavaScript


## Useful resources
- [Bohubrihi](https://bohubrihi.com/) 
- W3School