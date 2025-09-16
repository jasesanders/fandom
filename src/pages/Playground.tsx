import { Button } from '../components/Button'

const cards = [
  {
    title: 'Creator Spotlight',
    description:
      'Celebrate top community contributors with curated highlights, playlists, and stats that update in real time.',
    badge: 'Community',
    cta: 'Open report',
    meta: 'Updated 2 days ago',
    support: '12 creators featured',
    variant: 'primary' as const,
  },
  {
    title: 'Episode Tracker',
    description:
      'Provide release schedules, reminders, and progress tracking for shows your fandom follows closely.',
    badge: 'Product',
    cta: 'View tracker',
    meta: 'Syncs nightly',
    support: 'Calendar connected',
    variant: 'secondary' as const,
  },
  {
    title: 'Event Promo',
    description:
      'Pair key art with layered copy and CTAs to promote upcoming panels, meetups, or limited-time drops.',
    badge: 'Marketing',
    cta: 'Preview banner',
    meta: 'Campaign live',
    support: 'Ends July 28',
    variant: 'primary' as const,
  },
] satisfies Array<{
  title: string
  description: string
  badge: string
  cta: string
  meta: string
  support: string
  variant: 'primary' | 'secondary'
}>

const typeSamples = [
  {
    label: 'Display / XL',
    example: 'Legends begin with a single spark.',
    className: 'text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl',
    description: 'Use for hero headlines and high-impact storytelling moments.',
  },
  {
    label: 'Heading / L',
    example: 'Crew updates',
    className: 'text-2xl font-semibold text-slate-100',
    description: 'Ideal for section headers and card titles that need hierarchy.',
  },
  {
    label: 'Body / Base',
    example: 'Collaborate in real time with shared editing, presence, and review workflows.',
    className: 'text-base text-slate-300',
    description: 'Default body copy for articles, product descriptions, and feature callouts.',
  },
  {
    label: 'Caption / XS',
    example: 'Updated moments ago',
    className: 'text-xs uppercase tracking-[0.25em] text-slate-400',
    description: 'Use for metadata, table headers, tooltips, or supporting labels.',
  },
] satisfies Array<{
  label: string
  example: string
  className: string
  description: string
}>

export function Playground() {
  const panelClasses =
    'rounded-2xl bg-slate-900/60 p-6 shadow-lg shadow-black/10 ring-1 ring-white/10 transition hover:ring-emerald-400/30'

  return (
    <div className="space-y-12">
      <header className="space-y-3 text-center md:text-left">
        <span className="inline-flex items-center gap-2 self-center rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 ring-1 ring-inset ring-emerald-500/30 md:self-start">
          Playground
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Component playground</h1>
        <p className="mx-auto max-w-3xl text-base text-slate-300 md:mx-0 md:text-lg">
          Mix and match Tailwind utility classes, swap tokens, and experiment with component compositions. Use these samples as
          starting points when pairing with designers or documenting patterns for the team.
        </p>
      </header>

      <section className="space-y-4" aria-labelledby="button-showcase">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h2 id="button-showcase" className="text-2xl font-semibold text-white">
              Buttons
            </h2>
            <p className="text-sm text-slate-400 md:text-base">
              Action styles inherit from <code className="font-mono text-emerald-300">Button.tsx</code>. Adjust utility classes to
              explore new emphasis levels.
            </p>
          </div>
          <code className="inline-flex items-center gap-2 self-start rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-400 ring-1 ring-white/10">
            src/components/Button.tsx
          </code>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className={`${panelClasses} space-y-4`}>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-emerald-300">Primary</p>
              <p className="text-sm text-slate-400">
                High-emphasis action for hero flows and key conversions.
              </p>
            </div>
            <Button>
              Launch mission
              <span aria-hidden className="text-lg leading-none">→</span>
            </Button>
          </article>
          <article className={`${panelClasses} space-y-4`}>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-emerald-300">Secondary</p>
              <p className="text-sm text-slate-400">
                Low-emphasis option with a subtle border and hover state.
              </p>
            </div>
            <Button variant="secondary">View changelog</Button>
          </article>
          <article className={`${panelClasses} space-y-4`}>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-emerald-300">Disabled</p>
              <p className="text-sm text-slate-400">
                Use for pending states or actions gated by permissions.
              </p>
            </div>
            <Button disabled>Processing…</Button>
          </article>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="card-gallery">
        <div className="space-y-1">
          <h2 id="card-gallery" className="text-2xl font-semibold text-white">
            Cards
          </h2>
          <p className="text-sm text-slate-400 md:text-base">
            Present feature concepts with badges, copy, and clear calls to action. Duplicate these tiles to sketch new modules.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className={`${panelClasses} flex flex-col gap-4`}>
              <div className="space-y-2">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                  {card.badge}
                </span>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-slate-300">{card.description}</p>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{card.meta}</span>
                <span>{card.support}</span>
              </div>
              <Button variant={card.variant} className="w-full justify-center">
                {card.cta}
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="type-scale">
        <div className="space-y-1">
          <h2 id="type-scale" className="text-2xl font-semibold text-white">
            Typography
          </h2>
          <p className="text-sm text-slate-400 md:text-base">
            Apply the scale below to keep rhythm across marketing surfaces, dashboards, and in-product education moments.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {typeSamples.map((sample) => (
            <article key={sample.label} className={`${panelClasses} space-y-2`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{sample.label}</p>
              <p className={sample.className}>{sample.example}</p>
              <p className="text-sm text-slate-400">{sample.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
