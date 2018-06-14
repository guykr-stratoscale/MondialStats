import React from 'react'
import { CDNFlagIcon } from 'react-flag-kit'
import cn from 'classnames'

export default function Team({ team, className, tiny = true }) {
  return (
    <div className={cn('team', className, { tiny })}>
      <span className="flag">
        <CDNFlagIcon code={team.code} size={tiny ? 16 : 50} />
      </span>
      <span className="name">{team.name}</span>
    </div>
  )
}
