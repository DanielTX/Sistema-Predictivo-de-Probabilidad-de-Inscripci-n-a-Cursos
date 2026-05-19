import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  FiGrid, FiUsers, FiBookOpen, FiTrendingUp,
  FiSettings, FiLogOut, FiMenu, FiX, FiBell
} from 'react-icons/fi'

const NAV_ITEMS = [
  { to: '/dashboard', icon: FiGrid,       label: 'Dashboard' },
  { to: '/clientes',  icon: FiUsers,      label: 'Clientes' },
  { to: '/cursos',    icon: FiBookOpen,   label: 'Cursos' },
  { to: '/prediccion',icon: FiTrendingUp, label: 'Predicción' },
  { to: '/config',    icon: FiSettings,   label: 'Configuración' },
]

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <div className="app-shell">
      {/* ── Sidebar ───────────────────────────────── */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-icon">IL</div>
          {sidebarOpen && (
            <div className="logo-text">
              <span className="logo-name">Ing. Líder</span>
              <span className="logo-sub">Sistema Predictivo</span>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `nav-item ${isActive ? 'nav-item-active' : ''}`
            }>
              <Icon className="nav-icon" />
              {sidebarOpen && <span className="nav-label">{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="sidebar-footer">
          <button className="nav-item w-full text-left" onClick={() => navigate('/')}>
            <FiLogOut className="nav-icon" />
            {sidebarOpen && <span className="nav-label">Salir</span>}
          </button>
        </div>
      </aside>

      {/* ── Main area ─────────────────────────────── */}
      <div className="main-area">
        {/* Topbar */}
        <header className="topbar">
          <button onClick={() => setSidebarOpen(o => !o)} className="topbar-menu-btn">
            {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
          <div className="topbar-title">
            Dashboard
          </div>
          <div className="topbar-actions">
            <button className="topbar-icon-btn" title="Notificaciones">
              <FiBell size={18} />
              <span className="notif-dot" />
            </button>
            <div className="topbar-avatar">DA</div>
          </div>
        </header>

        {/* Content */}
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  )
}
