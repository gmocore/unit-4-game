const characterImages = document.querySelectorAll(".character");
let playerSelected;
let playerBoolean = false;
let opponentSelected;
let opponentBoolean = false;
let playerDefeated;
let opponentDefeated;

const characters = {
  leo: {
    name: "leo",
    health: 100,
    baseAttack: 10,
    attack: 10,
    counterAttack: 5,
    selectedPlayer: false,
    selectedOpponent: false
  },
  brad: {
    name: "brad",
    health: 125,
    baseAttack: 15,
    attack: 15,
    counterAttack: 10,
    selectedPlayer: false,
    selectedOpponent: false
  },
  idris: {
    name: "idris",
    health: 140,
    baseAttack: 8,
    attack: 8,
    counterAttack: 8,
    selectedPlayer: false,
    selectedOpponent: false
  },
  aubrey: {
    name: "aubrey",
    health: 80,
    baseAttack: 25,
    attack: 25,
    counterAttack: 15,
    selectedPlayer: false,
    selectedOpponent: false
  }
};


$(".character").on("click", function () {
  if (!playerBoolean && !opponentBoolean) {
    playerSelected = $(this).attr("id");
    playerBoolean = true;
    console.log(`player: ${playerSelected}`)

  }

  else if (playerBoolean && !opponentBoolean) {
    opponentSelected = $(this).attr('id')
    opponentBoolean = true
    console.log(`enemy: ${opponentSelected}`);

  }
});

$(".attack-button").click(event => {
  console.log("attack");
  if (playerSelected && opponentSelected) {
    playerAttack();
    opponentCounter();
    checkHealth();
  }
});

$(".reset-button").click(event => {
  console.log("reset");
});


function playerAttack() {
  characters[opponentSelected].health -= characters[playerSelected].attack;
  characters[playerSelected].attack += characters[playerSelected].baseAttack;
  console.log(`${opponentSelected}`, characters[opponentSelected].health)
}

function opponentCounter() {
  characters[playerSelected].health -= characters[opponentSelected].counterAttack;
  console.log(`${playerSelected}`, characters[playerSelected].health)
}

function checkHealth() {
  if (characters[playerSelected].health <= 0) {
    playerDefeated = true;
    if (playerDefeated) {
      console.log('game over')
    }
  }

  if (characters[playerSelected].health > 0 && characters[opponentSelected].health <= 0) {
    opponentDefeated = true;
    if (opponentDefeated) {
      $(`#${opponentSelected}`).remove();
      opponentBoolean = false
      console.log('you win');
    }
  }
}





// checkHealth Function Pseudo
// if player heath < 0 && oponent health is > 0
// then player defeated = true
// if player defeated = true
// console log game over

// if player health > 0 && openent < 0
// then openent defeated = true
// if openent defeated = true
// remove openent
// openentboolean = false
// console.log you win





// create event listener for:
// select character (player)
// select opponent
// attack

// when player is selected
// image is moved to fight area

// when opponent is selected
// opponent moved to defender area

// character attack
// each attack increments attack by base attack
// attack decrements hp of oponent by attack value

// opponent attack
// character attack tigeers counter attack
// counter decrements player hp

// health
// if hp is <= 0 player/opponent defeated
// if player is defeated => game over
// if opponent is defeated => select new opponent
// if no opponents remain => player wins
