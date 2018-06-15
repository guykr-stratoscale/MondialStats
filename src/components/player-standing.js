import React from 'react'
import cn from 'classnames'
import { Icon } from 'react-icons-kit'
import { iosFootball } from 'react-icons-kit/ionicons/'
import { questionCircle } from 'react-icons-kit/fa/'
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
      {isGoalsSuccess && (
        <Icon icon={iosFootball} style={{ verticalAlign: 'middle', marginRight: 5 }} />
      )}
      {isBonusSuccess && (
        <Icon icon={questionCircle} style={{ verticalAlign: 'middle', marginRight: 5 }} />
      )}
    </div>
  )
}

export default PlayerStanding
