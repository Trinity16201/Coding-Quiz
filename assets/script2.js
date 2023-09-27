var playerlist = document.getElementById("playerlist")
//function for looping through player submissions
function renderPlayers(players) {
console.log(players)
    for (var i = 0; i < players.length; i++) {
      var player = players[i];
  
      var li = document.createElement("li");
      li.textContent = player.thisInitials + ": " + player.thisScore
      playerlist.appendChild(li);
    }

  }
    //Calling stored players to the page
  function init() {
    var storedPlayers = JSON.parse(window.localStorage.getItem("playerScores")) || [];
    renderPlayers(storedPlayers);
}
init();


