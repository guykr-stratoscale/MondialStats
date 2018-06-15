import React from 'react'
import { List } from 'immutable'
import { withContext } from '../context'
import Team from './team'
import cn from 'classnames'

function Bet({ games = List(), teams = List(), bet, decorate = false, showTeams = true }) {
  const game = games.get(bet.game)
  const team_a = teams.get(game.team_a)
  const team_b = teams.get(game.team_b)

  return (
    <div className="bet">
      {showTeams && (
        <Team team={team_a} className={cn({ winner: bet.team_a_score > bet.team_b_score })} />
      )}
      <span dir="ltr">
        {bet.team_a_score} : {bet.team_b_score}
      </span>
      {showTeams && (
        <Team team={team_b} className={cn({ winner: bet.team_a_score < bet.team_b_score })} />
      )}
    </div>
  )
}

export default withContext('games', 'teams')(Bet)
