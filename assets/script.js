var timeEl = document.querySelector(".time");
var secondsLeft = 60;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
  setTime();

const questions=[
  {
    question: "What is an array?",
    choices:["Money", "One data type", "Collection of same data types","One class"],
    answer:"Collection of same data types"
  },
  {
    question: "What is an string?",
    choices:["Sequence of characters", "Numbers", "An ID","Used for playing with dogs"],
    answer:"Sequence of characters"
  },
  {
    question: "Which item will display at the top of the page?",
    choices:["Footer", "Paragraph", "Div","H1"],
    answer:"H1"
  },
  {
    question: "Which will change the text color in CSS?",
    choices:["Background", "Color", "Font-weight","Font-Size"],
    answer:"Color"
  },

]
let currentQuestion=0;
let score=0;
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
    }
    function endQuiz() {
      alert(`Quiz ended! Your score is ${score}/${questions.length}`);
    }
function startQuiz() {
  displayQuestion();
}
window.onload = startQuiz;
// var startButtonElement = document.querySelector(".start-quiz");
// var isWin = false;
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");

// var questionElement= document.querySelector("#question")

// var answerElement1 = document.querySelector("div#answer-button > button:nth-of-type(1)")
// var answerElement2 = document.querySelector("div#answer-button > button:nth-of-type(2)")
// var answerElement3 = document.querySelector("div#answer-button > button:nth-of-type(3)")
// var answerElement4 = document.querySelector("div#answer-button > button:nth-of-type(4)")

// var winCounter = 0;
// var isWin = false;
// var timer;
// var timerCount;

// startButtonElement.addEventListener("click", function () {
//     console.log("BUTTON WAS CLICKED")
//     currentQuestionIndex = 0;
//     score = 0;
//     //nextButton.innerHTML = "next";
//     showNextQuestion()
// });
// // function startButton() {
// //     isWin = false;
// //     timerCount = 60;
// //     startButton.disabled = true;
// //     startTimer()
// // }


//     {
//         question: "What is an string?",
//         answers: [
//             { text: "Sequence of characters", correct: true },
//             { text: "Numbers", correct: false },
//             { text: "An ID", correct: false },
//             { text: "Used for playing with dogs", correct: false },

//         ]
//     },
//     {
//         question: "Which item will display at the top of the page?",
//         answers: [
//             { text: "Footer", correct: false },
//             { text: "Paragraph", correct: false },
//             { text: "Div", correct: false },
//             { text: "H1", correct: true },

//         ]
//     },
//     {
//         question: "Which will change the text color in CSS?",
//         answers: [
//             { text: "Background", correct: false },
//             { text: "Color", correct: true },
//             { text: "Font-weight", correct: false },
//             { text: "Font-Size", correct: false },

//         ]
//     }
// ];
// const answerButton = document.getElementById("answer-btn");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// // function startQuiz() {
// //     currentQuestionIndex = 0;
// //     score = 0;
// //     //nextButton.innerHTML = "next";
// //     showQuestion()
// //}
// function showNextQuestion() {
//     let currentQuestion = question[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.textContent = questionNo + ". " + currentQuestion.question;


//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//     });
// }

// startQuiz();
