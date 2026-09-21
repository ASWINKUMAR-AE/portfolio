# ✨ Aswin Kumar - 3D Interactive Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.162.0-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1.5-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

A modern, immersive, and high-performance 3D developer portfolio built with **React**, **TypeScript**, **Three.js / React Three Fiber**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Features

- **🌐 Interactive 3D Canvas:** Immersive 3D graphics powered by Three.js and `@react-three/fiber` / `@react-three/drei`.
- **✨ Fluid Animations:** Smooth scroll transitions, micro-interactions, and entrance animations using Framer Motion.
- **🎯 Custom Cursor:** Interactive cursor effect for desktop devices.
- **📱 Fully Responsive:** Seamlessly optimized across all screen sizes (mobile, tablet, desktop).
- **🎨 Glassmorphism & Modern UI:** Sleek dark-mode aesthetic with styled components and backdrop filters.
- **⚡ Blazing Fast:** Built on top of Vite for lightning-quick HMR and optimal bundle sizes.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **3D Graphics:** [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Animations:** [Framer Motion](https://www.framer.com/motion/), [@react-spring/three](https://react-spring.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📋 Prerequisites

Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (Version **18.x** or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## ⚙️ Installation & Setup

Follow these steps to clone and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/ASWINKUMAR-AE/portfolio.git
cd portfolio
```

### 2. Install Dependencies

Using **npm**:
```bash
npm install
```

*(Optional: If you use `yarn` or `pnpm`)*
```bash
yarn install
# or
pnpm install
```

---

## 🏃 Running the Application

### Start Development Server

Run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Once started, open your browser and navigate to:
```text
http://localhost:5173
```

---

## 📦 Production Build & Deployment

### 1. Build for Production

Creates an optimized and minified production build in the `dist` folder:

```bash
npm run build
```

### 2. Preview the Production Build

Test and preview the production build locally:

```bash
npm run preview
```

### 3. Lint Code

Check for code quality and TypeScript/ESLint errors:

```bash
npm run lint
```

---

## 📂 Project Structure

```text
portfolio/
├── public/                  # Static assets and images
│   ├── favicon.svg
│   └── image/               # Project screenshots & icons
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI (Cursor, Loader, AnimatedText, CanvasLoader)
│   │   ├── layout/          # Layout components (Navbar, Footer)
│   │   ├── sections/        # Page sections (Hero, About, Skills, Projects, Contact)
│   │   └── three/           # 3D canvas and Three.js scenes
│   ├── App.tsx              # Main App component
│   ├── index.css            # Global Tailwind CSS styles
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry template
├── package.json             # Scripts & dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS theme & extensions
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/ASWINKUMAR-AE/portfolio/issues).

---

## 👤 Author

**Aswin Kumar**
- GitHub: [@ASWINKUMAR-AE](https://github.com/ASWINKUMAR-AE)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
