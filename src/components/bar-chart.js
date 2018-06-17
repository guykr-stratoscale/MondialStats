import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts'

function renderTooltip(data) {
  if (data.payload.length) {
    return <div>{data.payload[0].payload.who}</div>
  }
  return null
}

export default function BChart({ data, fill = '#8884d8' }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart margin={{ top: 20, right: 5, bottom: 20, left: 0 }} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={'name'} />
        <YAxis />
        <ZAxis dataKey="who" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} label="who" content={renderTooltip} />
        <Bar dataKey="value" fill={fill} name="מצביעים" />
      </BarChart>
    </ResponsiveContainer>
  )
}
