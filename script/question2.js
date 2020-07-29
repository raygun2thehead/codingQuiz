var seconds = parseInt(localStorage.getItem("startTime"));
var answer = localStorage.getItem("answer");
var footer = document.querySelector(".footer");
footer = answer;
var timerText = document.querySelector("#seconds");
timerText.innerText = seconds;
// console.log(typeof seconds);
var timerInterval;
var incorrect = document.querySelector(".incorrectBtn");
var incorrect1 = document.querySelector(".incorrectBtn1");
var incorrect2 = document.querySelector(".incorrectBtn2");
var correct = document.querySelector(".correctBtn");
startGame();
function startGame() {
     timerInterval = setInterval(function() {
      seconds--;
      console.log(seconds)
      timerText.innerText = seconds;
  
      if(seconds === 0) {
        clearInterval(timerInterval);
        alert("Times Up")

        window.location.href = "index.html";
      }
  
    }, 1000);

    // window.location.href = "question2.html"
}

function incorrectButton() {
    seconds -= 5;
    window.location.href = "question3.html"

    localStorage.setItem("startTime", seconds);
    alert("incorrect");
};

function incorrectButton1() {
    seconds -= 5;
    window.location.href = "question3.html"

    localStorage.setItem("startTime", seconds);
    alert("incorrect")
};

function incorrectButton2() {
    seconds -= 5;
    window.location.href = "question3.html"

    localStorage.setItem("startTime", seconds);
    alert("incorrect")
};

function correctButton() {
    seconds += 2;
    window.location.href = "question3.html"

    localStorage.setItem("startTime", seconds);
    alert("correct");
};

var highScores = document.querySelector("#highScores");

function goToHighScores() {
    window.location.href = "highscores.html";
}

highScores.addEventListener("click", goToHighScores)

incorrect.addEventListener("click", incorrectButton)
incorrect1.addEventListener("click", incorrectButton1) 
incorrect2.addEventListener("click", incorrectButton2)  
correct.addEventListener("click", correctButton) 
 