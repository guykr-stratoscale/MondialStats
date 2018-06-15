import React from 'react'
import cn from 'classnames'
import { Icon } from 'react-icons-kit'
import { iosFootball } from 'react-icons-kit/ionicons/'
function PlayerStanding({ player, success = false, score = null, isGoalsSuccess = false }) {
  return (
    <div className={cn('player-standing', { success })}>
      {score !== null && <span className="score">{score}</span>}
      <span className={cn('name')}>{player.name}</span>
      {isGoalsSuccess && (
        <Icon icon={iosFootball} style={{ verticalAlign: 'middle', marginRight: 5 }} />
      )}
    </div>
  )
}

export default PlayerStanding
