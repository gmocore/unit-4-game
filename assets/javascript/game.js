//create object for each character
// image
// health
// base attack
// attack
// counter attack
let playerSelected;

const characters = {
  leo: {
    name: "leo",
    health: 100,
    baseAttack: 10,
    attack: 0,
    counterAttack: 5,
    selectedPlayer: false,
    selectedOpponent: true
  },
  brad: {
    name: "brad",
    health: 125,
    baseAttack: 15,
    attack: 0,
    counterAttack: 10,
    selectedPlayer: false,
    selectedOpponent: true
  },
  idris: {
    name: "idris",
    health: 140,
    baseAttack: 8,
    attack: 0,
    counterAttack: 8,
    selectedPlayer: false,
    selectedOpponent: true
  },
  aubrey: {
    name: "aubrey",
    health: 80,
    baseAttack: 25,
    attack: 0,
    counterAttack: 15,
    selectedPlayer: false,
    selectedOpponent: true
  }
};

const characterImages = document.querySelectorAll(".character");

$(".character").on("click", function() {
  playerSelected = $(this).attr("id");

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
});

$(".reset-button").click(event => {
  console.log("reset");
});

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
