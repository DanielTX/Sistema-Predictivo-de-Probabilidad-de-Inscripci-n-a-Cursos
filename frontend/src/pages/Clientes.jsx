import DashboardLayout from '../layouts/DashboardLayout'
import { FiUsers, FiClock } from 'react-icons/fi'

export default function Clientes() {
  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Clientes</h1>
          <p className="page-sub">Gestión de clientes y perfiles</p>
        </div>
      </div>
      <div className="coming-soon-card">
        <div className="coming-soon-icon">
          <FiUsers size={36} />
        </div>
        <h2 className="coming-soon-title">Módulo en construcción</h2>
        <p className="coming-soon-sub">
          Aquí podrás registrar, editar y eliminar clientes,<br />
          así como ver su historial de cursos y puntaje predictivo.
        </p>
        <span className="coming-soon-badge">
          <FiClock size={12} /> Próximamente
        </span>
      </div>
    </DashboardLayout>
  )
}
