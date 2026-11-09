import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Server,
  Wrench,
} from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router'

import { aboutParagraphs, alsoInStack, building, education, projects, simulations, site, skillGroups } from '../../data/site'
import { WorkCard } from '../components/WorkCard'
import { GithubIcon, LinkedinIcon } from '../components/icons'
import { Lines, Magnetic, Reveal } from '../components/motion'
import { useLocalTime } from '../components/Nav'

const ease = [0.22, 1, 0.36, 1] as const

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <SelectedWork />
      <Building />
      <Skills />
      <About />
    </>
  )
}

function Hero() {
  const time = useLocalTime()

  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackdrop />

      <div className="relative mx-auto flex min-h-svh w-full max-w-[1400px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pt-32">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            Building in public
          </span>
          <span className="text-faint">/</span>
          <span>{site.educationLine}</span>
        </div>

        <div className="mt-16">
          <Lines
            as="h1"
            className="font-display text-[clamp(56px,12.8vw,188px)]"
            lines={[
              <>Sanidhya</>,
              <>
                Singh<span className="text-accent">.</span>
              </>,
            ]}
          />

          <div className="mt-9 grid gap-10 border-t border-line pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className="text-faint">//</span>
                <RotatingTitle />
              </div>

              <p className="mt-5 max-w-2xl text-balance font-display text-[clamp(26px,3.3vw,42px)] leading-[1.06]">{site.headline}</p>
              <p className="mt-5 max-w-lg text-pretty text-[15.5px] leading-relaxed text-muted sm:text-[17px]">{site.intro}</p>

              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                <Magnetic>
                  <Link to="/#work" className="btn btn-accent">
                    See the work
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Magnetic>
                <a href={site.resume} download={site.resumeFilename} className="btn btn-ghost">
                  Download résumé
                  <Download className="size-4" />
                </a>
                <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="icon-btn">
                  <GithubIcon className="size-4" />
                </a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="icon-btn">
                  <LinkedinIcon className="size-4" />
                </a>
              </div>
            </div>

            <NowCard />
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
          <a href="#work" className="group inline-flex items-center gap-2 transition-colors hover:text-fg">
            Scroll to work
            <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <MapPin className="size-3" />
            {site.location} · {time} IST
          </span>
        </div>
      </div>
    </section>
  )
}

function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <div className="round absolute -right-[14%] -top-[26%] size-[65vw] max-h-[760px] max-w-[760px] animate-drift-a rounded-full bg-[radial-gradient(closest-side,rgb(142_166_255/0.20),transparent)] blur-3xl" />
      <div className="round absolute -left-[16%] top-[6%] size-[62vw] max-h-[700px] max-w-[700px] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(205_249_90/0.16),transparent)] blur-3xl" />
      <div className="grain absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />
    </div>
  )
}

function RotatingTitle() {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setIndex((value) => (value + 1) % site.titles.length), 2600)
    return () => window.clearInterval(id)
  }, [reduce])

  return (
    <span className="inline-flex h-[1.5em] items-center overflow-hidden text-accent" aria-live="off">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={site.titles[index]}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.4, ease }}
          className="inline-block whitespace-nowrap"
        >
          {site.titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function NowCard() {
  return (
    <div className="relative overflow-hidden rounded-card border border-line bg-surface/70 p-5 backdrop-blur-sm sm:p-6">
      <div aria-hidden className="pointer-events-none absolute -right-10 -top-12 size-44 rounded-full bg-[radial-gradient(closest-side,rgb(205_249_90/0.18),transparent)] blur-2xl" />

      <div className="relative flex items-center justify-between">
        <p className="eyebrow text-faint">Currently building</p>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-accent">MVP</span>
      </div>
      <p className="relative mt-4 font-display text-[30px]">QueueLess</p>
      <p className="relative mt-2 text-[13.5px] leading-relaxed text-muted">
        Real-time queue visibility for banks, hospitals, passport offices and government counters.
      </p>
      <ul className="relative mt-4 flex flex-wrap gap-1.5">
        {['React Native', 'Supabase', 'MapLibre'].map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>

      <div className="relative mt-5 flex items-center justify-between border-t border-line pt-4">
        <Link to="/#building" className="link-draw inline-flex items-center gap-1.5 text-[13px] font-medium">
          More in progress
          <ArrowUpRight className="size-3.5" />
        </Link>
        <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-faint">
          <GraduationCap className="size-3" />
          2027
        </span>
      </div>
    </div>
  )
}

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line py-5" aria-hidden>
      <ul className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.26em] text-muted">
        {[...site.marquee, ...site.marquee].map((item, index) => (
          <li key={index} className="flex items-center gap-10">
            {item}
            <span className="size-1 rounded-full bg-accent/60" />
          </li>
        ))}
      </ul>
    </div>
  )
}

