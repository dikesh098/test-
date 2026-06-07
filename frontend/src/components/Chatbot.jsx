import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Zap } from 'lucide-react'
import axios from 'axios'

const QUICK = ['💰 Pricing', '🌐 Web dev', '📱 Mobile apps', '🤖 AI solutions', '💼 Careers', '📞 Contact']

const FALLBACK = (msg) => {
  const t = msg.toLowerCase()
  if (t.includes('pric') || t.includes('cost')) return "Projects start from $500 for websites, $2K+ for mobile apps, $5K+ for enterprise software. Contact us for a custom quote! 🎯"
  if (t.includes('web') || t.includes('site')) return "We build React, Next.js, WordPress sites — from landing pages to full SaaS platforms. All SEO-optimized! ⚡"
  if (t.includes('mob') || t.includes('app') || t.includes('android') || t.includes('ios')) return "We do Android, iOS, and Flutter apps. Typically 8–16 weeks from design to launch. 📱"
  if (t.includes('ai') || t.includes('ml') || t.includes('gpt')) return "We integrate OpenAI, build custom ML models, chatbots, and automation pipelines. 🤖"
  if (t.includes('career') || t.includes('job') || t.includes('hire')) return "We're hiring! Roles: Frontend Dev, Backend Dev, Flutter Dev, UI/UX Designer, Digital Marketer. 🚀"
  if (t.includes('contact') || t.includes('email') || t.includes('call')) return "Reach us at hello@novatechsolutions.com or use our Contact page for a free 30-min consultation! 😊"
  return "Great question! I'd recommend a free 30-min consultation with our team — they'll give you tailored advice. Want to book one? 😊"
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([{ role: 'bot', text: "Hi! 👋 I'm Nova, NovaTech's AI assistant. How can I help you today?" }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [history, setHistory] = useState([])
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, typing])
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 300) }, [open])

  const send = async (text = input) => {
    const msg = text.replace(/^[💰🌐📱🤖💼📞]\s*/, '').trim()
    if (!msg) return
    setMsgs(p => [...p, { role: 'user', text: msg }])
    setInput('')
    setTyping(true)
    const newHist = [...history, { role: 'user', content: msg }]
    try {
      const { data } = await axios.post('/api/chat', { message: msg, history: newHist })
      setMsgs(p => [...p, { role: 'bot', text: data.reply }])
      setHistory([...newHist, { role: 'assistant', content: data.reply }])
    } catch {
      const fb = FALLBACK(msg)
      setMsgs(p => [...p, { role: 'bot', text: fb }])
      setHistory([...newHist, { role: 'assistant', content: fb }])
    }
    setTyping(false)
  }

  return (
    <>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: 'linear-gradient(135deg,#6D28D9,#06B6D4)', boxShadow: '0 4px 30px rgba(109,40,217,0.5)' }}>
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-6 h-6 text-white" /></motion.div>
            : <motion.div key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageCircle className="w-6 h-6 text-white" /></motion.div>
          }
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 flex flex-col rounded-2xl overflow-hidden"
            style={{ height: 500, background: '#0A1628', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 80px rgba(0,0,0,0.7)' }}>

            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3" style={{ background: 'linear-gradient(135deg,#5B21B6,#7C3AED)' }}>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-white text-sm">Nova AI Assistant</p>
                <p className="text-xs text-white/60 font-body flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" /> Online · NovaTech Solutions
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="max-w-[82%] px-3 py-2.5 text-sm font-body leading-relaxed"
                    style={{
                      borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      background: m.role === 'user' ? 'linear-gradient(135deg,#6D28D9,#7C3AED)' : 'rgba(255,255,255,0.05)',
                      border: m.role === 'bot' ? '1px solid rgba(255,255,255,0.07)' : 'none',
                      color: '#F1F5F9',
                    }}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 px-4 py-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {[0,1,2].map(i => (
                      <motion.div key={i} animate={{ y: [0,-4,0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i*0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick replies */}
            {msgs.length <= 1 && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                {QUICK.map(q => (
                  <button key={q} onClick={() => send(q)} className="text-xs px-3 py-1.5 rounded-full font-body font-medium transition-all"
                    style={{ background: 'rgba(109,40,217,0.15)', border: '1px solid rgba(109,40,217,0.3)', color: '#A78BFA' }}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/5 flex gap-2">
              <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Type a message..." className="flex-1 rounded-xl px-3 py-2 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none font-body"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }} />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => send()}
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg,#6D28D9,#06B6D4)' }}>
                <Send className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
