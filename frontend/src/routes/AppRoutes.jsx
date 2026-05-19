import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

// Aquí se irán agregando todas las rutas del sistema
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
