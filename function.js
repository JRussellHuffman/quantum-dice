var index = Math.floor(Math.random() * diceCorpus.length); //start at a random place in the array

var maxDiceRoll = 32 //this will be constant so long as its 5 qubits

console.log(diceCorpus.length);

function increaseIndex() { //go to the next number. If its the end of the array, go back to the front
  if (index < diceCorpus.length-1) {
      index ++;
  } else {
    index = 0;
  }
}

var result = "---"
var finalDiceSize = "---";

function fadeDice(diceID) {
  //get rid of the class first
  for (var i = 1; i <= 6; i++) {
      var item = document.getElementById(i);
      item.classList.remove("inactive");
  }

  //add it back where appropriate
  for (var i = 1; i <= 6; i++) {
    if(i != diceID) {
      var item = document.getElementById(i);
      item.className += " inactive";
    }
  }
}

function getDiceSize(diceSize) {
  finalDiceSize = diceSize;
  return finalDiceSize;
}

function rollDice(diceID, diceSize) {
  fadeDice(diceID);
  getDiceSize(diceSize);
}

function resetDice() {
  for (var i = 1; i <= 6; i++) {
      var item = document.getElementById(i);
      item.classList.remove("inactive");
  }
  finalDiceSize = "---"
  roll();
}

function load() {
  document.getElementById("result").style.display = "none";
  document.getElementById("loader").style.display = "block";

  setTimeout(function() {
    document.getElementById("result").style.display = "block";
    document.getElementById("loader").style.display = "none";
  }, 1000);
}

function roll() {
  load()
  if (Number.isNaN(result)) {
    result = "---";
  }

  if (finalDiceSize == "---") {
    result = "---";
  } else {
    increaseIndex();
    var normalizedRoll = (diceCorpus[index] + 1)/maxDiceRoll //its the sequence thats random, not the number. normalize the sequence for use by any dice
    result = Math.ceil(normalizedRoll * finalDiceSize);
  }
  document.getElementById("result").innerHTML = result;
}
