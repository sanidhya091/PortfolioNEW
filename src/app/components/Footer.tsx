import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react'

import { site, socials } from '../../data/site'
import { GithubIcon, LinkedinIcon } from './icons'
import { Lines, Magnetic, Reveal } from './motion'
import { useLocalTime } from './Nav'

export function Footer() {
  const time = useLocalTime()

  return (
    <footer id="contact" className="relative mt-28 scroll-mt-24 overflow-hidden border-t border-line sm:mt-40">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgb(205_249_90/0.10),transparent_72%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow text-accent">
          05 <span className="text-faint">/</span> Contact
        </p>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <Lines
              as="h2"
              className="font-display text-[clamp(46px,8.2vw,120px)]"
              lines={[<>Let’s build</>, <>something <span className="text-accent">real.</span></>]}
            />
            <Reveal delay={0.15} className="mt-7 max-w-xl text-pretty text-[15.5px] leading-relaxed text-muted sm:text-[16.5px]">
              <p>{site.contactNote}</p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-2.5">
              <Magnetic>
                <a href={`mailto:${site.email}`} className="btn btn-accent">
                  Email me
                  <Mail className="size-4" />
                </a>
              </Magnetic>
              <a href={site.resume} download={site.resumeFilename} className="btn btn-ghost">
                Résumé
                <Download className="size-4" />
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                GitHub
                <GithubIcon className="size-4" />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                LinkedIn
                <LinkedinIcon className="size-4" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-line border-y border-line">
              {socials.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{item.label}</dt>
                  <dd className="text-right">
                    <a
                      href={item.href}
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="link-draw inline-flex items-center gap-1 text-[13px] text-muted transition-colors hover:text-fg"
                    >
                      {item.display}
                      <ArrowUpRight className="size-3" />
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              Replies usually within a day or two.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line pt-6 text-[12px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {site.location} · {time} IST
          </p>
          <p>Built with React, Vite and Motion.</p>
        </div>
      </div>
    </footer>
  )
}
