//create object for each character
// image
// health
// base attack
// attack
// counter attack
let playerSelected;
let playerBoolean = false;
let opponentSelected;
let opponentBoolean = false;

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

const characterImages = document.querySelectorAll(".character");

$(".character").on("click", function() {
  if(!playerSelected && !opponentSelected) {
    playerSelected = $(this).attr("id");
    playerBoolean = true;
    console.log(characters[playerSelected].baseAttack, playerBoolean)

  }
  
  else if (playerBoolean && !opponentBoolean) {
    opponentSelected = $(this).attr('id')
    opponentBoolean = true
    console.log(characters[opponentSelected].counterAttack, opponentBoolean);
    
  }

  characterImages.forEach(item => {
    if (item.id !== playerSelected) {
      $(item).appendTo(".opponent");
    } else {
      $(item).appendTo(".selected-player");
    }
  });
});

$(".attack-button").click(event => {
  console.log("attack");
  if (playerSelected && opponentSelected) {
    playerAttack();
    opponentCounter()
  }
});

$(".reset-button").click(event => {
  console.log("reset");
});


function playerAttack() {
  characters[opponentSelected].health -= characters[playerSelected].baseAttack;
  console.log(characters[opponentSelected].health)
}

function opponentCounter() {
  characters[playerSelected].health -= characters[opponentSelected].counterAttack;
  console.log(characters[playerSelected].health)
}

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
