// Tarjeta de KPI reutilizable
export default function StatCard({ title, value, subtitle, icon: Icon, color, trend }) {
  const colors = {
    blue:   { bg: 'bg-blue-500/10',   icon: 'text-blue-400',   border: 'border-blue-500/20' },
    green:  { bg: 'bg-green-500/10',  icon: 'text-green-400',  border: 'border-green-500/20' },
    yellow: { bg: 'bg-yellow-500/10', icon: 'text-yellow-400', border: 'border-yellow-500/20' },
    red:    { bg: 'bg-red-500/10',    icon: 'text-red-400',    border: 'border-red-500/20' },
  }
  const c = colors[color] || colors.blue

  return (
    <div className={`stat-card border ${c.border}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="stat-card-label">{title}</p>
          <p className="stat-card-value">{value}</p>
          {subtitle && <p className="stat-card-sub">{subtitle}</p>}
        </div>
        <div className={`stat-card-icon ${c.bg}`}>
          <Icon className={`w-6 h-6 ${c.icon}`} />
        </div>
      </div>
      {trend !== undefined && (
        <div className="mt-3 pt-3 border-t border-white/5">
          <span className={`text-xs font-medium ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend >= 0 ? '▲' : '▼'} {Math.abs(trend)}%
          </span>
          <span className="text-xs text-slate-500 ml-1">vs mes anterior</span>
        </div>
      )}
    </div>
  )
}
