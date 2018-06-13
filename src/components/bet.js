import React from 'react'
import { List } from 'immutable'
import AppContext from '../context'
import Team from './team'
import Game from './game'

export default function Bet({ bet, player }) {
  return (
    <AppContext.Consumer>
      {({ games = List(), teams = List() }) => {
        const game = games.get(bet.game)
        const team_a = teams.get(game.team_a)
        const team_b = teams.get(game.team_b)

        return (
          <div className="bet">
            <Team team={team_a} /> {bet.team_a_score}:{bet.team_b_score} <Team team={team_b} />
            <Game game={game} />
            Score = {player.gameScore(game, bet)}
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}
