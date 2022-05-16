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
    let lose = 'You lose!'
    let win = 'You win!!'

    if (playerTurn === 'rock' || playerTurn === 'Rock') {
        if (cpuTurn === 'paper') {
            console.log(lose);
        } else {
            console.log(win);
        }
    } else if (playerTurn === 'paper' || playerTurn === 'Paper') {
        if (cpuTurn === 'scissor') {
            console.log(lose);
        } else {
            console.log(win);
        }
    } else if (playerTurn === 'scissor' || playerTurn === 'Scissor') {
        if (cpuTurn === 'rock') {
            console.log(lose);
        } else {
            console.log(win);
        }
    } else if (playerTurn === '' || playerTurn === null) {
        alert('cancelled');
    } else {
        console.log('That is not a valid option');
    }
}

// Below is a loop so there can be 5 rounds of the game. 

function game() {
    for (var i = 0; i < 5; i++) {
        makeMove(prompt('Make your move! Rock, paper or scissor?'), cpuPlays()); 
    }
}