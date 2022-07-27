// NOTES FOR PROGRAMMER: 
// Edit makeMove function so that the game ends when the player hits 'cancelled' button... 
// Edit game() function so that the loops breaks if the cpu or player hits 3 points before the 5 rounds are over... 


// GAME INSTRUCTIONS: 
// The game is set up to play through the console for now. Call the function game() in your console and follow the prompts. 
// The console will report the winners of each round and the overall winner at the end.


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

//Below is the function for the player input and cpu input. The variable humanRound will determine if the human player won or lost the round. 

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
    } else {
        return humanRound = false;
    };
}


//Below is a function that will play 5 rounds of the game, and determine the overall winner at the end. 
//Commenting out the function for 5 rounds while the UI is built. 

/* function game() {
    let humanScore = 0;

   for (var i = 0; i < 5; i++) {
    let round = makeMove(prompt('We\'re playing 5 rounds of rock, paper, scissor. Make your move! Rock, paper or scissor?'), cpuPlays());

    if (round === true) {
        console.log('Human wins round!' + ' ' + 'Your score:' + ' ' + ++humanScore);
    } else {
        console.log('CPU wins round!');
    }
    };

    if (humanScore >= 3) {
        console.log('Human wins game!!!');
    } else {
        console.log('CPU beats human!!');
    };
} */ 

