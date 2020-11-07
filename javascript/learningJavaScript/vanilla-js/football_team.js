let team = {
  _players: [
    { firstName: 'Pablo', lastName: 'Sanchez', age: 11, },
    { firstName: 'Pedro', lastName: 'Sanchez', age: 12, },
    { firstName: 'Huram', lastName: 'Nunez', age: 11, },
  ],
  _games: [
    { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27, },
    { opponent: 'Vasco', teamPoints: 12, opponentPoints: 37, },
    { opponent: 'Fortaz', teamPoints: 41, opponentPoints: 40, },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    this._players.push({firstName, lastName, age});
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({opponent, teamPoints, opponentPoints});
  }
}


