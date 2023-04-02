// VARIABLES
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');
const reset_btn = document.getElementById('reset-button');

const scoreWin_txt = document.getElementById('win-score');
const scoreTie_txt = document.getElementById('tie-score');
const scoreLose_txt = document.getElementById('lose-score');
const compChoice_txt = document.getElementById('comp-choice');
const gameResult_text = document.getElementById('game-result');

const score = JSON.parse(localStorage.getItem('score'));

let computerMove = '';
let result = '';



// ADD EVENT LISTENERS
// get parent
const button_container = document.querySelector('.buttons');

// loop through and add event listener to each child
button_container.querySelectorAll('button').forEach(button => button.addEventListener('click', e => playGame(e.target.innerText)));



// FUNCTIONS
const playGame = (input) => {
  console.clear()


  // get player move
  const playerMove = input;
  console.log(`PLAYER: ${playerMove}`);


  // get computer move
  computerMove = calculateComputerMove();
  console.log(`COMPUTER: ${computerMove}`);


  // get result
  result = calculateResult(playerMove, computerMove);
  console.log(`RESULT: ${result}`);


  // update scoreboard
  console.log(score);
};


// ASSIGN THE COMPUTERS MOVE
const calculateComputerMove = () => {
  // calculate random number between 0-2
  let randInt = Math.floor(Math.random() * 3);
  let move = '';

  // select the appropriate move
  switch (randInt) {
    case 0:
      move = 'ROCK';
      break;
    case 1:
      move = 'PAPER';
      break;
    case 2:
      move = 'SCISSORS';
  }

  return move;
};


// CALCULATE IF PLAYER WinS OR NOT
const calculateResult = (pMove, cMove) => {
  let result = '';

  // Object containing functions (methods) 
  // a method is a function within an object
  const decider = {
    ROCK: function () {
      if (cMove === 'ROCK') { return 'Tie'; };
      if (cMove === 'PAPER') { return 'Lose'; };
      return 'Win';
    },
    PAPER: function () {
      if (cMove === 'PAPER') { return 'Tie'; };
      if (cMove === 'SCISSORS') { return 'Lose'; };
      return 'Win';
    },
    SCISSORS: function () {
      if (cMove === 'SCISSORS') { return 'Tie'; };
      if (cMove === 'ROCK') { return 'Lose'; };
      return 'Win';
    }
  };

  // use player input to decide Winner
  switch (pMove) {
    case 'ROCK':
      result += decider.ROCK();
      break;

    case 'PAPER':
      result += decider.PAPER();
      break;

    case 'SCISSORS':
      result += decider.SCISSORS();
  }

  // update score before returning
  updateScore(result);

  return result;
};


// UPDATE THE SCORE
const updateScore = (result) => {
  switch (result) {
    case 'Win':
      score.win++;
      break;
    case 'Tie':
      score.tie++;
      break;
    case 'Lose':
      score.lose++;
  }

  // Update Text
  setResultText(result);
  setScoreText();
}


const setResultText = (result) => {
  compChoice_txt.innerText = computerMove;
  gameResult_text.innerText = "You " + result;

  buttonTimeout();
}


const setScoreText = () => {
  scoreWin_txt.innerText = score.win;
  scoreTie_txt.innerText = score.tie;
  scoreLose_txt.innerText = score.lose;

  localStorage.setItem('score', JSON.stringify(score));
};


const buttonTimeout = () => {
  rock_btn.classList.add('disabled');
  paper_btn.classList.add('disabled');
  scissors_btn.classList.add('disabled');

  setTimeout(() => {
    compChoice_txt.innerText = "Waiting For Player";
    gameResult_text.innerText = "";
    
    rock_btn.classList.remove('disabled');
    paper_btn.classList.remove('disabled');
    scissors_btn.classList.remove('disabled');
  }, 1000);
}


const resetScore = () => {
  score.win = 0;
  score.tie = 0;
  score.lose = 0;

  setScoreText();
};


// Add event listener
reset_btn.addEventListener('click', resetScore);


// set text
setScoreText();