var myScores = JSON.parse(localStorage.getItem("highScore"));
var initials = localStorage.getItem("initials");
var highScoreList = document.querySelector(".highScoreList")
var highScoreForm = document.querySelector(".card-body")
// console.log(myScores);
// console.log(initials);
var data = JSON.stringify( {"initials":initials, "score":myScores});

localStorage.setItem("finalScore", data);

var finalScore = JSON.parse(localStorage.getItem("finalScore",));
// console.log(finalScore);
var highScores = [];

init();

function renderHighScores() {
  highScoreList.innerHTML = "";

  for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];

    var li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete";

    // li.appendChild(button);
    highScoreList.appendChild(li);
  }
}

function init() {
  var storedHighScores = JSON.parse(localStorage.getItem("highscores"));

  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }

  renderHighScores();
}

function storeHighScores() {
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

highScoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var highScoreText = finalScore.value.trim();
console.log(highScoreText)
  if (highScoreText === "") {
    return;
  }

  highScores.push(highScoreText);
  highscoreInput.value = "";

  storeHighScores();
  renderHighScores();
});

// When a element inside of the todoList is clicked...
// var highScoreList = function(event) {
//   var element = event.target;

//   // If that element is a button...
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     highScores.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeHighScores();
//     renderHighScores();
//   }
// };
