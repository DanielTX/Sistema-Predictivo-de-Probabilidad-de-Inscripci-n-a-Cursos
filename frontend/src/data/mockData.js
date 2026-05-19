// ─── Datos simulados — Motor Predictivo ───────────────────────────────────────
// Estos datos serán reemplazados por llamadas reales a la API cuando el backend
// tenga las rutas de negocio implementadas.

/** @returns {"Alta"|"Media"|"Baja"} */
function getProbabilidad(puntaje) {
  if (puntaje >= 80) return 'Alta'
  if (puntaje >= 50) return 'Media'
  return 'Baja'
}

// ─── Clientes ─────────────────────────────────────────────────────────────────
export const clientes = [
  { id: 1,  nombre: 'María Quispe',       cargo: 'Funcionaria Pública',   cursosPrevios: 4, webinar: true,  redesAltas: true,  consultaReciente: true,  referido: true,  perfilCompleto: true,  inactivo: false },
  { id: 2,  nombre: 'Carlos Mamani',      cargo: 'Especialista RRHH',     cursosPrevios: 3, webinar: true,  redesAltas: true,  consultaReciente: true,  referido: false, perfilCompleto: true,  inactivo: false },
  { id: 3,  nombre: 'Ana Torres',         cargo: 'Jefa de Logística',     cursosPrevios: 2, webinar: true,  redesAltas: false, consultaReciente: true,  referido: true,  perfilCompleto: true,  inactivo: false },
  { id: 4,  nombre: 'Jorge Huanca',       cargo: 'Auditor Gubernamental', cursosPrevios: 5, webinar: true,  redesAltas: true,  consultaReciente: false, referido: true,  perfilCompleto: true,  inactivo: false },
  { id: 5,  nombre: 'Rosa Condori',       cargo: 'Contadora Pública',     cursosPrevios: 3, webinar: false, redesAltas: true,  consultaReciente: true,  referido: true,  perfilCompleto: true,  inactivo: false },
  { id: 6,  nombre: 'Luis Apaza',         cargo: 'Técnico Municipal',     cursosPrevios: 1, webinar: true,  redesAltas: false, consultaReciente: true,  referido: false, perfilCompleto: true,  inactivo: false },
  { id: 7,  nombre: 'Patricia Flores',    cargo: 'Gerente de Proyectos',  cursosPrevios: 2, webinar: true,  redesAltas: true,  consultaReciente: false, referido: false, perfilCompleto: false, inactivo: false },
  { id: 8,  nombre: 'Roberto Vargas',     cargo: 'Asesor Legal',          cursosPrevios: 0, webinar: false, redesAltas: false, consultaReciente: true,  referido: false, perfilCompleto: true,  inactivo: true  },
  { id: 9,  nombre: 'Carmen Yllanes',     cargo: 'Secretaria General',    cursosPrevios: 1, webinar: false, redesAltas: false, consultaReciente: false, referido: false, perfilCompleto: false, inactivo: true  },
  { id: 10, nombre: 'Hector Pari',        cargo: 'Inspector de Obras',    cursosPrevios: 0, webinar: false, redesAltas: false, consultaReciente: false, referido: false, perfilCompleto: false, inactivo: true  },
  { id: 11, nombre: 'Silvia Cáceres',     cargo: 'Planificadora',         cursosPrevios: 3, webinar: true,  redesAltas: true,  consultaReciente: true,  referido: false, perfilCompleto: true,  inactivo: false },
  { id: 12, nombre: 'Miguel Ramos',       cargo: 'Director Regional',     cursosPrevios: 4, webinar: true,  redesAltas: false, consultaReciente: true,  referido: true,  perfilCompleto: true,  inactivo: false },
  { id: 13, nombre: 'Estela Quispe',      cargo: 'Coordinadora Social',   cursosPrevios: 2, webinar: false, redesAltas: true,  consultaReciente: true,  referido: false, perfilCompleto: true,  inactivo: false },
  { id: 14, nombre: 'David Chávez',       cargo: 'Analista Financiero',   cursosPrevios: 1, webinar: false, redesAltas: false, consultaReciente: true,  referido: false, perfilCompleto: false, inactivo: false },
  { id: 15, nombre: 'Nora Mendoza',       cargo: 'Supervisora RRHH',      cursosPrevios: 0, webinar: false, redesAltas: false, consultaReciente: false, referido: false, perfilCompleto: true,  inactivo: true  },
  { id: 16, nombre: 'Alejandro Vega',     cargo: 'Jefe de Presupuesto',   cursosPrevios: 3, webinar: true,  redesAltas: true,  consultaReciente: false, referido: true,  perfilCompleto: true,  inactivo: false },
  { id: 17, nombre: 'Lucia Rojas',        cargo: 'Abogada Municipal',     cursosPrevios: 2, webinar: true,  redesAltas: false, consultaReciente: true,  referido: false, perfilCompleto: true,  inactivo: false },
  { id: 18, nombre: 'Ernesto Huayhua',    cargo: 'Técnico en Sistemas',   cursosPrevios: 1, webinar: false, redesAltas: true,  consultaReciente: false, referido: false, perfilCompleto: false, inactivo: false },
  { id: 19, nombre: 'Gloria Salinas',     cargo: 'Jefa de RR.PP.',        cursosPrevios: 4, webinar: true,  redesAltas: true,  consultaReciente: true,  referido: true,  perfilCompleto: true,  inactivo: false },
  { id: 20, nombre: 'Fernando Coila',     cargo: 'Asesor de Gestión',     cursosPrevios: 0, webinar: false, redesAltas: false, consultaReciente: false, referido: false, perfilCompleto: false, inactivo: true  },
].map(c => {
  let puntaje = 0
  if (c.webinar)          puntaje += 20
  if (c.cursosPrevios > 2) puntaje += 25
  if (c.redesAltas)       puntaje += 15
  if (c.consultaReciente)  puntaje += 10
  if (c.referido)          puntaje += 10
  if (c.perfilCompleto)    puntaje += 10
  if (c.inactivo)          puntaje -= 15
  return { ...c, puntaje, probabilidad: getProbabilidad(puntaje) }
})

