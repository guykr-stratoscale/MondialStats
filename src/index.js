import React from 'react'
import ReactDOM from 'react-dom'
import { initTeams } from './models/team'
import { initGames } from './models/game'
import { initPlayers } from './models/player'
import AppContext from './context'
import BetsPage from './pages/bets'
import { Icon, Layout, Menu } from 'antd'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './styles.css'

const { Sider, Content } = Layout

class App extends React.Component {
  _selectPlayer = selected_player => {
    selected_player !== this.state.selected_player
      ? this.setState({ selected_player })
      : this.setState({ selected_player: null })
  }

  state = {
    teams: initTeams(),
    games: initGames(),
    players: initPlayers(),
    selected_player: null,
    selectPlayer: this._selectPlayer,
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <Layout className="app-layout">
            <Layout>
              <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1" >
                    <Icon type="heart" />
                    <span>Bets</span>
                    <Link to="/" />
                  </Menu.Item>
                  <Menu.Item key="2" disabled>
                    <Icon type="notification" />
                    <span>Games</span>
                    <Link to="/games" />
                  </Menu.Item>
                  <Menu.Item key="3" disabled>
                    <Icon type="user" />
                    <span>Players</span>
                    <Link to="/players" />
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content style={{ marginLeft: 200 }}>
                <Route exact path="/" component={BetsPage} />
                <Route path="/games" component={BetsPage} />
                <Route path="/players" component={BetsPage} />
              </Content>
            </Layout>
          </Layout>
        </Router>
      </AppContext.Provider>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
