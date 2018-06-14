import React from 'react'
import { List } from 'immutable'
import AppContext from '../context'
import Team from './team'
import cn from 'classnames'

export default function Bet({ bet, player }) {
  return (
    <AppContext.Consumer>
      {({ games = List(), teams = List() }) => {
        const game = games.get(bet.game)
        const team_a = teams.get(game.team_a)
        const team_b = teams.get(game.team_b)

        return (
          <div className="bet">
            <Team team={team_a} className={cn({ winner: bet.team_a_score > bet.team_b_score })} />{' '}
            {bet.team_a_score}:{bet.team_b_score}{' '}
            <Team team={team_b} className={cn({ winner: bet.team_a_score < bet.team_b_score })} />
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}
