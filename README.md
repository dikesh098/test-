# 🟠 Esakha Digital Services — Complete Website

**Live:** [www.esakha.in](https://www.esakha.in)  
**Version:** 2.0.0 (Upgraded from NovaTech)

---

## 🚀 What's New in This Version

### ✅ Esakha Branding
- All "NovaTech" references replaced with **Esakha**
- Custom **Esakha SVG Logo** designed and integrated
- Orange/amber gradient color theme (India-inspired palette)
- Updated fonts: Syne (display) + DM Sans (body)
- Favicon updated with Esakha logo

### ✅ Razorpay Payment Integration
- **Frontend:** Razorpay Checkout SDK integrated in `index.html`
- **Payment widget** on Home page for quick service payments
- **Government service payments** — each service has "Apply Now" with Razorpay
- **Backend:** Full Razorpay API routes in `backend/routes/paymentRoutes.js`
  - `POST /api/payment/create-order` — Create Razorpay order
  - `POST /api/payment/verify` — Verify payment signature  
  - `GET /api/payment/:id` — Fetch payment details
- Supports: UPI, Cards, Net Banking, Wallets, EMI

### ✅ Admin Panel (`/admin`)
- **Login:** admin / esakha2024 (change in production)
- **Dashboard** — Stats, recent orders, quick actions
- **Orders Management** — View, filter, manage all orders
- **Payment Tracking** — All transactions with Razorpay status
- **Contacts/Leads** — View and manage all contact form submissions
- **Government Applications** — Track all gov service applications
- **Settings** — Business info + Razorpay key configuration
- Collapsible sidebar, responsive design

### ✅ Government Services Page (`/government-services`)
- **8 categories** with **50+ services** including:
  - 🪪 Identity & Aadhaar Services (UIDAI)
  - 📔 Passport & Travel (Passport Seva)
  - 💰 Income Tax & Finance (IT Dept, GST)
  - 📜 Certificates & Documents
  - 🚗 Vehicle & Driving (Parivahan)
  - 🏥 Insurance & Social Security (PMJAY, EPFO)
  - 🏠 Property & Land Records
  - 🏢 Business Registration
- Each service has: fee, processing time, portal name, Apply Now button
- Official portal links (UIDAI, Passport Seva, GST, etc.)
- Razorpay integrated for each application fee payment
- 4-step process explanation

---

## 📁 Project Structure

```
esakha-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EsakhaLogo.jsx       ← Custom SVG logo
│   │   │   ├── Navbar.jsx           ← Updated with Esakha branding
│   │   │   ├── Footer.jsx           ← Updated with Esakha branding
│   │   │   ├── Chatbot.jsx
│   │   │   └── ServicePage.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx             ← Updated + Razorpay widget
│   │   │   ├── GovernmentServices.jsx ← NEW: 50+ gov services
│   │   │   ├── AdminPanel.jsx       ← NEW: Full admin dashboard
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Careers.jsx
│   │   │   └── [service pages...]
│   │   ├── styles/
│   │   │   └── index.css            ← Esakha theme (orange palette)
│   │   ├── App.jsx                  ← All routes including /admin, /government-services
│   │   └── main.jsx
│   ├── public/
│   │   └── favicon.svg              ← Esakha favicon
│   ├── index.html                   ← Razorpay SDK included
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── routes/
│   │   ├── paymentRoutes.js         ← NEW: Razorpay API routes
│   │   ├── contactRoutes.js
│   │   ├── careerRoutes.js
│   │   └── otherRoutes.js
│   ├── controllers/
│   ├── models/
│   ├── config/
│   ├── server.js                    ← Updated with payment routes
│   ├── package.json                 ← Added razorpay dependency
│   └── .env.example                 ← Updated with all env vars
└── README.md
```

---

## ⚙️ Setup Instructions

### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs at http://localhost:5173
```

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Fill in your credentials in .env
npm run dev
# Runs at http://localhost:5000
```

---

## 🔑 Environment Variables (.env)

```env
# Database
MONGODB_URI=mongodb+srv://...

# Razorpay (get from razorpay.com/dashboard)
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxx
RAZORPAY_KEY_SECRET=your_secret

# Admin
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password
JWT_SECRET=your-jwt-secret
```

---

## 💳 Razorpay Integration Guide

1. Sign up at [razorpay.com](https://razorpay.com)
2. Get your **Key ID** and **Secret** from Dashboard → API Keys
3. Add them to `.env` (backend) and update `YOUR_RAZORPAY_KEY_ID` in frontend
4. For production, use `rzp_live_` prefix; for testing use `rzp_test_`

---

## 🏛️ Government Services

Navigate to `/government-services` for 50+ services across:
- UIDAI (Aadhaar), Passport Seva, Income Tax, GST Portal
- Parivahan, EPFO, PMJAY, DigiLocker, Umang & more

Each service can be purchased directly via Razorpay.

---

## 🔐 Admin Panel

URL: `/admin`  
Default Login: `admin` / `esakha2024`  
**⚠️ Change credentials before going live!**

---

© 2024 Esakha Digital Services. www.esakha.in
