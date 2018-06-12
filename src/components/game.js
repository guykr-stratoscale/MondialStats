import React from 'react'

export default function Game({ game }) {
  return (
    <div className="game">
      {game.id}{' '}
      <span className="name">
        {game.team_a} ({game.team_a_score}) vs ({game.team_b_score}) {game.team_b}
      </span>
    </div>
  )
}
