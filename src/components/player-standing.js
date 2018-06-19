import React, { Fragment } from 'react'
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

function PlayerStanding({
  player,
  standingChange,
  standing,
  score = null,
  lastScore = null,
  isGoalsSuccess = false,
  isBonusSuccess = false,
}) {
  const success = score > lastScore
  return (
    <li className={cn('player-standing', { success })}>
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
          <span
            role="img"
            style={{ verticalAlign: 'middle', marginRight: 5 }}
            aria-label="goal-success">
            ⚽
          </span>
        )}
        {isBonusSuccess && (
          <Icon type="question-circle" style={{ verticalAlign: 'middle', marginRight: 5 }} />
        )}
      </span>
    </li>
  )
}

export default PlayerStanding
