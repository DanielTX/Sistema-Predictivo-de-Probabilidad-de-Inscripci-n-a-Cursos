const express = require('express')
const cors    = require('cors')
require('dotenv').config()

const routes       = require('./routes/index')
const { errorHandler } = require('./middlewares/error.middleware')

const app = express()

// ─── Middlewares globales ────────────────────────────────
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ─── Rutas ───────────────────────────────────────────────
app.use('/api', routes)

// ─── Ruta no encontrada ──────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Ruta no encontrada' })
})

// ─── Manejo global de errores ────────────────────────────
app.use(errorHandler)

module.exports = app
