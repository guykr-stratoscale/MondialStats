import React from 'react'
import { withContext } from '../context'
import cn from 'classnames'
import { playerColor } from '../data/players'

function Player({ player, selected_player, selectPlayer }) {
  return (
    <div
      className={cn('player', { selected: selected_player === player.id })}
      onClick={selectPlayer.bind(null, player.id)}>
      <span
        className={cn('name', { selected: selected_player === player.id })}
        style={{ color: playerColor(player.id) }}>
        {player.name}
      </span>
      <span className="details">
        ({player.champion}, {player.scorer})
      </span>
    </div>
  )
}

export default withContext('selectPlayer', 'selected_player')(Player)
