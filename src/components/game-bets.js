import React, { Fragment } from 'react'
import { withContext } from '../context'
import { Card, Icon } from 'antd'
import Team from './team'
import Bet from './bet'

/**
 * @return {null}
 */
function BetType({ bet }) {
  const total_goals = bet.team_a_score + bet.team_b_score
  if (total_goals < 2) {
    return <Icon type="meh" />
  }
  if (total_goals > 3) {
    const stars = Math.min(3, total_goals - 3)
    const range = [...Array(stars).keys()]
    return <Fragment>{range.map(i => <Icon key={i} type="star" />)}</Fragment>
  }
  return null
}

function BetsCard({ bets, players, team }) {
  if (!bets.size) {
    return null
  }

  const title = team ? <Team team={team} /> : <Fragment><Icon type="arrow-right"/><Icon type="arrow-left"/></Fragment>

  return (
    <Card
      title={
        <Fragment>
          {title} ({bets.size})
        </Fragment>
      }
      className="bets-card">
      <div className="bets">
        {bets
          .sortBy(bet => bet.team_a_score + bet.team_b_score)
          .reverse()
          .map((bet, i) => {
            const player = players.get(bet.player)
            return (
              <div className="bet-wrapper" key={i}>
                <span className="player-name">
                  {player.name} <BetType bet={bet} />
                </span>
                <Bet bet={bet} showTeams={false} decorate />
              </div>
            )
          })}
      </div>
    </Card>
  )
}

function GameBets({ game, players, teams }) {
  const bets = players.map(p => p.bets.get(game.id))
  const team_a_bets = bets.filter(bet => bet.team_a_score > bet.team_b_score)
  const team_b_bets = bets.filter(bet => bet.team_a_score < bet.team_b_score)
  const draw_bets = bets.filter(bet => bet.team_a_score === bet.team_b_score)

  return (
    <div className="game-bets">
      <BetsCard team={teams.get(game.team_a)} bets={team_a_bets} players={players} />
      <BetsCard bets={draw_bets} players={players} />
      <BetsCard team={teams.get(game.team_b)} bets={team_b_bets} players={players} />
    </div>
  )
}

export default withContext('players', 'teams')(GameBets)
