import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Shield } from 'lucide-react'

const WORDS = ['Websites', 'Mobile Apps', 'AI Tools', 'ERP Systems', 'Gov Services']
const SERVICES = [
  { icon:'🌐', title:'Web Development', desc:'Corporate sites, e-commerce & SaaS dashboards built to convert.', color:'#f97316', path:'/services/web-development' },
  { icon:'📱', title:'Mobile Development', desc:'Native Android, iOS & Flutter apps built to scale.', color:'#0ea5e9', path:'/services/mobile-development' },
  { icon:'⚙️', title:'Software Solutions', desc:'ERP, CRM, HRMS & custom enterprise software.', color:'#fbbf24', path:'/services/software-solutions' },
  { icon:'🤖', title:'AI Solutions', desc:'ChatGPT integrations, ML models & automation.', color:'#10B981', path:'/services/ai-solutions' },
  { icon:'🛡️', title:'Tech Support', desc:'24/7 monitoring, cloud management & security.', color:'#EF4444', path:'/services/tech-support' },
  { icon:'📊', title:'Digital Marketing', desc:'SEO, Google Ads, content & conversion optimization.', color:'#8B5CF6', path:'/services/digital-marketing' },
  { icon:'📣', title:'Social Media', desc:'Instagram, Facebook, LinkedIn & YouTube growth.', color:'#EC4899', path:'/services/social-media' },
  { icon:'🏛️', title:'Government Services', desc:'PAN, Aadhaar, passport, insurance & 50+ gov portals.', color:'#22c55e', path:'/government-services' },
  { icon:'💳', title:'Payment Solutions', desc:'Razorpay integration, UPI, payment gateways & more.', color:'#a855f7', path:'/services' },
]
const STATS = [{ n:500, s:'+', l:'Projects Delivered' },{ n:98, s:'%', l:'Client Satisfaction' },{ n:24, s:'/7', l:'Support' },{ n:7, s:'+', l:'Years Experience' }]
const PORTFOLIO = [
  { title:'HealthTrack Pro', cat:'Mobile App', color:'#0ea5e9', e:'🏥' },
  { title:'ShopEsakha Platform', cat:'E-Commerce', color:'#f97316', e:'🛒' },
  { title:'FleetIQ ERP', cat:'Enterprise Software', color:'#fbbf24', e:'🏭' },
  { title:'NexusAI Support', cat:'AI Solution', color:'#10B981', e:'🤖' },
  { title:'EduSpark LMS', cat:'Web App', color:'#EF4444', e:'📚' },
  { title:'GovEase Portal', cat:'Gov Services', color:'#22c55e', e:'🏛️' },
]
const TESTIMONIALS = [
  { name:'Rahul Mehta', role:'CEO, TechStartup India', text:'Esakha transformed our digital infrastructure. Delivered beyond expectations — on time and on budget. Truly exceptional team!', avatar:'👨‍💼' },
  { name:'Sunita Sharma', role:'Founder, ShopEsakha', text:'From zero to ₹2Cr GMV in 6 months. The platform they built is rock solid. Best tech partner in India.', avatar:'👩‍💼' },
  { name:'Priya Nair', role:'Director, FleetIQ', text:'The ERP replaced 4 legacy tools. AI automation saved us 200+ hours/month. Incredible team and support.', avatar:'👩‍🔬' },
]
const BADGES = ['React','Node.js','Flutter','AWS','OpenAI','MongoDB','Python','Next.js','Docker','Razorpay','UPI','DigiLocker']

function CountUp({ n, s }) {
  const [c, setC] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const step = Math.ceil(n / 40)
        let cur = 0
        const t = setInterval(() => { cur += step; if (cur >= n) { setC(n); clearInterval(t) } else setC(cur) }, 40)
      }
    })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [n])
  return <span ref={ref}>{c}{s}</span>
}

