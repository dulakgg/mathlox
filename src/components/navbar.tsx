import { Link } from 'react-router-dom'
import GitHubRepoWidget from './github_fetcher'

type NavbarProps = {
	logoSrc: string
	logoAlt?: string
	title: string
}

export default function Navbar({ logoSrc, logoAlt = 'Logo', title }: NavbarProps) {
	return (
		<header className="sticky top-0 z-50 bg-gray-950 backdrop-blur border-2 border-gray-800">
			<nav className="mx-auto max-w-5xl px-3 sm:px-4 lg:px-6 py-2">
				<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
					<div className="inline-flex items-center h-10 sm:h-12 px-3 border border-gray-400 rounded-lg shadow-2xl bg-zinc-900/90">
						<Link to="/" className="inline-flex items-center gap-2 sm:gap-3 select-none min-w-0">
							<img
								src={logoSrc}
								alt={logoAlt}
								className="h-7 w-7 sm:h-8 sm:w-8 object-contain border border-gray-400 rounded-md shrink-0"
								loading="lazy"
							/>
							<span className="truncate text-sm sm:text-base text-gray-400 font-semibold tracking-tight">
								MathLOX{title}
							</span>
						</Link>
					</div>
					<div className="flex justify-end sm:justify-center">
						<GitHubRepoWidget />
					</div>
				</div>
			</nav>
		</header>
	)
}

