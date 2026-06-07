import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, Users, FileText, CreditCard, Settings, Bell, 
  LogOut, TrendingUp, Package, ShieldCheck, Menu, X,
  Plus, Search, Eye, CheckCircle, XCircle, Clock, Download,
  BarChart2, DollarSign, Activity, Briefcase
} from 'lucide-react'
import EsakhaLogo from '../components/EsakhaLogo'

// Mock data
const STATS = [
  { label:'Total Revenue', value:'₹8,42,500', change:'+23%', icon:DollarSign, color:'#f97316' },
  { label:'Active Clients', value:'247', change:'+12%', icon:Users, color:'#0ea5e9' },
  { label:'Pending Orders', value:'34', change:'-5%', icon:Clock, color:'#fbbf24' },
  { label:'Gov Applications', value:'1,204', change:'+41%', icon:ShieldCheck, color:'#22c55e' },
]
const RECENT_ORDERS = [
  { id:'ORD-001', client:'Rahul Mehta', service:'Web Development', amount:'₹45,000', status:'completed', date:'2026-06-07' },
  { id:'ORD-002', client:'Priya Sharma', service:'Gov - Passport', amount:'₹300', status:'pending', date:'2026-06-07' },
  { id:'ORD-003', client:'Amit Kumar', service:'Mobile App', amount:'₹80,000', status:'in-progress', date:'2026-06-06' },
  { id:'ORD-004', client:'Sunita Patel', service:'Gov - Aadhaar Update', amount:'₹50', status:'completed', date:'2026-06-06' },
  { id:'ORD-005', client:'Vikram Singh', service:'Digital Marketing', amount:'₹15,000', status:'pending', date:'2026-06-05' },
  { id:'ORD-006', client:'Deepa Nair', service:'Gov - ITR Filing', amount:'₹299', status:'completed', date:'2026-06-05' },
  { id:'ORD-007', client:'Rajesh Gupta', service:'ERP System', amount:'₹1,20,000', status:'in-progress', date:'2026-06-04' },
]
const PAYMENTS = [
  { id:'PAY-001', client:'Rahul Mehta', amount:'₹45,000', method:'Razorpay', status:'success', date:'2026-06-07' },
  { id:'PAY-002', client:'Sunita Patel', amount:'₹50', method:'UPI', status:'success', date:'2026-06-06' },
  { id:'PAY-003', client:'Amit Kumar', amount:'₹40,000', method:'Bank Transfer', status:'pending', date:'2026-06-06' },
  { id:'PAY-004', client:'Deepa Nair', amount:'₹299', method:'UPI', status:'success', date:'2026-06-05' },
  { id:'PAY-005', client:'Vikram Singh', amount:'₹15,000', method:'Razorpay', status:'failed', date:'2026-06-05' },
]
const CONTACTS = [
  { name:'Ananya Reddy', email:'ananya@gmail.com', phone:'+91 98765 43210', service:'Website', date:'2026-06-07', status:'new' },
  { name:'Mohan Das', email:'mohan@biz.in', phone:'+91 87654 32109', service:'Gov - PAN Card', date:'2026-06-07', status:'contacted' },
  { name:'Kavita Singh', email:'kavita@startup.io', phone:'+91 76543 21098', service:'Mobile App', date:'2026-06-06', status:'converted' },
  { name:'Ravi Kumar', email:'ravi@shop.in', phone:'+91 65432 10987', service:'Digital Marketing', date:'2026-06-05', status:'new' },
]
const GOV_APPS = [
  { id:'APP-001', client:'Priya Sharma', service:'Passport Renewal', status:'submitted', portal:'Passport Seva', date:'2026-06-07' },
  { id:'APP-002', client:'Mohan Das', service:'PAN Card Apply', status:'processing', portal:'NSDL', date:'2026-06-06' },
  { id:'APP-003', client:'Kavita Rao', service:'Aadhaar Update', status:'completed', portal:'UIDAI', date:'2026-06-05' },
  { id:'APP-004', client:'Raju Sharma', service:'GST Registration', status:'pending', portal:'GST Portal', date:'2026-06-05' },
  { id:'APP-005', client:'Anita Singh', service:'ITR Filing', status:'completed', portal:'Income Tax', date:'2026-06-04' },
]

