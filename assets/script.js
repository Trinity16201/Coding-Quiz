let startButton = document.querySelector('#startGame');
let main = document.querySelector("#main");
var timeEl = document.querySelector(".time");
var secondsLeft = 60;
var timerInterval;
let highScore = document.querySelector("#highScore");
var enterInitials = document.querySelector("#enterInitials")
var playerCount = document.querySelector("#player-count");

var players = [];

startButton.addEventListener('click', function () {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
    startButton.addEventListener("click", function () {
      main.setAttribute('style', 'visibility=hidden');
    })

  }, 1000);
  startButton.style.display = 'none';
  document.getElementById('question').textContent - questions[0].question;
  document.getElementById('question').style.visibility = 'visible';
  document.getElementById('choices').style.visibility = 'visible';

})
const questions = [
  {
    question: "What is an array?",
    choices: ["Money", "One data type", "Collection of same data types", "One class"],
    answer: "Collection of same data types"
  },
  {
    question: "What is an string?",
    choices: ["Sequence of characters", "Numbers", "An ID", "Used for playing with dogs"],
    answer: "Sequence of characters"
  },
  {
    question: "Which item will display at the top of the page?",
    choices: ["Footer", "Paragraph", "Div", "H1"],
    answer: "H1"
  },
  {
    question: "Which will change the text color in CSS?",
    choices: ["Background", "Color", "Font-weight", "Font-Size"],
    answer: "Color"
  },

]
let currentQuestion = 0;
let score = 0;
// Function to display the current question and choices
function displayQuestion() {
  console.log(currentQuestion)
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  questionElement.textContent = questions[currentQuestion].question;
  choicesElement.innerHTML = "";
  questions[currentQuestion].choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => selectAnswer(choice));
    choicesElement.appendChild(button);

  });
}

function selectAnswer(choice) {
  if (choice === questions[currentQuestion].answer) {
    score++;
  } else {
    secondsLeft = secondsLeft - 10
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }

}


function endQuiz() {
  var submitButton = document.querySelector("#submitscore");
  var initialsInput = document.querySelector("#initialInput");
  highScore.setAttribute("class", "show");
  submitButton.addEventListener("click", function (e) {
    e.preventDefault()
    initials = initialsInput.value
    console.log(initials)
    if (initials !== "") {
      initialsInput.textContent = initials;
      localStorage.setItem(initials, "tempscore")
    }

  });


  clearInterval(timerInterval);
}

function beginQuiz() {
  highScore.setAttribute("class", "hidden");
  displayQuestion();
}
window.onload = beginQuiz;



