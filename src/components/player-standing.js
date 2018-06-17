import React, { Fragment } from 'react'
import cn from 'classnames'
import { Icon } from 'antd'

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
  success = false,
  score = null,
  isGoalsSuccess = false,
  isBonusSuccess = false,
}) {
  return (
    <div className={cn('player-standing', { success })}>
      {score !== null && <span className="score">{score.toFixed(1)}</span>}
      <StandingChange value={standingChange} />
      <span className={cn('name')}>{player.name}</span>
      {isGoalsSuccess && <span role="img" style={{ verticalAlign: 'middle', marginRight: 5 }} aria-label="goal-success">⚽</span>}
      {isBonusSuccess && (
        <Icon type="question-circle" style={{ verticalAlign: 'middle', marginRight: 5 }} />
      )}
    </div>
  )
}

export default PlayerStanding
