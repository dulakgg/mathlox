import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GitHubRepoWidget from './github_fetcher'

type NavbarProps = {
	logoSrc: string
	logoAlt?: string
	title: string
	showThemeToggle?: boolean
}


export default function Navbar({
	logoSrc,
	logoAlt = 'Logo',
	title,
	showThemeToggle = false,
}: NavbarProps) {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window === 'undefined') return false
		const savedTheme = localStorage.getItem('theme')
		return (
			savedTheme === 'dark' ||
			(savedTheme !== 'light' && document.documentElement.classList.contains('dark'))
		)
	})

	useEffect(() => {
		if (typeof window === 'undefined') return
		document.documentElement.classList.toggle('dark', isDark)
	}, [isDark])

	function handleToggleTheme() {
		setIsDark((prev) => {
			const next = !prev
			if (typeof window === 'undefined') return next
			document.documentElement.classList.toggle('dark', next)
			localStorage.setItem('theme', next ? 'dark' : 'light')
			return next
		})
	}

	return (
		<header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-950 backdrop-blur border-b border-slate-200 dark:border-gray-800">
			<nav aria-label="Główna nawigacja" className="mx-auto max-w-5xl px-3 sm:px-4 lg:px-6 py-2">
				<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
					<div className="inline-flex items-center h-10 sm:h-12 px-3 border border-slate-200 dark:border-gray-400 rounded-lg shadow-2xl bg-white/80 dark:bg-zinc-900/90">
						<Link to="/" aria-label="Strona główna" className="inline-flex items-center gap-2 sm:gap-3 select-none min-w-0">
							<img
								src={logoSrc}
								alt={logoAlt}
								className="h-7 w-7 sm:h-8 sm:w-8 object-contain border border-slate-300 dark:border-gray-400 rounded-md shrink-0"
								loading="lazy"
							/>
							<span className="truncate text-sm sm:text-base dark:text-gray-400 text-slate-800 font-semibold tracking-tight">
								MathLOX{title}
							</span>
						</Link>
					</div>
					<div className="flex items-center justify-end gap-3 sm:justify-center">
						{showThemeToggle ? (
							<button
								type="button"
								onClick={handleToggleTheme}
								aria-label="Przełącz tryb jasny/ciemny"
								className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:bg-white dark:border-gray-700 dark:bg-zinc-900/90 dark:text-gray-200"
							>
								<span className="text-xs font-semibold uppercase tracking-wide">
									{isDark ? 'Dark' : 'Light'}
								</span>
								<span
									className="relative h-5 w-9 rounded-full border border-slate-300 bg-slate-200 transition-colors dark:border-gray-600 dark:bg-gray-800"
									aria-hidden="true"
								>
									<span
										className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform dark:bg-gray-200 ${
											isDark ? 'translate-x-4' : ''
										}`}
									/>
								</span>
							</button>
						) : null}
						<GitHubRepoWidget />
					</div>
				</div>
			</nav>
		</header>
	)
}