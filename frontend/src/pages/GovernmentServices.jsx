import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle, Clock, Star, Phone, FileText, CreditCard, Users, Home as HomeIcon } from 'lucide-react'

const GOV_CATEGORIES = [
  {
    title: 'Identity & Aadhaar Services',
    icon: '🪪',
    color: '#f97316',
    services: [
      { name: 'Aadhaar Card Update', desc: 'Update name, address, mobile, DOB on Aadhaar', fee: '₹50', time: '3-5 days', portal: 'UIDAI' },
      { name: 'Aadhaar New Enrollment', desc: 'Fresh Aadhaar enrollment assistance', fee: '₹100', time: '7-10 days', portal: 'UIDAI' },
      { name: 'Aadhaar Download', desc: 'e-Aadhaar / mAadhaar download help', fee: '₹20', time: 'Same day', portal: 'UIDAI' },
      { name: 'PAN Card Apply/Update', desc: 'New PAN or correction in existing PAN', fee: '₹150', time: '15-20 days', portal: 'NSDL/UTIITSL' },
    ]
  },
  {
    title: 'Passport & Travel',
    icon: '📔',
    color: '#0ea5e9',
    services: [
      { name: 'Passport Fresh Apply', desc: 'New passport application assistance', fee: '₹300', time: '15-30 days', portal: 'Passport Seva' },
      { name: 'Passport Renewal', desc: 'Re-issue of expired or expiring passport', fee: '₹300', time: '15-30 days', portal: 'Passport Seva' },
      { name: 'Tatkal Passport', desc: 'Urgent passport through Tatkal scheme', fee: '₹500', time: '7-10 days', portal: 'Passport Seva' },
      { name: 'Police Clearance Certificate', desc: 'PCC for visa/immigration purposes', fee: '₹250', time: '10-15 days', portal: 'Passport Seva' },
    ]
  },
  {
    title: 'Income Tax & Finance',
    icon: '💰',
    color: '#fbbf24',
    services: [
      { name: 'ITR Filing', desc: 'Income Tax Return filing for individuals/business', fee: '₹299', time: '1-2 days', portal: 'Income Tax' },
      { name: 'Form 26AS / AIS', desc: 'Tax credit & Annual Information Statement', fee: '₹50', time: 'Same day', portal: 'Income Tax' },
      { name: 'GST Registration', desc: 'New GST registration for businesses', fee: '₹499', time: '7-10 days', portal: 'GST Portal' },
      { name: 'GST Return Filing', desc: 'Monthly/quarterly GST return filing', fee: '₹199/month', time: '1-2 days', portal: 'GST Portal' },
    ]
  },
  {
    title: 'Certificates & Documents',
    icon: '📜',
    color: '#22c55e',
    services: [
      { name: 'Birth Certificate', desc: 'Birth certificate application/correction', fee: '₹100', time: '7-15 days', portal: 'State Portal' },
      { name: 'Death Certificate', desc: 'Death certificate application', fee: '₹100', time: '7-15 days', portal: 'State Portal' },
      { name: 'Caste Certificate', desc: 'SC/ST/OBC caste certificate', fee: '₹150', time: '15-30 days', portal: 'State Portal' },
      { name: 'Income Certificate', desc: 'Annual income certificate', fee: '₹100', time: '10-15 days', portal: 'State Portal' },
      { name: 'Domicile Certificate', desc: 'Residence/domicile certificate', fee: '₹150', time: '10-20 days', portal: 'State Portal' },
      { name: 'Marriage Certificate', desc: 'Marriage registration certificate', fee: '₹200', time: '15-30 days', portal: 'State Portal' },
    ]
  },
  {
    title: 'Vehicle & Driving',
    icon: '🚗',
    color: '#8B5CF6',
    services: [
      { name: 'Driving License', desc: 'Fresh DL or renewal application', fee: '₹250', time: '15-30 days', portal: 'Parivahan' },
      { name: 'Vehicle Registration', desc: 'New vehicle registration / RC transfer', fee: '₹300', time: '7-15 days', portal: 'Parivahan' },
      { name: 'Pollution Certificate', desc: 'PUCC / emission test booking', fee: '₹75', time: 'Same day', portal: 'Parivahan' },
      { name: 'RC Transfer', desc: 'Transfer of vehicle ownership', fee: '₹350', time: '15-30 days', portal: 'Parivahan' },
    ]
  },
  {
    title: 'Insurance & Social Security',
    icon: '🏥',
    color: '#EC4899',
    services: [
      { name: 'Ayushman Bharat', desc: 'PM-JAY health insurance registration', fee: '₹50', time: '3-5 days', portal: 'PMJAY' },
      { name: 'EPFO/PF Services', desc: 'PF balance, withdrawal, UAN activation', fee: '₹100', time: '7-15 days', portal: 'EPFO' },
      { name: 'ESI Registration', desc: 'Employee State Insurance services', fee: '₹200', time: '7-10 days', portal: 'ESIC' },
      { name: 'PM Kisan Samman Nidhi', desc: 'PM Kisan scheme registration/status', fee: '₹50', time: '5-10 days', portal: 'PM Kisan' },
    ]
  },
  {
    title: 'Property & Land Records',
    icon: '🏠',
    color: '#0ea5e9',
    services: [
      { name: 'Encumbrance Certificate', desc: 'Property EC from registration dept', fee: '₹200', time: '7-15 days', portal: 'State Portal' },
      { name: 'Property Tax', desc: 'Property tax payment & certificate', fee: '₹75', time: '1-3 days', portal: 'Municipality' },
      { name: 'Khata Transfer', desc: 'Mutation/khata transfer for property', fee: '₹300', time: '30-60 days', portal: 'State Portal' },
      { name: 'Land Record / RTC', desc: 'Pahani/RTC/Land Record documents', fee: '₹100', time: '1-3 days', portal: 'Bhoomi/State' },
    ]
  },
  {
    title: 'Business Registration',
    icon: '🏢',
    color: '#f97316',
    services: [
      { name: 'Udyam Registration', desc: 'MSME/Udyam certificate for businesses', fee: '₹299', time: '2-3 days', portal: 'Udyam Portal' },
      { name: 'Shops & Establishment', desc: 'Trade license / shop registration', fee: '₹499', time: '7-15 days', portal: 'State Portal' },
      { name: 'FSSAI License', desc: 'Food business operator license', fee: '₹599', time: '30-60 days', portal: 'FSSAI' },
      { name: 'Company Registration', desc: 'Pvt Ltd / LLP / OPC registration', fee: '₹1999', time: '10-15 days', portal: 'MCA21' },
    ]
  },
]

