import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'

import type { Project } from '../../data/site'
import { cx } from '../lib/cx'
import { AnveshakArt } from './art'
import { GithubIcon } from './icons'

export function WorkCard({ project, index = 0 }: { project: Project; index?: number }) {
  const span = project.size === 'large' ? 'lg:col-span-7' : 'lg:col-span-5'

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.85, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cx('group flex h-full flex-col md:col-span-1', span)}
    >
      <Link to={`/work/${project.slug}`} className="group/card block" aria-label={`${project.title} case study`}>
        <div className="relative h-[260px] overflow-hidden rounded-image border border-line bg-surface-2 sm:h-[320px] lg:h-[360px]">
          {project.cover ? (
            <img
              src={project.cover}
              alt={project.coverAlt ?? project.title}
              loading="lazy"
              className="size-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.03]"
            />
          ) : (
            <AnveshakArt className="size-full object-cover" />
          )}

          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent opacity-80" />

          <span className="chip absolute left-3 top-3 border-line-strong bg-ink/70 text-fg/80 backdrop-blur-md">
            {project.category}
          </span>
          <span className="chip absolute right-3 top-3 border-line-strong bg-ink/70 text-fg/80 backdrop-blur-md">{project.status}</span>

          <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full border border-line-strong bg-ink/70 text-fg backdrop-blur-md transition-transform duration-500 group-hover/card:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="font-display text-[28px] sm:text-[32px]">{project.title}</h3>
              {project.badge && (
                <span className="chip border-accent/30 bg-accent/10 text-accent">{project.badge}</span>
              )}
            </div>
            <p className="mt-2 max-w-lg text-pretty text-[14.5px] leading-relaxed text-muted">{project.summary}</p>
          </div>
          <span className="shrink-0 font-mono text-[11px] text-faint">{project.year}</span>
        </div>
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-3">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
          {project.stack.length > 3 && <li className="chip">+{project.stack.length - 3}</li>}
        </ul>

        <div className="ml-auto flex items-center gap-4 text-[12.5px]">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent">
              Live
              <ExternalLink className="size-3.5" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
              Source
              <GithubIcon className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
