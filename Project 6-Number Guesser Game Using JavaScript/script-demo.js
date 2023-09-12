// get the buttons and the message element
let buttons = document.querySelectorAll("button");
let message = document.getElementById("message");

// generate a random secret number between 0 and 10
let secret = Math.floor(Math.random() * 11);

// initialize a variable to store the number of guesses
let guesses = 0;

// add event listeners to the buttons
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // get the value of the button
    let value = parseInt(button.textContent);

    // increment the number of guesses
    guesses++;

    // check if the value is equal to the secret number
    if (value === secret) {
      // display a success message
      message.textContent = "You guessed it! The secret number is " + secret + ".";
      message.style.color = "green";
      // disable all the buttons
      buttons.forEach(function (button) {
        button.disabled = true;
      });
    } else if (value < secret) {
      // display a hint message
      message.textContent = "Too low. Try a higher number.";
      message.style.color = "red";
      // disable the button
      button.disabled = true;
    } else if (value > secret) {
      // display a hint message
      message.textContent = "Too high. Try a lower number.";
      message.style.color = "red";
      // disable the button
      button.disabled = true;
    }

    // check if the gamer has used up all the chances
    if (guesses === 3) {
      // display a failure message
      message.textContent = "Sorry, you ran out of chances. The secret number was " + secret + ". A new number has been generated.";
      message.style.color = "red";
      // reset the number of guesses
      guesses = 0;
      // generate a new secret number
      secret = Math.floor(Math.random() * 11);
      // enable all the buttons
      buttons.forEach(function (button) {
        button.disabled = false;
      });
    }
  });
});
