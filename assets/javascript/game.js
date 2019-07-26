// VARIABLES

const characterImages = document.querySelectorAll(".character");
let player;
let opponent;
let playerBoolean = false;
let opponentBoolean = false;
let playerDefeated;
let opponentDefeated;
let opponentsRemaining = 3;

// CHARACTER OBJECTS

const characters = {
  leo: {
    name: "Leonardo DiCaprio, actor extraordinaire",
    health: 100,
    baseAttack: 10,
    attack: 10,
    counterAttack: 11
  },
  brad: {
    name: "Brad Pitt, he was in fight club. enough said",
    health: 125,
    baseAttack: 15,
    attack: 15,
    counterAttack: 12
  },
  idris: {
    name: "Idris Elba, the ebony dream boat",
    health: 140,
    baseAttack: 8,
    attack: 8,
    counterAttack: 8
  },
  aubrey: {
    name: "Audrey Plaza, the glare apparent",
    health: 80,
    baseAttack: 25,
    attack: 25,
    counterAttack: 33
  }
};

//EVENT LISTENERs

$(".character").on("click", function() {
  if (!playerBoolean && !opponentBoolean) {
    // used to access character object
    player = $(this).attr("id");
    // displays player info to screen
    playerSelection();
  } else if (playerBoolean && !opponentBoolean) {
    // used to acces charcter object
    opponent = $(this).attr("id");
    // displays opponent info to screen
    opponentSelection();
  }
});

$(".attack-button").click(event => {
  if (player && opponent) {
    playerAttack();
    opponentCounter();
    //update health on screen
    checkHealth();
  }
});

$(".reset-button").click(event => {
  location.reload();
});

// FUNCTIONS

function playerAttack() {
  characters[opponent].health -= characters[player].attack;
  characters[player].attack += characters[player].baseAttack;
  $(".attack-text").text(
    `${player} attacked ${opponent} for ${characters[player].attack} points`
  );
  // update player's health
  healthRemaining();
}

function opponentCounter() {
  characters[player].health -= characters[opponent].counterAttack;
  $(".counter-attack-text").text(
    `${opponent} counter attacked ${player} for ${
      characters[opponent].counterAttack
    } points`
  );
  healthRemaining();
}

function checkHealth() {
  // check player health
  if (characters[player].health <= 0) {
    playerDefeated = true;
    // game over
    if (playerDefeated) {
      $(`#${player}`).fadeOut();
      $(".attack-button").addClass("hide");
      $(".attack-text").text("YOU LOST");
      $(".health").text("THAT'S NO WAY TO WIN AN OSCAR");
      $(".counter-attack-text").text("you will NEVER be famous now!!");
    }
  }

  // check enemy health
  if (characters[player].health > 0 && characters[opponent].health <= 0) {
    opponentDefeated = true;
    // enemy defeated
    if (opponentDefeated) {
      $(`#${opponent}`).fadeOut();
      $(".attack-button").addClass("hide");
      opponentBoolean = false;
      opponentsRemaining--;

      //game win
      if (opponentsRemaining === 0) {
        $(".attack-text").text("YOU WON");
        $(".counter-attack-text").text(
          "great job, kid! you are gonna be a big star!"
        );
        $(".opponent-health").text("A-List Status: APPROVED");
      }
    }
  }
}

function healthRemaining() {
  $("#opponent-health-remaining").text(characters[opponent].health);
  $("#player-health-remaining").text(characters[player].health);
}

// updates info on screen
function displayItems() {
  $(".attack-button").removeClass("hide");
  $("#player-health-remaining").text(characters[player].health);
  $("#opponent-health-remaining").text(characters[opponent].health);
  $(".health").removeClass("hide");
  $(".versus-text").removeClass("hide");
}

// sets player values
function playerSelection() {
  playerBoolean = true;
  $(`#${player}`).appendTo(".selected-player");
  $(".attack-text").text(characters[player].name);
}

// sets opponent values
function opponentSelection() {
  if (opponent !== player) {
    opponentBoolean = true;
    $(`#${opponent}`).appendTo(".opponent");
    $(".counter-attack-text").text(characters[opponent].name);
    displayItems();
  }
}
