import React, { Fragment, Component } from 'react'
import cn from 'classnames'
import { Icon } from 'antd'
import { playerColor } from '../data/players'

function StandingChange({ value }) {
  return (
    <span className={cn('standing-change', { up: value > 0, down: value < 0 })}>
      {value !== 0 && (
        <Fragment>
          <Icon type={value > 0 ? 'arrow-up' : 'arrow-down'} /> {Math.abs(value)}
        </Fragment>
      )}
    </span>
  )
}
class PlayerStanding extends Component {
  render() {
    const {
      player,
      standingChange,
      standing,
      score = null,
      lastScore = null,
      isGoalsSuccess = false,
      isBonusSuccess = false,
    } = this.props

    const success = score > lastScore
    return (
      <li className={cn('player-standing', { success })} key={player.id}>
        <span>{standing}.</span>
        <span className="ball" style={{ background: playerColor(player.id) }} />
        <span className={cn('name')}>{player.name}</span>
        <StandingChange value={standingChange} />
        {score !== null && (
          <span className="score">
            {score.toFixed(1)}{' '}
            {success && <span className="score-change"> + {(score - lastScore).toFixed(1)}</span>}
          </span>
        )}
        <span className="icons">
          {isGoalsSuccess && (
            <span role="img" aria-label="goal-success" className="anticon unicode-icon">
              ⚽
            </span>
          )}
          {isBonusSuccess && <Icon type="question-circle" />}
        </span>
      </li>
    )
  }
}

export default PlayerStanding
