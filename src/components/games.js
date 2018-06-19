import React, { Component } from 'react'
import Game from './game'
import { withContext } from '../context'
import { List } from 'immutable'
import scrollToComponent from 'react-scroll-to-component'

class Games extends Component {
  constructor(props) {
    super(props)
    this.game_refs = {}
  }

  componentDidMount() {
    const { games = List() } = this.props
    const game =
      games.find(g => g.status === 'IN_PLAY') || games.find(g => g.date.toDate() > new Date())
    if (game) {
      scrollToComponent(this.game_refs[game.id])
    }
  }

  _gameRef = (game_id, game) => {
    this.game_refs[game_id] = game
  }

  render() {
    const { games = List() } = this.props
    return (
      <div className="games">
        {games.map(game => (
          <Game ref={this._gameRef.bind(null, game.id)} key={game.id} game={game} />
        ))}
      </div>
    )
  }
}

export default withContext('games')(Games)
