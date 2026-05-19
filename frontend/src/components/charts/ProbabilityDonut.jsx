import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import { distribucionProbabilidad } from '../../data/mockData'

const RADIAN = Math.PI / 180

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central"
      fontSize={13} fontWeight="600">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const d = payload[0]
    return (
      <div className="chart-tooltip">
        <p className="font-semibold" style={{ color: d.payload.color }}>{d.name}</p>
        <p className="text-slate-300">{d.value} clientes</p>
      </div>
    )
  }
  return null
}

export default function ProbabilityDonut() {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Distribución de Probabilidad</h3>
      <p className="chart-subtitle">Clasificación de clientes por nivel</p>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={distribucionProbabilidad}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
            dataKey="value"
            labelLine={false}
            label={renderCustomLabel}
          >
            {distribucionProbabilidad.map((entry, i) => (
              <Cell key={i} fill={entry.color} stroke="transparent" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value, entry) => (
              <span style={{ color: entry.color, fontWeight: 600, fontSize: 13 }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
