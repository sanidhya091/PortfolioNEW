import { AnimatePresence, animate, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { site } from '../../data/site'

// A short counted reveal on first visit per tab. Skipped entirely when the
// visitor prefers reduced motion.
export function Preloader() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !sessionStorage.getItem('preloaded')
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'
    const controls = animate(0, 100, { duration: 1.05, ease: [0.4, 0, 0.2, 1], onUpdate: (value) => setCount(Math.round(value)) })
    const timer = window.setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('preloaded', '1')
    }, 1400)
    return () => {
      controls.stop()
      window.clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-end justify-between bg-ink p-6 sm:p-10"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-[11px] bg-accent font-mono text-[12px] font-bold text-accent-ink">{site.initials}</span>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="font-display text-[24px] sm:text-[32px]">
              {site.name}
            </motion.p>
          </div>
          <p className="font-display tabular-nums text-[72px] leading-none text-fg/80 sm:text-[120px]">{count}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
