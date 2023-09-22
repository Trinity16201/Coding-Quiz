
//for scoreboard//
var initialsInput = document.querySelector("#initialInput");


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