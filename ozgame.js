var player = document.getElementById("userInput");
const choices = ["rock", "paper", "scissors"];
let output = document.getElementById("output");
let output2 = document.querySelector(".output2"); 
function execute() { 
  var randomBg = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoE-KISGIunnWLULYapBonVRbkTy46xnkM53I53cJmQ&s", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQr5KJgzhhv4uS--MmJZGjfSwfMoLZL6zdag&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGb8XZotlX6vvc80aqE87y-OgmXIWurt9FCQ&s"];

var randomBackground = Math.floor(Math.random() * randomBg.length);

  var ranImg = randomBg[randomBackground]

document.body.style.backgroundImage = "url('" + ranImg + "')"
}
execute()

function display() {
  document.getElementById("play").style.visibility = "visible";
  document.querySelector(".game").style.visibility = "hidden";
}
player.onkeydown = function (event) {
  if (event.keyCode === 13 ) {
   choose();
  }
}

function choose() {
 var playerU = document.getElementById("userInput").value;
const computer = choices[Math.floor(Math.random() * choices.length)];
  console.log(computer)
    for (let i = 0; i < computer.length; i++) { 
   if (playerU === computer) {
     output2.innerHTML = `I choose ${computer} its a tie!`;
      }
  else if (playerU === 'rock' && computer === 'scissors' ||
          playerU === 'paper' && computer === 'rock' ||
          playerU === 'scissors' && computer === 'paper') 
  {
      output2.innerHTML = `I choose ${computer} you win!`;
  }
  else if (playerU === 'rock' && computer === 'paper' ||
          playerU === 'paper' && computer === 'scissors' ||
          playerU === 'scissors' && computer === 'rock'){
    output2.innerHTML = `I choose ${computer} you lose!`
  }
  else {
    display()
  }

}
}





