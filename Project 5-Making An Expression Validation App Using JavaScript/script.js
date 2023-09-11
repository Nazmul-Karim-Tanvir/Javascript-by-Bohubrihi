// Get the elements from the HTML document
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-toggle");
const input = document.createElement("input"); // Create an input element
const result = document.createElement("p"); // Create a paragraph element

// Append the input and result elements to the dropdown element
dropdown.appendChild(input);
dropdown.appendChild(result);

// Define the regular expressions for email, phone number and post code
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^\+?(\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const postCodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/;

// Define a function to validate the input value against the selected regular expression
function validate(regex) {
  // Get the input value
  const value = input.value;
  // Test if the value matches the regex
  const isValid = regex.test(value);
  // Display the result
  result.textContent = isValid ? "Valid" : "Invalid";
  // Change the result color
  result.style.color = isValid ? "green" : "red";
}

// Add an event listener to the dropdown menu to handle the selection of validation type
dropdownMenu.addEventListener("click", function (event) {
  // Get the selected validation type
  const type = event.target.textContent;
  // Update the dropdown button text
  dropdownButton.textContent = type;
  // Set the input type and placeholder according to the validation type
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
  // Clear the input value and result text
  input.value = "";
  result.textContent = "";
});

// Add an event listener to the input element to handle the change of input value
input.addEventListener("input", function () {
  // Get the selected validation type
  const type = dropdownButton.textContent;
  // Validate the input value according to the validation type
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
