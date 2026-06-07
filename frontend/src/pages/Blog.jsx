import { useState } from 'react'
import { motion } from 'framer-motion'

const POSTS = [
  { title:'Building Scalable React Apps in 2025', cat:'Technology', e:'⚛️', read:'6 min', date:'Jun 1, 2025', color:'#6D28D9', desc:'Best practices for state management, code splitting, and performance in large React applications.' },
  { title:'How GPT-4o is Changing Product Development', cat:'AI', e:'🤖', read:'8 min', date:'May 28, 2025', color:'#10B981', desc:'Real-world examples of how teams are shipping features 3x faster using AI-assisted development.' },
  { title:'The Complete Guide to App Store Optimisation', cat:'Mobile', e:'📱', read:'10 min', date:'May 22, 2025', color:'#06B6D4', desc:'Step-by-step ASO strategies that increased our clients\' downloads by 200% in 90 days.' },
  { title:'Why 90% of Digital Marketing Campaigns Fail', cat:'Marketing', e:'📊', read:'5 min', date:'May 18, 2025', color:'#F59E0B', desc:'The common mistakes killing your ROI and exactly how to fix them with data-driven strategies.' },
  { title:'Zero-Trust Security for Modern SaaS Products', cat:'Cybersecurity', e:'🛡️', read:'7 min', date:'May 12, 2025', color:'#EF4444', desc:'How to implement zero-trust architecture without slowing down your development team.' },
  { title:'From Idea to $1M ARR: The Startup Playbook', cat:'Business', e:'🚀', read:'12 min', date:'May 5, 2025', color:'#EC4899', desc:'The exact playbook we\'ve seen work across 10+ startups — from MVP to product-market fit.' },
  { title:'Flutter vs React Native in 2025', cat:'Mobile', e:'📲', read:'9 min', date:'Apr 28, 2025', color:'#06B6D4', desc:'A comprehensive comparison to help you choose the right cross-platform framework.' },
  { title:'Cloud Cost Optimisation: Save 40% on AWS', cat:'Technology', e:'☁️', read:'7 min', date:'Apr 20, 2025', color:'#6D28D9', desc:'Proven techniques our DevOps team uses to slash cloud bills without sacrificing performance.' },
  { title:'The Rise of AI Agents in Enterprise Software', cat:'AI', e:'🧠', read:'11 min', date:'Apr 15, 2025', color:'#10B981', desc:'How autonomous AI agents are replacing entire workflows in forward-thinking companies.' },
]

const TAGS = ['All','Technology','AI','Mobile','Marketing','Cybersecurity','Business']

export default function Blog() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? POSTS : POSTS.filter(p => p.cat === active)

  return (
    <div>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="glow-bg w-80 h-80" style={{ background:'rgba(6,182,212,0.12)', top:'40%', right:'20%', transform:'translate(50%,-50%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} className="mb-5"><span className="tag">✦ Blog & Resources</span></motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.05 }}
            className="font-display font-extrabold text-white mb-6" style={{ fontSize:'clamp(36px,5vw,60px)' }}>
            Insights & Ideas
          </motion.h1>
          <div className="flex flex-wrap gap-2">
            {TAGS.map(t => (
              <button key={t} onClick={() => setActive(t)}
                className="px-4 py-2 rounded-full text-xs font-semibold font-body transition-all"
                style={{ background: t===active ? 'rgba(6,182,212,0.15)' : 'transparent', border:`1px solid ${t===active ? 'rgba(6,182,212,0.4)' : 'rgba(255,255,255,0.07)'}`, color: t===active ? '#06B6D4' : '#64748B' }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post,i) => (
              <motion.article key={post.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                whileHover={{ y:-6 }} className="card overflow-hidden cursor-pointer group">
                <div className="h-40 flex items-center justify-center text-6xl relative" style={{ background:`linear-gradient(135deg,${post.color}25,${post.color}08)` }}>
                  {post.e}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold font-body" style={{ background:`${post.color}20`, border:`1px solid ${post.color}35`, color:post.color }}>{post.cat}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-white text-base mb-2 leading-snug group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-xs font-body leading-relaxed mb-4">{post.desc}</p>
                  <div className="flex justify-between items-center text-xs font-body">
                    <span className="text-slate-600">{post.date}</span>
                    <span className="text-cyan-400">⏱ {post.read} read</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="card p-10 md:p-14 text-center rounded-3xl" style={{ background:'linear-gradient(135deg,rgba(109,40,217,0.15),rgba(6,182,212,0.08))', border:'1px solid rgba(109,40,217,0.2)' }}>
            <div className="text-5xl mb-5">📬</div>
            <h2 className="font-display font-extrabold text-white text-3xl mb-3">Never Miss an Insight</h2>
            <p className="text-slate-400 font-body mb-8 max-w-md mx-auto">Weekly articles on tech, AI, and digital growth — delivered straight to your inbox.</p>
            <form className="flex gap-3 max-w-md mx-auto" onSubmit={e => { e.preventDefault(); e.target.reset() }}>
              <input type="email" placeholder="your@email.com" required className="input flex-1" />
              <button type="submit" className="btn-primary shrink-0">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
