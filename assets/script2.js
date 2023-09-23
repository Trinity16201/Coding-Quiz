
//for scoreboard//

const key = document.getElementById("#initialInput");

document.querySelector("#submitscore").addEventListener("click",()=>{
    localStorage.setItem("initials", "#initialInput");
    document.getElementById("#playerCount").append("Thanks for playing!")
})
var players = [];
var enterInitials = document.querySelector("#enterInitials")
var playerCount = document.querySelector("#playerCount")
function renderPlayers(){
enterInitials.innerHTML ="";
playerCount.textContent = players.length;
}

