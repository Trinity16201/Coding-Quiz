var timeEl = document.querySelector(".time");
var secondsLeft = 60;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
    // else{
    //   timeEl.textContent="";
    //   clearInterval(timerInterval);
    //   displayMessage();
    // }

  }, 1000);
}


setTime();

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
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }

  //Penalty area//
  // check if user guessed wrong
  // if (buttonEl.value !== questions[currentQuestion].answer) {
  //   // penalize time
  //   time -= 10;

  //   if (time < 0) {
  //     time = 0;
  //   }

  //   // display new time on page
  //   timerEl.textContent = time;
  // }
  var incorrectAnswer = !questions.answer;//NEEDED-can i take things within JS?
  let totalTime = secondsLeft;
  const penaltyTime = 10;
  // answerElement = getElementById(questions + "answer")
  function handleWrongAnswer(choice) {
    if (choice === incorrectAnswer)
      totalTime -= penaltyTime; // Subtract penaltyTime from totalTime
    // Update the displayed timer
    updateTimerDisplay();
  }
  function updateTimerDisplay() {
    if (incorrectAnswer === true)
      time = -penaltyTime;
    else if (timeEl < 0) {
      timeEl = 0;

    }
    timeEl.textContent = handleWrongAnswer();
    console.log(`Time remaining: ${secondsLeft} seconds`);
  }
  handleWrongAnswer();
  updateTimerDisplay();
}
function endQuiz() {
  alert(`Quiz ended! Your score is ${score}/${questions.length}`);
}
function startQuiz() {
  displayQuestion();
}
window.onload = startQuiz;
