import React from 'react'
import { List } from 'immutable'
import AppContext from '../context'
import cn from 'classnames'
import Bet from './bet'

/*

 */
export default function Player({ player }) {
  return (
    <AppContext.Consumer>
      {({ selectPlayer, selected_player }) => {
        return (
          <div className="player">
            <span
              className={cn('name', { selected: selected_player === player.id })}
              onClick={selectPlayer.bind(null, player.id)}>
              {player.name} ({player.champion}, {player.scorer})
            </span>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}
