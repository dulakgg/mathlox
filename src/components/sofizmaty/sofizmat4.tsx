export default function Sofizmat4() {
  return (
    <section className="relative w-fit mx-auto my-10 text-gray-400 group">
      <div className="pointer-events-none absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-lg transition-all duration-500 ease-out group-hover:opacity-70 group-hover:blur-xl">
      </div>
      
      <div className="pointer-events-none absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 blur-lg transition-all duration-500 ease-out group-hover:opacity-50 group-hover:blur-xl animate-pulse">
      </div>

      <div className="relative rounded-xl p-5 bg-zinc-900/90 backdrop-blur-sm border border-white/10 shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out">
        <section className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          <header className="space-y-1">
            <p className="sm:text-3xl font-bold text-white">
              Sofizmat 2:
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Dowód, że 0=1 (przy użyciu nieskończonego szeregu)
            </h1>
          </header>

          <section className="space-y-4 p-4 sm:p-6 bg-zinc-800/50 rounded-lg">
            <h2 className="text-lg font-semibold">
              „Dowód” (błędne rozumowanie)
            </h2>
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                Załóżmy, że <span className="italic">a = b</span>, gdzie{" "}
                <span className="italic">a, b ≠ 0</span>.
              </li>
              <li>
                Mnożymy obie strony przez <span className="italic">a</span>:{" "}
                <span className="font-mono">a² = ab</span>.
              </li>
              <li>
                Odejmujemy <span className="italic">b²</span> od obu stron:{" "}
                <span className="font-mono">a² − b² = ab − b²</span>.
              </li>
              <li>
                Lewą stronę rozkładamy jako różnicę kwadratów, prawą wyciągamy{" "}
                <span className="italic">b</span> przed nawias:{" "}
                <span className="font-mono">(a − b)(a + b) = b(a − b)</span>.
              </li>
              <li className="pl-3 py-1">
                Dzielimy obie strony przez <span className="italic">(a − b)</span>
                .
              </li>
              <li>
                Otrzymujemy <span className="font-mono">a + b = b</span>.
              </li>
              <li>
                Ponieważ <span className="italic">a = b</span>, podstawiamy:{" "}
                <span className="font-mono">b + b = b</span>, czyli{" "}
                <span className="font-mono">2b = b</span>.
              </li>
              <li>
                Dzieląc przez <span className="italic">b</span>, dostajemy pozorny
                wniosek: <span className="font-mono">2 = 1</span>.
              </li>
            </ol>
          </section>

          <section className="space-y-3 rounded-xl p-4 sm:p-5 bg-zinc-800/50">
            <h2 className="text-lg font-semibold">
              Wyjaśnienie błędu
            </h2>
            <p className="text-sm sm:text-base">
              Kluczowy błąd pojawia się w kroku dzielenia przez{" "}
              <span className="italic">(a − b)</span>. Z założenia{" "}
              <span className="italic">a = b</span>, więc{" "}
              <span className="italic">a − b = 0</span>. Oznacza to, że w
              rzeczywistości dzielimy przez zero.
            </p>
            <p className="text-sm sm:text-base">
              Dzielenie przez zero jest w matematyce niedozwolone, ponieważ
              prowadzi do sprzeczności i nie ma sensu. Od momentu podzielenia
              przez zero całe rozumowanie przestaje być poprawne, a otrzymany
              wynik <span className="font-mono">2 = 1</span> jest tylko pozornym
              „dowodem”.
            </p>
          </section>
        </section>
      </div>
    </section>
  );
}   