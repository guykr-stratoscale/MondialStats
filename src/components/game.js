import React from 'react'

export default function Game({ game }) {
  return (
    <div className="game">
      <span className="name">
        {game.team_a} ({game.team_a_score}/{game.team_a_factor}) vs ({game.team_b_score}/{
          game.team_b_factor
        }) {game.team_b}
      </span>
    </div>
  )
}
