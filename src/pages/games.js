import React, { Component, Fragment } from 'react'
import { withContext } from '../context'
import Games from '../components/games'

class GamesPage extends Component {
  render() {
    return (
      <Fragment>
        <h2>משחקים</h2>
        <Games />
      </Fragment>
    )
  }
}

export default withContext('players', 'games')(GamesPage)
