"use strict";

// TODO - write your code here.


const randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random());
    return (randNum ? opt2 : opt1);
}

const attackPlayer = function(health) {
    return health - randomDamage();
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
    if (health > 0) {
        return false;
    } else {
        return true;
    }
}

function fight(player1, player2, player1Health, player2Health){
   while(true) {
       let attacker = chooseOption(player1, player2);
       if (attacker === player1){
           console.log(`${player1} attacks`); //tell me what's happening
           player2Health = attackPlayer(player2Health);
           logHealth(player2, player2Health);
           if (isDead(player2Health)===true){
                logDeath(player1, player2);
                break;
           }
       } else {
           console.log(`${player2} attacks`); //tell me what's happening
           player1Health = attackPlayer(player1Health);
           logHealth(player1, player1Health);
           if (isDead(player1Health)===true) {
               logDeath(player2, player1);
               break;
           }
       }
   } 
}

fight("Dwight", "Andy", 20, 20);








// function getGrade (score) {
//     if (score >= 90) {
//         return `A!`;
//     } else if (score >= 80) {
//         return `B`;
//     } else if (score >= 70) {
//         return `C`;
//     } else if (score >= 60) {
//         return `D`;
//     } else {
//         return `F!`;
//     }
// }

// console.log(getGrade(70))






// function prioritize(urgent, important) {
//     if (urgent && important) {
//         return `priority 1`;
//     } else if (important) {
//         return `priority 2`;
//     } else if (urgent) {
//         return `priority 3`;
//     } else {
//         return `priority 4`;
//     }
// }

// console.log( prioritize(false, true) );







// const shape = "##########";

// function printSquare (width) {
//     if (width > 10) {
//         console.log(`nope try again`);
//     } else {
//         for (let i = width; i > 0; i--) {
//         printRow(width);
//         } 
//     }
// }

// function printRow (width) {
//     console.log(shape.substring(10-width));
// }

// printSquare(2);