// ─── KPIs ─────────────────────────────────────────────────────────────────────
export const kpis = {
  totalClientes:    clientes.length,
  clientesAlta:     clientes.filter(c => c.probabilidad === 'Alta').length,
  clientesMedia:    clientes.filter(c => c.probabilidad === 'Media').length,
  clientesBaja:     clientes.filter(c => c.probabilidad === 'Baja').length,
  tasaConversion:   Math.round((clientes.filter(c => c.probabilidad === 'Alta').length / clientes.length) * 100),
}

// ─── Distribución de probabilidad (Donut) ────────────────────────────────────
export const distribucionProbabilidad = [
  { name: 'Alta',  value: kpis.clientesAlta,  color: '#22c55e' },
  { name: 'Media', value: kpis.clientesMedia, color: '#f59e0b' },
  { name: 'Baja',  value: kpis.clientesBaja,  color: '#ef4444' },
]

// ─── Inscripciones por curso (Bar Chart) ─────────────────────────────────────
export const inscripcionesPorCurso = [
  { curso: 'Contrat. del Estado', inscritos: 12, interesados: 18 },
  { curso: 'Gestión Presupuestal', inscritos: 9,  interesados: 14 },
  { curso: 'SEACE Avanzado',       inscritos: 7,  interesados: 11 },
  { curso: 'Adquisiciones OSCE',   inscritos: 11, interesados: 16 },
  { curso: 'Auditoría Pública',    inscritos: 6,  interesados: 10 },
  { curso: 'SIAF Operativo',       inscritos: 8,  interesados: 13 },
]

// ─── Tendencia mensual (Line Chart) ──────────────────────────────────────────
export const tendenciaMensual = [
  { mes: 'Ene', contactados: 28, inscritos: 10 },
  { mes: 'Feb', contactados: 32, inscritos: 14 },
  { mes: 'Mar', contactados: 38, inscritos: 17 },
  { mes: 'Abr', contactados: 35, inscritos: 15 },
  { mes: 'May', contactados: 42, inscritos: 21 },
  { mes: 'Jun', contactados: 50, inscritos: 27 },
]

// ─── Radar de criterios del motor predictivo ─────────────────────────────────
export const radarCriterios = [
  { criterio: 'Webinars',     promedio: 72 },
  { criterio: 'Cursos Prev.', promedio: 65 },
  { criterio: 'Redes Soc.',   promedio: 58 },
  { criterio: 'Consultas',    promedio: 80 },
  { criterio: 'Referidos',    promedio: 45 },
  { criterio: 'Perfil',       promedio: 88 },
]
