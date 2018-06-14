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

  return total_goals > 4 ? <Icon type="star" /> : total_goals < 2 ? <Icon type="frown" /> : null
}

function BetsCard({ bets, players, team }) {
  if (!bets.size) {
    return null
  }

  const title = team ? <Team team={team} /> : ''

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
