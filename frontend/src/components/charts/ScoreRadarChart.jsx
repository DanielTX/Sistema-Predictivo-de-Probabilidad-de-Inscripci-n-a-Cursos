import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer, Tooltip
} from 'recharts'
import { radarCriterios } from '../../data/mockData'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="chart-tooltip">
        <p className="font-semibold text-white">{payload[0].payload.criterio}</p>
        <p className="text-blue-400 text-sm">Promedio: {payload[0].value}%</p>
      </div>
    )
  }
  return null
}

export default function ScoreRadarChart() {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Perfil de Puntaje Promedio</h3>
      <p className="chart-subtitle">Cumplimiento por criterio del motor predictivo</p>
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart cx="50%" cy="50%" outerRadius={95} data={radarCriterios}>
          <PolarGrid stroke="#1e2d40" />
          <PolarAngleAxis
            dataKey="criterio"
            tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
          />
          <PolarRadiusAxis
            angle={30} domain={[0, 100]}
            tick={{ fill: '#475569', fontSize: 10 }}
            axisLine={false}
          />
          <Radar
            name="Promedio"
            dataKey="promedio"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
