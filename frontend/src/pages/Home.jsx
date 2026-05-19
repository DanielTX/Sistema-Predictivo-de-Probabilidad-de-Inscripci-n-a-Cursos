// Página temporal — será reemplazada por el Login
function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-10 text-center max-w-md w-full">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl font-bold">IL</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Ingeniería Líder S.R.L
        </h1>
        <p className="text-gray-500 text-sm mb-4">
          Sistema Predictivo de Inscripción a Cursos
        </p>
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          Entorno configurado correctamente ✓
        </span>
      </div>
    </div>
  )
}

export default Home
