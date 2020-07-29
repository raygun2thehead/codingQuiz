
var startButton = document.querySelector(".startBtn")
var timerText = document.querySelector("#seconds");
var seconds = 30;
timerText.innerText = seconds;



function startGame() {
    var timerInterval = setInterval(function() {
      seconds--;
      timerText.innerText = seconds;
  
      if(seconds === 0) {
        clearInterval(timerInterval);
        alert("Times Up")
      }
  
    }, 1000);

    localStorage.setItem("startTime", seconds);

    window.location.href = "question1.html"

  }

  var highScores = document.querySelector("#highScores");

  function goToHighScores() {
      window.location.href = "highscores.html";
  }

  highScores.addEventListener("click", goToHighScores)
  startButton.addEventListener("click", startGame) 
  
