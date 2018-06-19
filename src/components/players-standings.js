import React from 'react'
import { withContext } from '../context'
import PlayerStanding from './player-standing'

function PlayerStandings({ players, games, include_active_game_results }) {
  const playedGames = games.filter(
    g => g.wasPlayed() || (include_active_game_results && g.isPlaying()),
  )
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
          const lastBetSuccess = score > p.score(lastPlayedGames)
          const standingChange = lastStandings.indexOf(p) - i
          return (
            <PlayerStanding
              key={p.id}
              player={p}
              score={score}
              success={lastBetSuccess}
              standingChange={standingChange}
              isGoalsSuccess={p.isGoalsSuccess(playedGames.last())}
              isBonusSuccess={p.isBonusSuccess(playedGames.last())}
            />
          )
        })}
    </ol>
  )
}

export default withContext('players', 'games', 'include_active_game_results')(PlayerStandings)
