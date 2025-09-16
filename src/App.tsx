import { Button } from './components/Button'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <main className="max-w-2xl space-y-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/30">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
          Tailwind CSS Ready
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ship polished interfaces at warp speed
        </h1>
        <p className="text-lg text-slate-300">
          Tailwind CSS is wired up and ready to go. Start building by composing
          utility classes directly in your components, and customize the design
          system in <code className="font-mono text-emerald-300">tailwind.config.js</code> as you grow.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="secondary">View Docs</Button>
        </div>
      </main>
    </div>
  )
}

export default App
