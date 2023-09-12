// getting buttons 
let buttons = document.querySelectorAll("button");

// getting message saction 
let message = document.getElementById("message");
let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");

let playagain = document.getElementById("play-again");

let secret = Math.floor(Math.random() * 11);

// counting number of guesses
let guessesCount = 0;
message2.textContent = `${3} chance remaining`;

buttons.forEach(function (button) {
    button.addEventListener("click", game);
});

playagain.addEventListener("click", reset);

// game
function game() {
    let value = parseInt(this.textContent);

    if (value === secret) {
        message.textContent = "You Won ! The secret Number is -> " + secret + " press play again to play";

        let img = document.createElement("img"); 
        img.src = "images and animations/winking_face.gif"; 
        img.alt = ""; message1.appendChild(img);

        message.style.color = "green";
        buttons.forEach(function (button) {
            button.disabled = true;
        });
        playagain.disabled = false;

    }

    else if (value < secret) {
        message.textContent = "Hint: Too low. Try a higher number.";
        message.style.color = "red";

        this.disabled = true;
    }
    else if (value > secret) {
        message.textContent = "Hint: Too high. Try a lower number.";
        message.style.color = "red";

        this.disabled = true;
    }

    guessesCount = guessesCount+1;
    message2.textContent = `${3-guessesCount} chance remaining`;

    if (guessesCount === 3 && value !== secret) {
        // display a failure message
        let img = document.createElement("img");
        img.src = "images and animations/winking_face_with_tongue (1).gif";
        img.alt = ""; 
        message1.appendChild(img);

        message.textContent = "Sorry, you ran out of chances. The secret number was " + secret + " press play again to play";
        message.style.color = "red";
        // reset the number of guesses
        guessesCount = 0;
        // generate a new secret number
        secret = Math.floor(Math.random() * 11);
        // enable all the buttons
        buttons.forEach(function (button) {
            button.disabled = true;
        });
        playagain.disabled = false;
    }
}


// reset
function reset() {
    // reset the guesses count
    guessesCount = 0;

    //message content empty
    message.textContent = "";
    message1.textContent = "";
    message2.textContent = `${3} chance remaining`;
    // generate a new secret number
    secret = Math.floor(Math.random() * 11);

    // enable all the buttons
    buttons.forEach(function (button) {
        button.disabled = false;
    });
    buttons.forEach(function (button) {
        button.addEventListener("click", game);
    });
}