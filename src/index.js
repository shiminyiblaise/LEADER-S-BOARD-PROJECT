import { creatGame, myName } from './modules/gameInput';

const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', () => {
  creatGame();
});

myName();