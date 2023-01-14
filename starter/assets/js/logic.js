var start = document.querySelector("start")
var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");

var timerCount

// The init function is called when the page loads 
function init() {
    getWins();
  }

// The startQuiz function is called when the start button is clicked
function startQuiz() {
    isWin = false;
    timerCount = 40;
    // Prevents start button from being clicked when round is in progress
    start.disabled = true;
    renderQuestions()
    startTimer()
  }
  
  