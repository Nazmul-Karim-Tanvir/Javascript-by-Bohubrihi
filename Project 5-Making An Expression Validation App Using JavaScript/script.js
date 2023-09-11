// geting element from the html document 
const dropdown = document.querySelector(".dropdown");
const dropdownButton = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");


//creating a input and result saction under dropdown
const input = document.createElement("input");
const result = document.createElement("p");

dropdown.appendChild(input);
dropdown.appendChild(result);


//defining the regular expression for email, phone number , postal code

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^\+?(\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const postCodeRegex = /^[0-9]{4}$/;

// Add an event listener to the dropdown menu to handle the selection of validation type
dropdownMenu.addEventListener("click", function (event) {
  const type = event.target.textContent;
  dropdownButton.textContent = type;

  switch (type) {
    case "Email":
      input.type = "email";
      input.placeholder = "Enter your email";
      break;
    case "Phone Number":
      input.type = "tel";
      input.placeholder = "Enter your phone number";
      break;
    case "Post Code":
      input.type = "text";
      input.placeholder = "Enter your post code";
      break;
    default:
      break;
  }
  input.value = "";
  result.textContent = "";
});


// Add an event listener to the input element to handle the change of input value

input.addEventListener("input", function () {
  const type = dropdownButton.textContent;

  switch (type) {
    case "Email":
      validate(emailRegex);
      break;
    case "Phone Number":
      validate(phoneRegex);
      break;
    case "Post Code":
      validate(postCodeRegex);
      break;
    default:
      break;
  }

});


//Regular expressin validate function 

function validate(regex) {

  const value = input.value;
  const valid = regex.test(value);

  if (valid === true) {
    result.textContent = "Valid";
    result.style.color = "green";
  }
  else {
    result.textContent = "Invalid";
    result.style.color = "red";
  }

}
