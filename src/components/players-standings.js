import React from 'react'
import { withContext } from '../context'
import PlayerStanding from './player-standing'

function PlayerStandings({ players, games }) {
  const playedGames = games.filter(g => g.wasPlayed())

  return (
    <div className="player-standing">
      {players
        .sortBy(p => p.score(playedGames))
        .reverse()
        .map(p => {
          const score = p.score(playedGames)
          const lastBetSuccess = score > p.score(playedGames.butLast())

          return <PlayerStanding key={p.id} player={p} score={score} success={lastBetSuccess} isGoalsSuccess={p.isGoalsSuccess(playedGames.last())} />
        })}
    </div>
  )
}

export default withContext('players', 'games')(PlayerStandings)
