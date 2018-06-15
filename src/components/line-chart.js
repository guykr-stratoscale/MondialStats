import React from 'react'
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

export default function Chart({ data, players }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" allowDuplicatedCategory={false} type="category" name="משחק" />
        <YAxis>
          <Label value="נקודות" angle="270" offset={-20} />
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
            />
          )
        })}
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  )
}
