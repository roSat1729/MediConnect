# 🩺 Full Stack Doctors Appointment Platform (MediConnect)

A modern, scalable, and responsive web application for booking and managing doctor appointments. Built with cutting-edge technologies including Next.js App Router, Neon (PostgreSQL), Tailwind CSS, ShadCN UI, and Vonage for real-time video consultations.

## 🚀 Features

- 👨‍⚕️ Patient & Doctor Authentication (Clerk)
- 📅 Appointment Scheduling with Date & Time Picker
- 📞 Real-Time Video Calling using Vonage (OpenTok)
- 🖥️ Admin Dashboard for Managing Appointments
- 🧑‍💻 Fully Responsive UI with Tailwind CSS and ShadCN
- 🔐 Secure APIs and Access Control
- 🗄️ PostgreSQL Database via Neon

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI
- **Authentication**: Clerk.dev
- **Database**: PostgreSQL (via Neon)
- **Video Calls**: Vonage (OpenTok)
- **Forms**: React Hook Form, Zod
- **State Management**: React Context API

## ⚙️ Getting Started

### Prerequisites

- Node.js (LTS)
- Neon PostgreSQL database
- Clerk account (for auth)
- Vonage API credentials

### Installation

```bash
git clone https://github.com/your-username/mediconnect.git
cd mediconnect
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
# PostgreSQL
DATABASE_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Vonage (OpenTok)
NEXT_PUBLIC_VONAGE_APPLICATION_ID=
VONAGE_PRIVATE_KEY=
```

### Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to access the app.

## 📁 Project Structure

```
├── .next/                        # Next.js build output
├── actions/                     # Server-side functions
│   ├── admin.js
│   ├── appointments.js
│   ├── credits.js
│   ├── doctor.js
│   ├── doctors-listing.js
│   ├── onboarding.js
│   ├── patient.js
│   └── payout.js
├── app/                         # App Router pages and layouts
│   ├── (auth)/                  # Clerk authentication routes
│   │   ├── sign-in/
│   │   │   └── [...sign-in]/page.jsx
│   │   └── sign-up/
│   ├── (main)/                  # Main app views
│   ├── layout.js
│   ├── page.js
│   ├── favicon.ico
│   └── globals.css
├── components/                  # Reusable UI components
│   ├── appointment-card.jsx
│   ├── header.jsx
│   ├── page-header.jsx
│   ├── pricing.jsx
│   ├── theme-provider.jsx
│   └── ui/                      # ShadCN UI components
├── hooks/                       # Custom React hooks
│   └── use-fetch.js
├── lib/                         # Utilities and server helpers
│   ├── checkUser.js
│   ├── data.js
│   ├── prisma.js                # Prisma client
│   ├── schema.js                # Zod validation schemas
│   ├── specialities.js
│   └── utils.js
├── prisma/                      # Prisma schema and DB migrations
├── public/                      # Static assets (images, etc.)
│   └── [2 images]
├── node_modules/                # Auto-generated dependencies
├── .env                         # Environment variables
├── .eslintrc                    # Linting config
├── .gitignore
├── components.json              # Shadcn component config
├── eslint.config.mjs
├── jsconfig.json
├── middleware.js
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.js
└── README.md

```

## 📜 Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server

---

> 💡 This project is ideal for medical platforms, telemedicine startups, or any health-tech solutions involving scheduling and video calls.
