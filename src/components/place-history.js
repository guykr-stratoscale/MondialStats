import React from 'react'
import { List } from 'immutable'
import { withContext } from '../context'
import LineChart from './line-chart'

function PlaceHistory({ players = List(), games = List() }) {
  const playedGames = games.filter(g => g.wasPlayed())
  const data = playedGames.map((game, i) => {
    const sortedPlayers = players.sortBy(p => p.score(playedGames.take(i + 1)))

    const result = players.reduce((result, p) => {
      result[p.id] =  sortedPlayers.indexOf(p)
      return result
    }, {})
    return {
      ...result,
      name: `משחק ${game.id + 1}`,
    }
  })

  return <LineChart data={data.toJS()} players={players} />
}

export default withContext('players', 'games')(PlaceHistory)
