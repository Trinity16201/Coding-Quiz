let startButton = document.querySelector('#startGame');
var timeEl = document.querySelector(".time");
var secondsLeft = 60;
var timerInterval;


startButton.addEventListener('click', function () {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
    $('#startGame').click(function () {
      $('#main').css('hidden', 'visibility');
    })

  }, 1000);
  startButton.style.display = 'none';
  document.getElementById('question').textContent - questions[0].question;
  document.getElementById('question').style.visibility = 'visible';
  document.getElementById('choices').style.visibility = 'visible';
  for (const choice of questions[0].choices) {
    document.getElementById('choices').append(choices);
  }
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
  alert(`Quiz ended! Your score is ${score}/${questions.length}`);
  if (window.confirm("Do you want to go to the scoreboard?"))
    window.location = "file:///C:/Users/Trini/OneDrive/Desktop/coding/homework/Coding-Quiz/scoreboard.html";
  else{
    window.location ="https://trinity16201.github.io/Coding-Quiz/";
  }
  clearInterval(timerInterval);
}

function beginQuiz() {
  displayQuestion();
}
window.onload = beginQuiz;

//for scoreboard//
var initialsInput = document.querySelector("#initialInput");
var submitButton = document.querySelector("#submitscore");

var initials = localStorage.getItem("initialinput");

submitButton.addEventListener("click", function () {
    initials=initialsInput.value 
    console.log(initials)
    if (initials !== "") {
        initialsInput.textContent = initials;
        localStorage.setItem(initials,"tempscore")
    }

});
renderSubmission();

function renderSubmission() {
    var initials = initialsInput.value;
    if (!initials) {
        return;
    }
}


