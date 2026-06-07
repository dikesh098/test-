import ServicePage from '../components/ServicePage'

export function WebDevelopment() {
  return <ServicePage
    icon="🌐" title="Web Development" color="#6D28D9" tag="Web Development"
    subtitle="From sleek landing pages to full-scale SaaS platforms — we build websites that convert visitors into customers."
    offerings={[
      { icon:'🏢', title:'Corporate Websites', desc:'Professional, branded websites that build credibility and drive leads.' },
      { icon:'🛒', title:'E-Commerce Stores', desc:'Full-featured online stores with payments, inventory & analytics.' },
      { icon:'⚡', title:'Landing Pages', desc:'High-converting landing pages optimised for your campaigns.' },
      { icon:'📊', title:'SaaS Dashboards', desc:'Complex web applications with real-time data and beautiful UIs.' },
      { icon:'📝', title:'CMS Solutions', desc:'Easy-to-manage content systems — WordPress, Strapi, Sanity.' },
      { icon:'🔍', title:'SEO-Optimised Sites', desc:'Built for search engines from day one. Technical SEO included.' },
    ]}
    process={[
      { step:'Discovery', desc:'We learn your goals, audience & competitive landscape.' },
      { step:'Design', desc:'Wireframes, mockups & interactive prototypes for approval.' },
      { step:'Development', desc:'Clean, scalable code. Weekly demos keep you in the loop.' },
      { step:'Launch', desc:'Thorough QA, deployment & 3-month support included.' },
    ]}
  />
}

export function MobileDevelopment() {
  return <ServicePage
    icon="📱" title="Mobile App Development" color="#06B6D4" tag="Mobile Development"
    subtitle="Native & cross-platform mobile apps built for speed, great UX, and millions of users."
    offerings={[
      { icon:'🤖', title:'Android Development', desc:'Native Kotlin/Java apps for the Google Play Store.' },
      { icon:'🍎', title:'iOS Development', desc:'Swift-powered apps for iPhone & iPad — App Store ready.' },
      { icon:'🦋', title:'Flutter Apps', desc:'One codebase, two platforms. 95% of native performance.' },
      { icon:'⚛️', title:'React Native', desc:'JavaScript-based cross-platform apps with a native feel.' },
      { icon:'🏢', title:'Enterprise Mobility', desc:'Secure, scalable apps for internal business operations.' },
      { icon:'📈', title:'App Store Optimisation', desc:'ASO strategies to rank higher and get more downloads.' },
    ]}
    process={[
      { step:'Strategy', desc:'Market research, user personas & technical architecture.' },
      { step:'UI/UX Design', desc:'Intuitive wireframes & polished high-fidelity designs.' },
      { step:'Development', desc:'Agile sprints with bi-weekly builds for your review.' },
      { step:'Launch', desc:'App store submission, QA & post-launch crash monitoring.' },
    ]}
  />
}

export function SoftwareSolutions() {
  return <ServicePage
    icon="⚙️" title="Software Solutions" color="#F59E0B" tag="Software Solutions"
    subtitle="Custom enterprise software that automates operations, reduces costs, and scales with your business."
    offerings={[
      { icon:'🏭', title:'ERP Development', desc:'End-to-end enterprise resource planning tailored to your workflows.' },
      { icon:'🤝', title:'CRM Systems', desc:'Track leads, manage customers & close more deals.' },
      { icon:'📦', title:'Inventory Management', desc:'Real-time stock tracking, purchasing & supplier management.' },
      { icon:'👥', title:'HRMS Platforms', desc:'HR, payroll, attendance & performance management in one place.' },
      { icon:'🔗', title:'System Integration', desc:'Connect your existing tools via APIs and webhooks.' },
      { icon:'🖥️', title:'Custom Software', desc:'Any idea, built from scratch. We handle the full stack.' },
    ]}
    process={[
      { step:'Requirements', desc:'Detailed business analysis & technical specification document.' },
      { step:'Architecture', desc:'Database design, API planning & tech stack selection.' },
      { step:'Development', desc:'Modular development with regular demos & QA cycles.' },
      { step:'Deployment', desc:'Server setup, data migration, training & go-live support.' },
    ]}
  />
}

export function AIServices() {
  return <ServicePage
    icon="🤖" title="AI Solutions" color="#10B981" tag="AI & Machine Learning"
    subtitle="Cutting-edge AI that gives your business a real competitive edge — from chatbots to computer vision."
    offerings={[
      { icon:'💬', title:'ChatGPT Integration', desc:'Custom AI assistants trained on your data and brand voice.' },
      { icon:'🧠', title:'ML Model Development', desc:'Predictive models for sales forecasting, churn, and recommendations.' },
      { icon:'👁️', title:'Computer Vision', desc:'Image recognition, object detection & visual inspection systems.' },
      { icon:'📝', title:'NLP Pipelines', desc:'Sentiment analysis, text classification & entity extraction.' },
      { icon:'⚡', title:'AI Automation', desc:'Intelligent workflows that eliminate repetitive manual tasks.' },
      { icon:'📊', title:'Analytics & Insights', desc:'AI-powered dashboards that surface actionable business insights.' },
    ]}
    process={[
      { step:'Data Audit', desc:'We assess your existing data and identify AI opportunities.' },
      { step:'Model Design', desc:'Choose the right algorithms and training approach for your goals.' },
      { step:'Training & Testing', desc:'Iterative model training with rigorous accuracy benchmarks.' },
      { step:'Integration', desc:'Seamless deployment into your existing workflows and systems.' },
    ]}
  />
}