function SectionHead({ index, label, title, note }: { index: string; label: string; title: ReactNode; note?: string }) {
  return (
    <div className="flex flex-col gap-7 border-t border-line pt-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
      <div>
        <p className="eyebrow text-accent">
          {index} <span className="text-faint">/</span> {label}
        </p>
        <Lines as="h2" className="mt-4 font-display text-[clamp(40px,5.6vw,80px)]" lines={[title]} />
      </div>
      {note && (
        <Reveal className="max-w-sm text-pretty text-[14.5px] leading-relaxed text-muted lg:pb-2">
          {note}
        </Reveal>
      )}
    </div>
  )
}

function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pt-24 sm:px-8 sm:pt-32">
      <SectionHead
        index="01"
        label="Selected work"
        title={
          <>
            Things I have <span className="text-accent">built</span>
          </>
        }
        note="Four projects across AI tooling, SaaS, space data and the web. Every link goes somewhere real."
      />

      <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-16">
        {projects.map((project, index) => (
          <WorkCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function Building() {
  return (
    <section id="building" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pt-28 sm:px-8 sm:pt-36">
      <SectionHead
        index="02"
        label="In progress"
        title={
          <>
            Currently <span className="text-accent">building</span>
          </>
        }
        note="Two products still taking shape. The status below is stated as it is, not as a launch date."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {building.map((project, index) => (
          <BuildingCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function BuildingCard({ project, index }: { project: (typeof building)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay: index * 0.08, ease }}
      className="flex flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors duration-500 hover:border-line-strong"
    >
      <div className="relative h-[250px] border-b border-line sm:h-[290px]">
        {project.visual === 'queue' ? <QueueVisual /> : <OddlyVisual />}
        <span className="absolute left-4 top-3 font-mono text-[9px] uppercase tracking-[0.18em] text-faint">interface preview</span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-accent">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            {project.status}
          </span>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-faint">{project.category}</span>
        </div>

        <h3 className="mt-5 font-display text-[40px] sm:text-[46px]">{project.name}</h3>
        <p className="mt-1 text-[14.5px] italic text-muted">{project.tagline}</p>
        <p className="mt-5 text-pretty text-[14.5px] leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-[13px] text-fg/80">
              <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {project.stack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

function QueueVisual() {
  const bars = [34, 48, 42, 58, 72, 52, 84, 66, 94, 56, 40, 62]

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden bg-surface-2/60 px-6 py-10">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(205_249_90/0.14),transparent_66%)]" />
      <div className="relative w-full max-w-[300px] rounded-[18px] border border-line-strong bg-ink/85 p-4 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
          <span>queue less</span>
          <span className="inline-flex items-center gap-1.5 text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            live
          </span>
        </div>

        <p className="mt-4 text-[15px] font-medium">Passport Office</p>
        <p className="font-mono text-[9.5px] text-faint">walk-in queues · estimated wait</p>

        <div className="mt-4 flex h-16 items-end gap-1" aria-hidden>
          {bars.map((height, index) => (
            <span
              key={index}
              style={{ height: `${height}%` }}
              className={index === 8 ? 'w-full rounded-t-[3px] bg-accent' : 'w-full rounded-t-[3px] bg-fg/10'}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-line pt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
          <span>reported by visitors</span>
          <span className="text-fg">18 min</span>
        </div>
      </div>
    </div>
  )
}

function OddlyVisual() {
  return (
    <div className="relative flex size-full flex-col justify-center gap-3 overflow-hidden bg-surface-2/60 px-6 py-10">
      <div aria-hidden className="absolute -right-10 -top-16 size-56 rounded-full bg-[radial-gradient(closest-side,rgb(142_166_255/0.32),transparent)] blur-2xl" />
      <div aria-hidden className="absolute -bottom-20 -left-10 size-56 rounded-full bg-[radial-gradient(closest-side,rgb(205_249_90/0.20),transparent)] blur-2xl" />

      <p className="eyebrow relative text-faint">How are you feeling?</p>
      <div className="relative flex max-w-[340px] flex-wrap gap-2">
        {['a rainy Sunday', 'something like 2am', 'warm, slow, hopeful', 'a film that stays'].map((mood) => (
          <span key={mood} className="chip border-line-strong bg-ink/60 text-fg/70">
            {mood}
          </span>
        ))}
      </div>
      <div className="relative mt-2 max-w-[340px] rounded-[16px] border border-line-strong bg-ink/80 p-4 backdrop-blur">
        <p className="text-[13px] leading-relaxed text-fg">“An album for walking home the long way.”</p>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">oddly · recommendation preview</p>
      </div>
    </div>
  )
}

const skillIcons = [Code2, Server, Database, Brain, Wrench]

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pt-28 sm:px-8 sm:pt-36">
      <SectionHead
        index="03"
        label="Toolkit"
        title={
          <>
            What I work <span className="text-accent">with</span>
          </>
        }
        note="Grouped by where it sits in a product. No percentage bars — the projects above are the evidence."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = skillIcons[index]
          return (
            <Reveal
              key={group.title}
              delay={index * 0.05}
              className="flex flex-col rounded-card border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong"
            >
              <div className="flex items-center justify-between text-faint">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em]">0{index + 1}</span>
                <Icon className="size-4" />
              </div>
              <h3 className="mt-8 font-display text-[26px] leading-none">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}

        <Reveal delay={0.25} className="flex flex-col justify-between rounded-card border border-accent/25 bg-accent/[0.04] p-6">
          <div>
            <p className="eyebrow text-accent">Also in the stack</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {alsoInStack.map((item) => (
                <li key={item} className="chip border-line-strong text-fg/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-[13px] leading-relaxed text-muted">
            Going deeper on Spring Boot, microservices and applied machine learning.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  const facts = [
    { label: 'Based in', value: 'Jabalpur, India' },
    { label: 'Studying', value: 'B.Tech CSE · Data Science' },
    { label: 'Graduating', value: '2027' },
  ]

  return (
    <section id="about" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pt-28 sm:px-8 sm:pt-36">
      <SectionHead
        index="04"
        label="About"
        title={
          <>
            The person behind <span className="text-accent">the commits</span>
          </>
        }
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="max-w-2xl text-balance font-display text-[clamp(23px,2.5vw,32px)] leading-[1.16]">{aboutParagraphs[0]}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-7 max-w-xl space-y-5 text-[15px] leading-relaxed text-muted">
            <p>{aboutParagraphs[1]}</p>
            <p>{aboutParagraphs[2]}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 grid gap-4 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="border-t border-line pt-3">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">{fact.label}</p>
                <p className="mt-1.5 text-[13px] text-fg/85">{fact.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-2.5">
            <a href={`mailto:${site.email}`} className="btn btn-accent">
              Say hello
              <Mail className="size-4" />
            </a>
            <a href={site.resume} download={site.resumeFilename} className="btn btn-ghost">
              Read the résumé
              <Download className="size-4" />
            </a>
          </Reveal>
        </div>

        <div className="space-y-4">
          <Reveal className="rounded-card border border-line bg-surface p-6">
            <div className="flex items-center gap-2 text-accent">
              <GraduationCap className="size-4" />
              <p className="eyebrow">Education</p>
            </div>
            <p className="mt-4 text-[16.5px] font-medium">{education.degree}</p>
            <p className="text-[13px] text-muted">{education.focus}</p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-fg/80">{education.school}</p>
            <p className="mt-1 text-[12px] text-faint">
              {education.affiliation} · {education.period}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {education.coursework.slice(0, 4).map((course) => (
                <li key={course} className="chip">
                  {course}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-card border border-line bg-surface p-6">
            <p className="eyebrow text-accent">Simulations & certificates</p>
            <ul className="mt-4 divide-y divide-line">
              {simulations.map((item) => (
                <li key={item.org} className="py-3.5 first:pt-1 last:pb-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-[13.5px] font-medium">{item.org}</p>
                    <span className="shrink-0 font-mono text-[9.5px] text-faint">{item.period}</span>
                  </div>
                  <p className="text-[12.5px] text-muted">{item.title}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-faint">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
