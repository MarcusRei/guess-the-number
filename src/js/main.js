let playerInput = document.getElementById("userGuess");
let button = document.getElementById("userSubmit");
let prompt = document.getElementById("prompt");

//Genererar en random siffra mellan 1-10
let correctAnswer = Math.floor(Math.random() * 10);

console.log(correctAnswer);

//När knappen trycks anropar den function "guess"
button.addEventListener("click", guess);

function guess() {
   if (parseInt(playerInput.value) === correctAnswer) {
    prompt.innerHTML = "Helt rätt! Fan va bra du är på att gissa siffror mellan 0 & 10! :)";
    prompt.className = "win";
   }
   else {
    prompt.innerHTML = "Fel! Försök igen!"
   }


   /*  console.log("Knappen funkar"); */

}

/* function generateRandomNumber {
    return Math.floor(Math.random() * max) + 1;
} */

