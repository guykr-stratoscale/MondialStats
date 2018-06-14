import React, { Component, Fragment } from 'react'
import Team from './team'
import { withContext } from '../context'
import { Card, Popover } from 'antd'
import cn from 'classnames'
import GameBets from './game-bets'

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
          selected: game.id === selected_game,
        })}
        onClick={selectGame.bind(null, game.id)}>
        <Popover
          content={<GameBets game={game} />}
          title="הימורים"
          trigger="click"
          visible={game.id === selected_game}>
          <Card title={this._title()} style={{ width: 300 }}>
            <p className="score">
              {game.team_a_score} : {game.team_b_score}
            </p>
          </Card>
        </Popover>
      </div>
    )
  }
}

export default withContext('teams', 'selected_game', 'selectGame')(Game)
