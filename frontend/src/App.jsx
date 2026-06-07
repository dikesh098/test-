import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WebDevelopment from './pages/WebDevelopment'
import MobileDevelopment from './pages/MobileDevelopment'
import SoftwareSolutions from './pages/SoftwareSolutions'
import AIServices from './pages/AIServices'
import TechSupport from './pages/TechSupport'
import DigitalMarketing from './pages/DigitalMarketing'
import SocialMedia from './pages/SocialMedia'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import GovernmentServices from './pages/GovernmentServices'
import AdminPanel from './pages/AdminPanel'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Chatbot />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Toaster position="top-right" toastOptions={{
        style: { background: '#0a1929', color: '#F1F5F9', border: '1px solid rgba(249,115,22,0.3)' }
      }} />
      <Routes>
        {/* Admin - no navbar/footer */}
        <Route path="/admin" element={<AdminPanel />} />
        
        {/* All other pages with navbar/footer */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/services/web-development" element={<Layout><WebDevelopment /></Layout>} />
        <Route path="/services/mobile-development" element={<Layout><MobileDevelopment /></Layout>} />
        <Route path="/services/software-solutions" element={<Layout><SoftwareSolutions /></Layout>} />
        <Route path="/services/ai-solutions" element={<Layout><AIServices /></Layout>} />
        <Route path="/services/tech-support" element={<Layout><TechSupport /></Layout>} />
        <Route path="/services/digital-marketing" element={<Layout><DigitalMarketing /></Layout>} />
        <Route path="/services/social-media" element={<Layout><SocialMedia /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/government-services" element={<Layout><GovernmentServices /></Layout>} />
      </Routes>
    </>
  )
}
