import { Component } from 'react'
import { withContext } from './context'
import API from './api'

let _interval_id = null

class Poller extends Component {
  _doPolling = () => {
    console.log('poller.js@_doPolling: ')
    API.getGames().then(data => {
      console.log('poller.js@got data: ', data)
      this.props.updateGames(data.fixtures)

      API.getAnswers().then(data => {
        console.log('poller.js@got answers: ', data)
        this.props.updatePlayerAnswers(data)
      })
    })

  }

  _startPolling() {
    this._doPolling()
    _interval_id = setInterval(this._doPolling, 60 * 1000 * 5)
  }

  _stopPolling() {
    if (_interval_id !== null) {
      clearInterval(_interval_id)
      _interval_id = null
    }
  }

  componentDidMount() {
    this._startPolling()
  }

  componentWillUnmount() {
    this._stopPolling()
  }

  render() {
    return null
  }
}

export default withContext('updateGames', 'updatePlayerAnswers')(Poller)
