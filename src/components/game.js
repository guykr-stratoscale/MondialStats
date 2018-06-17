import React, { Component, Fragment } from 'react'
import Team from './team'
import { withContext, gamesContext } from '../context'
import { Card, Popover } from 'antd'
import cn from 'classnames'
import GameBets from './game-bets'
import { isMobile } from 'react-device-detect'

function GameOdds({ game }) {
  const total = game.draw_factor + game.team_a_factor + game.team_b_factor

  return (
    <div className="game-odds">
      <span
        className="team-b-odds"
        style={{
          width: `${(game.team_b_factor / total) * 100}%`,
          left: 0,
        }}
      />
      <span
        className="draw-odds"
        style={{
          width: `${(game.draw_factor / total) * 100}%`,
          left: `${(game.team_b_factor / total) * 100}%`,
        }}
      />
      <span
        className="team-a-odds"
        style={{
          width: `${(game.team_a_factor / total) * 100}%`,
          left: `${((game.team_b_factor + game.draw_factor) / total) * 100}%`,
        }}
      />
    </div>
  )
}

class Game extends Component {
  _title() {
    const { game, teams } = this.props
    return (
      <Fragment>
        <div>{game.date.format('DD/MM/YY HH:mm')}</div>
        <Team
          team={teams.get(game.team_a)}
          tiny={false}
          className={cn({ winner: game.getWinner() === game.team_a })}
        />
        <span className="vs"> VS </span>
        <Team
          team={teams.get(game.team_b)}
          tiny={false}
          className={cn({ winner: game.getWinner() === game.team_b })}
        />
      </Fragment>
    )
  }

  render() {
    const { game, selected_game, selectGame } = this.props

    return (
      <div
        className={cn('game', {
          'was-played': game.wasPlayed(),
          'is-playing': game.isPlaying(),
          selected: game.id === selected_game,
          hidden: selected_game !== null && game.id !== selected_game,
        })}
        onClick={selectGame.bind(null, game.id)}>
        <Popover
          content={<GameBets game={game} />}
          title="הימורים"
          trigger="click"
          overlayClassName={isMobile ? 'mobile' : ''}
          visible={game.id === selected_game}>
          <Card title={this._title()} style={{ width: isMobile ? '100%' : 300 }}>
            <GameOdds game={game} />
            <p className="score">
              {game.team_a_score} : {game.team_b_score}
            </p>
          </Card>
        </Popover>
      </div>
    )
  }
}

export default withContext('teams')(gamesContext('selected_game', 'selectGame')(Game))
