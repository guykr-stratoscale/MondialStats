import React from 'react'
import { CDNFlagIcon } from 'react-flag-kit'
import cn from 'classnames'

export default function Team({ team, className, tiny = true, showName = true }) {
  return (
    <div className={cn('team', className, { tiny, 'no-name': !showName })}>
      <span className="flag">
        <CDNFlagIcon code={team.code} size={tiny ? 16 : 50} />
      </span>
      {showName && <span className="name">{team.name}</span>}
    </div>
  )
}
