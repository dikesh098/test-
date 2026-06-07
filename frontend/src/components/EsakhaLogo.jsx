// Esakha SVG Logo Component
export default function EsakhaLogo({ size = 36, showText = true, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Custom SVG Logo Mark */}
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f97316"/>
            <stop offset="100%" stopColor="#fbbf24"/>
          </linearGradient>
          <linearGradient id="logoGrad2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0ea5e9"/>
            <stop offset="100%" stopColor="#6366f1"/>
          </linearGradient>
        </defs>
        {/* Background circle */}
        <circle cx="20" cy="20" r="20" fill="url(#logoGrad1)" opacity="0.15"/>
        {/* E letter stylized as interlocking arcs — represents "E" for Esakha + connectivity */}
        {/* Top arc - digital services */}
        <path d="M8 12 Q20 4 32 12" stroke="url(#logoGrad1)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Middle line */}
        <line x1="8" y1="20" x2="28" y2="20" stroke="url(#logoGrad1)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Bottom arc - government */}
        <path d="M8 28 Q20 36 32 28" stroke="url(#logoGrad2)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Center dot - Esakha */}
        <circle cx="20" cy="20" r="3.5" fill="url(#logoGrad1)"/>
        {/* Small dots representing connectivity */}
        <circle cx="8" cy="12" r="2" fill="#f97316"/>
        <circle cx="32" cy="12" r="2" fill="#f97316"/>
        <circle cx="8" cy="28" r="2" fill="#0ea5e9"/>
        <circle cx="32" cy="28" r="2" fill="#0ea5e9"/>
        <circle cx="8" cy="20" r="1.5" fill="#f97316" opacity="0.7"/>
        <circle cx="28" cy="20" r="1.5" fill="#fbbf24" opacity="0.7"/>
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="esakha-logo-text text-xl">Esakha</span>
          <span className="text-[9px] text-slate-500 font-body tracking-widest uppercase">Digital Services</span>
        </div>
      )}
    </div>
  )
}
