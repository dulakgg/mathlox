export default function Sofizmat1() {
	return (
		<section className="max-w-3xl mx-auto px-4 py-6 space-y-6">
			<header className="space-y-1">
				<p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
					Sofizmat 1
				</p>
				<h1 className="text-2xl sm:text-3xl font-bold text-black">
					Dowód, że <span className="font-mono">1 = 2</span>
				</h1>
			</header>

			<section className="space-y-4 rounded-xl border border-slate-700 bg-slate-900/70 p-4 sm:p-6 shadow-lg">
				<h2 className="text-lg font-semibold text-slate-100">
					„Dowód” (błędne rozumowanie)
				</h2>
				<ol className="list-decimal space-y-1 pl-5 text-slate-200">
					<li>
						Załóżmy, że <span className="italic">a = b</span>, gdzie{' '}
						<span className="italic">a, b ≠ 0</span>.
					</li>
					<li>
						Mnożymy obie strony przez <span className="italic">a</span>: <span className="font-mono">a² = ab</span>.
					</li>
					<li>
						Odejmujemy <span className="italic">b²</span> od obu stron: <span className="font-mono">a² − b² = ab − b²</span>.
					</li>
					<li>
						Lewą stronę rozkładamy jako różnicę kwadratów, prawą wyciągamy{' '}
						<span className="italic">b</span> przed nawias:
						{' '}
						<span className="font-mono">(a − b)(a + b) = b(a − b)</span>.
					</li>
					<li className=" pl-3 py-1">
					Dzielimy obie strony przez <span className="italic">(a − b)</span>.
					</li>
					<li>
						Otrzymujemy <span className="font-mono">a + b = b</span>.
					</li>
					<li>
						Ponieważ <span className="italic">a = b</span>, podstawiamy:{' '}
						<span className="font-mono">b + b = b</span>, czyli <span className="font-mono">2b = b</span>.
					</li>
					<li>
						Dzieląc przez <span className="italic">b</span>, dostajemy pozorny wniosek:{' '}
						<span className="font-mono">2 = 1</span>.
					</li>
				</ol>
			</section>

			<section className="space-y-3 rounded-xl border border-amber-500/60 bg-amber-950/60 p-4 sm:p-5">
				<h2 className="text-lg font-semibold text-amber-100">Wyjaśnienie błędu</h2>
				<p className="text-sm sm:text-base text-amber-50">
					Kluczowy błąd pojawia się w kroku dzielenia przez{' '}
					<span className="italic">(a − b)</span>. Z założenia <span className="italic">a = b</span>, więc{' '}
					<span className="italic">a − b = 0</span>. Oznacza to, że w rzeczywistości dzielimy przez zero.
				</p>
				<p className="text-sm sm:text-base text-amber-50">
					Dzielenie przez zero jest w matematyce niedozwolone, ponieważ prowadzi do sprzeczności
					 i nie ma sensu. Od momentu podzielenia przez zero całe rozumowanie przestaje być poprawne,
					 a otrzymany wynik <span className="font-mono">2 = 1</span> jest tylko pozornym „dowodem”.
				</p>
			</section>
		</section>
	);
}