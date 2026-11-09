import { useId } from 'react'

// Anveshak has no screenshot in the repository, so this is a generated,
// abstract planetary map instead of an unrelated stock image.
export function AnveshakArt({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const planet = `planet-${id}`
  const sky = `sky-${id}`
  const glow = `glow-${id}`

  return (
    <svg viewBox="0 0 640 480" className={className} role="img" aria-label="Abstract planetary surface illustration for Anveshak" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={sky} cx="30%" cy="10%" r="90%">
          <stop offset="0%" stopColor="#151b2c" />
          <stop offset="100%" stopColor="#08090b" />
        </radialGradient>
        <radialGradient id={planet} cx="35%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#8ea6ff" />
          <stop offset="42%" stopColor="#43518f" />
          <stop offset="100%" stopColor="#10131d" />
        </radialGradient>
        <radialGradient id={glow} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#cdf95a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#cdf95a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="480" fill={`url(#${sky})`} />

      <g fill="#f3f1ea">
        {[
          [72, 78, 1.4],
          [150, 48, 1],
          [412, 66, 1.2],
          [520, 120, 0.9],
          [586, 58, 1.3],
          [96, 300, 1],
          [210, 120, 0.8],
          [560, 300, 1],
          [330, 40, 1.1],
          [476, 210, 0.8],
        ].map(([x, y, r], index) => (
          <circle key={index} cx={x} cy={y} r={r} opacity={0.55} />
        ))}
      </g>

      <circle cx="250" cy="470" r="270" fill={`url(#${glow})`} opacity="0.55" />

      <g opacity="0.5">
        <ellipse cx="380" cy="330" rx="250" ry="90" fill="none" stroke="#8ea6ff" strokeOpacity="0.35" transform="rotate(-16 380 330)" />
        <ellipse cx="380" cy="330" rx="300" ry="120" fill="none" stroke="#cdf95a" strokeOpacity="0.18" transform="rotate(-16 380 330)" />
      </g>

      <circle cx="400" cy="320" r="180" fill={`url(#${planet})`} />
      <g clipPath={`url(#${planet}-clip)`}>
        <path d="M220 280c60 26 140 34 220 18s140-46 180-78" fill="none" stroke="#0a0c12" strokeOpacity="0.35" strokeWidth="14" />
        <path d="M212 330c70 30 150 36 232 18s132-46 168-74" fill="none" stroke="#0a0c12" strokeOpacity="0.25" strokeWidth="9" />
        <path d="M230 380c60 24 140 30 216 14" fill="none" stroke="#0a0c12" strokeOpacity="0.2" strokeWidth="6" />
        <circle cx="330" cy="250" r="26" fill="#0a0c12" fillOpacity="0.28" />
        <circle cx="470" cy="390" r="40" fill="#0a0c12" fillOpacity="0.22" />
        <circle cx="508" cy="252" r="16" fill="#0a0c12" fillOpacity="0.3" />
      </g>
      <clipPath id={`${planet}-clip`}>
        <circle cx="400" cy="320" r="180" />
      </clipPath>

      <g stroke="#cdf95a" strokeWidth="1.5" fill="none" opacity="0.9">
        <path d="M300 208v40M300 248h40" />
        <circle cx="300" cy="208" r="5" fill="#cdf95a" stroke="none" />
      </g>

      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="#9aa1ab" letterSpacing="1.6">
        <text x="42" y="430">NASA TREK · FAISS INDEX</text>
        <text x="42" y="448" fill="#6b727d">PLANETARY SURFACE / SIMILARITY SEARCH</text>
      </g>
    </svg>
  )
}