export default function Home() {
  const [wi, setWi] = useState(0)
  const [ti, setTi] = useState(0)
  useEffect(() => { const t = setInterval(() => setWi(i => (i+1)%WORDS.length), 2500); return () => clearInterval(t) }, [])
  useEffect(() => { const t = setInterval(() => setTi(i => (i+1)%TESTIMONIALS.length), 4500); return () => clearInterval(t) }, [])

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-16">
        <div className="absolute inset-0 grid-bg" />
        <div className="glow-bg w-96 h-96 top-1/3 left-1/4" style={{ background:'rgba(249,115,22,0.15)' }} />
        <div className="glow-bg w-80 h-80 top-1/2 right-1/4" style={{ background:'rgba(14,165,233,0.12)' }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="mb-6">
            <span className="tag">🚀 Trusted by 500+ Businesses Across India</span>
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            className="font-display font-extrabold leading-tight mb-3 text-white"
            style={{ fontSize:'clamp(38px,6.5vw,78px)' }}>
            Esakha Builds World-Class
          </motion.h1>
          <div style={{ height:'clamp(48px,8vw,88px)', marginBottom:12 }}>
            <AnimatePresence mode="wait">
              <motion.h1 key={wi} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} transition={{ duration:0.35 }}
                className="font-display font-extrabold gradient-text" style={{ fontSize:'clamp(38px,6.5vw,78px)', lineHeight:1.1 }}>
                {WORDS[wi]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Esakha turns your ideas into powerful digital products — fast, scalable, and built to grow your business across India and beyond.
          </motion.p>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-6">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Get Free Consultation <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/services" className="btn-outline text-base px-8 py-4">Explore Services</Link>
          </motion.div>
          {/* Government Services CTA */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4 }} className="mb-10">
            <Link to="/government-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-display font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ background:'linear-gradient(135deg,#166534,#15803d)', boxShadow:'0 4px 20px rgba(22,101,52,0.35)' }}>
              <Shield className="w-4 h-4" /> Government Services Portal
            </Link>
          </motion.div>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }} className="flex flex-wrap gap-2 justify-center">
            {BADGES.map((b,i) => (
              <motion.span key={b} animate={{ y:[0,-5,0] }} transition={{ duration:3, repeat:Infinity, delay:i*0.25 }}
                className="px-3 py-1.5 rounded-full text-xs text-slate-500 font-mono border border-white/5 bg-card/60 backdrop-blur-sm">
                {b}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5 card overflow-hidden">
            {STATS.map((s,i) => (
              <motion.div key={s.l} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="py-8 px-6 text-center">
                <div className="font-display font-black text-4xl gradient-text mb-1"><CountUp n={s.n} s={s.s} /></div>
                <div className="text-slate-500 text-sm font-body">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-4"><span className="tag">✦ What We Do</span></motion.div>
            <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">Full-Stack Digital Services</motion.h2>
            <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} className="text-slate-400 text-lg max-w-xl mx-auto font-body">Everything your business needs to win online — under one roof.</motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s,i) => (
              <motion.div key={s.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                whileHover={{ y:-6 }} className="card p-6 relative overflow-hidden cursor-pointer group">
                <div className="absolute top-0 inset-x-0 h-0.5 opacity-60" style={{ background:`linear-gradient(90deg,${s.color},transparent)` }} />
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-body mb-4">{s.desc}</p>
                <Link to={s.path} className="text-sm font-semibold font-display transition-colors" style={{ color:s.color }}>Learn more →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RAZORPAY PAYMENT SECTION */}
      <section className="section" style={{ background:'rgba(10,20,40,0.5)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="tag mb-5 inline-flex">💳 Secure Payments</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6">Pay Securely with <span className="gradient-text">Razorpay</span></h2>
              <p className="text-slate-400 text-lg font-body mb-8 leading-relaxed">We've integrated India's most trusted payment gateway. Pay for services instantly via UPI, cards, netbanking or wallets.</p>
              {['UPI (PhonePe, GPay, Paytm)','Credit & Debit Cards','Net Banking (All Banks)','EMI Options Available','100% Secure & Encrypted','Instant Payment Confirmation'].map((item,i) => (
                <motion.div key={item} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                  className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                  <span className="text-slate-400 text-sm font-body">{item}</span>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-primary inline-flex mt-6">Pay for Services <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="card p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">💳</div>
                <h3 className="font-display font-bold text-white text-xl">Quick Payment</h3>
                <p className="text-slate-400 text-sm mt-1">Pay for Esakha services securely</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-slate-500 font-body mb-1.5 block">Service</label>
                  <select className="input">
                    <option value="">Select Service</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Digital Marketing</option>
                    <option>Government Service</option>
                    <option>Custom Package</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-body mb-1.5 block">Amount (₹)</label>
                  <input type="number" className="input" placeholder="Enter amount" />
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-body mb-1.5 block">Your Email</label>
                  <input type="email" className="input" placeholder="your@email.com" />
                </div>
                <RazorpayButton />
              </div>
              <p className="text-center text-xs text-slate-600 mt-4 font-body">🔒 Powered by Razorpay — India's #1 Payment Gateway</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-flex">✦ Our Work</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white">Recent Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map((p,i) => (
              <motion.div key={p.title} initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                whileHover={{ y:-6 }} className="card overflow-hidden cursor-pointer">
                <div className="h-36 flex items-center justify-center text-6xl relative" style={{ background:`linear-gradient(135deg,${p.color}25,${p.color}08)` }}>
                  {p.e}
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold font-body" style={{ background:`${p.color}25`, border:`1px solid ${p.color}40`, color:p.color }}>{p.cat}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-white">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background:'rgba(15,28,46,0.4)' }}>
        <div className="max-w-3xl mx-auto text-center px-4">
          <span className="tag mb-5 inline-flex">✦ Client Love</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-12">What Clients Say</h2>
          <AnimatePresence mode="wait">
            <motion.div key={ti} initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-40 }} transition={{ duration:0.35 }} className="card p-10">
              <div className="text-5xl mb-5">{TESTIMONIALS[ti].avatar}</div>
              <div className="flex justify-center gap-1 mb-5">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-orange-400 text-orange-400" />)}</div>
              <p className="text-slate-200 text-lg font-body italic leading-relaxed mb-6">"{TESTIMONIALS[ti].text}"</p>
              <div className="font-display font-bold text-orange-400">{TESTIMONIALS[ti].name}</div>
              <div className="text-slate-500 text-sm font-body">{TESTIMONIALS[ti].role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_,i) => (
              <button key={i} onClick={() => setTi(i)} className={`rounded-full transition-all duration-300 ${i===ti ? 'w-6 h-2 bg-orange-400' : 'w-2 h-2 bg-white/15'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
            style={{ background:'linear-gradient(135deg,rgba(249,115,22,0.2),rgba(14,165,233,0.1))', border:'1px solid rgba(249,115,22,0.25)' }}>
            <div className="glow-bg w-64 h-64" style={{ background:'rgba(249,115,22,0.25)', top:'50%', left:'25%', transform:'translate(-50%,-50%)' }} />
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">Ready to Scale Your Business?</h2>
              <p className="text-slate-400 text-lg font-body mb-10 max-w-xl mx-auto">Book a free 30-minute consultation. No commitment. Just honest advice from Esakha.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-base px-8 py-4">Book Free Consultation <ArrowRight className="w-5 h-5" /></Link>
                <Link to="/government-services" className="btn-gov text-base px-8 py-4"><Shield className="w-4 h-4" /> Gov Services</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function RazorpayButton() {
  const handlePayment = () => {
    if (typeof window.Razorpay === 'undefined') {
      alert('Razorpay SDK loading. In production, add your Razorpay Key ID in the configuration.')
      return
    }
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with actual key
      amount: 50000, // Amount in paise (₹500)
      currency: 'INR',
      name: 'Esakha Digital Services',
      description: 'Service Payment',
      image: '/logo.png',
      handler: function(response) {
        alert('Payment Successful! ID: ' + response.razorpay_payment_id)
      },
      prefill: { name: '', email: '', contact: '' },
      theme: { color: '#f97316' }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <button onClick={handlePayment}
      className="w-full btn-primary py-3 text-base justify-center">
      💳 Pay with Razorpay
    </button>
  )
}
