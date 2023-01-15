var start = document.querySelector("#start")
var win = document.querySelector(".win");
var scores = document.querySelector(".scores");
var timerElement = document.querySelector(".timer");

var timerCount
var Counter = 0
var correctAnswer
var isWin = false;

// The init function is called when the page loads 
function init() {
    getWins();
  }

// The startQuiz function is called when the start button is clicked
function startQuiz() {
    timerCount = 40;
    // Prevents start button from being clicked when round is in progress
    start.disabled = true;
    renderQuestions()
    startTimer()
  }

//function answerQuestion

//correct answers function
// if answers  = [...]
// add to 

function winQuiz() {
    wordBlank.textContent = "Correct!";
    winCounter++
    startButton.disabled = false;
    setWins()
  }
  
  // The loseGame function is called when timer reaches 0
  function loseQuiz() {
    wordBlank.textContent = "Wrong!";
    loseCounter++
    startButton.disabled = false;
    setLosses()
  }
  
// The setTimer function starts and stops the timer and triggers winQuiz() and loseQuiz()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
// When a timer starts show the first question
  function renderQuestions () {
    var questionsElement = document.querySelector("#questions");
    questionsElement.classList.remove("hide");
    var questionTitle = document.querySelector("#question-title");
    questionTitle.textContent = questions[0].question;
    var questionChoices = document.querySelector("#choices");
    for (var i = 0; i < questions[0].answers.length; i++) {
      btn = document.createElement('button');
      btn.innerText = questions[0].answers[i];
      btn.id = "q0a"+i;
      questionChoices.appendChild(btn);
    }
  }

  // Attach event listener to start button to call startGame function on click
start.addEventListener("click", startQuiz);

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
  
// Updates win count on screen and sets win count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
  }
  