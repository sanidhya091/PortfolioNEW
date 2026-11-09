import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router'

import { bySlug, projects, site } from '../../data/site'
import { AnveshakArt } from '../components/art'
import { GithubIcon } from '../components/icons'
import { Lines, Reveal } from '../components/motion'

export function Work() {
  const { slug } = useParams()
  const project = slug ? bySlug(slug) : undefined

  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.title} — ${site.name}`
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Link to="/#work" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-fg">
        <ArrowLeft className="size-4" />
        All work
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">{project.category}</span>
            <span className="chip">{project.year}</span>
            <span className="chip border-accent/30 bg-accent/10 text-accent">{project.status}</span>
            {project.badge && <span className="chip border-line-strong text-fg/70">{project.badge}</span>}
          </div>
          <Lines as="h1" className="mt-6 font-display text-[clamp(48px,8.6vw,128px)]" lines={[project.title]} />
        </div>

        <Reveal delay={0.12}>
          <p className="text-pretty text-[16px] leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-accent">
                Visit live
                <ExternalLink className="size-4" />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                View source
                <GithubIcon className="size-4" />
              </a>
            )}
          </div>
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 overflow-hidden rounded-[30px] border border-line bg-surface-2"
      >
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.coverAlt ?? project.title}
            className="aspect-[16/9] w-full object-cover object-top"
          />
        ) : (
          <AnveshakArt className="aspect-[16/9] w-full" />
        )}
      </motion.div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
        <aside>
          <dl className="divide-y divide-line border-y border-line text-[13px]">
            <div className="py-4">
              <dt className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">Year</dt>
              <dd className="mt-1 text-fg/85">{project.year}</dd>
            </div>
            <div className="py-4">
              <dt className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">Status</dt>
              <dd className="mt-1 text-fg/85">{project.status}</dd>
            </div>
            <div className="py-4">
              <dt className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">Category</dt>
              <dd className="mt-1 text-fg/85">{project.category}</dd>
            </div>
          </dl>

          <p className="mt-6 font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">Stack</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div>
          {project.overview.map((paragraph, paragraphIndex) => (
            <Reveal key={paragraphIndex} delay={paragraphIndex * 0.05}>
              <p
                className={
                  paragraphIndex === 0
                    ? 'max-w-2xl text-balance font-display text-[clamp(23px,2.6vw,34px)] leading-[1.16]'
                    : 'mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-muted'
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}

          <div className="mt-12 border-t border-line pt-6">
            <p className="eyebrow text-faint">What it does</p>
            <div className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {project.features.map((feature, featureIndex) => (
                <Reveal key={feature.title} delay={featureIndex * 0.04}>
                  <p className="font-mono text-[10px] text-accent">0{featureIndex + 1}</p>
                  <h2 className="mt-2 text-[15px] font-medium">{feature.title}</h2>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{feature.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link to={`/work/${next.slug}`} className="group mt-28 block border-t border-line pt-8 sm:mt-36">
        <p className="eyebrow text-faint">Next project</p>
        <div className="mt-3 flex items-center justify-between gap-6">
          <h2 className="font-display text-[clamp(40px,7.2vw,108px)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
            {next.title}
          </h2>
          <span className="grid size-14 shrink-0 place-items-center rounded-full border border-line-strong text-fg transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
            <ArrowUpRight className="size-6" />
          </span>
        </div>
      </Link>
    </article>
  )
}
