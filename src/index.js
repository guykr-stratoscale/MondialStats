import React from 'react'
import ReactDOM from 'react-dom'
import { initTeams } from './models/team'
import { initGames } from './models/game'
import { initPlayers } from './models/player'
import Players from './components/players'
import Bet from './components/bet'
import AppContext from './context'
import BubbleChart from './components/bubble-chart'
import BarChart from './components/bar-chart'
import './styles.css'

class App extends React.Component {
  _selectPlayer = selected_player => {
    selected_player !== this.state.selected_player
      ? this.setState({ selected_player })
      : this.setState({ selected_player: null })
  }

  state = {
    teams: initTeams(),
    games: initGames(),
    players: initPlayers(),
    selected_player: null,
    selectPlayer: this._selectPlayer,
  }

  getPlayerBets = () => {
    const { selected_player, players } = this.state
    const player = players.get(selected_player)
    if (player) {
      return player.bets.map(bet => <Bet bet={bet} player={player} />)
    }
  }

  getRiskChart = () => {
    const data = this.state.players
      .sortBy(p => p.name)
      .map(p =>
        p.bets.reduce(
          (result, bet) => {
            const game = this.state.games.get(bet.game)
            result.risk += Math.round(p.betRisk(bet, game))
            result.goals += bet.team_a_score + bet.team_b_score
            return result
          },
          { risk: 0, goals: 0, name: p.name, id: p.id },
        ),
      )
      .toJS()
    return <BubbleChart data={data} />
  }

  getChampionChart = () => {
    const data = this.state.players
      .groupBy(p => p.champion)
      .entrySeq()
      .map(([key, val]) => ({
        name: key,
        value: val.size,
        who: val.map(p => p.name).join(', '),
      }))

    return <BarChart data={data.toJS()} />
  }
  getScorerChart = () => {
    const data = this.state.players
      .groupBy(p => p.scorer)
      .entrySeq()
      .map(([key, val]) => ({
        name: key,
        value: val.size,
        who: val.map(p => p.name).join(', '),
      }))

    return <BarChart data={data.toJS()} fill="#82ca9d" />
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <h2 dir="rtl">המהמרים</h2>
          <Players />
          <React.Fragment>{this.getPlayerBets()}</React.Fragment>
          <h2 dir="rtl">ההימורים</h2>
          {this.getRiskChart()}
          <h2 dir="rtl">האלופה</h2>
          {this.getChampionChart()}
          <h2 dir="rtl">מלך השערים</h2>
          {this.getScorerChart()}
        </div>
      </AppContext.Provider>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
