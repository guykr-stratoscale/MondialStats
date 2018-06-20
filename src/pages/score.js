import React, { Component, Fragment } from 'react'
import { withContext } from '../context'
import PlayerStandings from '../components/players-standings'
import PointsHistory from '../components/points-history'
import { Icon } from 'antd'
import { GameScore } from '../components/game'
import cn from 'classnames'

class ScorePage extends Component {
  isLast = () => {
    const { getScoredGames, replay_game_id } = this.props
    return replay_game_id === null || replay_game_id >= getScoredGames(true).last().id
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const { getScoredGames, replayBack, replayForward, replay_game_id, getActiveGame } = this.props

    const games = getScoredGames()
    if (!games.size) {
      return null
    }

    const lastScoredGame = getScoredGames().last()

    return (
      <Fragment>
        <div className="score-header">
          <span className="nav-links">
            <span
              className={cn('nav-link', {
                disabled: replay_game_id === 0,
              })}>
              <Icon type="caret-left" onClick={replayBack} />
            </span>
            <GameScore game={lastScoredGame} />
            <span
              className={cn('nav-link', {
                disabled: this.isLast(),
              })}>
              <Icon type="caret-right" onClick={replayForward} />
            </span>
          </span>
          <h2>
            הדירוג
            {getActiveGame() &&
              lastScoredGame.id === getActiveGame().id && (
                <span className="disclaimer">
                  <span className="label">תוצאה לא סופית</span>
                </span>
              )}
          </h2>
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
  'getScoredGames',
  'replay_game_id',
  'replayBack',
  'replayForward',
  'getActiveGame',
)(ScorePage)
