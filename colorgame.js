function startGame() {
  gameLoop();
}

var timeLimit = 60; //1분동안 플레이
var loops = 0;
var peopleVisible = false;
var gameScore = 0;
function gameLoop() {
  peopleVisible = !peopleVisible;
  createCharacters();
  loops++;
  if (loops < timeLimit) {
    setTimeout(gameLoop, peopleVisible ? 1000 : 1000);
  } else {
    alert("You scored " + gameScore);
  }
}
function createCharacters() {
  var board = document.getElementById("board");
  var classToSet = peopleVisible ? "one visible" : "one hidden";
  for (var index = 0; index < 16; index++) {
    board.children[index].className = classToSet;
    board.children[index].innerHTML = "";
    board.children[index].onclick = function () {
      gameScore += -2;
      document.getElementById("score").innerHTML = gameScore;
    };
  }
  var randomNumber = Math.floor(Math.random() * 16) + 1;
  board.children[randomNumber - 1].innerHTML = "";
  board.children[randomNumber - 1].onclick = function () {
    gameScore++;
    document.getElementById("score").innerHTML = gameScore;
  };
  board.children[randomNumber - 1].className = classToSet + " other";
}

var count = 0;
function updateCount() {
  count = count + 1;
  document.getElementById("number").innerHTML = timeLimit - count;
  setTimeout(updateCount, 1000);
}

/*if (timeLimit <= count) {
    alert("시간끝");
  }
  */
