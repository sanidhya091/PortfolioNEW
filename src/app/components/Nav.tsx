import { Download, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

import { site } from '../../data/site'
import { cx } from '../lib/cx'

export function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: site.timezone }).format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

const links = [
  { label: 'Work', to: '/#work' },
  { label: 'Building', to: '/#building' },
  { label: 'Skills', to: '/#skills' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

export function Nav() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(!open && y > last && y > 140)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-40 transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        hidden && '-translate-y-full',
        scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="group inline-flex items-center gap-3" aria-label={`${site.name} — home`}>
          <span className="grid size-9 place-items-center rounded-[10px] bg-accent font-mono text-[11px] font-bold text-accent-ink transition-transform duration-300 group-hover:rotate-3">
            {site.initials}
          </span>
          <span className="text-[14px] font-medium tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Sections">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="link-draw text-[13px] text-muted transition-colors hover:text-fg">
              {link.label}
            </Link>
          ))}
          <a
            href={site.resume}
            download={site.resumeFilename}
            className="inline-flex h-9 items-center gap-1.5 rounded-[10px] border border-line-strong px-3.5 text-[12.5px] font-medium transition-colors hover:border-fg hover:bg-white/5"
          >
            Résumé
            <Download className="size-3.5" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid size-10 place-items-center rounded-[10px] border border-line-strong text-muted transition-colors hover:text-fg lg:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink/95 lg:hidden"
          >
            <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-4 sm:px-8" aria-label="Sections">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-3.5 text-[15px] text-fg/80 transition-colors hover:text-accent"
                >
                  {link.label}
                  <span className="font-mono text-[10px] text-faint">0{links.indexOf(link) + 1}</span>
                </Link>
              ))}
              <a
                href={site.resume}
                download={site.resumeFilename}
                className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-accent text-[14px] font-medium text-accent-ink"
              >
                Download résumé
                <Download className="size-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
