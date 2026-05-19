/**
 * Middleware global de manejo de errores.
 * Captura cualquier error no controlado en los controladores.
 */
const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`)

  const status  = err.status || 500
  const message = err.message || 'Error interno del servidor'

  res.status(status).json({
    success: false,
    error: message,
  })
}

module.exports = { errorHandler }
