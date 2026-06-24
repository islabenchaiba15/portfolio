# Mohamed Islam Benchaiba - Portfolio Website

A premium, modern, and minimal personal portfolio website for Mohamed Islam Benchaiba, a Full Stack Data Analyst. Built using **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## ✨ Key Features
- **Aesthetic Refinement**: Clean, high-conversion ink-and-white theme layout alternating light-gray sections to create vertical visual rhythm.
- **Custom Interactive Visual**: An SVG line chart with hover coordinates combined with a live, real-time command terminal simulation reflecting pipeline logs.
- **Accessible Case Study Modals**: Structured performance KPI chips for three primary case studies, complete with accessible overlays supporting keyboard trap and escape close options.
- **Experience Timeline**: Consolidated professional roles, master's degree credentials from ESI-SBA, and supplementary projects in a clean timeline layout.
- **Secure Validated Contact Form**: Validates inputs on blur, displaying responsive validation notices, and provides a direct `mailto` redirection fallback containing inputs.
- **Full SEO & Accessibility**: Features semantic markup, keyboard navigability, contrast-compliant tokens, sitemap-ready metadata, and optimized static rendering.

---

## 🛠️ Local Development

### 1. Installation
Install the required project dependencies:
```bash
npm install
```

### 2. Run the Development Server
Launch the local Next.js dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Verification & Linting
Run the ESLint suite to check for syntax and accessibility warnings:
```bash
npm run lint
```

### 4. Build for Production
Compile the project to verify TypeScript integrity and generate an optimized static production bundle:
```bash
npm run build
```

---

## 🚀 Deployment (Vercel)

The codebase is fully optimized and deployable as a static/SSG site directly on Vercel:

1. Push the code to a GitHub repository.
2. Link the repository to your Vercel Dashboard.
3. Vercel will automatically detect the Next.js setup. Click **Deploy**.

*Note: Wire your physical resume to the `/public/resume.pdf` path so that the "Download CV" action operates successfully.*
