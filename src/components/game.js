import React from 'react'

export default function Game({ game }) {
  return (
    <div className="game">
      <span className="name">
        {game.team_a_score} : {game.team_b_score}
      </span>
    </div>
  )
}