const GOVT_PORTALS = [
  { name: 'UIDAI', desc: 'Aadhaar Services', url: 'https://uidai.gov.in', icon: '🪪', color: '#f97316' },
  { name: 'Passport Seva', desc: 'Passport Services', url: 'https://passportindia.gov.in', icon: '📔', color: '#0ea5e9' },
  { name: 'Income Tax', desc: 'Tax Filing & PAN', url: 'https://incometax.gov.in', icon: '💰', color: '#fbbf24' },
  { name: 'GST Portal', desc: 'GST Registration & Filing', url: 'https://gst.gov.in', icon: '📊', color: '#22c55e' },
  { name: 'Parivahan', desc: 'Driving & Vehicle', url: 'https://parivahan.gov.in', icon: '🚗', color: '#8B5CF6' },
  { name: 'DigiLocker', desc: 'Digital Documents', url: 'https://digilocker.gov.in', icon: '📁', color: '#EC4899' },
  { name: 'Umang', desc: 'All Gov Services', url: 'https://umang.gov.in', icon: '📱', color: '#0ea5e9' },
  { name: 'EPFO', desc: 'Provident Fund', url: 'https://epfindia.gov.in', icon: '🏦', color: '#f97316' },
]

const PROCESS = [
  { step: '01', title: 'Tell Us What You Need', desc: 'Select the government service you require and share your documents.' },
  { step: '02', title: 'We Prepare & Verify', desc: 'Our experts review your documents and prepare the application.' },
  { step: '03', title: 'Submit & Track', desc: 'We submit on your behalf and keep you updated on the status.' },
  { step: '04', title: 'Document Delivered', desc: 'Receive your official document digitally or at your doorstep.' },
]

