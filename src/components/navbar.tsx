import { Link } from 'react-router-dom'
import GitHubRepoWidget from './github_fetcher'

type NavbarProps = {
	logoSrc: string
	logoAlt?: string
	title: string
}

export default function Navbar({ logoSrc, logoAlt = 'Logo', title }: NavbarProps) {
	return (
		<header className="sticky top-0 z-50 h-18 ">
			<nav className="px-3 py-2">
				<div className="flex items-center justify-between gap-2">
					<div className="inline-flex items-center h-12 px-3 border border-slate-200 rounded-lg shadow-2xl bg-white/70">
						<Link to="/" className="inline-flex items-center gap-3 select-none">
							<img
								src={logoSrc}
								alt={logoAlt}
								className="h-8 w-8 object-contain border border-slate-300 rounded-md"
								loading="lazy"
							/>
							<span className="text-slate-800 font-semibold tracking-tight">MathLOX/{title}</span>
						</Link>
					</div>
                    <GitHubRepoWidget />
				</div>
			</nav>
		</header>
	)
}

