import React from 'react'
import cn from 'classnames'
import { Icon } from 'antd'
function PlayerStanding({
  player,
  success = false,
  score = null,
  isGoalsSuccess = false,
  isBonusSuccess = false,
}) {
  return (
    <div className={cn('player-standing', { success })}>
      {score !== null && <span className="score">{score.toFixed(1)}</span>}
      <span className={cn('name')}>{player.name}</span>
      {isGoalsSuccess && <span style={{ verticalAlign: 'middle', marginRight: 5 }}>⚽</span>}
      {isBonusSuccess && (
        <Icon type="question-circle" style={{ verticalAlign: 'middle', marginRight: 5 }} />
      )}
    </div>
  )
}

export default PlayerStanding
