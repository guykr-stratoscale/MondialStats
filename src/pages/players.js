import React, { Component, Fragment } from 'react'
import { withContext } from '../context'
import PlayerStandings from '../components/players-standings'
import PointsHistory from '../components/points-history'

class PlayersPage extends Component {
  render() {
    return (
      <Fragment>
        <h2>המהמרים</h2>
        <PlayerStandings />
        <h2>היסטורית הניקוד</h2>
        <PointsHistory />
      </Fragment>
    )
  }
}

export default withContext('players', 'games')(PlayersPage)
