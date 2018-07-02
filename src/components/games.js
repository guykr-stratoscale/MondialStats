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
            games.findLast(g => g.status === 'IN_PLAY') ||
            games.findLast(g => g.status === 'FINISHED')

    if (game) {
      scrollToComponent(this.game_refs[game.id], { duration: 10 })
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
