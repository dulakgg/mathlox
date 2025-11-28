import { useEffect, useRef, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";

type RepoInfo = {
    full_name: string
    stargazers_count: number
}

type Contributor = {
    login: string
    avatar_url: string
    html_url: string
    contributions: number
}

export default function GitHubRepoWidget() {
    const [repo, setRepo] = useState<RepoInfo | null>(null)
    const [contributors, setContributors] = useState<Contributor[]>([])
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        let cancelled = false
        async function fetchData() {
            setLoading(true)
            setError(null)
            try {
                const repoRes = await fetch('https://api.github.com/repos/dulakgg/mathlox')
                if (!repoRes.ok) throw new Error(`Repo fetch failed: ${repoRes.status}`)
                const repoJson = await repoRes.json()

                const contribRes = await fetch('https://api.github.com/repos/dulakgg/mathlox/contributors')
                if (!contribRes.ok) throw new Error(`Contributors fetch failed: ${contribRes.status}`)
                const contribJson = await contribRes.json()

                if (!cancelled) {
                    setRepo({
                        full_name: repoJson.full_name,
                        stargazers_count: repoJson.stargazers_count,
                    })
                    setContributors(
                        Array.isArray(contribJson)
                            ? contribJson.map((c: any) => ({
                                  login: c.login,
                                  avatar_url: c.avatar_url,
                                  html_url: c.html_url,
                                  contributions: c.contributions,
                              }))
                            : []
                    )
                }
            } catch (e: any) {
                if (!cancelled) setError(e?.message ?? 'Failed to fetch GitHub data')
            } finally {
                if (!cancelled) setLoading(false)
            }
        }
        fetchData()
        return () => {
            cancelled = true
        }
    }, [])

    const toggle = () => setOpen((v) => !v)

    useEffect(() => {
        if (!open) return
        function onDocClick(e: MouseEvent) {
            const el = containerRef.current
            if (!el) return
            if (e.target instanceof Node && !el.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', onDocClick)
        return () => document.removeEventListener('mousedown', onDocClick)
    }, [open])

    return (
        <div ref={containerRef} className="inline-flex items-center gap-2">
            <a
                href="https://github.com/dulakgg/mathlox"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open dulakgg/mathlox on GitHub"
                className="inline-flex items-center gap-2 h-12 px-4 rounded-lg border border-slate-200 bg-white/80 text-slate-800 hover:bg-white shadow-2xl text-sm"
            >
                {<FaStar color='orange' />}
                <span className="text-slate-600">{repo ? ` ${repo.stargazers_count}` : ''}</span>
                <span className="font-medium">
                    MathLOX
                </span>
            </a>
            <div className="relative">
                <button
                    type="button"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-haspopup="menu"
                    className="inline-flex items-center h-12 px-4 rounded-lg border border-slate-200 bg-white/80 text-slate-800 hover:bg-white shadow-2xl text-sm"
                >
                    <IoIosArrowDropdownCircle scale={1}/>
                </button>
            {open && (
                <div role="menu" className="absolute right-0 top-full mt-2 w-80 max-w-[90vw] rounded-lg border border-slate-200 bg-white shadow-2xl">
                    <div className="p-3 border-b border-slate-200 flex items-center justify-between">
                        <a
                            href="https://github.com/dulakgg/mathlox"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-slate-800 hover:underline"
                        >
                            {repo?.full_name ?? 'dulakgg/mathlox'}
                        </a>
                        {!loading && repo && (
                            <span className="text-xs text-slate-600">Stars: {repo.stargazers_count}</span>
                        )}
                    </div>
                    <div className="p-3">
                        {error && (
                            <div className="text-sm text-red-600">{error}</div>
                        )}
                        {!error && loading && (
                            <div className="text-sm text-slate-600">Fetching contributors…</div>
                        )}
                        {!loading && !error && contributors.length === 0 && (
                            <div className="text-sm text-slate-600">No contributors found.</div>
                        )}
                        {!loading && !error && contributors.length > 0 && (
                            <ul className="space-y-2">
                                {contributors.map((c) => (
                                    <li key={c.login} className="flex items-center justify-between">
                                        <a
                                            href={c.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 hover:underline"
                                        >
                                            <img
                                                src={c.avatar_url}
                                                alt={c.login}
                                                className="h-6 w-6 rounded-full border border-slate-200"
                                                loading="lazy"
                                            />
                                            <span className="text-sm text-slate-800">{c.login}</span>
                                        </a>
                                        <span className="text-xs text-slate-600">{c.contributions} commits</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}