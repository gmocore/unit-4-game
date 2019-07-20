//create object for each character
    // image
    // health
    // base attack
    // attack
    // counter attack
    const leo = {
        health: 100,
        baseAttack: 10,
        attack: 0,
        counterAttack: 5,
        selectedPlayer: false,
        selectedOpponent: false,
        id: 'leo'
    }
    
    const brad = {
        health: 125,
        baseAttack: 15,
        attack: 0,
        counterAttack: 10,
        selectedPlayer: false,
        selectedOpponent: false
    }
    const idris = {
        health: 140,
        baseAttack: 8,
        attack: 0,
        counterAttack: 8,
        selectedPlayer: false,
        selectedOpponent: false
    }
    const aubrey = {
        health: 80,
        baseAttack: 25,
        attack: 0,
        counterAttack: 15,
        selectedPlayer: false,
        selectedOpponent: false
    }

    const characters = document.querySelectorAll('.character')

    characters.forEach(item => {
        item.addEventListener('click', () => {
           console.log(item.id);
           
        })
    })

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