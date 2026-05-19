import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, Cell
} from 'recharts'
import { inscripcionesPorCurso } from '../../data/mockData'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="chart-tooltip">
        <p className="font-semibold text-white mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.fill }} className="text-sm">
            {p.name}: {p.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

// Abreviamos etiquetas largas para el eje X
const formatLabel = (val) => val.length > 12 ? val.slice(0, 12) + '…' : val

export default function EnrollmentBarChart() {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Inscripciones por Curso</h3>
      <p className="chart-subtitle">Inscritos vs interesados por capacitación</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={inscripcionesPorCurso} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
          barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke="#1e2d40" vertical={false} />
          <XAxis
            dataKey="curso"
            tickFormatter={formatLabel}
            tick={{ fill: '#64748b', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Legend
            formatter={(val) => (
              <span style={{ color: '#94a3b8', fontSize: 12 }}>{val}</span>
            )}
          />
          <Bar dataKey="interesados" name="Interesados" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="inscritos"   name="Inscritos"   fill="#22c55e" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
