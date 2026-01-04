import Navbar from '@/components/navbar'
import logo from "../assets/mathLox_icon.png"
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
    <Navbar logoSrc={logo} title=' '/>
      <main className="relative z-10 min-h-screen text-black flex items-center justify-center p-6">
        
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">Mathlox</h1>
        <p className="text-lg text-black mb-10">Wybierz ścieżkę</p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <div className="group relative w-64 sm:w-56">
            <div className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-60 blur-sm transition duration-300 group-hover:opacity-90 group-hover:blur">
            </div>
            <motion.button
              type="button"
              aria-label="Sofizmaty"
              onClick={() => navigate('/sofizmaty')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full overflow-hidden rounded-2xl bg-slate-900/70 text-white px-5 py-5 backdrop-blur border border-white/10 shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="flex-1">
                  <span className="block text-lg font-semibold leading-tight">Sofizmaty</span>
                  <span className="block text-sm text-white/80 mt-0.5">Sofizmaty Matematyczne</span>
                </div>
              </div>
            </motion.button>
          </div>
          <div className="group relative w-64 sm:w-56">
            <div className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 opacity-60 blur-sm transition duration-300 group-hover:opacity-90 group-hover:blur">
            </div>
            <motion.button
              type="button"
              aria-label="Paradoksy"
              onClick={() => navigate('/paradoksy')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full overflow-hidden rounded-2xl bg-slate-900/70 text-white px-5 py-5 backdrop-blur border border-white/10 shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-500/30"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="flex-1">
                  <span className="block text-lg font-semibold leading-tight">Paradoksy</span>
                  <span className="block text-sm text-white/80 mt-0.5">Paradoksy Matematyczne</span>
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}