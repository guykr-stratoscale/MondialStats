import React from 'react'
import ReactDOM from 'react-dom'
import Team from './team'
import Game from './game'
import './styles.css'

const teams = Team.create('team_a', 'team_b')

console.log(teams)

const games = Game.create({
  team_a: 0,
  team_b: 1,
})

console.log(games)

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
