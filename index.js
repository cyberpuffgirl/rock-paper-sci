// NOTES FOR PROGRAMMER: 
// Edit makeMove function so that the game ends when the player hits 'cancelled' button... 
// Edit game() function so that the loops breaks if the cpu or player hits 3 points before the 5 rounds are over... 


// GAME INSTRUCTIONS: 
// The game is set up to play through the console for now. Call the function game() in your console and follow the prompts. 
// The console will report the winners of each round and the overall winner at the end.

const selections = document.querySelectorAll("button");

// below the for each function will look thru the node list of buttons in order to run the event listener on whichever was clicked. 

selections.forEach(function (button) {
    button.addEventListener("click", cpuPlays);
}) 

// const tie = 'tie!'
// const win = 'Human wins!'
// const lose = 'Human loses!'

function cpuPlays() {
    const move = Math.floor(Math.random() * 3) + 1;

    if (move === 1) {
        return alert('rock');
    } else if (move === 2) {
        return alert('paper');
    } else {
        return alert('scissor');
    }
}