export function TechSupport() {
  return <ServicePage
    icon="🛡️" title="Technical Support" color="#EF4444" tag="Tech Support"
    subtitle="Round-the-clock technical support so your systems stay online, secure, and performing at their best."
    offerings={[
      { icon:'👁️', title:'24/7 Monitoring', desc:'Real-time alerts and response for any downtime or anomaly.' },
      { icon:'🖥️', title:'Remote Support', desc:'Instant remote access to diagnose and fix issues fast.' },
      { icon:'☁️', title:'Cloud Management', desc:'AWS, GCP & Azure infrastructure optimisation and cost control.' },
      { icon:'🖧', title:'Server Administration', desc:'Linux/Windows server setup, maintenance & security patching.' },
      { icon:'🔒', title:'Security Audits', desc:'Penetration testing, vulnerability scanning & remediation.' },
      { icon:'💾', title:'Disaster Recovery', desc:'Backup strategies and rapid recovery plans for any scenario.' },
    ]}
    process={[
      { step:'Onboarding', desc:'Full audit of your existing infrastructure and pain points.' },
      { step:'Setup', desc:'Monitoring tools, alerting rules & runbook documentation.' },
      { step:'Ongoing Support', desc:'Dedicated engineer team with guaranteed response SLAs.' },
      { step:'Monthly Reports', desc:'Performance reports, incident summaries & recommendations.' },
    ]}
  />
}

export function DigitalMarketing() {
  return <ServicePage
    icon="📊" title="Digital Marketing" color="#8B5CF6" tag="Digital Marketing"
    subtitle="Data-driven marketing that fills your pipeline with qualified leads and grows your revenue."
    offerings={[
      { icon:'🔍', title:'Search Engine Optimisation', desc:'Technical SEO, keyword strategy & link building that ranks.' },
      { icon:'💰', title:'Google Ads (PPC)', desc:'High-ROI paid campaigns managed by certified Google experts.' },
      { icon:'✍️', title:'Content Marketing', desc:'Blogs, whitepapers & videos that attract and convert buyers.' },
      { icon:'📧', title:'Email Marketing', desc:'Automated drip campaigns, newsletters & lifecycle sequences.' },
      { icon:'📈', title:'Conversion Optimisation', desc:'A/B testing, landing page optimisation & funnel analysis.' },
      { icon:'📊', title:'Analytics & Reporting', desc:'Unified dashboards showing exactly what\'s working and why.' },
    ]}
    process={[
      { step:'Audit', desc:'Full review of your current marketing, SEO & ad accounts.' },
      { step:'Strategy', desc:'Custom 90-day growth plan with clear KPIs and budgets.' },
      { step:'Execution', desc:'We run campaigns while you focus on your business.' },
      { step:'Optimise', desc:'Weekly optimisations and monthly performance reviews.' },
    ]}
  />
}

export function SocialMedia() {
  return <ServicePage
    icon="📣" title="Social Media Marketing" color="#EC4899" tag="Social Media"
    subtitle="Build a loyal audience, grow your brand, and turn followers into paying customers across every platform."
    offerings={[
      { icon:'📸', title:'Instagram Marketing', desc:'Reels, stories & feed strategy that grows followers organically.' },
      { icon:'💙', title:'Facebook Ads', desc:'Hyper-targeted paid campaigns that reach your exact audience.' },
      { icon:'💼', title:'LinkedIn Marketing', desc:'B2B lead generation, thought leadership & company page growth.' },
      { icon:'▶️', title:'YouTube Strategy', desc:'Video SEO, channel growth & YouTube Ads management.' },
      { icon:'🎨', title:'Brand Identity', desc:'Consistent visual identity across all your social channels.' },
      { icon:'🌟', title:'Influencer Campaigns', desc:'Micro & macro influencer sourcing, management & reporting.' },
    ]}
    process={[
      { step:'Brand Audit', desc:'Review your current presence, tone, audience & competitors.' },
      { step:'Content Plan', desc:'Monthly content calendar with themes, formats & schedules.' },
      { step:'Create & Post', desc:'Professional content creation, scheduling & community management.' },
      { step:'Analyse & Grow', desc:'Weekly analytics review with iterative strategy improvements.' },
    ]}
  />
}
