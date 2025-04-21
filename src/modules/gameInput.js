// import { v4 as uuidv4 } from 'uuid';
// import { saveTask, getTask } from './storage';

// const score = document.getElementById('score');
// const name = document.getElementById('name');
// const container = document.getElementById('container');

// const fetchGame = async () => {
//   const response = await fetch('https://leaderboard-api-tqaq.onrender.com/games', {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   });
//   const res = await response.json();
//   console.log('this is res', res[0]);
// };

// fetchGame();

// export const fetchScore = async () => {
//   const response = await fetch('https://leaderboard-api-tqaq.onrender.com/scores', {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   });
//   const res = await response.json();

//   const li = document.createElement('li');
//   const value = `
// <div>${res[0].user}:${res[0].score}</div>
// `;
//   li.innerHTML = value;
//   container.appendChild(li);
//   console.log('this is res score', res[0]);
// };

// const postData = async (data) => {
//   const response = await fetch('https://leaderboard-api-tqaq.onrender.com/scores', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },

//   });
// };

// const displayGame = () => {
//   container.innerHTML = '';
//   const task = getTask();
//   task.map((task) => {
//     console.log('task map', task);
//     const li = document.createElement('li');
//     const items = `<div>${task.name}:${task.score}</div>`;
//     li.innerHTML = items;
//     container.appendChild(li);
//     return [];
//   });
//   console.log('shim GO', task);
// };
// displayGame();
// export const myName = () => {
//   console.log('shiminyi blaise GO');
// };

// export const creatGame = () => {
//   const task = getTask();
//   const scoreValue = score.value.trim();

//   const nameValue = name.value.trim();

//   if (scoreValue && nameValue) {
//     task.push({ name: nameValue, score: scoreValue, id: uuidv4() });
//     saveTask(task);
//     name.value = '';
//     score.value = '';
//     displayGame();
//   }
// };