export default function GovernmentServices() {
  const handleGovPayment = (service) => {
    if (typeof window.Razorpay === 'undefined') {
      alert(`Service: ${service.name}\nFee: ${service.fee}\nIn production, this will open Razorpay payment gateway.`)
      return
    }
    const amountInPaise = parseInt(service.fee.replace('₹','').replace('/month','')) * 100
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID',
      amount: amountInPaise,
      currency: 'INR',
      name: 'Esakha Digital Services',
      description: service.name,
      handler: function(response) {
        alert('Payment Successful! Your application for ' + service.name + ' has been initiated.\nPayment ID: ' + response.razorpay_payment_id)
      },
      theme: { color: '#22c55e' }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="glow-bg w-96 h-96" style={{ background:'rgba(34,197,94,0.1)', top:'40%', left:'50%', transform:'translate(-50%,-50%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} className="mb-5">
            <span className="tag-gov">🏛️ Government Services Portal</span>
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.05 }}
            className="font-display font-extrabold text-white mb-4" style={{ fontSize:'clamp(36px,5.5vw,64px)' }}>
            All Government Services <span style={{ background:'linear-gradient(135deg,#22c55e,#0ea5e9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Under One Roof</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            className="text-slate-400 text-lg font-body leading-relaxed max-w-2xl mx-auto mb-8">
            Esakha simplifies government services. From Aadhaar to Passport, ITR to GST — we handle the paperwork so you don't have to.
          </motion.p>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15 }}
            className="flex flex-wrap gap-4 justify-center">
            <a href="#services" className="btn-gov text-base px-8 py-4"><Shield className="w-4 h-4" /> Browse All Services</a>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">Get Expert Help <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5 card overflow-hidden">
            {[{n:'10,000+',l:'Applications Filed'},{n:'50+',l:'Gov Services'},{n:'98%',l:'Success Rate'},{n:'24/7',l:'Expert Support'}].map((s,i) => (
              <motion.div key={s.l} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="py-8 px-6 text-center">
                <div className="font-display font-black text-3xl mb-1" style={{ background:'linear-gradient(135deg,#22c55e,#0ea5e9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{s.n}</div>
                <div className="text-slate-500 text-sm font-body">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-14">
            <span className="tag-gov mb-4 inline-flex">✦ How It Works</span>
            <h2 className="font-display font-extrabold text-4xl text-white">Simple 4-Step Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((p,i) => (
              <motion.div key={p.step} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card p-6 text-center relative">
                <div className="font-display font-black text-5xl mb-3" style={{ background:'linear-gradient(135deg,#22c55e,#0ea5e9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{p.step}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm font-body leading-relaxed">{p.desc}</p>
                {i < PROCESS.length-1 && <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-600 text-xl">→</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gov Portals Links */}
      <section className="section" style={{ background:'rgba(10,20,40,0.5)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="tag-gov mb-4 inline-flex">🔗 Official Portals</span>
            <h2 className="font-display font-extrabold text-4xl text-white">Government Portals We Work With</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GOVT_PORTALS.map((portal,i) => (
              <motion.a key={portal.name} href={portal.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.06 }}
                whileHover={{ y:-4 }} className="card p-5 text-center group cursor-pointer block">
                <div className="text-3xl mb-3">{portal.icon}</div>
                <h3 className="font-display font-bold text-white text-sm mb-1">{portal.name}</h3>
                <p className="text-slate-500 text-xs font-body">{portal.desc}</p>
                <div className="mt-3 text-xs font-semibold" style={{ color:portal.color }}>Visit Portal →</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="text-center mb-14">
            <span className="tag-gov mb-4 inline-flex">📋 All Services</span>
            <h2 className="font-display font-extrabold text-4xl text-white mb-4">Complete Government Services Catalog</h2>
            <p className="text-slate-400 font-body max-w-xl mx-auto">Browse all 50+ government services. Click "Apply Now" to pay and get started instantly.</p>
          </div>

          <div className="space-y-12">
            {GOV_CATEGORIES.map((cat, ci) => (
              <motion.div key={cat.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="font-display font-bold text-white text-2xl">{cat.title}</h3>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.services.map((svc, si) => (
                    <motion.div key={svc.name} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:si*0.06 }}
                      className="card p-5 relative overflow-hidden group hover:border-white/10 transition-all">
                      <div className="absolute top-0 inset-x-0 h-0.5" style={{ background:`linear-gradient(90deg,${cat.color},transparent)` }} />
                      <h4 className="font-display font-bold text-white text-sm mb-2">{svc.name}</h4>
                      <p className="text-slate-500 text-xs font-body mb-3 leading-relaxed">{svc.desc}</p>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-600 font-body">Fee: <span className="text-orange-400 font-semibold">{svc.fee}</span></span>
                        <span className="text-xs text-slate-600 font-body"><Clock className="w-3 h-3 inline mr-1" />{svc.time}</span>
                      </div>
                      <div className="text-xs text-slate-600 font-body mb-4">Portal: <span className="text-sky-400">{svc.portal}</span></div>
                      <button
                        onClick={() => handleGovPayment(svc)}
                        className="w-full py-2 px-3 rounded-lg text-xs font-display font-bold text-white transition-all hover:-translate-y-0.5"
                        style={{ background:`linear-gradient(135deg,${cat.color}dd,${cat.color}aa)` }}>
                        Apply Now →
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Esakha for Gov Services */}
      <section className="section" style={{ background:'rgba(10,20,40,0.5)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="tag-gov mb-5 inline-flex">✦ Why Esakha</span>
              <h2 className="font-display font-extrabold text-4xl text-white mb-6">Skip the Government Office Queues</h2>
              <p className="text-slate-400 text-lg font-body mb-8 leading-relaxed">We're certified e-seva partners with years of experience navigating India's government portals. Let us handle the complexity.</p>
              {['Expert agents with 7+ years of experience','98% application success rate','End-to-end tracking and status updates','Doorstep document collection in select cities','Secure document handling & confidentiality','Affordable fees — no hidden charges'].map((item,i) => (
                <motion.div key={item} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                  className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-400 text-sm font-body">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {e:'⚡',t:'Fast Processing',d:'We know the shortcuts that save weeks.'},
                {e:'🔒',t:'100% Secure',d:'Your documents never leave our secure system.'},
                {e:'📱',t:'Track Anytime',d:'WhatsApp updates on your application.'},
                {e:'✅',t:'Guaranteed',d:'Money back if application fails due to our error.'}
              ].map((x,i) => (
                <motion.div key={x.t} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                  className="card p-5">
                  <div className="text-3xl mb-3">{x.e}</div>
                  <h4 className="font-display font-bold text-white text-sm mb-1">{x.t}</h4>
                  <p className="text-slate-500 text-xs font-body">{x.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
            style={{ background:'linear-gradient(135deg,rgba(34,197,94,0.15),rgba(14,165,233,0.1))', border:'1px solid rgba(34,197,94,0.25)' }}>
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-4xl text-white mb-4">Need a Government Service?</h2>
              <p className="text-slate-400 text-lg font-body mb-10 max-w-xl mx-auto">Talk to our experts now. We'll guide you through the entire process step by step.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-gov text-base px-8 py-4"><Phone className="w-4 h-4" /> Talk to Expert</Link>
                <a href="#services" className="btn-outline text-base px-8 py-4">Browse All Services</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
