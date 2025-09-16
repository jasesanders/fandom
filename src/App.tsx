import { useState } from 'react'

import { Button } from './components/Button'
import { Playground } from './pages/Playground'

const tabs = [
  { id: 'playground', label: 'Playground' },
  { id: 'overview', label: 'Overview' },
] as const

type TabId = (typeof tabs)[number]['id']

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('playground')

  const baseTabClasses =
    'rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const activeTabClasses = 'bg-emerald-500 text-emerald-950 shadow shadow-emerald-500/40 focus-visible:outline-emerald-300'
  const inactiveTabClasses = 'text-slate-300 hover:text-white focus-visible:outline-emerald-500'

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Fandom</p>
            <p className="text-lg font-semibold tracking-tight text-white">UI Sandbox</p>
            <p className="text-sm text-slate-400">Prototype components before promoting them to features.</p>
          </div>
          <nav aria-label="Primary navigation" className="flex items-center gap-2">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`${baseTabClasses} ${isActive ? activeTabClasses : inactiveTabClasses}`}
                >
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        {activeTab === 'playground' ? <Playground /> : <Overview />}
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-slate-500">
          Keep iterating on{' '}
          <code className="rounded bg-slate-900/70 px-1.5 py-0.5 text-xs text-slate-300">src/pages/Playground.tsx</code>{' '}
          to share new experiments with the team.
        </div>
      </footer>
    </div>
  )
}

function Overview() {
  return (
    <section className="space-y-8 rounded-3xl bg-slate-900/60 p-10 text-center shadow-xl shadow-black/20 ring-1 ring-white/10">
      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/30">
        <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
        Tailwind CSS Ready
      </span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Ship polished interfaces at warp speed
      </h1>
      <p className="text-lg text-slate-300">
        Tailwind CSS is wired up and ready to go. Start building by composing utility classes directly in your components, and
        customize the design system in <code className="font-mono text-emerald-300">tailwind.config.js</code> as you grow.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button>Get Started</Button>
        <Button variant="secondary">View Docs</Button>
      </div>
    </section>
  )
}

export default App
