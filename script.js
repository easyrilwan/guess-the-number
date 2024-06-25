"use strict";

/*
document.querySelector(".message").textContent;
document.querySelector(".message").textContent = "🎉 Correct Number";

document.querySelector(".number").textContent = 12;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 10;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "❌ No Number";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60B347";

    document.querySelector(".number").style.width = 30 + "rem";

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Number is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 Game over !!! Try again";

      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor = "#f92f60";
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Number is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 Game over !!! Try again";

      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor = "#f92f60";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = 15 + "rem";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
});
