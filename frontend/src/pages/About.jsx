import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const VALUES = [
  { e:'🎯', t:'Precision', d:'We sweat every detail — code quality, pixel-perfect design, and blazing performance.' },
  { e:'🚀', t:'Speed', d:'Agile delivery without cutting corners. MVP in weeks, full product in months.' },
  { e:'🤝', t:'Partnership', d:'We don\'t just build for you — we build with you as true long-term partners.' },
  { e:'🔒', t:'Integrity', d:'Transparent pricing, honest timelines, and zero hidden surprises. Ever.' },
  { e:'💡', t:'Innovation', d:'We stay on the cutting edge so your product is always ahead of the curve.' },
  { e:'🌍', t:'Impact', d:'We measure success by the real-world results we drive for your business.' },
]
const TEAM = [
  { n:'Aryan Shah', r:'CEO & Co-Founder', e:'👨‍💼', b:'10+ years building scalable products at Google & multiple startups.' },
  { n:'Mia Tanaka', r:'CTO & Co-Founder', e:'👩‍💻', b:'Ex-Netflix engineer. Expert in cloud architecture and AI systems.' },
  { n:'Carlos Mendez', r:'Head of Design', e:'🎨', b:'Award-winning UX designer with a product-first mindset.' },
  { n:'Priya Sharma', r:'Head of Marketing', e:'📊', b:'Growth hacker who scaled 3 startups to 7-figure revenue.' },
]
const TIMELINE = [
  { y:'2019', t:'Esakha founded in San Francisco with 2 developers and a big dream.' },
  { y:'2020', t:'First 10 clients. Expanded into mobile development. Team of 5.' },
  { y:'2021', t:'Launched AI division. 25+ projects delivered. Team of 15.' },
  { y:'2022', t:'50+ projects live. Second office opened in Austin, TX.' },
  { y:'2023', t:'Digital marketing services launched. $5M+ in client revenue generated.' },
  { y:'2024+', t:'Global expansion. Serving clients across 12 countries.' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="glow-bg w-96 h-96" style={{ background:'rgba(109,40,217,0.15)', top:'40%', left:'50%', transform:'translate(-50%,-50%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} className="mb-5"><span className="tag">✦ Our Story</span></motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.05 }}
            className="font-display font-extrabold text-white mb-4" style={{ fontSize:'clamp(36px,5.5vw,64px)' }}>
            Built by Builders, <span className="gradient-text">For Builders</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            className="text-slate-400 text-lg font-body leading-relaxed max-w-xl mx-auto">
            We started Esakha because we saw too many businesses struggle with unreliable tech partners. World-class work, total transparency.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {[{e:'🎯',t:'Our Mission',d:'To empower businesses of every size with world-class digital products — making cutting-edge technology accessible, affordable, and impactful.'},{e:'🔭',t:'Our Vision',d:'To be the most trusted digital agency in the world, known for delivering products that genuinely transform businesses and improve people\'s lives.'}].map((x,i) => (
              <motion.div key={x.t} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }} className="card p-8">
                <div className="text-4xl mb-4">{x.e}</div>
                <h3 className="font-display font-bold text-white text-2xl mb-4">{x.t}</h3>
                <p className="text-slate-400 font-body leading-relaxed">{x.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background:'rgba(15,28,46,0.4)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-flex">✦ Our Values</span>
            <h2 className="font-display font-extrabold text-4xl text-white">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v,i) => (
              <motion.div key={v.t} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                whileHover={{ y:-4 }} className="card p-6 flex gap-4">
                <span className="text-3xl shrink-0">{v.e}</span>
                <div>
                  <h3 className="font-display font-bold text-white mb-2">{v.t}</h3>
                  <p className="text-slate-400 text-sm font-body leading-relaxed">{v.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-flex">✦ Journey</span>
            <h2 className="font-display font-extrabold text-4xl text-white">How We Got Here</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 opacity-20" style={{ background:'linear-gradient(to bottom,#6D28D9,#06B6D4)' }} />
            {TIMELINE.map((t,i) => (
              <motion.div key={t.y} initial={{ opacity:0, x:i%2===0?-40:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className={`flex ${i%2===0?'justify-start':'justify-end'} mb-8 relative`}>
                <div className="absolute left-1/2 top-5 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-dark z-10" />
                <div className="w-5/12 card p-5">
                  <div className="font-display font-black text-2xl gradient-text mb-2">{t.y}</div>
                  <p className="text-slate-400 text-sm font-body leading-relaxed">{t.t}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background:'rgba(15,28,46,0.4)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-flex">✦ The Team</span>
            <h2 className="font-display font-extrabold text-4xl text-white">Meet the Leadership</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m,i) => (
              <motion.div key={m.n} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                whileHover={{ y:-6 }} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4" style={{ background:'rgba(109,40,217,0.2)' }}>{m.e}</div>
                <h3 className="font-display font-bold text-white mb-1">{m.n}</h3>
                <p className="text-cyan-400 text-xs font-semibold font-body mb-3">{m.r}</p>
                <p className="text-slate-500 text-xs font-body leading-relaxed">{m.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card p-12 text-center rounded-3xl">
            <h2 className="font-display font-extrabold text-4xl text-white mb-4">Want to Work With Us?</h2>
            <p className="text-slate-400 font-body text-lg mb-8">Let's build something incredible together.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">Start a Project <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/careers" className="btn-outline">Join Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
