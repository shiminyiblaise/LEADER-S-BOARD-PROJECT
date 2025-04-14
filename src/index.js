import { creatGame, myName } from './modules/gameInput';

import './style.css'
const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', () => {
  creatGame();
});

myName();