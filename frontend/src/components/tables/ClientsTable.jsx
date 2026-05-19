import { useState, useMemo } from 'react'
import { clientes } from '../../data/mockData'
import { FiSearch } from 'react-icons/fi'

const BADGE = {
  Alta:  'badge-alta',
  Media: 'badge-media',
  Baja:  'badge-baja',
}

const SCORE_BAR = {
  Alta:  'bg-green-500',
  Media: 'bg-yellow-400',
  Baja:  'bg-red-500',
}

const PAGE_SIZE = 8

export default function ClientsTable() {
  const [search, setSearch]   = useState('')
  const [filtro, setFiltro]   = useState('Todos')
  const [page, setPage]       = useState(1)

  const filtered = useMemo(() => {
    return clientes.filter(c => {
      const matchSearch = c.nombre.toLowerCase().includes(search.toLowerCase()) ||
        c.cargo.toLowerCase().includes(search.toLowerCase())
      const matchFiltro = filtro === 'Todos' || c.probabilidad === filtro
      return matchSearch && matchFiltro
    })
  }, [search, filtro])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleFiltro = (f) => { setFiltro(f); setPage(1) }
  const handleSearch = (e) => { setSearch(e.target.value); setPage(1) }

  return (
    <div className="chart-card">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div>
          <h3 className="chart-title">Clientes</h3>
          <p className="chart-subtitle">{filtered.length} resultados encontrados</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {/* Filtros rápidos */}
          {['Todos', 'Alta', 'Media', 'Baja'].map(f => (
            <button key={f} onClick={() => handleFiltro(f)}
              className={`filter-btn ${filtro === f ? 'filter-btn-active' : ''}`}>
              {f}
            </button>
          ))}
          {/* Búsqueda */}
          <div className="search-wrap">
            <FiSearch className="search-icon" />
            <input
              type="text" placeholder="Buscar cliente…"
              value={search} onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="clients-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Cargo</th>
              <th>Cursos Prev.</th>
              <th>Puntaje</th>
              <th>Probabilidad</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-10 text-slate-500">
                  No se encontraron clientes
                </td>
              </tr>
            ) : paginated.map(c => (
              <tr key={c.id} className="table-row-hover">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      {c.nombre.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <span className="font-medium text-white">{c.nombre}</span>
                  </div>
                </td>
                <td className="text-slate-400">{c.cargo}</td>
                <td className="text-center text-slate-300">{c.cursosPrevios}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="score-bar-track">
                      <div
                        className={`score-bar-fill ${SCORE_BAR[c.probabilidad]}`}
                        style={{ width: `${Math.min(c.puntaje, 100)}%` }}
                      />
                    </div>
                    <span className="text-sm text-slate-300 w-8">{c.puntaje}</span>
                  </div>
                </td>
                <td>
                  <span className={`badge ${BADGE[c.probabilidad]}`}>
                    {c.probabilidad}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <p className="text-xs text-slate-500">
            Página {page} de {totalPages}
          </p>
          <div className="flex gap-2">
            <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="page-btn">
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} onClick={() => setPage(n)}
                className={`page-btn ${page === n ? 'page-btn-active' : ''}`}>
                {n}
              </button>
            ))}
            <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="page-btn">
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