const STATUS_COLORS = {
  completed: { bg:'rgba(34,197,94,0.1)', text:'#22c55e', border:'rgba(34,197,94,0.3)' },
  pending: { bg:'rgba(251,191,36,0.1)', text:'#fbbf24', border:'rgba(251,191,36,0.3)' },
  'in-progress': { bg:'rgba(14,165,233,0.1)', text:'#0ea5e9', border:'rgba(14,165,233,0.3)' },
  processing: { bg:'rgba(14,165,233,0.1)', text:'#0ea5e9', border:'rgba(14,165,233,0.3)' },
  submitted: { bg:'rgba(139,92,246,0.1)', text:'#8B5CF6', border:'rgba(139,92,246,0.3)' },
  success: { bg:'rgba(34,197,94,0.1)', text:'#22c55e', border:'rgba(34,197,94,0.3)' },
  failed: { bg:'rgba(239,68,68,0.1)', text:'#EF4444', border:'rgba(239,68,68,0.3)' },
  new: { bg:'rgba(249,115,22,0.1)', text:'#f97316', border:'rgba(249,115,22,0.3)' },
  contacted: { bg:'rgba(14,165,233,0.1)', text:'#0ea5e9', border:'rgba(14,165,233,0.3)' },
  converted: { bg:'rgba(34,197,94,0.1)', text:'#22c55e', border:'rgba(34,197,94,0.3)' },
}

function StatusBadge({ status }) {
  const c = STATUS_COLORS[status] || STATUS_COLORS.pending
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-semibold capitalize" style={{ background:c.bg, color:c.text, border:`1px solid ${c.border}` }}>
      {status.replace('-',' ')}
    </span>
  )
}

