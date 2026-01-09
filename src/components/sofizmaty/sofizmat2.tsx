export default function Sofizmat2() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <section className="space-y-6 rounded-xl border border-slate-700 bg-slate-900 p-4 sm:p-6 shadow-lg">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Sofizmat 2
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
            Dowód, że <span className="font-mono">1 = 0</span>
          </h2>
        </header>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-100">
            „Dowód”
          </h2>
          <ol className="list-decimal space-y-1 pl-5 text-slate-200">
            <li>
              Rozważmy sumę nieskończoną: {" "}
              <span className="font-mono">S = 1 - 1 + 1 - 1 + 1 - 1 + ...</span>
            </li>
            <li>
              Grupujemy wyrazy na dwa sposoby:
            </li>
            <li className="pl-3">
              Sposób 1: <span className="font-mono">S = (1 - 1) + (1 - 1) + (1 - 1) + ... = 0 + 0 + 0 + ... = 0</span>
            </li>
            <li className="pl-3">
              Sposób 2: <span className="font-mono">S = 1 + (-1 + 1) + (-1 + 1) + (-1 + 1) + ... = 1 + 0 + 0 + 0 + ... = 1</span>
            </li>
            <li>
              Otrzymujemy <span className="font-mono">S = 0</span> oraz <span className="font-mono">S = 1</span>, zatem{" "}
              <span className="font-mono">0 = 1</span>.
            </li>
          </ol>
        </div>

        <div className="h-px bg-slate-700/70" />

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-amber-200">
            Wyjaśnienie błędu
          </h2>
          <p className="text-sm sm:text-base text-slate-200">
            Błąd polega na nieuprawnionym operowaniu na szeregu rozbieżnym. Szereg{" "}
            <span className="italic">1 - 1 + 1 - 1 + ...</span> nie jest zbieżny w klasycznym sensie - nie ma ustalonej sumy.
          </p>
          <p className="text-sm sm:text-base text-slate-200">
            Przekształcenia algebraiczne, takie jak grupowanie wyrazów, są dopuszczalne tylko dla szeregów bezwzględnie zbieżnych.
            W przypadku szeregów rozbieżnych można otrzymać dowolną wartość w zależności od sposobu grupowania, co nie ma sensu matematycznego.
          </p>
        </div>
      </section>
    </section>
  );
}