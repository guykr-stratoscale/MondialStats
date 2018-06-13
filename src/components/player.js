import React from 'react'
import { List } from 'immutable'
import AppContext from '../context'
import Team from './team'
import Game from './game'

function Bet({ bet, player }) {
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

export default function Player({ player }) {
  return (
    <div className="player">
      <span className="name">
        {player.name} ({player.bets.size}) ({player.champion}, {player.scorer})
      </span>
      <div className="bets">
        {/*player.bets.map((bet, i) => <Bet key={i} bet={bet} player={player} />)*/}
      </div>
    </div>
  )
}
