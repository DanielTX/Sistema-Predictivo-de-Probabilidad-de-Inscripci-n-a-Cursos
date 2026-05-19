import DashboardLayout from '../layouts/DashboardLayout'
import { FiSettings, FiClock } from 'react-icons/fi'

export default function Configuracion() {
  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Configuración</h1>
          <p className="page-sub">Ajustes del sistema y usuarios</p>
        </div>
      </div>
      <div className="coming-soon-card">
        <div className="coming-soon-icon">
          <FiSettings size={36} />
        </div>
        <h2 className="coming-soon-title">Módulo en construcción</h2>
        <p className="coming-soon-sub">
          Aquí podrás gestionar usuarios, roles, permisos<br />
          y los parámetros del motor predictivo.
        </p>
        <span className="coming-soon-badge">
          <FiClock size={12} /> Próximamente
        </span>
      </div>
    </DashboardLayout>
  )
}
