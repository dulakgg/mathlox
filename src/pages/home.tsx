import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <main className="relative z-10 min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">Mathlox</h1>
        <p className="text-lg text-slate-300 mb-10">Wybierz ścieżkę</p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            aria-label="Sofizmaty"
            onClick={() => navigate('/sofizmaty')}
            className="w-64 sm:w-56 py-4 px-6 bg-white/10 backdrop-blur rounded-xl border border-white/10 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-indigo-500/40 transition transform hover:-translate-y-0.5 shadow-lg"
          >
            <span className="block text-xl font-semibold">Sofizmaty</span>
            <span className="block text-sm text-slate-300 mt-1">Sofizmaty Matematyczne</span>
          </button>

          <button
            aria-label="Paradoksy"
            onClick={() => navigate('/paradoksy')}
            className="w-64 sm:w-56 py-4 px-6 bg-white/10 backdrop-blur rounded-xl border border-white/10 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-indigo-500/40 transition transform hover:-translate-y-0.5 shadow-lg"
          >
            <span className="block text-xl font-semibold">Paradoksy</span>
            <span className="block text-sm text-slate-100/90 mt-1">Paradoksy Matematyczne</span>
          </button>
        </div>
      </div>
    </main>
    </>
  )
}