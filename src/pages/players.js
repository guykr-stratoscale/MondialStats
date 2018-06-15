import React, { Component, Fragment } from 'react'
import { withContext } from '../context'
import PlayerStandings from '../components/players-standings'

class PlayersPage extends Component {
  render() {
    return (
      <Fragment>
        <h2>המהמרים</h2>
        <PlayerStandings />
      </Fragment>
    )
  }
}

export default withContext('players', 'games')(PlayersPage)
