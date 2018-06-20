import React from 'react'
import ReactDOM from 'react-dom'
import { initTeams } from './models/team'
import { gamesAdaptor, initGames } from './models/game'
import { initPlayers } from './models/player'
import AppContext from './context'
import BetsPage from './pages/bets'
import GamesPage from './pages/games'
import ScorePage from './pages/score'
import Poller from './poller'
import { Icon, Layout, Menu } from 'antd'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import cn from 'classnames'

import 'antd/dist/antd.css'
import './styles.css'

const { Sider, Header, Content } = Layout
const COLLAPSED_WIDTH = 80
const SCORED_STATUSES = ['FINISHED', 'IN_PLAY']

class App extends React.Component {
  _selectPlayer = selected_player => {
    selected_player !== this.state.selected_player
      ? this.setState({ selected_player })
      : this.setState({ selected_player: null })
  }

  _updateGames = data => {
    this.setState(state => ({
      games: gamesAdaptor(state.games, data),
    }))
  }

  _getScoredGames = (no_replay = false) => {
    const { games, replay_game_id } = this.state
    let result = games.filter(g => SCORED_STATUSES.includes(g.status))

    if (replay_game_id !== null && !no_replay) {
      result = result.filter(g => g.id <= replay_game_id)
    }

    return result
  }

  _setReplayGame = (game_id = null) => {
    this.setState(state => ({ replay_game_id: game_id }))
  }

  _replayBack = () => {
    let { replay_game_id } = this.state
    if (replay_game_id === null) {
      replay_game_id = this._getScoredGames().last().id
    }
    this._setReplayGame(Math.max(replay_game_id - 1, 0))
  }

  _replayForward = () => {
    let { replay_game_id } = this.state
    if (replay_game_id === null) {
      replay_game_id = this._getScoredGames().last().id
    }
    const replay_id = Math.min(replay_game_id + 1, this._getScoredGames(true).size - 1)
    this._setReplayGame(replay_id === this._getScoredGames(true).size - 1 ? null : replay_id)
  }

  _getActiveGame = () => {
    const { games } = this.state
    return games.find(g => g.status === 'IN_PLAY')
  }

  state = {
    sidebar_collapsed: false,
    teams: initTeams(),
    games: initGames(),
    players: initPlayers(),
    selected_player: null,
    selected_game: null,
    replay_game_id: null,

    getScoredGames: this._getScoredGames,
    selectPlayer: this._selectPlayer,
    updateGames: this._updateGames,
    setReplayGame: this._setReplayGame,
    replayBack: this._replayBack,
    replayForward: this._replayForward,
    getActiveGame: this._getActiveGame,
  }

  onCollapse = () => {
    this.setState(state => ({
      sidebar_collapsed: !state.sidebar_collapsed,
    }))
  }

  getMenu() {
    const MenuWrapper = isMobile ? Header : Sider
    const wrapperStyle = isMobile
      ? { position: 'fixed', zIndex: 1, width: '100%' }
      : { overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }

    const wrapperProps = isMobile
      ? {}
      : {
          collapsible: true,
          collapsed: this.state.sidebar_collapsed,
          collapsedWidth: COLLAPSED_WIDTH,
          onCollapse: this.onCollapse,
        }

    return (
      <MenuWrapper style={wrapperStyle} {...wrapperProps}>
        {!isMobile && <div className="logo" />}
        <Menu
          theme="dark"
          defaultSelectedKeys={[window.location.pathname]}
          mode={isMobile ? 'horizontal' : 'inline'}>
          <Menu.Item key="/">
            <Icon type="bars" />
            <span>ניקוד</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="/games">
            <Icon type="notification" />
            <span>משחקים</span>
            <Link to="/games" />
          </Menu.Item>
          <Menu.Item key="/bets">
            <Icon type="heart" />
            <span>הימורים</span>
            <Link to="/bets" />
          </Menu.Item>
        </Menu>
      </MenuWrapper>
    )
  }

  render() {
    return (
      <AppContext.Provider value={this.state} className={cn('app', { mobile: isMobile })}>
        <Router>
          <Layout className={cn('app-layout', { mobile: isMobile })}>
            <Layout>
              {this.getMenu()}
              <Content
                style={
                  isMobile
                    ? {}
                    : { marginLeft: this.state.sidebar_collapsed ? COLLAPSED_WIDTH : 200 }
                }>
                <Route exact path="/" component={ScorePage} />
                <Route path="/bets" component={BetsPage} />
                <Route path="/games" component={GamesPage} />
              </Content>
            </Layout>
          </Layout>
        </Router>
        <Poller />
      </AppContext.Provider>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
