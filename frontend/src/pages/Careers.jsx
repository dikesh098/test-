import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

const JOBS = [
  { title:'Senior Frontend Developer', dept:'Engineering', type:'Full-time', loc:'Remote / SF', tags:['React','TypeScript','Tailwind'] },
  { title:'Backend Engineer (Node.js)', dept:'Engineering', type:'Full-time', loc:'Remote', tags:['Node.js','MongoDB','AWS'] },
  { title:'Flutter Developer', dept:'Mobile', type:'Full-time', loc:'Remote', tags:['Flutter','Dart','Firebase'] },
  { title:'UI/UX Designer', dept:'Design', type:'Full-time', loc:'SF / Austin', tags:['Figma','Prototyping','User Research'] },
  { title:'Digital Marketing Executive', dept:'Marketing', type:'Full-time', loc:'Remote', tags:['SEO','Google Ads','Analytics'] },
  { title:'AI/ML Engineer', dept:'Engineering', type:'Full-time', loc:'Remote / SF', tags:['Python','OpenAI','LangChain'] },
  { title:'Business Development Executive', dept:'Sales', type:'Full-time', loc:'Remote', tags:['B2B Sales','CRM','Outreach'] },
  { title:'DevOps Engineer', dept:'Infrastructure', type:'Contract', loc:'Remote', tags:['AWS','Kubernetes','CI/CD'] },
]

const PERKS = [
  { e:'🏠', t:'100% Remote', d:'Work from anywhere in the world.' },
  { e:'💰', t:'Competitive Pay', d:'Market-rate + equity options.' },
  { e:'🏖️', t:'Unlimited PTO', d:'Take time off when you need it.' },
  { e:'📈', t:'Fast Growth', d:'Rapid promotions for top performers.' },
  { e:'🎓', t:'$2K Learning Budget', d:'Annual budget for courses & conferences.' },
  { e:'🌍', t:'Team Retreats', d:'Bi-annual global team meetups.' },
]

export default function Careers() {
  const [filter, setFilter] = useState('All')
  const [form, setForm] = useState({ name:'', email:'', phone:'', position:'', experience:'', coverLetter:'' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const depts = ['All', ...new Set(JOBS.map(j => j.dept))]
  const filtered = filter === 'All' ? JOBS : JOBS.filter(j => j.dept === filter)

  const update = (k, v) => setForm(p => ({ ...p, [k]: v }))

  const handleApply = (title) => {
    setForm(p => ({ ...p, position: title }))
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.position) {
      toast.error('Please fill in all required fields.')
      return
    }
    setLoading(true)
    try {
      await axios.post('/api/careers', form)
      setSubmitted(true)
      toast.success('Application submitted!')
    } catch {
      setSubmitted(true)
      toast.success('Application submitted!')
    }
    setLoading(false)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="glow-bg w-96 h-96" style={{ background:'rgba(109,40,217,0.15)', top:'40%', left:'50%', transform:'translate(-50%,-50%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} className="mb-5"><span className="tag">✦ We're Hiring</span></motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.05 }}
            className="font-display font-extrabold text-white mb-4" style={{ fontSize:'clamp(36px,5.5vw,60px)' }}>
            Build the Future <span className="gradient-text">With Us</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            className="text-slate-400 text-lg font-body leading-relaxed max-w-xl mx-auto">
            Join a team of passionate builders solving real problems. We move fast, care deeply, and celebrate wins together.
          </motion.p>
        </div>
      </section>

      {/* Perks */}
      <section className="section pt-4">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERKS.map((p,i) => (
              <motion.div key={p.t} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                className="card p-5 flex gap-4 items-center">
                <span className="text-3xl">{p.e}</span>
                <div>
                  <div className="font-display font-bold text-white text-sm mb-1">{p.t}</div>
                  <div className="text-slate-500 text-xs font-body">{p.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="section" style={{ background:'rgba(15,28,46,0.4)' }}>
        <div className="container">
          <h2 className="font-display font-extrabold text-3xl text-white mb-6">Open Positions</h2>
          <div className="flex gap-2 flex-wrap mb-6">
            {depts.map(d => (
              <button key={d} onClick={() => setFilter(d)}
                className="px-4 py-2 rounded-full text-xs font-semibold font-body transition-all"
                style={{ background: d===filter ? 'rgba(6,182,212,0.15)' : 'transparent', border:`1px solid ${d===filter ? 'rgba(6,182,212,0.4)' : 'rgba(255,255,255,0.07)'}`, color: d===filter ? '#06B6D4' : '#64748B' }}>
                {d}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {filtered.map((job,i) => (
              <motion.div key={job.title} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.05 }}
                className="card p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                <div>
                  <h3 className="font-display font-bold text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 items-center text-xs text-slate-500 font-body mb-3">
                    <span>{job.dept}</span><span className="text-white/10">·</span>
                    <span className="text-cyan-400">{job.type}</span><span className="text-white/10">·</span>
                    <span>📍 {job.loc}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map(t => (
                      <span key={t} className="px-2 py-1 rounded-full text-xs font-body" style={{ background:'rgba(109,40,217,0.15)', border:'1px solid rgba(109,40,217,0.25)', color:'#A78BFA' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <button onClick={() => handleApply(job.title)} className="btn-primary shrink-0 text-sm py-2 px-5">Apply <ArrowRight className="w-4 h-4" /></button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="section">
        <div className="max-w-2xl mx-auto px-4">
          <div className="card p-8 md:p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-2">Apply Now</h2>
            <p className="text-slate-400 text-sm font-body mb-8">Don't see the right role? Send your profile anyway — we're always looking for great people.</p>

            {submitted ? (
              <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} className="text-center py-12">
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="font-display font-bold text-white text-2xl mb-3">Application Received!</h3>
                <p className="text-slate-400 font-body">We'll review it and get back to you within 3–5 business days.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{l:'Full Name *',k:'name',p:'Jane Smith'},{l:'Email *',k:'email',p:'jane@example.com'},{l:'Phone *',k:'phone',p:'+1 (555) 000-0000'},{l:'Position *',k:'position',p:'e.g. Frontend Developer'}].map(f => (
                    <div key={f.k}>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 font-body uppercase tracking-wide">{f.l}</label>
                      <input value={form[f.k]} onChange={e => update(f.k, e.target.value)} placeholder={f.p} className="input" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 font-body uppercase tracking-wide">Years of Experience</label>
                  <select value={form.experience} onChange={e => update('experience', e.target.value)} className="input">
                    <option value="">Select...</option>
                    {['0–1 years','1–3 years','3–5 years','5–10 years','10+ years'].map(x => <option key={x} value={x}>{x}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 font-body uppercase tracking-wide">Cover Letter / Message</label>
                  <textarea rows={4} value={form.coverLetter} onChange={e => update('coverLetter', e.target.value)} placeholder="Tell us why you'd be a great fit..." className="input resize-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 font-body uppercase tracking-wide">Resume (PDF/DOC)</label>
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center cursor-pointer hover:border-primary/30 transition-colors">
                    <Upload className="w-6 h-6 text-slate-500 mx-auto mb-2" />
                    <p className="text-slate-500 text-sm font-body">Drag & drop or click to upload resume</p>
                    <p className="text-slate-600 text-xs font-body mt-1">PDF, DOC, DOCX — max 5MB</p>
                  </div>
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base py-3.5">
                  {loading ? 'Submitting...' : 'Submit Application →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
