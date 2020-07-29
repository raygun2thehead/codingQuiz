var seconds = parseInt(localStorage.getItem("startTime"));
var timerText = document.querySelector(".seconds");
var initials = document.querySelector("#initials");
var scoreText = document.querySelector(".score");
timerText.innerText = seconds;
scoreText.innerText = seconds;
console.log(initials);
var submit = document.querySelector(".submitBtn");

function submitButton() {

    localStorage.setItem("highScore", seconds);
    localStorage.setItem("initials", initials.value);
    console.log(initials)
    window.location.href = "highscores.html";
};

var highScores = document.querySelector("#highScores");

function goToHighScores() {
    window.location.href = "highscores.html";
}

highScores.addEventListener("click", goToHighScores);
submit.addEventListener("click", submitButton);