const question= [
    {
        question: "What is an array?",
        answers: [
            {text: "Money", correct:false},
            {text: "One Data Type", correct:false},
            {text: "Collection of Same Data Types", correct:true},
            {text: "One Class", correct:false},

        ]
    },
    {
        question: "What is an string?",
        answers: [
            {text: "Sequence of characters", correct:true},
            {text: "Numbers", correct:false},
            {text: "An ID", correct:false},
            {text: "Used for playing with dogs", correct:false},

        ]  
    },
    {
        question: "Which item will display at the top of the page?",
        answers: [
            {text: "Footer", correct:false},
            {text: "Paragraph", correct:false},
            {text: "Div", correct:false},
            {text: "H1", correct:true},

        ]
    },
    {
        question: "Which will change the text color in CSS?",
        answers: [
            {text: "Background", correct:false},
            {text: "Color", correct:true},
            {text: "Font-weight", correct:false},
            {text: "Font-Size", correct:false},

        ]
    }
];
const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-btn");

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "btn";
    showQuestion()
}
function showQuestion(){
    let currentionQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentionQuestion. question;
}