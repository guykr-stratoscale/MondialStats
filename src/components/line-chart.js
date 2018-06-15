import React, { Component } from 'react'
import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  Legend,
} from 'recharts'
import { playerColor } from '../data/players'

function tooltipSorter(a, b) {
  if (a.payload[a.dataKey] < b.payload[b.dataKey]) {
    return 1
  }
  if (a.payload[a.dataKey] > b.payload[b.dataKey]) {
    return -1
  }
  return 0
}

class Chart extends Component {
  state = {
    opacity: {},
  }

  static getDerivedStateFromProps({ players }) {
    return {
      opacity: players.reduce(
        (result, p) => ({
          ...result,
          [p.id]: 1,
        }),
        {},
      ),
    }
  }

  handleMouseEnter = o => {
    const { dataKey } = o
    const { opacity } = this.state

    const newOpacity = Object.keys(opacity).reduce((result, d) => {
      if (d !== '' + dataKey) {
        result[d] = 0.05
      } else {
        result[d] = 1
      }
      return result
    }, {})

    this.setState({
      opacity: newOpacity,
    })
  }

  handleMouseLeave = o => {
    const { players } = this.props

    this.setState({
      opacity: players.reduce(
        (result, p) => ({
          ...result,
          [p.id]: 1,
        }),
        {},
      ),
    })
  }

  render() {
    const { data, players } = this.props
    const { opacity } = this.state

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" allowDuplicatedCategory={false} type="category" name="משחק" />
          <YAxis>
            <Label value="נקודות" angle="270" offset={-30} />
          </YAxis>
          <Tooltip itemSorter={tooltipSorter} />
          {players.map((p, i) => {
            return (
              <Line
                type="monotone"
                dataKey={p.id}
                key={p.id}
                stroke={playerColor(p.id)}
                name={p.name}
                isAnimationActive={false}
                strokeWidth={2}
                strokeOpacity={opacity[p.id] !== undefined ? opacity[p.id] : 1}
              />
            )
          })}
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
export default Chart
