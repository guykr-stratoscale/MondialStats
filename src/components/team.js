import React from 'react'
import { CDNFlagIcon } from 'react-flag-kit'
import cn from 'classnames'

export default function Team({ team, className }) {
  return (
    <div className={cn('team', className)}>
      <CDNFlagIcon code={team.code} size={16} className="flag" />
      <span className="name">{team.name}</span>
    </div>
  )
}