const NAV_ITEMS = [
  { id:'dashboard', label:'Dashboard', icon:LayoutDashboard },
  { id:'orders', label:'Orders', icon:Package },
  { id:'payments', label:'Payments', icon:CreditCard },
  { id:'contacts', label:'Contacts', icon:Users },
  { id:'gov-apps', label:'Gov Applications', icon:ShieldCheck },
  { id:'settings', label:'Settings', icon:Settings },
]

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ username:'', password:'' })
  const [loginError, setLoginError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (loginData.username === 'admin' && loginData.password === 'esakha2024') {
      setIsLoggedIn(true)
      setLoginError('')
    } else {
      setLoginError('Invalid credentials. Use admin / esakha2024')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background:'#050d1a' }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} className="relative z-10 card p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <EsakhaLogo size={48} showText={true} className="justify-center mb-4" />
            <h1 className="font-display font-extrabold text-2xl text-white">Admin Panel</h1>
            <p className="text-slate-500 text-sm font-body mt-1">Sign in to manage Esakha</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs text-slate-500 font-body mb-1.5 block">Username</label>
              <input type="text" className="input" placeholder="admin" value={loginData.username}
                onChange={e => setLoginData({...loginData, username:e.target.value})} />
            </div>
            <div>
              <label className="text-xs text-slate-500 font-body mb-1.5 block">Password</label>
              <input type="password" className="input" placeholder="••••••••" value={loginData.password}
                onChange={e => setLoginData({...loginData, password:e.target.value})} />
            </div>
            {loginError && <p className="text-red-400 text-xs font-body">{loginError}</p>}
            <button type="submit" className="btn-primary w-full justify-center py-3">Sign In →</button>
          </form>
          <p className="text-center text-xs text-slate-600 mt-4 font-body">Demo: admin / esakha2024</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex" style={{ background:'#050d1a' }}>
      {/* Sidebar */}
      <aside className={`admin-sidebar fixed left-0 top-0 h-full z-40 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className={`h-16 flex items-center px-4 border-b border-white/5 ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
            {sidebarOpen ? <EsakhaLogo size={32} showText={true} /> : <EsakhaLogo size={32} showText={false} />}
          </div>

          {/* Nav */}
          <nav className="flex-1 py-6 px-2 space-y-1 overflow-y-auto">
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-body
                  ${activeTab === item.id ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}>
                <item.icon className="w-4 h-4 shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/5">
            <button onClick={() => setIsLoggedIn(false)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all">
              <LogOut className="w-4 h-4 shrink-0" />
              {sidebarOpen && <span>Sign Out</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#050d1a]/80 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-400 hover:text-white transition-colors">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="font-display font-bold text-white text-lg capitalize">
              {NAV_ITEMS.find(n => n.id === activeTab)?.label}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-400 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white text-xs font-display font-bold">A</div>
          </div>
        </header>

        <div className="p-6">
          {/* DASHBOARD */}
          {activeTab === 'dashboard' && (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                {STATS.map((s,i) => (
                  <motion.div key={s.label} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.08 }}
                    className="stat-card" style={{ borderBottomColor:s.color }}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2.5 rounded-xl" style={{ background:`${s.color}15` }}>
                        <s.icon className="w-5 h-5" style={{ color:s.color }} />
                      </div>
                      <span className={`text-xs font-semibold font-body ${s.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{s.change}</span>
                    </div>
                    <div className="font-display font-black text-2xl text-white mb-1">{s.value}</div>
                    <div className="text-slate-500 text-sm font-body">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="card overflow-hidden mb-6">
                <div className="p-5 border-b border-white/5 flex items-center justify-between">
                  <h2 className="font-display font-bold text-white">Recent Orders</h2>
                  <button className="text-xs text-orange-400 hover:text-orange-300 font-body">View all →</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/5 text-slate-500 font-body text-xs">
                      {['ID','Client','Service','Amount','Status','Date'].map(h => <th key={h} className="px-5 py-3 text-left">{h}</th>)}
                    </tr></thead>
                    <tbody>{RECENT_ORDERS.slice(0,5).map((o,i) => (
                      <tr key={o.id} className="border-b border-white/5 hover:bg-white/2 transition-colors font-body">
                        <td className="px-5 py-3 text-slate-400 text-xs">{o.id}</td>
                        <td className="px-5 py-3 text-white font-medium">{o.client}</td>
                        <td className="px-5 py-3 text-slate-400">{o.service}</td>
                        <td className="px-5 py-3 text-orange-400 font-semibold">{o.amount}</td>
                        <td className="px-5 py-3"><StatusBadge status={o.status} /></td>
                        <td className="px-5 py-3 text-slate-500 text-xs">{o.date}</td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { t:'Add New Order', icon:'📦', action:() => setActiveTab('orders'), color:'#f97316' },
                  { t:'Process Payment', icon:'💳', action:() => setActiveTab('payments'), color:'#0ea5e9' },
                  { t:'New Gov Application', icon:'🏛️', action:() => setActiveTab('gov-apps'), color:'#22c55e' },
                ].map((a) => (
                  <button key={a.t} onClick={a.action}
                    className="card p-5 flex items-center gap-4 hover:border-white/10 transition-all group text-left">
                    <span className="text-3xl">{a.icon}</span>
                    <div>
                      <div className="font-display font-bold text-white text-sm group-hover:text-orange-400 transition-colors">{a.t}</div>
                      <div className="text-slate-500 text-xs font-body mt-0.5">Click to manage →</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ORDERS */}
          {activeTab === 'orders' && (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
              <div className="flex items-center justify-between mb-6">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input className="input pl-9 w-64 text-xs py-2" placeholder="Search orders..." />
                </div>
                <button className="btn-primary text-xs py-2 px-4"><Plus className="w-3.5 h-3.5" /> New Order</button>
              </div>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/5 text-slate-500 font-body text-xs bg-white/2">
                      {['ID','Client','Service','Amount','Status','Date','Action'].map(h => <th key={h} className="px-5 py-3 text-left">{h}</th>)}
                    </tr></thead>
                    <tbody>{RECENT_ORDERS.map((o,i) => (
                      <tr key={o.id} className="border-b border-white/5 hover:bg-white/2 transition-colors font-body">
                        <td className="px-5 py-3 text-slate-400 text-xs">{o.id}</td>
                        <td className="px-5 py-3 text-white font-medium">{o.client}</td>
                        <td className="px-5 py-3 text-slate-400">{o.service}</td>
                        <td className="px-5 py-3 text-orange-400 font-semibold">{o.amount}</td>
                        <td className="px-5 py-3"><StatusBadge status={o.status} /></td>
                        <td className="px-5 py-3 text-slate-500 text-xs">{o.date}</td>
                        <td className="px-5 py-3">
                          <button className="text-xs text-slate-400 hover:text-white p-1.5 hover:bg-white/5 rounded-lg transition-all"><Eye className="w-3.5 h-3.5" /></button>
                        </td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* PAYMENTS */}
          {activeTab === 'payments' && (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label:'Total Collected', value:'₹8,42,500', color:'#22c55e' },
                  { label:'Pending', value:'₹1,20,000', color:'#fbbf24' },
                  { label:'Failed', value:'₹15,000', color:'#ef4444' },
                ].map(s => (
                  <div key={s.label} className="card p-5">
                    <div className="font-display font-black text-2xl mb-1" style={{ color:s.color }}>{s.value}</div>
                    <div className="text-slate-500 text-sm font-body">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="card overflow-hidden">
                <div className="p-5 border-b border-white/5 flex items-center justify-between">
                  <h2 className="font-display font-bold text-white">Payment Transactions</h2>
                  <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-body border border-white/10 px-3 py-1.5 rounded-lg hover:border-white/20 transition-all">
                    <Download className="w-3.5 h-3.5" /> Export
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/5 text-slate-500 font-body text-xs bg-white/2">
                      {['Txn ID','Client','Amount','Method','Status','Date'].map(h => <th key={h} className="px-5 py-3 text-left">{h}</th>)}
                    </tr></thead>
                    <tbody>{PAYMENTS.map((p) => (
                      <tr key={p.id} className="border-b border-white/5 hover:bg-white/2 transition-colors font-body">
                        <td className="px-5 py-3 text-slate-400 text-xs">{p.id}</td>
                        <td className="px-5 py-3 text-white font-medium">{p.client}</td>
                        <td className="px-5 py-3 text-orange-400 font-bold">{p.amount}</td>
                        <td className="px-5 py-3 text-slate-400">{p.method}</td>
                        <td className="px-5 py-3"><StatusBadge status={p.status} /></td>
                        <td className="px-5 py-3 text-slate-500 text-xs">{p.date}</td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              </div>

              {/* Razorpay Quick Charge */}
              <div className="card p-6 mt-6">
                <h3 className="font-display font-bold text-white mb-4">Quick Charge via Razorpay</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-slate-500 font-body mb-1.5 block">Client Email</label>
                    <input className="input text-xs py-2" placeholder="client@email.com" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 font-body mb-1.5 block">Amount (₹)</label>
                    <input type="number" className="input text-xs py-2" placeholder="Enter amount" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 font-body mb-1.5 block">Description</label>
                    <input className="input text-xs py-2" placeholder="Service description" />
                  </div>
                </div>
                <button className="btn-primary mt-4 text-sm" onClick={() => alert('In production: This will trigger Razorpay payment link creation via API')}>
                  💳 Create Payment Link
                </button>
              </div>
            </motion.div>
          )}

          {/* CONTACTS */}
          {activeTab === 'contacts' && (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
              <div className="card overflow-hidden">
                <div className="p-5 border-b border-white/5">
                  <h2 className="font-display font-bold text-white">All Contacts & Leads</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/5 text-slate-500 font-body text-xs bg-white/2">
                      {['Name','Email','Phone','Service Interest','Date','Status','Action'].map(h => <th key={h} className="px-5 py-3 text-left">{h}</th>)}
                    </tr></thead>
                    <tbody>{CONTACTS.map((c) => (
                      <tr key={c.email} className="border-b border-white/5 hover:bg-white/2 transition-colors font-body">
                        <td className="px-5 py-3 text-white font-medium">{c.name}</td>
                        <td className="px-5 py-3 text-slate-400 text-xs">{c.email}</td>
                        <td className="px-5 py-3 text-slate-400 text-xs">{c.phone}</td>
                        <td className="px-5 py-3 text-slate-300">{c.service}</td>
                        <td className="px-5 py-3 text-slate-500 text-xs">{c.date}</td>
                        <td className="px-5 py-3"><StatusBadge status={c.status} /></td>
                        <td className="px-5 py-3">
                          <button className="text-xs text-orange-400 hover:text-orange-300 font-body">Update →</button>
                        </td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* GOV APPLICATIONS */}
          {activeTab === 'gov-apps' && (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-white">Government Service Applications</h2>
                <button className="btn-gov text-xs py-2 px-4"><Plus className="w-3.5 h-3.5" /> New Application</button>
              </div>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/5 text-slate-500 font-body text-xs bg-white/2">
                      {['App ID','Client','Service','Portal','Status','Date','Action'].map(h => <th key={h} className="px-5 py-3 text-left">{h}</th>)}
                    </tr></thead>
                    <tbody>{GOV_APPS.map((a) => (
                      <tr key={a.id} className="border-b border-white/5 hover:bg-white/2 transition-colors font-body">
                        <td className="px-5 py-3 text-slate-400 text-xs">{a.id}</td>
                        <td className="px-5 py-3 text-white font-medium">{a.client}</td>
                        <td className="px-5 py-3 text-slate-300">{a.service}</td>
                        <td className="px-5 py-3 text-sky-400 text-xs">{a.portal}</td>
                        <td className="px-5 py-3"><StatusBadge status={a.status} /></td>
                        <td className="px-5 py-3 text-slate-500 text-xs">{a.date}</td>
                        <td className="px-5 py-3 flex items-center gap-2">
                          <button className="text-xs p-1.5 hover:bg-white/5 rounded-lg transition-all text-slate-400 hover:text-white"><Eye className="w-3.5 h-3.5" /></button>
                          <button className="text-xs p-1.5 hover:bg-green-500/10 rounded-lg transition-all text-slate-400 hover:text-green-400"><CheckCircle className="w-3.5 h-3.5" /></button>
                        </td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* SETTINGS */}
          {activeTab === 'settings' && (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-6">
                  <h3 className="font-display font-bold text-white mb-5">Business Settings</h3>
                  <div className="space-y-4">
                    {[['Business Name','Esakha Digital Services'],['Website','www.esakha.in'],['Email','hello@esakha.in'],['Phone','+91 98765 43210']].map(([l,v]) => (
                      <div key={l}>
                        <label className="text-xs text-slate-500 font-body mb-1.5 block">{l}</label>
                        <input className="input text-sm py-2" defaultValue={v} />
                      </div>
                    ))}
                    <button className="btn-primary text-sm py-2 mt-2">Save Changes</button>
                  </div>
                </div>
                <div className="card p-6">
                  <h3 className="font-display font-bold text-white mb-5">Razorpay Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-slate-500 font-body mb-1.5 block">Razorpay Key ID</label>
                      <input className="input text-sm py-2" placeholder="rzp_live_xxxxxxxxxx" type="password" />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 font-body mb-1.5 block">Razorpay Secret</label>
                      <input className="input text-sm py-2" placeholder="Your secret key" type="password" />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 font-body mb-1.5 block">Mode</label>
                      <select className="input text-sm py-2">
                        <option>Test Mode</option>
                        <option>Live Mode</option>
                      </select>
                    </div>
                    <button className="btn-primary text-sm py-2">Save Razorpay Keys</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
