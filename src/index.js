import './style.css';
import Game from './modules/game';
import Display from './modules/display.js';

const refreshBtn = document.querySelector('.refreshBtn');
const scoreForm = document.querySelector('.score-form');
const nameInput = document.querySelector('#name-input');
const scoreInput = document.querySelector('#score-input');
const game = new Game();
const display = new Display();
let gameId;

if (module.hot) {
  module.hot.accept();
}

const getLeaderBoard = () => {
  game.getLeaderBoard()
    .then((res) => {
      display.renderToPage(res); // Render the full response array
    });
};

const startGame = () => {
  game
    .startGame('pes2025') // Ensure correct name for the game
    .then((response) => {
      gameId = response.id; // Use the correct property from the response
      getLeaderBoard(); // Fetch leaderboard after starting the game
    });
};

// const getLeaderBoard = () => {
//   game.getLeaderBoard()
//     .then((res) => {
//       display.renderToPage(res); // Render the full response array
//     });
// };

const addScore = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const score = {
    gameId, // Use the correct gameId
    user: nameInput.value,
    score: parseInt(scoreInput.value, 10), // Ensure score is a number
  };

  game.addScore(score)
    .then(() => {
      display.cleanPageInputs(); // Clear inputs after submission
      getLeaderBoard(); // Refresh leaderboard after adding score
    });
};

document.addEventListener('DOMContentLoaded', startGame);
scoreForm.addEventListener('submit', addScore);
refreshBtn.addEventListener('click', getLeaderBoard);