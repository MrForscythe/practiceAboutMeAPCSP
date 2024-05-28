var player = document.getElementById("userInput");
 var playerU = document.getElementById("userInput").value;
const choices = ["rock", "paper", "scissors"];
let output = document.getElementById("output");

player.onkeydown = function (event) {
  if (event.keyCode === 13 ) {
   choose();
  }
}

function choose() {
const computer = choices[Math.floor(Math.random() * choices.length)];
  console.log(computer)
    }



