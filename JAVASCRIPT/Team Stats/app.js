const team = {
  _players: [
    {
      firstName: 'Dave',
      lastName: 'Smith',
      age: 32,
    },
    {
      firstName: 'Alan',
      lastName: 'Car',
      age: 21,
    },
    {
      firstName: 'Jerry',
      lastName: 'Beemer',
      age: 23,
    },
  ],
  _games: [
    {
      opponent: 'Arsenal',
      teamPoints: 13,
      opponentPoints: 13,
    },
    {
      opponent: 'Liverpool',
      teamPoints: 23,
      opponentPoints: 19,
    },
    {
      opponent: 'Manchester',
      teamPoints: 32,
      opponentPoints: 12,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    team._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    team._games.push(game);
  },
};

team.addPlayer('Buggs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
