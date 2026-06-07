import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ServicePage({ icon, title, subtitle, color, tag, offerings, process, faqs }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="glow-bg w-96 h-96" style={{ background:`${color}18`, top:'40%', left:'50%', transform:'translate(-50%,-50%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest font-body" style={{ background:`${color}15`, border:`1px solid ${color}30`, color }}>✦ {tag}</span>
          </motion.div>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.05 }} className="text-6xl mb-6">{icon}</motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.08 }}
            className="font-display font-extrabold text-white mb-4" style={{ fontSize:'clamp(32px,5vw,58px)' }}>{title}</motion.h1>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.12 }}
            className="text-slate-400 text-lg font-body leading-relaxed max-w-xl mx-auto mb-8">{subtitle}</motion.p>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.16 }} className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Start a Project <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/contact" className="btn-outline">Get Free Quote</Link>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section pt-4">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">What's Included</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o,i) => (
              <motion.div key={o.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                className="card p-6 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background:`linear-gradient(90deg,${color},transparent)` }} />
                <div className="text-3xl mb-3">{o.icon}</div>
                <h3 className="font-display font-bold text-white mb-2">{o.title}</h3>
                <p className="text-slate-400 text-sm font-body leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {process && (
        <section className="section" style={{ background:'rgba(15,28,46,0.4)' }}>
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Our Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((p,i) => (
                <motion.div key={p.step} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                  className="card p-6 text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-display font-black mx-auto mb-4" style={{ background:`${color}20`, color }}>{i+1}</div>
                  <h3 className="font-display font-bold text-white mb-2">{p.step}</h3>
                  <p className="text-slate-400 text-sm font-body leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why us */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-6">Why Choose NovaTech?</h2>
              {['5+ years of industry experience','Dedicated team for your project','Weekly progress updates & demos','Full source code ownership','Post-launch support included','Transparent, fixed-price quotes'].map((item,i) => (
                <motion.div key={item} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                  className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 shrink-0" style={{ color }} />
                  <span className="text-slate-400 text-sm font-body">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="card p-8 text-center">
              <div className="text-6xl mb-5">🚀</div>
              <h3 className="font-display font-bold text-white text-xl mb-3">Ready to Get Started?</h3>
              <p className="text-slate-400 text-sm font-body mb-6 leading-relaxed">Book a free 30-min consultation. We'll review your project and give you an honest quote.</p>
              <Link to="/contact" className="btn-primary w-full justify-center">Book Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
