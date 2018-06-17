import React from 'react'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Label,
  Tooltip,
  Legend,
  Dot,
  ResponsiveContainer,
} from 'recharts'

import { playerColor } from '../data/players'

export default function BubbleChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 5, bottom: 20, left: 0 }}>
        <XAxis
          dataKey={'risk'}
          type="number"
          name="הימור נגד יחס ההימורים"
          label="הימור נגד יחס ההימורים"
          tick={false}
        />
        <YAxis dataKey={'goals'} type="number" name="שערים" tick={false}>
          <Label value="כמות שערים" angle="270" offset={-20} />
        </YAxis>
        <ZAxis type="category" dataKey="name" name="שם" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        {data.map((p, i) => (
          <Scatter
            key={i}
            shape={<Dot r={7} />}
            name={p.name}
            data={[p]}
            fill={playerColor(p.id)}
          />
        ))}

        <Legend />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
