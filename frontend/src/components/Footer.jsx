import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Mail, Phone, MapPin, Shield } from 'lucide-react'
import EsakhaLogo from './EsakhaLogo'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Footer() {
  const [email, setEmail] = useState('')
  const handleSub = async (e) => {
    e.preventDefault()
    try { await axios.post('/api/newsletter', { email }); toast.success('Subscribed!'); setEmail('') }
    catch { toast.success('Subscribed!'); setEmail('') }
  }

  return (
    <footer className="border-t border-white/5 bg-[#050d1a]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <EsakhaLogo size={32} showText={true} />
            </Link>
            <p className="text-slate-500 text-sm font-body leading-relaxed mb-5">
              Esakha — Your trusted digital partner for IT services & Government portal solutions across India.
            </p>
            <div className="space-y-2">
              {[
                { Icon: Mail, text: 'hello@esakha.in' },
                { Icon: Phone, text: '+91 98765 43210' },
                { Icon: MapPin, text: 'India' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-slate-500 font-body">
                  <Icon className="w-3.5 h-3.5 text-orange-400 shrink-0" /> {text}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {[['Web Development','/services/web-development'],['Mobile Apps','/services/mobile-development'],['Software Solutions','/services/software-solutions'],['AI Solutions','/services/ai-solutions'],['Digital Marketing','/services/digital-marketing']].map(([l,p]) => (
                <li key={p}><Link to={p} className="text-slate-500 hover:text-white text-sm font-body transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[['About Us','/about'],['Blog','/blog'],['Careers','/careers'],['Contact','/contact']].map(([l,p]) => (
                <li key={p}><Link to={p} className="text-slate-500 hover:text-white text-sm font-body transition-colors">{l}</Link></li>
              ))}
              <li>
                <Link to="/government-services" className="flex items-center gap-1.5 text-green-500 hover:text-green-400 text-sm font-body transition-colors">
                  <Shield className="w-3.5 h-3.5" /> Gov Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-5">Newsletter</h4>
            <p className="text-slate-500 text-sm font-body mb-4 leading-relaxed">Weekly tech & growth insights for Indian businesses.</p>
            <form onSubmit={handleSub} className="flex gap-2">
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" type="email" required className="input flex-1 text-xs py-2 px-3" />
              <button type="submit" className="btn-primary py-2 px-3 text-sm">→</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-body">© {new Date().getFullYear()} Esakha Digital Services. All rights reserved. | www.esakha.in</p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms','Cookies'].map(l => (
              <a key={l} href="#" className="text-slate-600 hover:text-slate-400 text-xs font-body transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
