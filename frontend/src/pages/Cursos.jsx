import DashboardLayout from '../layouts/DashboardLayout'
import { FiBookOpen, FiClock } from 'react-icons/fi'

export default function Cursos() {
  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Cursos</h1>
          <p className="page-sub">Catálogo de cursos de capacitación</p>
        </div>
      </div>
      <div className="coming-soon-card">
        <div className="coming-soon-icon">
          <FiBookOpen size={36} />
        </div>
        <h2 className="coming-soon-title">Módulo en construcción</h2>
        <p className="coming-soon-sub">
          Aquí podrás administrar el catálogo de cursos,<br />
          fechas, cupos disponibles e inscripciones.
        </p>
        <span className="coming-soon-badge">
          <FiClock size={12} /> Próximamente
        </span>
      </div>
    </DashboardLayout>
  )
}
