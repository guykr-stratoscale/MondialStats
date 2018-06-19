import React from 'react'
import { List } from 'immutable'
import { withContext } from '../context'
import LineChart from './line-chart'

function PointsHistory({ players = List(), getScoredGames }) {
  const playedGames = getScoredGames()
  const data = playedGames.map((game, i) => {
    const result = players.reduce((result, p) => {
      result[p.id] = p.score(playedGames.take(i + 1))
      return result
    }, {})
    return {
      ...result,
      name: `משחק ${game.id + 1}`,
    }
  })

  return <LineChart data={data.toJS()} players={players} />
}

export default withContext('players', 'getScoredGames')(PointsHistory)
