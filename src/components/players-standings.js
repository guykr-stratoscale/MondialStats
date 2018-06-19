import React from 'react'
import { withContext } from '../context'
import PlayerStanding from './player-standing'

function PlayerStandings({ players, getScoredGames }) {
  const playedGames = getScoredGames()
  const lastPlayedGames = playedGames.butLast()
  const lastStandings = players.sortBy(p => p.score(lastPlayedGames)).reverse()

  if (!playedGames.size) {
    return null
  }

  return (
    <ol className="player-standings">
      {players
        .sortBy(p => p.score(playedGames))
        .reverse()
        .map((p, i) => {
          const score = p.score(playedGames)
          const lastScore = p.score(lastPlayedGames)
          const standingChange = lastStandings.indexOf(p) - i

          return (
            <PlayerStanding
              key={p.id}
              player={p}
              score={score}
              lastScore={lastScore}
              standing={i + 1}
              standingChange={standingChange}
              isGoalsSuccess={p.isGoalsSuccess(playedGames.last())}
              isBonusSuccess={p.isBonusSuccess(playedGames.last())}
            />
          )
        })}
    </ol>
  )
}

export default withContext('players', 'getScoredGames')(PlayerStandings)
