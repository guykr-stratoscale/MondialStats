import React, { Component, Fragment } from 'react'
import { withContext } from '../context'
import PlayerStandings from '../components/players-standings'
import PointsHistory from '../components/points-history'
import { Switch, Icon } from 'antd'
import { GameScore } from '../components/game'
import cn from 'classnames'

function ActiveToggle({ activeGame, value, onToggle, games, replayGameId }) {
  if (!activeGame) {
    return <span className="active-toggle" />
  }

  return (
    <div className="active-toggle">
      <Switch checked={value} onChange={onToggle} />
      {value &&
        !(replayGameId !== null && replayGameId !== activeGame.id) && (
          <span className="disclaimer">תוצאה לא סופית</span>
        )}
    </div>
  )
}

class ScorePage extends Component {
  render() {
    const {
      getScoredGames,
      toggleActiveResults,
      include_active_game_results,
      replayBack,
      replayForward,
      replay_game_id,
      getActiveGame,
    } = this.props

    const games = getScoredGames()

    if (!games.size) {
      return null
    }
    const activeGame = getScoredGames().last()
    return (
      <Fragment>
        <div className="score-header">
          <ActiveToggle
            onToggle={toggleActiveResults}
            value={include_active_game_results}
            activeGame={getActiveGame()}
            games={getScoredGames()}
            replayGameId={replay_game_id}
          />
          <span className="nav-links">
            <span
              className={cn('nav-link', {
                disabled: replay_game_id === 0,
              })}>
              <Icon type="caret-left" onClick={replayBack} />
            </span>
            <GameScore game={activeGame} />
            <span
              className={cn('nav-link', {
                disabled:
                  replay_game_id === null || replay_game_id >= getScoredGames(true).last().id,
              })}>
              <Icon type="caret-right" onClick={replayForward} />
            </span>
          </span>
          <h2>הדירוג</h2>
        </div>
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
  'getScoredGames',
  'replay_game_id',
  'replayBack',
  'replayForward',
  'getActiveGame',
)(ScorePage)
