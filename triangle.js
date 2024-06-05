let user = document.getElementById("userInput");


user.onkeydown = function (event) {
  if (event.keyCode === 13)  {
    generate();
  }
}

function generate(rows) {
  var rows = document.getElementById("userInput").value;
  var output = document.getElementById("output");
  //var output = document.getElementById("output");
  output.innerHTML = "";

  
   for(let a = 0; a < rows; a++){
     let str = '';
     let number = 1;
     
     for(let b = 1; b <= (rows - a); b++){
       str += '';
       
     }
    
     for(let c = 0; c <= a; c++){
       str += number + ' ';  
      number = number * (a - c) / (c + 1);
    
     }
    var triangle = document.createElement("p");
     triangle.innerHTML = str;
     output.appendChild(triangle);
   }
  
}
console.log("dedicated to Ms stachler lmao");
