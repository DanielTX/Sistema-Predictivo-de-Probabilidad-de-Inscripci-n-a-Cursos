import { Routes, Route, Navigate } from 'react-router-dom'
import Home        from '../pages/Home'
import Dashboard   from '../pages/Dashboard'
import Clientes    from '../pages/Clientes'
import Cursos      from '../pages/Cursos'
import Prediccion  from '../pages/Prediccion'
import Configuracion from '../pages/Configuracion'

// Rutas del sistema
function AppRoutes() {
  return (
    <Routes>
      <Route path="/"           element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard"  element={<Dashboard />} />
      <Route path="/clientes"   element={<Clientes />} />
      <Route path="/cursos"     element={<Cursos />} />
      <Route path="/prediccion" element={<Prediccion />} />
      <Route path="/config"     element={<Configuracion />} />
    </Routes>
  )
}

export default AppRoutes
