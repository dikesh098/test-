import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Shield, Settings } from 'lucide-react'
import EsakhaLogo from './EsakhaLogo'

const SERVICES_MENU = [
  { label: 'Web Development', path: '/services/web-development', icon: '🌐' },
  { label: 'Mobile Development', path: '/services/mobile-development', icon: '📱' },
  { label: 'Software Solutions', path: '/services/software-solutions', icon: '⚙️' },
  { label: 'AI Solutions', path: '/services/ai-solutions', icon: '🤖' },
  { label: 'Tech Support', path: '/services/tech-support', icon: '🛡️' },
  { label: 'Digital Marketing', path: '/services/digital-marketing', icon: '📊' },
  { label: 'Social Media', path: '/services/social-media', icon: '📣' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false); setDropOpen(false) }, [pathname])

  const navLink = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors duration-150 ${isActive ? 'text-orange-400' : 'text-slate-400 hover:text-white'}`

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050d1a]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <EsakhaLogo size={36} showText={true} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <NavLink to="/" className={navLink} end>Home</NavLink>
          <NavLink to="/about" className={navLink}>About</NavLink>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors ${pathname.startsWith('/services') ? 'text-orange-400' : 'text-slate-400 hover:text-white'}`}>
              Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {dropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-60 card border border-white/5 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                >
                  {SERVICES_MENU.map(s => (
                    <Link key={s.path} to={s.path} className="flex items-center gap-3 px-4 py-3 hover:bg-orange-500/10 transition-colors group">
                      <span className="text-base">{s.icon}</span>
                      <span className="text-sm font-body text-slate-400 group-hover:text-white transition-colors">{s.label}</span>
                    </Link>
                  ))}
                  <div className="border-t border-white/5 p-3 text-center">
                    <Link to="/services" className="text-xs text-orange-400 hover:text-orange-300 font-semibold">All Services →</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Government Services - highlighted */}
          <NavLink to="/government-services" className={({ isActive }) =>
            `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors ${isActive ? 'text-green-400' : 'text-slate-400 hover:text-green-400'}`
          }>
            <Shield className="w-3.5 h-3.5" /> Gov Services
          </NavLink>

          <NavLink to="/blog" className={navLink}>Blog</NavLink>
          <NavLink to="/careers" className={navLink}>Careers</NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/admin" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-slate-500 hover:text-slate-300 border border-white/5 hover:border-white/10 transition-all">
            <Settings className="w-3.5 h-3.5" /> Admin
          </Link>
          <Link to="/contact" className="btn-outline text-xs py-2 px-4">Contact</Link>
          <Link to="/contact" className="btn-primary text-xs py-2 px-4">Get Started →</Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-400 hover:text-white">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-[#050d1a]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/government-services', '🏛️ Gov Services'], ['/blog', 'Blog'], ['/careers', 'Careers']].map(([path, label]) => (
                <NavLink key={path} to={path} end={path === '/'} className={navLink}>{label}</NavLink>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link to="/admin" className="btn-outline text-center text-sm">⚙️ Admin Panel</Link>
                <Link to="/contact" className="btn-outline text-center text-sm">Contact</Link>
                <Link to="/contact" className="btn-primary text-center text-sm">Get Started →</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
