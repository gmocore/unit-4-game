//create object for each character
    // image
    // health
    // base attack
    // attack
    // counter attack

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