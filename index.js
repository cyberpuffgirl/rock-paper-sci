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

//Below are the variables I will need to store and report scores.

let playerScore = 1;
let cpuScore = 1;
let totalScore;

//Below is the function for the player input, and what the results will be once calculated with the cpu input. 

function makeMove(playerTurn, cpuTurn) {
    let lose = 'Round lost!'
    let win = 'Round won!'

    if (playerTurn === 'rock' || playerTurn === 'Rock') {
        if (cpuTurn === 'paper') {
            console.log(lose);
            return console.log('CPU points:' + ' ' + cpuScore++);
        } else {
            console.log(win);
            return console.log('Human points:' + ' ' + playerScore++);
        }
    } else if (playerTurn === 'paper' || playerTurn === 'Paper') {
        if (cpuTurn === 'scissor') {
            console.log(lose);
            return console.log('CPU points:' + ' ' + cpuScore++);
        } else {
            console.log(win);
            return console.log('Human points:' + ' ' + playerScore++);
        }
    } else if (playerTurn === 'scissor' || playerTurn === 'Scissor') {
        if (cpuTurn === 'rock') {
            console.log(lose);
            return console.log('CPU points:' + ' ' + cpuScore++);
        } else {
            console.log(win);
            return console.log('Human points:' + ' ' + playerScore++);
        }
    } else if (playerTurn === '' || playerTurn === null) { // Will need to edit this later to have the loop break if one of these answers is provided. 
        console.log('Cancelled');
    } else {
        console.log('That is not a valid answer, but it still counts as a move. Round lost. )-:')
        return console.log('CPU points:' + ' ' + cpuScore++);
    };
    return totalScore;
}

//Below is a loop so there can be 5 rounds of the game

function game() {
    for (var i = 0; i < 5; i++) {
        makeMove(prompt('Make your move! Rock, paper or scissor?'), cpuPlays()); 
    };  
}