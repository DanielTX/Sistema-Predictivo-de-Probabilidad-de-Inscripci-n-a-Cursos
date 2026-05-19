/**
 * Helpers para respuestas HTTP estandarizadas.
 */

const successResponse = (res, data, message = 'OK', status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  })
}

const errorResponse = (res, message = 'Error', status = 400) => {
  return res.status(status).json({
    success: false,
    error: message,
  })
}

module.exports = { successResponse, errorResponse }
