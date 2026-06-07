import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
  { e:'🌐', t:'Web Development', c:'#6D28D9', p:'/services/web-development', d:'Corporate websites, landing pages, e-commerce, SaaS dashboards, CMS & SEO-optimized sites.', tags:['React','Next.js','WordPress','Shopify','Tailwind'] },
  { e:'📱', t:'Mobile Development', c:'#06B6D4', p:'/services/mobile-development', d:'Native Android, iOS, Flutter & React Native apps. Enterprise mobility & app store optimization.', tags:['Flutter','React Native','Swift','Kotlin','Firebase'] },
  { e:'⚙️', t:'Software Solutions', c:'#F59E0B', p:'/services/software-solutions', d:'ERP, CRM, HRMS, inventory systems, custom software & seamless system integrations.', tags:['Node.js','Python','PostgreSQL','MongoDB','REST APIs'] },
  { e:'🤖', t:'AI Solutions', c:'#10B981', p:'/services/ai-solutions', d:'OpenAI integrations, ML models, NLP pipelines, computer vision & intelligent automation.', tags:['OpenAI','LangChain','TensorFlow','Python','Pinecone'] },
  { e:'🛡️', t:'Tech Support', c:'#EF4444', p:'/services/tech-support', d:'24/7 monitoring, remote support, cloud management, server administration & security audits.', tags:['AWS','Linux','Docker','Monitoring','Security'] },
  { e:'📊', t:'Digital Marketing', c:'#8B5CF6', p:'/services/digital-marketing', d:'SEO, Google Ads, content marketing, email campaigns & conversion rate optimization.', tags:['SEO','Google Ads','Analytics','HubSpot','Mailchimp'] },
  { e:'📣', t:'Social Media', c:'#EC4899', p:'/services/social-media', d:'Instagram, Facebook, LinkedIn & YouTube strategy, brand building & influencer campaigns.', tags:['Instagram','Facebook Ads','LinkedIn','YouTube','Reels'] },
  { e:'☁️', t:'Cloud Services', c:'#0EA5E9', p:'/services', d:'AWS, GCP & Azure architecture, Kubernetes clusters, serverless & CI/CD pipelines.', tags:['AWS','GCP','Azure','Kubernetes','Terraform'] },
]

export default function Services() {
  return (
    <div>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="glow-bg w-96 h-96" style={{ background:'rgba(6,182,212,0.12)', top:'40%', right:'20%', transform:'translate(50%,-50%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} className="mb-5"><span className="tag">✦ Services</span></motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.05 }}
            className="font-display font-extrabold text-white mb-4" style={{ fontSize:'clamp(36px,5vw,60px)' }}>
            Everything You Need to <span className="gradient-text">Win Online</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            className="text-slate-400 text-lg font-body max-w-xl mx-auto">
            8 core services. 1 world-class team. End-to-end digital solutions for any business size.
          </motion.p>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s,i) => (
              <motion.div key={s.t} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.06 }}
                whileHover={{ y:-4 }} className="card p-7 relative overflow-hidden group" style={{ borderColor:'rgba(255,255,255,0.05)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background:`linear-gradient(90deg,${s.c},transparent)` }} />
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10" style={{ background:s.c }} />
                <div className="flex items-start gap-5 mb-5">
                  <div className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background:`${s.c}20` }}>{s.e}</div>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl mb-2">{s.t}</h3>
                    <p className="text-slate-400 text-sm font-body leading-relaxed">{s.d}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-body" style={{ background:`${s.c}15`, border:`1px solid ${s.c}25`, color:s.c }}>{tag}</span>
                  ))}
                </div>
                <Link to={s.p} className="flex items-center gap-1 text-sm font-semibold font-display transition-colors" style={{ color:s.c }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mt-16">
            <p className="text-slate-400 font-body mb-6">Not sure which service fits your needs?</p>
            <Link to="/contact" className="btn-primary">Get Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
