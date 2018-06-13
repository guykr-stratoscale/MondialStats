import React from 'react'
import ReactDOM from 'react-dom'
import { initTeams } from './models/team'
import { initGames } from './models/game'
import { initPlayers } from './models/player'
// import Teams from './components/teams'
// import Games from './components/games'
import Players from './components/players'
import Bet from './components/bet'
import AppContext from './context'
import './styles.css'

class App extends React.Component {
  state = {
    teams: initTeams(),
    games: initGames(),
    players: initPlayers(),
    selected_player: null,
    selectPlayer: selected_player => this.setState({ selected_player }),
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

  getPlayerBets = () => {
    const { selected_player, players } = this.state
    const player = players.get(selected_player)
    player && console.log(player.toJS(), player.bets.first().toJS())
    if (player) {
      console.log(Bet)

      return player.bets.map(bet => <Bet bet={bet} player={player} />)
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <button onClick={this.updateGame}>update</button>
          <Players />
          <React.Fragment>{this.getPlayerBets()}</React.Fragment>
        </div>
      </AppContext.Provider>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
