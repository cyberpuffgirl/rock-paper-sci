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

// Below is the function for the player input, and what the results will be once calculated with the cpu input. 

function makeMove(playerTurn, cpuTurn) {

    if (playerTurn === 'rock' && cpuTurn === 'paper' || playerTurn === 'paper' && cpuTurn === 'scissor' || playerTurn === 'scissor' && cpuTurn === 'rock') {
        return console.log('You lose!');
    } else {
        return console.log('You win!');
    }
}

// Below is a loop so there can be 5 rounds of the game. 

function game() {
    for (var i = 0; i < 5; i++) {
        makeMove(prompt('Make your move! Rock, paper or scissor?'), cpuPlays()); 
    }
}