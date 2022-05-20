//Below is the function for the cpu to make its move. 

function cpuPlays() {
    const move = Math.floor(Math.random() * 3) + 1;

    if (move === 1) {
        return 'rock';
    } else if (move === 2) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

//Below is the function for the player input and cpu input. The result of the round will either return humanRound for a human win or cpuRound for a cpu win. 

function makeMove(playerTurn, cpuTurn) {
    let humanRound = true; 

    if (playerTurn === 'rock' || playerTurn === 'Rock') {
        if (cpuTurn === 'paper') {
            return humanRound = false; 
        } else {
            return humanRound;
        }
    } else if (playerTurn === 'paper' || playerTurn === 'Paper') {
        if (cpuTurn === 'scissor') {
            return humanRound = false;
        } else {
            return humanRound;
        }
    } else if (playerTurn === 'scissor' || playerTurn === 'Scissor') {
        if (cpuTurn === 'rock') {
            return humanRound = false;
        } else {
            return humanRound;
        }
    } else if (playerTurn === '' || playerTurn === null) { // Will need to edit this later to have the loop break if one of these answers is provided. 
        console.log('Cancelled');
    } else {
        return humanRound = false;
    };
}


//Below is a loop so there can be 5 rounds of the game

function game() {
    let humanScore = 0;

   for (var i = 0; i < 5; i++) {
    let round = makeMove(prompt('Make your move! Rock, paper or scissor?'), cpuPlays());

    if (round === true) {
        console.log('Human wins!' + ' ' + 'Your score:' + ' ' + ++humanScore);
    } else {
        console.log('CPU wins!');
    }
    };  
}

