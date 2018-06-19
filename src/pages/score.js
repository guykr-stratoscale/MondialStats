import React, { Component, Fragment } from 'react'
import { withContext } from '../context'
import PlayerStandings from '../components/players-standings'
import PointsHistory from '../components/points-history'
import { Switch } from 'antd'
import { GameScore } from '../components/game'

function ActiveToggle({ games, value, onToggle }) {
  const activeGame = games.find(g => g.status === 'IN_PLAY')
  if (!activeGame) {
    return null
  }

  return (
    <div className="active-toggle">
      <Switch checked={value} onChange={onToggle} />
      <span>
        <GameScore game={activeGame} />
      </span>
    </div>
  )
}

class ScorePage extends Component {
  render() {
    const { games, toggleActiveResults, include_active_game_results } = this.props
    const activeGame = games.find(g => g.status === 'IN_PLAY')
    return (
      <Fragment>
        <ActiveToggle
          games={games}
          onToggle={toggleActiveResults}
          value={include_active_game_results}
        />
        <h2> המצב כרגע{include_active_game_results && activeGame && <span className="disclaimer">תוצאה לא סופית</span>}</h2>
        <div className="player-standings-wrapper">
          <PlayerStandings />
        </div>
        <h2>היסטורית הניקוד</h2>
        <PointsHistory />
      </Fragment>
    )
  }
}

export default withContext(
  'players',
  'games',
  'include_active_game_results',
  'toggleActiveResults',
)(ScorePage)
