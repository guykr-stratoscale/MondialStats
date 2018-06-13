import React from 'react'
import ReactDOM from 'react-dom'
import { initTeams } from './models/team'
import { initGames } from './models/game'
import { initPlayers } from './models/player'
import Teams from './components/teams'
import Games from './components/games'
import Players from './components/players'
import AppContext from './context'
import './styles.css'

// console.log('teams', initTeams()[0].toJS())

class App extends React.Component {
  state = {
    teams: initTeams(),
    games: initGames(),
    players: initPlayers(),
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
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <button onClick={this.updateGame}>update</button>
          <Players />
          <Teams />
          <Games />
        </div>
      </AppContext.Provider>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
