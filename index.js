//Create function for the cpu to make a move

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

// Create function for the game with the parameters for player turn and cpu turn

function gameOne(playerTurn, cpuTurn) {
    let result = 'You win!!'

    if (playerTurn === 'rock' && cpuTurn === 'paper' || playerTurn === 'paper' && cpuTurn === 'scissor' || playerTurn === 'scissor' && cpuTurn === 'rock') {
        return console.log('You lose!');
    } else {
        return result;
    }
}

//Make default variables for rock, paper scissor 
// Create conditions for each variables that will output a win/lose string message depending on the move made