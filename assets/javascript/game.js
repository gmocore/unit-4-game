//create object for each character
    // image
    // health
    // base attack
    // attack
    // counter attack
    let health;
    let baseAttack;
    let attack;
    let counterAttack
    let selectedPlayer
    let selectedOpponent

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
        selectedOpponent: false,
        imgUrl: './assets/images/screen-shot-2019-03-12-at-164638_khxp.910.webp'
    }
    const aubrey = {
        health: 80,
        baseAttack: 25,
        attack: 0,
        counterAttack: 15,
        selectedPlayer: false,
        selectedOpponent: false
    }

    $('#idris').attr('src', idris.imgUrl)

    const characters = document.querySelectorAll('.character')


    characters.forEach(item => {
        console.log(this);
        
        item.addEventListener('click', () => {
           if(item.id === "aubrey") {
               health = aubrey.health;
               baseAttack = aubrey.baseAttack;
               attack = aubrey.attack;
               counterAttack = aubrey.counterAttack;
            console.log(health, baseAttack, attack, counterAttack)
           } else if(item.id === 'leo') {
            health = leo.health;
            baseAttack = leo.baseAttack;
            attack = leo.attack;
            counterAttack = leo.counterAttack;
         console.log(health, baseAttack, attack, counterAttack)
           } else if (item.id === 'brad') {
            health = brad.health;
            baseAttack = brad.baseAttack;
            attack = brad.attack;
            counterAttack = brad.counterAttack;
         console.log(health, baseAttack, attack, counterAttack)
        //    } else if(item.id === 'idris') {
        //     health = idris.health;
        //     baseAttack = idris.baseAttack;
        //     attack = idris.attack;
        //     counterAttack = idris.counterAttack;
        //  console.log(health, baseAttack, attack, counterAttack)
           }
           
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