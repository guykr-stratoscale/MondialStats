import React, { Component, Fragment } from 'react'
import BubbleChart from '../components/bubble-chart'
import BarChart from '../components/bar-chart'
import { withContext } from '../context'
import Bet from '../components/bet'
import Players from '../components/players'

class BetsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  getPlayerBets = () => {
    const { selected_player, players } = this.props
    const player = players.get(selected_player)
    if (player) {
      return (
        <ol className="player-bets">
          {player.bets.map((bet, i) => (
            <li key={i}>
              <Bet key={i} bet={bet} player={player} />
            </li>
          ))}
        </ol>
      )
    }
  }

  getRiskChart = () => {
    const data = this.props.players
      .sortBy(p => p.name)
      .map(p =>
        p.bets.reduce(
          (result, bet) => {
            const game = this.props.games.get(bet.game)
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
    const data = this.props.players
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
    const data = this.props.players
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
      <Fragment>
        <h2 dir="rtl">המנחשים</h2>
        <span className="bets">
          <Players />
          {this.getPlayerBets()}
        </span>
        <h2 dir="rtl">ההימורים</h2>
        {this.getRiskChart()}
        <h2 dir="rtl">האלופה</h2>
        {this.getChampionChart()}
        <h2 dir="rtl">מלך השערים</h2>
        {this.getScorerChart()}
      </Fragment>
    )
  }
}

export default withContext('players', 'games', 'selected_player')(BetsPage)
