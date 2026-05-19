import DashboardLayout from '../layouts/DashboardLayout'
import StatCard from '../components/ui/StatCard'
import ProbabilityDonut from '../components/charts/ProbabilityDonut'
import EnrollmentBarChart from '../components/charts/EnrollmentBarChart'
import TrendLineChart from '../components/charts/TrendLineChart'
import ScoreRadarChart from '../components/charts/ScoreRadarChart'
import ClientsTable from '../components/tables/ClientsTable'
import { kpis } from '../data/mockData'
import { FiUsers, FiTrendingUp, FiAlertTriangle, FiPercent } from 'react-icons/fi'

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* ── Header de página ─────────────────────── */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Panel de Control</h1>
          <p className="page-sub">Resumen de probabilidades de inscripción — Mayo 2026</p>
        </div>
        <span className="live-badge">● En vivo</span>
      </div>

      {/* ── KPI Cards ────────────────────────────── */}
      <div className="kpi-grid">
        <StatCard
          title="Total Clientes"
          value={kpis.totalClientes}
          subtitle="Registrados en el sistema"
          icon={FiUsers}
          color="blue"
          trend={12}
        />
        <StatCard
          title="Probabilidad Alta"
          value={kpis.clientesAlta}
          subtitle="Con puntaje ≥ 80"
          icon={FiTrendingUp}
          color="green"
          trend={8}
        />
        <StatCard
          title="Probabilidad Media"
          value={kpis.clientesMedia}
          subtitle="Con puntaje 50–79"
          icon={FiAlertTriangle}
          color="yellow"
          trend={-3}
        />
        <StatCard
          title="Tasa de Conversión"
          value={`${kpis.tasaConversion}%`}
          subtitle="Clientes en nivel Alto"
          icon={FiPercent}
          color="blue"
          trend={5}
        />
      </div>

      {/* ── Gráficos fila 1 ──────────────────────── */}
      <div className="charts-row">
        <div className="chart-col-wide">
          <TrendLineChart />
        </div>
        <div className="chart-col-narrow">
          <ProbabilityDonut />
        </div>
      </div>

      {/* ── Gráficos fila 2 ──────────────────────── */}
      <div className="charts-row">
        <div className="chart-col-wide">
          <EnrollmentBarChart />
        </div>
        <div className="chart-col-narrow">
          <ScoreRadarChart />
        </div>
      </div>

      {/* ── Tabla de clientes ────────────────────── */}
      <ClientsTable />
    </DashboardLayout>
  )
}
