var ghost = Math.floor(Math.random() * 15);
var ghost2 = Math.floor(Math.random() * 15);
var monster = Math.floor(Math.random() * 15);
var monster2 = Math.floor(Math.random() * 15); //creates a second monster

if (ghost === monster || ghost === monster2 || monster == monster2 || ghost2 === monster || ghost2 === monster2 || monster == monster2 || ghost === ghost2) {   // if ghost and monsters occur in same location, restarts the game
  location.reload();  
}

var counter = 10; // creates a turn counter
var ghostCount = 0 // creates counter to hold ghosts

function spot(number) {
  counter = counter - 1 ; // decrements counter by 1 every time a click happens
  document.getElementById("counter").innerHTML = counter; // replaces the counter on html with current value of counter variable
  if (counter < 1) {
    alert("Game Over, you ran out of turns!");
  } else if (ghost === number || ghost2 === number) {
    document.getElementById(number).innerHTML = "👻"; // replaces with ghost emoji
    ghostCount = ghostCount + 1
     if (ghostCount === 2) { // if two ghosts are revealed, you win
        setTimeout(function () {  //creates a delay of 100 miliseconds prior to executing alert
        alert("BOO! You won!");
        }, 100);
    }
  } else if (monster === number || monster2 === number) { //added second monster logic
    document.getElementById(number).innerHTML = "👹"; // replaces with monster emoji
    setTimeout(function () {  //creates a delay of 100 miliseconds prior to executing alert
      alert("You lost!");
    }, 100);
  } else {
    document.getElementById(number).innerHTML = "X";
  }
}