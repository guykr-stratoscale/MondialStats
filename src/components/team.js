import React from 'react'
import { CDNFlagIcon } from 'react-flag-kit'

export default function Team({ team }) {
  return (
    <div className="team">
      <CDNFlagIcon code={team.code} size={16} className="flag" />
      <span className="name">{team.name}</span>
    </div>
  )
}
