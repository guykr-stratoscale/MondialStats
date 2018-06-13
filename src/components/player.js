import React from 'react'
import AppContext from '../context'
import Team from './team'

function Bet({ bet }) {
  return (
    <AppContext.Consumer>
      {({ games = [], teams = [] }) => {
        const game = games[bet.game]
        const team_a = teams[game.team_a]
        const team_b = teams[game.team_b]

        return (
          <div className="bet">
            <Team team={team_a} /> {bet.team_a_score}:{bet.team_b_score} <Team team={team_b} />
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default function Player({ player }) {
  return (
    <div className="player">
      <span className="name">{player.name}</span>
      <div className="bets">{player.bets.map((bet, i) => <Bet key={i} bet={bet} />)}</div>
    </div>
  )
}
