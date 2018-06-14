import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Label, Tooltip, Legend, Dot } from 'recharts'

import { playerColor } from '../data/players'

export default function BubbleChart({ data }) {
  return (
    <ScatterChart width={800} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
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
        <Scatter shape={<Dot r={7} />} name={p.name} data={[p]} fill={playerColor(p.id)} />
      ))}

      <Legend />
    </ScatterChart>
  )
}
