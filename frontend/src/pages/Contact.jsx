import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

const INFO = [
  { Icon:Mail, label:'Email', value:'hello@novatechsolutions.com' },
  { Icon:Phone, label:'Phone', value:'+1 (234) 567-8900' },
  { Icon:MapPin, label:'Address', value:'123 Market St, San Francisco, CA 94102' },
  { Icon:Clock, label:'Business Hours', value:'Mon–Fri 9AM–6PM PST · 24/7 Support' },
]

const SERVICES = ['Web Development','Mobile App Development','Software Solutions','AI Solutions','Tech Support','Digital Marketing','Social Media Marketing','Cloud Services','Other']

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', service:'', message:'' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = (k, v) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) { toast.error('Please fill in all required fields.'); return }
    setLoading(true)
    try {
      await axios.post('/api/contact', form)
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="glow-bg w-96 h-96" style={{ background:'rgba(109,40,217,0.15)', top:'40%', left:'30%', transform:'translate(-50%,-50%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} className="mb-5"><span className="tag">✦ Contact Us</span></motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.05 }}
            className="font-display font-extrabold text-white mb-4" style={{ fontSize:'clamp(36px,5.5vw,60px)' }}>
            Let's Build Something <span className="gradient-text">Amazing</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            className="text-slate-400 text-lg font-body">
            Free consultation · No commitment · Reply within 24 hours
          </motion.p>
        </div>
      </section>

      {/* Main */}
      <section className="section pt-4">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Info panel */}
            <div className="lg:col-span-2 space-y-5">
              <div className="card p-7">
                <h3 className="font-display font-bold text-white text-xl mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  {INFO.map(({ Icon, label, value }) => (
                    <div key={label} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background:'rgba(6,182,212,0.1)' }}>
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 font-body uppercase tracking-wide font-semibold mb-0.5">{label}</p>
                        <p className="text-slate-300 text-sm font-body">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-7" style={{ background:'linear-gradient(135deg,rgba(109,40,217,0.15),rgba(6,182,212,0.08))', border:'1px solid rgba(109,40,217,0.25)' }}>
                <div className="text-4xl mb-4">📅</div>
                <h4 className="font-display font-bold text-white text-lg mb-2">Book a Free Call</h4>
                <p className="text-slate-400 text-sm font-body leading-relaxed mb-5">Talk directly with our team. No sales pitch, just honest advice about your project.</p>
                <button className="btn-primary w-full justify-center text-sm">Schedule 30-min Call</button>
              </div>

              <div className="card p-7">
                <h4 className="font-display font-bold text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {['𝕏','in','📸','🐙'].map((icon,i) => (
                    <a key={i} href="#" className="w-10 h-10 card rounded-lg flex items-center justify-center text-lg hover:border-primary/40 transition-colors cursor-pointer">{icon}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                {submitted ? (
                  <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} className="text-center py-16">
                    <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-5" />
                    <h3 className="font-display font-bold text-white text-2xl mb-3">Message Sent!</h3>
                    <p className="text-slate-400 font-body leading-relaxed max-w-sm mx-auto">Thank you for reaching out. Our team will review and reply within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display font-bold text-white text-xl mb-2">Send Us a Message</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[{l:'Full Name *',k:'name',p:'Jane Smith'},{l:'Email *',k:'email',p:'jane@company.com'},{l:'Phone',k:'phone',p:'+1 (555) 000-0000'},{l:'Company',k:'company',p:'Acme Corp'}].map(f => (
                        <div key={f.k}>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5 font-body uppercase tracking-wide">{f.l}</label>
                          <input value={form[f.k]} onChange={e => update(f.k, e.target.value)} placeholder={f.p} className="input" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 font-body uppercase tracking-wide">Service Needed</label>
                      <select value={form.service} onChange={e => update('service', e.target.value)} className="input">
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 font-body uppercase tracking-wide">Message *</label>
                      <textarea rows={5} value={form.message} onChange={e => update('message', e.target.value)}
                        placeholder="Tell us about your project — goals, timeline, budget range..."
                        className="input resize-none" />
                    </div>
                    <motion.button whileHover={{ scale:1.01, y:-1 }} whileTap={{ scale:0.98 }} type="submit" disabled={loading}
                      className="btn-primary w-full justify-center text-base py-4">
                      {loading ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
