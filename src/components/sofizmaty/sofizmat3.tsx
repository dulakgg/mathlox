export default function Sofizmat3() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <section className="space-y-6 rounded-xl border border-slate-700 bg-slate-900/70 p-4 sm:p-6 shadow-lg">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Sofizmat 3
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
            Każda liczba jest równa dowolnej liczbie od niej mniejszej
          </h2>
        </header>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-100">
            „Dowód”
          </h2>
          <div className="text-slate-200 space-y-4">
            <p>
              Jeśli liczba <span className="italic">a</span> jest większa od liczby{" "}
              <span className="italic">b</span>, to istnieje pewna liczba{" "}
              <span className="italic">c</span>, taka że{" "}
              <span className="font-mono">a = b + c</span>. Na przykład dla liczb 5 i 3
              mamy: <span className="font-mono">5 = 3 + 2</span>.
            </p>
            
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                Mamy zatem: <span className="font-mono">a = b + c</span>
              </li>
              <li>
                Mnożymy obie strony równania przez{" "}
                <span className="italic">(a - b)</span>:
                <div className="font-mono ml-4 mt-1">a(a - b) = (b + c)(a - b)</div>
              </li>
              <li>
                Wymnażamy:
                <div className="font-mono ml-4 mt-1">a² - ab = ab + ac - b² - bc</div>
              </li>
              <li>
                Składnik <span className="font-mono">ac</span> przenosimy na lewą stronę:
                <div className="font-mono ml-4 mt-1">a² - ab - ac = ab - b² - bc</div>
              </li>
              <li>
                Wyciągamy wspólny czynnik przed nawias:
                <div className="font-mono ml-4 mt-1">a(a - b - c) = b(a - b - c)</div>
              </li>
              <li>
                Dzielimy obie strony przez{" "}
                <span className="italic">(a - b - c)</span> i dostajemy:
                <div className="font-mono ml-4 mt-1">a = b</div>
              </li>
            </ol>
          </div>
        </div>

        <div className="h-px bg-slate-700/70" />

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-amber-200">
            Wyjaśnienie błędu
          </h2>
          <div className="text-sm sm:text-base text-slate-200 space-y-3">
            <p>
              <span className="font-semibold">Stron równania nie można dzielić przez zero</span> – 
              przecież z tego, że <span className="font-mono">1 × 0 = 2 × 0</span>, nie wynika, że{" "}
              <span className="font-mono">1 = 2</span>!
            </p>
            <p>
              W powyższym sofizmacie w ostatnim kroku dzieliliśmy strony równania przez czynnik{" "}
              <span className="font-mono">a - b - c</span>, który jest równy zero (bo z założenia{" "}
              <span className="font-mono">a = b + c</span>, czyli{" "}
              <span className="font-mono">a - b - c = 0</span>).
            </p>
            <p className="italic text-slate-300">
              Jest to kolejny przykład ukrytego dzielenia przez zero, podobnego do pierwszego sofizmatu.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}