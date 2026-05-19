const { Router } = require('express')
const router = Router()

// Aquí se irán registrando las rutas de cada módulo:
// const authRoutes      = require('./auth.routes')
// const clienteRoutes   = require('./clientes.routes')
// const cursoRoutes     = require('./cursos.routes')
// const prediccionRoutes = require('./prediccion.routes')

// router.use('/auth',       authRoutes)
// router.use('/clientes',   clienteRoutes)
// router.use('/cursos',     cursoRoutes)
// router.use('/prediccion', prediccionRoutes)

// Health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString(),
  })
})

module.exports = router
