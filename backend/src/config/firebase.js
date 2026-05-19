const admin = require('firebase-admin')
const path  = require('path')

// Ruta al archivo de credenciales descargado desde Firebase Console
// → Project Settings > Service Accounts > Generate new private key
const serviceAccountPath = path.resolve(__dirname, '../../serviceAccountKey.json')

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
  })
}

const db = admin.firestore()

module.exports = { admin, db }
