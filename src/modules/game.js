class Game {
  async startGame(name) {
    this.response = await fetch('https://leaderboard-api-tqaq.onrender.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    return this.response.json();
  }

  async addScore({ gameId, user, score }) {
    this.myData = await fetch('https://leaderboard-api-tqaq.onrender.com/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gameId, user, score }),
    });
    return this.myData;
  }

  async getLeaderBoard() {
    this.response = await fetch('https://leaderboard-api-tqaq.onrender.com/scores');
    return this.response.json();
  }
}

export default Game;