import Navbar from '@/components/navbar'
import logo from "../assets/mathLox_icon.png"
import { Link } from 'react-router-dom'
import { useSeo } from "@/seo/useSeo";
import { StructuredData } from "@/seo/structuredData";

export default function Home() {
  useSeo("/")

  return (
    <>
    <Navbar logoSrc={logo} title=' '/>
      <main id="main-content" className="relative z-10 min-h-screen text-slate-900 dark:text-slate-50 flex items-center justify-center p-6">
      <StructuredData pathname="/" />
        
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">Mathlox</h1>
        <p className="text-lg text-slate-700 dark:text-slate-200 mb-10">Wybierz ścieżkę</p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <div className="group relative w-64 sm:w-56">
            <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-60 blur-sm transition duration-300 group-hover:opacity-90 group-hover:blur">
            </div>
            <Link
              to="/sofizmaty"
              aria-label="Sofizmaty"
              className="relative block w-full overflow-hidden rounded-2xl bg-slate-900/70 text-white px-5 py-5 backdrop-blur border border-white/10 shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="flex-1">
                  <span className="block text-lg font-semibold leading-tight">Sofizmaty</span>
                  <span className="block text-sm text-white/80 mt-0.5">Sofizmaty Matematyczne</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="group relative w-64 sm:w-56">
            <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-linear-to-r from-rose-500 via-orange-500 to-amber-400 opacity-60 blur-sm transition duration-300 group-hover:opacity-90 group-hover:blur">
            </div>
            <Link
              to="/paradoksy"
              aria-label="Paradoksy"
              className="relative block w-full overflow-hidden rounded-2xl bg-slate-900/70 text-white px-5 py-5 backdrop-blur border border-white/10 shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-500/30"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="flex-1">
                  <span className="block text-lg font-semibold leading-tight">Paradoksy</span>
                  <span className="block text-sm text-white/80 mt-0.5">Paradoksy Matematyczne</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}