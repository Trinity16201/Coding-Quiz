//for scoreboard//
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submitscore");

var initials = localStorage.getItem("initials");
initials.textContent = initials;

submitButton.addEventListener("click", function () {
    if (initials === "")
        diplayMessage("Thank you for submitting!")
    localStorage.setItem("initials", initials)
});
renderSignUp();

function renderSubmission() {
    var initials = initialsInput.value;
    if (!initials) {
        return;
    }
}


//function displayMessage()