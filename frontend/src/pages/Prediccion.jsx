import DashboardLayout from '../layouts/DashboardLayout'
import { FiTrendingUp, FiClock } from 'react-icons/fi'

export default function Prediccion() {
  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Predicción</h1>
          <p className="page-sub">Motor predictivo de inscripción</p>
        </div>
      </div>
      <div className="coming-soon-card">
        <div className="coming-soon-icon">
          <FiTrendingUp size={36} />
        </div>
        <h2 className="coming-soon-title">Módulo en construcción</h2>
        <p className="coming-soon-sub">
          Aquí podrás ejecutar el motor predictivo sobre un cliente,<br />
          ver el desglose de su puntaje y clasificación de probabilidad.
        </p>
        <span className="coming-soon-badge">
          <FiClock size={12} /> Próximamente
        </span>
      </div>
    </DashboardLayout>
  )
}
