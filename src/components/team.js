import React from 'react'
import { CDNFlagIcon } from 'react-flag-kit'

export default function TeamComponent({ team }) {
  return (
    <div>
      <CDNFlagIcon code={team.code} size={16} />
      <span className="name">{team.name}</span>
    </div>
  )
}
