import React, { Component } from 'react'
import { GamesContext } from '../context'
import Games from '../components/games'

class GamesPage extends Component {
  _selectGame = selected_game => {
    selected_game !== this.state.selected_game
      ? this.setState({ selected_game })
      : this.setState({ selected_game: null })
  }

  state = {
    selected_game: null,
    selectGame: this._selectGame,
  }

  render() {
    return (
      <GamesContext.Provider value={this.state}>
        <h2>משחקים</h2>
        <Games />
      </GamesContext.Provider>
    )
  }
}

export default GamesPage
