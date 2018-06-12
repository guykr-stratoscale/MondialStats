import React from 'react'
import ReactDOM from 'react-dom'
import Team from './models/team'
import Game from './models/game'
import Player from './models/player'
import Round from './models/round'
import Teams from './components/teams'
import Games from './components/games'
import AppContext from './context'
import './styles.css'

const players = Player.create({
  name: 'guy',
  bets: [
    {
      round: 0,
      team_a_score: 1,
      team_b_score: 2,
      answers: ['Messi'],
    },
  ],
})
console.log(players)

class App extends React.Component {
  state = {
    teams: Team.init(),
    games: Game.init(),
    round: Round.create({
      game: 1,
      questions: ['Highest score?'],
      answers: ['Messi'],
    }),
  }

  updateGame = () => {
    const { games } = this.state
    const game = Object.values(games)[0]
    game.team_a_score = 1
    game.team_b_score = 2

    this.setState({
      games,
    })
  }
  render() {
    const { round } = this.state
    console.log('round', round)

    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <button onClick={this.updateGame}>update</button>
          <Teams />
          <Games />
        </div>
      </AppContext.Provider>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
