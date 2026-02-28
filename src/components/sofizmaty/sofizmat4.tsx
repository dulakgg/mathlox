export default function Sofizmat4() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <section className="space-y-6 rounded-xl border border-slate-700 bg-[#02060f] text-slate-50 p-4 sm:p-6 shadow-lg">
        <header className="space-y-1">
          <p className="text-md font-semibold uppercase tracking-wide text-[#1abdf7]">
            Sofizmat 4
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Każdy trójkąt jest równoramienny
          </h2>
        </header>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            „Dowód” 
          </h2>
          <ol className="list-decimal space-y-1 pl-5 text-[#a9a298]">
            <li>
              Weźmy dowolny trójkąt <span className="italic">ABC</span>.
            </li>
            <li>
              Narysujmy dwusieczną kąta <span className="italic">A</span> oraz symetralną boku{" "}
              <span className="italic">BC</span>.
            </li>
            <li>
              Niech <span className="italic">D</span> będzie punktem przecięcia tych dwóch prostych.
            </li>
            <li>
              Z punktu <span className="italic">D</span> opuszczamy wysokości na boki{" "}
              <span className="italic">AB</span> i <span className="italic">AC</span> - punkty{" "}
              <span className="italic">E</span> i <span className="italic">F</span>.
            </li>
            <li>
              Trójkąty <span className="italic">ADE</span> i <span className="italic">ADF</span> są przystające
              (kąt, bok, kąt), więc <span className="font-mono">AE = AF</span> i{" "}
              <span className="font-mono">DE = DF</span>.
            </li>
            <li>
              Trójkąty <span className="italic">BDE</span> i <span className="italic">CDF</span> też są przystające
              (bok, kąt, bok), więc <span className="font-mono">BE = CF</span>.
            </li>
            <li>
              Dodajemy: <span className="font-mono">AE + BE = AF + CF</span>, czyli{" "}
              <span className="font-mono">AB = AC</span>.
            </li>
            <li>
              Zatem trójkąt jest równoramienny!
            </li>
          </ol>
        </div>

        <div className="h-px bg-slate-700/70" />

        <img src="/zalamanie_nerwowe.svg" alt="Diagram pokazujący błąd w sofizmacie" className="w-full h-auto" />
        
        <div className="h-px bg-slate-700/70" />

        <div className="space-y-3">
          <h2 className="text-lg font-semibold">
            Wyjaśnienie błędu
          </h2>
          <p className="text-sm sm:text-base text-[#a9a298]">
            Rysunek pomocniczy w tym "dowodzie" jest błędnie narysowany. W rzeczywistości punkt{" "}
            <span className="italic">D</span> (przecięcie dwusiecznej i symetralnej) leży{" "}
            <span className="italic">na zewnątrz</span> trójkąta, nie wewnątrz.
          </p>
          <p className="text-sm sm:text-base text-[#a9a298]">
            Punkt <span className="italic">E</span> i <span className="italic">F</span> nie leżą na bokach trójkąta,
            lecz na ich przedłużeniach. Dlatego dodawanie odcinków{" "}
            <span className="font-mono">AE + BE</span> nie daje długości boku{" "}
            <span className="italic">AB</span>, gdyż punkty nie są odpowiednio ułożone.
          </p>
          <p className="text-sm sm:text-base text-[#a9a298]">
            Jest to klasyczny przykład sofizmatu geometrycznego, gdzie błąd ukryty jest w nieprawidłowym rysunku.
          </p>
        </div>
      </section>
    </section>
  );
}