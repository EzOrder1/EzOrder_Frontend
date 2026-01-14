# 📁 EZORDER Frontend Codebase Documentation

> **Generated:** 2026-01-12 18:44:51
>
> **Project Path:** `D:\Nexus Nao\PROJECTS\EZORDER\PROJECT\frontend`
>
> **Total Files:** 107 | **Total Lines:** 10,799

---

## 📊 Codebase Statistics

- **Total Files:** 107
- **Total Lines:** 10,799

### Files by Extension

| Extension | Count |
|-----------|-------|
| `.css` | 2 |
| `.html` | 1 |
| `.js` | 1 |
| `.json` | 6 |
| `.ts` | 7 |
| `.tsx` | 90 |

### Files by Folder

| Folder | Count |
|--------|-------|
| `Root` | 10 |
| `src` | 5 |
| `src\components` | 1 |
| `src\components\admin` | 6 |
| `src\components\admin\analytics` | 2 |
| `src\components\admin\menu` | 3 |
| `src\components\admin\orders` | 3 |
| `src\components\admin\riders` | 3 |
| `src\components\admin\zones` | 2 |
| `src\components\home` | 9 |
| `src\components\layout` | 3 |
| `src\components\ui` | 49 |
| `src\hooks` | 2 |
| `src\lib` | 2 |
| `src\pages` | 7 |

---

## 📑 Table of Contents


### 📂 Root

- [components.json](#components-json)
- [index.html](#index-html)
- [package.json](#package-json)
- [postcss.config.js](#postcss-config-js)
- [tailwind.config.ts](#tailwind-config-ts)
- [tsconfig.app.json](#tsconfig-app-json)
- [tsconfig.json](#tsconfig-json)
- [tsconfig.node.json](#tsconfig-node-json)
- [vercel.json](#vercel-json)
- [vite.config.ts](#vite-config-ts)

### 📂 src

- [App.css](#src-app-css)
- [App.tsx](#src-app-tsx)
- [index.css](#src-index-css)
- [main.tsx](#src-main-tsx)
- [types.ts](#src-types-ts)

### 📂 src  /  components

- [NavLink.tsx](#src-components-navlink-tsx)

### 📂 src  /  hooks

- [use-mobile.tsx](#src-hooks-use-mobile-tsx)
- [use-toast.ts](#src-hooks-use-toast-ts)

### 📂 src  /  lib

- [api.ts](#src-lib-api-ts)
- [utils.ts](#src-lib-utils-ts)

### 📂 src  /  pages

- [AdminDashboard.tsx](#src-pages-admindashboard-tsx)
- [AdminLogin.tsx](#src-pages-adminlogin-tsx)
- [Contact.tsx](#src-pages-contact-tsx)
- [GetStarted.tsx](#src-pages-getstarted-tsx)
- [Index.tsx](#src-pages-index-tsx)
- [NotFound.tsx](#src-pages-notfound-tsx)
- [Pricing.tsx](#src-pages-pricing-tsx)

### 📂 src  /  components  /  admin

- [AdminSidebar.tsx](#src-components-admin-adminsidebar-tsx)
- [DashboardStats.tsx](#src-components-admin-dashboardstats-tsx)
- [OrderStatusChart.tsx](#src-components-admin-orderstatuschart-tsx)
- [RecentActivity.tsx](#src-components-admin-recentactivity-tsx)
- [SalesOverviewChart.tsx](#src-components-admin-salesoverviewchart-tsx)
- [TopProducts.tsx](#src-components-admin-topproducts-tsx)

### 📂 src  /  components  /  home

- [CTASection.tsx](#src-components-home-ctasection-tsx)
- [ExperienceSection.tsx](#src-components-home-experiencesection-tsx)
- [FAQSection.tsx](#src-components-home-faqsection-tsx)
- [FeaturesSection.tsx](#src-components-home-featuressection-tsx)
- [HeroSection.tsx](#src-components-home-herosection-tsx)
- [HighlightsSection.tsx](#src-components-home-highlightssection-tsx)
- [HowItWorksSection.tsx](#src-components-home-howitworkssection-tsx)
- [RiderSection.tsx](#src-components-home-ridersection-tsx)
- [UseCasesSection.tsx](#src-components-home-usecasessection-tsx)

### 📂 src  /  components  /  layout

- [Footer.tsx](#src-components-layout-footer-tsx)
- [Layout.tsx](#src-components-layout-layout-tsx)
- [Navbar.tsx](#src-components-layout-navbar-tsx)

### 📂 src  /  components  /  ui

- [accordion.tsx](#src-components-ui-accordion-tsx)
- [alert-dialog.tsx](#src-components-ui-alert-dialog-tsx)
- [alert.tsx](#src-components-ui-alert-tsx)
- [aspect-ratio.tsx](#src-components-ui-aspect-ratio-tsx)
- [avatar.tsx](#src-components-ui-avatar-tsx)
- [badge.tsx](#src-components-ui-badge-tsx)
- [breadcrumb.tsx](#src-components-ui-breadcrumb-tsx)
- [button.tsx](#src-components-ui-button-tsx)
- [calendar.tsx](#src-components-ui-calendar-tsx)
- [card.tsx](#src-components-ui-card-tsx)
- [carousel.tsx](#src-components-ui-carousel-tsx)
- [chart.tsx](#src-components-ui-chart-tsx)
- [checkbox.tsx](#src-components-ui-checkbox-tsx)
- [collapsible.tsx](#src-components-ui-collapsible-tsx)
- [command.tsx](#src-components-ui-command-tsx)
- [context-menu.tsx](#src-components-ui-context-menu-tsx)
- [dialog.tsx](#src-components-ui-dialog-tsx)
- [drawer.tsx](#src-components-ui-drawer-tsx)
- [dropdown-menu.tsx](#src-components-ui-dropdown-menu-tsx)
- [form.tsx](#src-components-ui-form-tsx)
- [hover-card.tsx](#src-components-ui-hover-card-tsx)
- [input-otp.tsx](#src-components-ui-input-otp-tsx)
- [input.tsx](#src-components-ui-input-tsx)
- [label.tsx](#src-components-ui-label-tsx)
- [menubar.tsx](#src-components-ui-menubar-tsx)
- [navigation-menu.tsx](#src-components-ui-navigation-menu-tsx)
- [pagination.tsx](#src-components-ui-pagination-tsx)
- [popover.tsx](#src-components-ui-popover-tsx)
- [progress.tsx](#src-components-ui-progress-tsx)
- [radio-group.tsx](#src-components-ui-radio-group-tsx)
- [resizable.tsx](#src-components-ui-resizable-tsx)
- [scroll-area.tsx](#src-components-ui-scroll-area-tsx)
- [select.tsx](#src-components-ui-select-tsx)
- [separator.tsx](#src-components-ui-separator-tsx)
- [sheet.tsx](#src-components-ui-sheet-tsx)
- [sidebar.tsx](#src-components-ui-sidebar-tsx)
- [skeleton.tsx](#src-components-ui-skeleton-tsx)
- [slider.tsx](#src-components-ui-slider-tsx)
- [sonner.tsx](#src-components-ui-sonner-tsx)
- [switch.tsx](#src-components-ui-switch-tsx)
- [table.tsx](#src-components-ui-table-tsx)
- [tabs.tsx](#src-components-ui-tabs-tsx)
- [textarea.tsx](#src-components-ui-textarea-tsx)
- [toast.tsx](#src-components-ui-toast-tsx)
- [toaster.tsx](#src-components-ui-toaster-tsx)
- [toggle-group.tsx](#src-components-ui-toggle-group-tsx)
- [toggle.tsx](#src-components-ui-toggle-tsx)
- [tooltip.tsx](#src-components-ui-tooltip-tsx)
- [use-toast.ts](#src-components-ui-use-toast-ts)

### 📂 src  /  components  /  admin  /  analytics

- [CustomerList.tsx](#src-components-admin-analytics-customerlist-tsx)
- [SalesReport.tsx](#src-components-admin-analytics-salesreport-tsx)

### 📂 src  /  components  /  admin  /  menu

- [CategoryManager.tsx](#src-components-admin-menu-categorymanager-tsx)
- [MenuItemForm.tsx](#src-components-admin-menu-menuitemform-tsx)
- [MenuItemsTable.tsx](#src-components-admin-menu-menuitemstable-tsx)

### 📂 src  /  components  /  admin  /  orders

- [OrderDetailsModal.tsx](#src-components-admin-orders-orderdetailsmodal-tsx)
- [OrderManager.tsx](#src-components-admin-orders-ordermanager-tsx)
- [OrdersTable.tsx](#src-components-admin-orders-orderstable-tsx)

### 📂 src  /  components  /  admin  /  riders

- [RiderForm.tsx](#src-components-admin-riders-riderform-tsx)
- [RiderList.tsx](#src-components-admin-riders-riderlist-tsx)
- [RiderSelectionModal.tsx](#src-components-admin-riders-riderselectionmodal-tsx)

### 📂 src  /  components  /  admin  /  zones

- [DeliveryZoneForm.tsx](#src-components-admin-zones-deliveryzoneform-tsx)
- [DeliveryZoneList.tsx](#src-components-admin-zones-deliveryzonelist-tsx)

---

## 📄 Source Code Files

---

### 📂 Root

#### 📄 `components.json`

*Lines: 20*

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

#### 📄 `index.html`

*Lines: 39*

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EZORDER - Order Food Fast via WhatsApp</title>
  <meta name="description"
    content="EZORDER makes food ordering effortless. Order via WhatsApp with AI-powered multilingual support. Restaurants get real-time dashboards and instant notifications." />
  <meta name="author" content="EZORDER" />
  <meta name="keywords"
    content="food ordering, WhatsApp ordering, restaurant order system, AI food bot, multilingual ordering, Pakistan food delivery" />
  <link rel="canonical" href="https://ezorder.pk" />

  <meta property="og:title" content="EZORDER - Order Food Fast via WhatsApp" />
  <meta property="og:description"
    content="EZORDER makes food ordering effortless. Order via WhatsApp with AI-powered multilingual support." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ezorder.pk" />
  <meta property="og:image" content="https://ezorder.pk/og-image.png" />
  <meta property="og:site_name" content="EZORDER" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ezorder" />
  <meta name="twitter:title" content="EZORDER - Order Food Fast via WhatsApp" />
  <meta name="twitter:description"
    content="EZORDER makes food ordering effortless. Order via WhatsApp with AI-powered multilingual support." />
  <meta name="twitter:image" content="https://ezorder.pk/og-image.png" />

  <meta name="theme-color" content="#32C766" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

#### 📄 `package.json`

*Lines: 87*

```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fontsource/inter": "^5.2.8",
    "@fontsource/poppins": "^5.2.7",
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.83.0",
    "axios": "^1.7.9",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.23.25",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/node": "^22.16.5",
    "@types/react": "^18.3.23",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "lovable-tagger": "^1.1.11",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.19"
  }
}
```

#### 📄 `postcss.config.js`

*Lines: 6*

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### 📄 `tailwind.config.ts`

*Lines: 116*

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        button: "12px",
        card: "8px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        "glow-primary": "var(--shadow-glow-primary)",
        "glow-secondary": "var(--shadow-glow-secondary)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

#### 📄 `tsconfig.app.json`

*Lines: 30*

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

#### 📄 `tsconfig.json`

*Lines: 16*

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false
  }
}
```

#### 📄 `tsconfig.node.json`

*Lines: 22*

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

#### 📄 `vercel.json`

*Lines: 11*

```json
{
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "framework": "vite",
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

#### 📄 `vite.config.ts`

*Lines: 18*

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

---

### 📂 src

#### 📄 `src\App.css`

*Lines: 42*

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```

#### 📄 `src\App.tsx`

*Lines: 37*

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import Pricing from "./pages/Pricing";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

#### 📄 `src\index.css`

*Lines: 184*

```css
@import "@fontsource/poppins/400.css";
@import "@fontsource/poppins/500.css";
@import "@fontsource/poppins/600.css";
@import "@fontsource/poppins/700.css";
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/500.css";
@import "@fontsource/inter/600.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* EZORDER Brand Colors - HSL Format */
    /* Lime Green #88C456 -> 93deg 48% 55% */
    --primary: 93 48% 55%;
    --primary-foreground: 0 0% 100%;
    --primary-glow: 93 48% 65%;
    
    /* Sky Blue #5999C9 -> 206deg 50% 57% */
    --secondary: 206 50% 57%;
    --secondary-foreground: 0 0% 100%;
    
    /* Warm Orange #FCB752 -> 36deg 96% 65% */
    --accent: 36 96% 65%;
    --accent-foreground: 36 96% 20%;
    
    --background: 210 17% 98%;
    --foreground: 222 47% 11%;
    
    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 222 47% 11%;
    
    --muted: 210 20% 96%;
    --muted-foreground: 215 16% 47%;
    
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    
    --border: 214 20% 90%;
    --input: 214 20% 90%;
    --ring: 93 48% 55%;
    
    --radius: 0.5rem;
    
    /* Custom shadows */
    --shadow-card: 0 6px 18px rgba(136, 196, 86, 0.1);
    --shadow-elevated: 0 12px 32px rgba(136, 196, 86, 0.15);
    --shadow-glow-primary: 0 8px 24px hsla(93, 48%, 55%, 0.25);
    --shadow-glow-secondary: 0 8px 24px hsla(206, 50%, 57%, 0.25);
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(93, 48%, 55%), hsl(93, 48%, 45%));
    --gradient-secondary: linear-gradient(135deg, hsl(206, 50%, 57%), hsl(206, 50%, 47%));
    --gradient-hero: linear-gradient(180deg, hsl(210, 17%, 98%) 0%, hsl(93, 30%, 96%) 100%);
    
    /* Sidebar - keep existing */
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 93 48% 55%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 93 30% 96%;
    --sidebar-accent-foreground: 93 48% 30%;
    --sidebar-border: 214 20% 90%;
    --sidebar-ring: 145 59% 48%;
  }

  .dark {
    --background: 0 0% 7%;
    --foreground: 210 40% 98%;
    
    --card: 0 0% 12%;
    --card-foreground: 210 40% 98%;
    
    --popover: 0 0% 12%;
    --popover-foreground: 210 40% 98%;
    
    --primary: 145 59% 48%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 32 92% 60%;
    --secondary-foreground: 0 0% 100%;
    
    --muted: 0 0% 15%;
    --muted-foreground: 215 20% 65%;
    
    --accent: 32 50% 15%;
    --accent-foreground: 32 92% 70%;
    
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 145 59% 48%;
    
    --sidebar-background: 0 0% 10%;
    --sidebar-foreground: 240 5% 90%;
    --sidebar-primary: 145 59% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 0 0% 15%;
    --sidebar-accent-foreground: 145 59% 70%;
    --sidebar-border: 0 0% 20%;
    --sidebar-ring: 145 59% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-background text-foreground font-sans antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-semibold tracking-tight;
  }
}

@layer components {
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .card-elevated {
    @apply bg-card rounded-lg border border-border;
    box-shadow: var(--shadow-card);
  }
  
  .gradient-text-primary {
    @apply bg-clip-text text-transparent;
    background-image: var(--gradient-primary);
  }
  
  .btn-glow-primary {
    box-shadow: var(--shadow-glow-primary);
  }
  
  .btn-glow-secondary {
    box-shadow: var(--shadow-glow-secondary);
  }
}

@layer utilities {
  .animate-fade-up {
    animation: fadeUp 0.6s ease-out forwards;
  }
  
  .animate-fade-up-delay-1 {
    animation: fadeUp 0.6s ease-out 0.1s forwards;
    opacity: 0;
  }
  
  .animate-fade-up-delay-2 {
    animation: fadeUp 0.6s ease-out 0.2s forwards;
    opacity: 0;
  }
  
  .animate-fade-up-delay-3 {
    animation: fadeUp 0.6s ease-out 0.3s forwards;
    opacity: 0;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### 📄 `src\main.tsx`

*Lines: 5*

```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

#### 📄 `src\types.ts`

*Lines: 22*

```typescript
export interface Rider {
    id: string;
    name: string;
    phone_number: string;
    vehicle_info: string;
    status: 'active' | 'inactive';
    created_at: string;
}

export type RiderFormData = Omit<Rider, 'id' | 'created_at'>;

export interface DeliveryZone {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    radius_km: number;
    is_active: boolean;
    created_at: string;
}

export type DeliveryZoneFormData = Omit<DeliveryZone, 'id' | 'created_at'>;
```

---

### 📂 src  /  components

#### 📄 `src\components\NavLink.tsx`

*Lines: 28*

```tsx
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
```

---

### 📂 src  /  hooks

#### 📄 `src\hooks\use-mobile.tsx`

*Lines: 19*

```tsx
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

#### 📄 `src\hooks\use-toast.ts`

*Lines: 186*

```typescript
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
```

---

### 📂 src  /  lib

#### 📄 `src\lib\api.ts`

*Lines: 139*

```typescript
import axios from "axios";

// Create axios instance with base URL
// Using localhost:8000 as default, but allowing environment variable override
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;

const getStoredAccessToken = () => localStorage.getItem("token");
const getStoredRefreshToken = () => localStorage.getItem("refresh_token");

const refreshAccessToken = async (): Promise<string> => {
    const storedRefresh = getStoredRefreshToken();
    if (!storedRefresh) {
        throw new Error("Missing refresh token");
    }

    const response = await axios.post(
        `${baseURL}/api/v1/auth/refresh`,
        { refresh_token: storedRefresh },
        { headers: { "Content-Type": "application/json" } }
    );

    const { access_token, refresh_token } = response.data ?? {};
    if (!access_token) {
        throw new Error("Refresh did not return access_token");
    }

    localStorage.setItem("token", access_token);
    if (refresh_token) {
        localStorage.setItem("refresh_token", refresh_token);
    }

    return access_token;
};

const setAuthHeader = (headers: any, token: string) => {
    const value = `Bearer ${token}`;

    if (!headers) {
        return { Authorization: value };
    }

    // Axios v1 may use AxiosHeaders (has .set)
    if (typeof headers.set === "function") {
        headers.set("Authorization", value);
        return headers;
    }

    return { ...headers, Authorization: value };
};

// Request interceptor for adding auth token
api.interceptors.request.use(
    (config) => {
        const token = getStoredAccessToken();
        if (token) {
            config.headers = setAuthHeader(config.headers, token);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling 401 (refresh + retry once).
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error?.response?.status;
        const originalRequest = error?.config as any;

        if (status !== 401 || !originalRequest) {
            return Promise.reject(error);
        }

        const requestUrl: string = originalRequest.url || "";
        const isAuthEndpoint = requestUrl.includes("/api/v1/auth/login") || requestUrl.includes("/api/v1/auth/refresh");

        if (isAuthEndpoint || originalRequest._retry) {
            if (typeof window !== "undefined") {
                window.dispatchEvent(
                    new CustomEvent("ezorder:unauthorized", {
                        detail: { url: requestUrl, method: originalRequest.method },
                    })
                );
            }
            return Promise.reject(error);
        }

        const refreshToken = getStoredRefreshToken();
        if (!refreshToken) {
            if (typeof window !== "undefined") {
                window.dispatchEvent(
                    new CustomEvent("ezorder:unauthorized", {
                        detail: { url: requestUrl, method: originalRequest.method },
                    })
                );
            }
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            if (!isRefreshing) {
                isRefreshing = true;
                refreshPromise = refreshAccessToken().finally(() => {
                    isRefreshing = false;
                    refreshPromise = null;
                });
            }

            const newToken = await refreshPromise!;
            originalRequest.headers = setAuthHeader(originalRequest.headers, newToken);
            return api(originalRequest);
        } catch (refreshError) {
            if (typeof window !== "undefined") {
                window.dispatchEvent(
                    new CustomEvent("ezorder:unauthorized", {
                        detail: { url: requestUrl, method: originalRequest.method, reason: "refresh_failed" },
                    })
                );
            }
            return Promise.reject(refreshError);
        }
    }
);

export default api;
```

#### 📄 `src\lib\utils.ts`

*Lines: 6*

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

### 📂 src  /  pages

#### 📄 `src\pages\AdminDashboard.tsx`

*Lines: 736*

```tsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { SalesOverviewChart } from "@/components/admin/SalesOverviewChart";
import { OrderStatusChart } from "@/components/admin/OrderStatusChart";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { TopProducts, ComputedProduct } from "@/components/admin/TopProducts";
import { MenuItemsTable } from "@/components/admin/menu/MenuItemsTable";
import { MenuItemForm, MenuItem as FormMenuItem } from "@/components/admin/menu/MenuItemForm";
import { CategoryManager } from "@/components/admin/menu/CategoryManager";
import { OrderDetailsModal } from "@/components/admin/orders/OrderDetailsModal";
import { ActiveOrders } from "@/components/admin/orders/ActiveOrders";
import { OrderManager } from "@/components/admin/orders/OrderManager";
import { SalesReport } from "@/components/admin/analytics/SalesReport";
import { CustomerList } from "@/components/admin/analytics/CustomerList";
import { RiderList } from "@/components/admin/riders/RiderList";
import { RiderForm } from "@/components/admin/riders/RiderForm";
import { RiderSelectionModal } from "@/components/admin/riders/RiderSelectionModal";
import { DeliveryZoneList } from "@/components/admin/zones/DeliveryZoneList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";
import { cn } from "@/lib/utils";
import { Bell, Search, User, Menu as MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ringtone from "@/assets/ringtone.mp3";
import { Rider, RiderFormData } from "@/types";

// Types
type OrderStatus =
  | "confirmed"
  | "preparing"
  | "ready"
  | "out_for_delivery"
  | "delivered"
  | "cancelled";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
};

type Order = {
  order_number: string;
  user_name: string;
  phone_number: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  created_at: string;
};

type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
};

type MenuResponse = {
  items: MenuItem[];
  total: number;
  items_filter?: string; // Add optional property to match usage if needed, or ignore
};

type OrderListResponse = {
  orders: Order[];
  total: number;
};

const orderStatusOptions: { value: OrderStatus; label: string }[] = [
  { value: "confirmed", label: "Confirmed" },
  { value: "preparing", label: "Preparing" },
  { value: "ready", label: "Ready" },
  { value: "out_for_delivery", label: "Out for delivery" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

const statusBadgeTone: Record<OrderStatus, string> = {
  confirmed: "bg-blue-100 text-blue-900",
  preparing: "bg-amber-100 text-amber-900",
  ready: "bg-emerald-100 text-emerald-900",
  out_for_delivery: "bg-cyan-100 text-cyan-900",
  delivered: "bg-lime-100 text-lime-900",
  cancelled: "bg-rose-100 text-rose-900",
};

const currency = (value: number) =>
  new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(
    value || 0
  );

const AdminDashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [authorized, setAuthorized] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [userName, setUserName] = useState<string>("Admin");
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");

  // Menu State
  const [isMenuItemModalOpen, setIsMenuItemModalOpen] = useState(false);
  const [editingMenuItem, setEditingMenuItem] = useState<FormMenuItem | null>(null);

  // Rider State
  const [isRiderModalOpen, setIsRiderModalOpen] = useState(false);
  const [editingRider, setEditingRider] = useState<Rider | null>(null);
  const [isRiderSelectionOpen, setIsRiderSelectionOpen] = useState(false);
  const [pendingStatusOrder, setPendingStatusOrder] = useState<Order | null>(null);


  // Order Detail State
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Notification State
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  // Poll for new orders every 30 seconds
  const { data: latestOrder } = useQuery({
    queryKey: ["latest-orders-poll"],
    queryFn: async () => {
      const res = await api.get("/api/v1/orders/", { params: { limit: 1 } });
      return res.data.orders[0] as Order;
    },
    refetchInterval: 30000,
    enabled: authorized,
  });

  // Handle Notifications
  useEffect(() => {
    if (latestOrder) {
      const lastKnownOrder = localStorage.getItem("lastKnownOrderNumber");

      // If we have a last known order and this one is different (and presumably newer)
      if (lastKnownOrder && lastKnownOrder !== latestOrder.order_number) {
        // It's a new order!
        setUnreadNotifications((prev) => prev + 1);
        toast({
          title: "New Order Received!",
          description: `Order #${latestOrder.order_number} from ${latestOrder.user_name}`,
          duration: 5000,
          className: "bg-emerald-50 border-emerald-200",
        });

        // Play Sound
        playNotificationSound();
      }

      // Update local storage to current latest
      localStorage.setItem("lastKnownOrderNumber", latestOrder.order_number);
    }
  }, [latestOrder, toast]);

  const playNotificationSound = () => {
    try {
      const audio = new Audio(ringtone);
      audio.play().catch((e) => console.error("Audio play failed", e));
    } catch (err) {
      console.error("Failed to initialize audio", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      navigate("/admin/login");
      setAuthChecked(true);
      return;
    }

    try {
      const parsed = JSON.parse(storedUser);
      setUserName(parsed?.name || "Admin");
      if (parsed?.role === "admin" || parsed?.role === "staff") {
        setAuthorized(true);
      } else {
        toast({
          title: "Access denied",
          variant: "destructive",
        });
        navigate("/");
      }
    } catch {
      navigate("/admin/login");
    } finally {
      setAuthChecked(true);
    }
  }, [navigate, toast]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handle = () => {
      if (media.matches) {
        setIsSidebarOpen(false);
      }
    };

    handle();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handle);
      return () => media.removeEventListener("change", handle);
    }

    media.addListener(handle);
    return () => media.removeListener(handle);
  }, []);

  // Queries
  const statsQuery = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await api.get("/api/v1/orders/stats");
      return res.data as { total_orders: number; by_status: Record<string, number> };
    },
    enabled: authorized,
  });

  const metricsQuery = useQuery({
    queryKey: ["order-metrics"],
    queryFn: async () => {
      const res = await api.get("/api/v1/orders/metrics/daily", { params: { days: 10 } });
      return res.data as { series: { date: string; day: string; orders: number; revenue: number }[] };
    },
    enabled: authorized,
  });

  const ordersQuery = useQuery({
    queryKey: ["orders", statusFilter],
    queryFn: async () => {
      const res = await api.get("/api/v1/orders/", {
        params: { status: statusFilter === "all" ? undefined : statusFilter, limit: 100 },
      });
      return res.data as OrderListResponse;
    },
    enabled: authorized,
    staleTime: 30000,
  });

  const menuQuery = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await api.get("/api/v1/menu/", { params: { limit: 200 } });
      return res.data as MenuResponse;
    },
    enabled: authorized,
  });

  const categoriesQuery = useQuery({
    queryKey: ["menu-categories"],
    queryFn: async () => {
      const res = await api.get("/api/v1/menu/categories");
      return res.data as string[];
    },
    enabled: authorized,
  });

  const ridersQuery = useQuery({
    queryKey: ["riders"],
    queryFn: async () => {
      const res = await api.get("/api/v1/riders/");
      return res.data.items as Rider[];
    },
    enabled: authorized,
  });

  // Mutations
  const orderStatusMutation = useMutation({
    mutationFn: async (payload: { orderNumber: string; status: OrderStatus; riderId?: string }) => {
      const res = await api.put(`/api/v1/orders/${payload.orderNumber}/status`, {
        status: payload.status,
        rider_id: payload.riderId,
      });
      return res.data as Order;
    },
    onSuccess: () => {
      toast({ title: "Order updated" });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["order-stats"] });
    },
  });

  const createMenuMutation = useMutation({
    mutationFn: async (payload: FormMenuItem) => {
      const res = await api.post("/api/v1/menu", payload);
      return res.data;
    },
    onSuccess: () => {
      toast({ title: "Item created" });
      setIsMenuItemModalOpen(false);
      queryClient.invalidateQueries({ queryKey: ["menu"] });
    },
    onError: () => toast({ title: "Failed to create item", variant: "destructive" }),
  });

  const updateMenuMutation = useMutation({
    mutationFn: async (payload: { id: number; data: FormMenuItem }) => {
      const res = await api.put(`/api/v1/menu/${payload.id}`, payload.data);
      return res.data;
    },
    onSuccess: () => {
      toast({ title: "Item updated" });
      setIsMenuItemModalOpen(false);
      setEditingMenuItem(null);
      queryClient.invalidateQueries({ queryKey: ["menu"] });
    },
    onError: () => toast({ title: "Failed to update item", variant: "destructive" }),
  });

  const deleteMenuMutation = useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/api/v1/menu/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Item deleted" });
      queryClient.invalidateQueries({ queryKey: ["menu"] });
    },
  });

  const createCategoryMutation = useMutation({
    mutationFn: async (name: string) => {
      await api.post("/api/v1/menu/category", { name });
    },
    onSuccess: () => {
      toast({ title: "Category added" });
      queryClient.invalidateQueries({ queryKey: ["menu-categories"] });
    },
    onError: () => toast({ title: "Failed to add category", variant: "destructive" }),
  });

  const renameCategoryMutation = useMutation({
    mutationFn: async (payload: { old_category: string; new_category: string }) => {
      await api.put("/api/v1/menu/category/rename", payload);
    },
    onSuccess: () => {
      toast({ title: "Category renamed" });
      queryClient.invalidateQueries({ queryKey: ["menu-categories"] });
      queryClient.invalidateQueries({ queryKey: ["menu"] });
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: async (name: string) => {
      await api.delete("/api/v1/menu/category", { data: { name } });
    },
    onSuccess: () => {
      toast({ title: "Category deleted" });
      queryClient.invalidateQueries({ queryKey: ["menu-categories"] });
      queryClient.invalidateQueries({ queryKey: ["menu"] });
    },
    onError: () => toast({ title: "Failed to delete category", variant: "destructive" }),
  });

  const createRiderMutation = useMutation({
    mutationFn: async (data: RiderFormData) => {
      const res = await api.post("/api/v1/riders/", data);
      return res.data;
    },
    onSuccess: () => {
      toast({ title: "Rider added" });
      setIsRiderModalOpen(false);
      queryClient.invalidateQueries({ queryKey: ["riders"] });
    },
    onError: () => toast({ title: "Failed to add rider", variant: "destructive" }),
  });

  const updateRiderMutation = useMutation({
    mutationFn: async (payload: { id: string; data: RiderFormData }) => {
      const res = await api.put(`/api/v1/riders/${payload.id}`, payload.data);
      return res.data;
    },
    onSuccess: () => {
      toast({ title: "Rider updated" });
      setIsRiderModalOpen(false);
      setEditingRider(null);
      queryClient.invalidateQueries({ queryKey: ["riders"] });
    },
    onError: () => toast({ title: "Failed to update rider", variant: "destructive" }),
  });

  const deleteRiderMutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/api/v1/riders/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Rider deleted" });
      queryClient.invalidateQueries({ queryKey: ["riders"] });
    },
  });


  // Data Logic
  const revenueLastWeek = useMemo(() => {
    const series = metricsQuery.data?.series || [];
    return series.reduce((sum, row) => sum + (row.revenue || 0), 0);
  }, [metricsQuery.data]);

  const chartData = useMemo(() => {
    return metricsQuery.data?.series.map(s => ({
      name: s.day,
      uv: s.orders,
      pv: s.revenue / 2,
      amt: s.revenue
    })) || [];
  }, [metricsQuery.data]);

  const statusData = useMemo(() => {
    const byStatus = statsQuery.data?.by_status || {};
    return Object.entries(byStatus).map(([key, value]) => ({
      name: key.replace(/_/g, " "),
      value: value
    })).filter(item => item.value > 0);
  }, [statsQuery.data]);

  const topProducts = useMemo<ComputedProduct[]>(() => {
    if (!ordersQuery.data?.orders) return [];

    const productMap = new Map<string, { sales: number; revenue: number }>();

    ordersQuery.data.orders.forEach(order => {
      if (order.status !== 'cancelled') {
        order.items.forEach(item => {
          const current = productMap.get(item.name) || { sales: 0, revenue: 0 };
          productMap.set(item.name, {
            sales: current.sales + item.quantity,
            revenue: current.revenue + item.subtotal
          });
        });
      }
    });

    return Array.from(productMap.entries())
      .map(([name, data]) => ({
        name,
        sales: data.sales,
        revenue: data.revenue,
        status: "Active"
      }))
      .sort((a, b) => b.sales - a.sales)
      .slice(0, 5);
  }, [ordersQuery.data]);

  const uniqueCustomers = useMemo(() => {
    if (!ordersQuery.data?.orders) return 0;
    const users = new Set(ordersQuery.data.orders.map(o => o.phone_number));
    return users.size;
  }, [ordersQuery.data]);

  const handleStatusChange = (order: Order, newStatus: OrderStatus) => {
    if (newStatus === "out_for_delivery") {
      setPendingStatusOrder(order);
      setIsRiderSelectionOpen(true);
    } else {
      orderStatusMutation.mutate({ orderNumber: order.order_number, status: newStatus });
    }
  };

  const handleRiderSelection = (riderId: string) => {
    if (pendingStatusOrder) {
      orderStatusMutation.mutate({
        orderNumber: pendingStatusOrder.order_number,
        status: "out_for_delivery",
        riderId: riderId
      });
      setPendingStatusOrder(null);
    }
  };


  if (!authChecked) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50 px-6">
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-hidden />
          Loading dashboard…
        </div>
      </div>
    );
  }

  if (!authorized) return null;

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform bg-slate-900 transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:translate-x-0 lg:border-r lg:border-slate-800 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <AdminSidebar activeSection={activeSection} setActiveSection={(s) => { setActiveSection(s); setIsSidebarOpen(false); }} />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}

        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-4 lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </Button>

          <div className="flex flex-1 items-center gap-4">
            {/* Left side of header if needed */}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-primary">
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  {unreadNotifications}
                </span>
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <span className="hidden text-sm font-medium md:inline-block">{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("refresh_token");
                  localStorage.removeItem("user");
                  navigate("/admin/login");
                }}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* content */}
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
          {activeSection === "dashboard" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              </div>

              <DashboardStats
                totalRevenue={revenueLastWeek}
                totalOrders={statsQuery.data?.total_orders || 0}
                totalCustomers={uniqueCustomers}
                totalProducts={menuQuery.data?.total || 0}
              />

              <div className="grid gap-6 lg:grid-cols-12">
                <SalesOverviewChart data={chartData} />
                <OrderStatusChart data={statusData} />
              </div>

              <div className="grid gap-6 lg:grid-cols-12">
                <RecentActivity orders={ordersQuery.data?.orders || []} />
                <TopProducts products={topProducts} />
              </div>
            </div>
          )}


          {activeSection === "bulk-update" && (
            <OrderManager
              onOrderClick={(order) => {
                setSelectedOrder(order as any);
                setIsOrderModalOpen(true);
              }}
            />
          )}



          {activeSection === "delivery-zones" && (
            <DeliveryZoneList />
          )}

          {activeSection === "menu-items" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold tracking-tight">Menu Items</h1>
              <MenuItemsTable
                items={menuQuery.data?.items || []}
                onCreate={() => {
                  setEditingMenuItem(null);
                  setIsMenuItemModalOpen(true);
                }}
                onEdit={(item) => {
                  setEditingMenuItem(item);
                  setIsMenuItemModalOpen(true);
                }}
                onDelete={(id) => deleteMenuMutation.mutate(id)}
              />
              <MenuItemForm
                open={isMenuItemModalOpen}
                onOpenChange={setIsMenuItemModalOpen}
                categories={categoriesQuery.data || []}
                initialData={editingMenuItem}
                isSubmitting={createMenuMutation.isPending || updateMenuMutation.isPending}
                onSubmit={(data) => {
                  if (editingMenuItem?.id) {
                    updateMenuMutation.mutate({ id: editingMenuItem.id, data });
                  } else {
                    createMenuMutation.mutate(data);
                  }
                }}
              />
            </div>
          )}

          {activeSection === "categories" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
              <CategoryManager
                categories={categoriesQuery.data || []}
                onCreate={(name) => createCategoryMutation.mutate(name)}
                onRename={(oldName, newName) => renameCategoryMutation.mutate({ old_category: oldName, new_category: newName })}
                onDelete={(name) => deleteCategoryMutation.mutate(name)}
              />
            </div>
          )}

          {activeSection === "riders" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold tracking-tight">Rider Management</h1>
              <RiderList
                riders={ridersQuery.data || []}
                onCreate={() => {
                  setEditingRider(null);
                  setIsRiderModalOpen(true);
                }}
                onEdit={(rider) => {
                  setEditingRider(rider);
                  setIsRiderModalOpen(true);
                }}
                onDelete={(id) => deleteRiderMutation.mutate(id)}
              />
              <RiderForm
                open={isRiderModalOpen}
                onOpenChange={setIsRiderModalOpen}
                initialData={editingRider}
                isSubmitting={createRiderMutation.isPending || updateRiderMutation.isPending}
                onSubmit={(data) => {
                  if (editingRider?.id) {
                    updateRiderMutation.mutate({ id: editingRider.id, data });
                  } else {
                    createRiderMutation.mutate(data);
                  }
                }}
              />
            </div>
          )}

          {activeSection === "sales-report" && (
            <SalesReport data={metricsQuery.data?.series || []} />
          )}

          {activeSection === "customers" && (
            <CustomerList orders={ordersQuery.data?.orders || []} />
          )}

          {(activeSection !== "dashboard" && activeSection !== "orders" && activeSection !== "menu-items" && activeSection !== "categories" && activeSection !== "sales-report" && activeSection !== "customers" && activeSection !== "riders" && activeSection !== "bulk-update" && activeSection !== "delivery-zones") && (
            <div className="flex h-[50vh] flex-col items-center justify-center text-center">
              <div className="rounded-full bg-gray-100 p-6">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Under Construction</h3>
              <p className="text-muted-foreground">The {activeSection.replace("-", " ")} module is coming soon.</p>
            </div>
          )}


          <OrderDetailsModal
            open={isOrderModalOpen}
            onOpenChange={setIsOrderModalOpen}
            order={selectedOrder}
          />
          <RiderSelectionModal
            open={isRiderSelectionOpen}
            onOpenChange={setIsRiderSelectionOpen}
            riders={ridersQuery.data || []}
            onSelect={handleRiderSelection}
          />
        </main>
      </div >
    </div >
  );
};

export default AdminDashboard;
```

#### 📄 `src\pages\AdminLogin.tsx`

*Lines: 185*

```tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";
import logo from "@/assets/logo.png";

const AdminLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      toast({
        title: "Missing Fields",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.post("/api/v1/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const { access_token, refresh_token, user } = response.data;

      // Store token and user data
      localStorage.setItem("token", access_token);
      if (refresh_token) {
        localStorage.setItem("refresh_token", refresh_token);
      }
      localStorage.setItem("user", JSON.stringify(user));

      toast({
        title: "Login Successful",
        description: "Redirecting to dashboard...",
      });

      // Determine redirection based on role if needed, or default to dashboard
      // For now, let's assume there's a dashboard route or simply home
      // Checking if there is a dashboard route... if not, redirect to index
      navigate("/admin/dashboard");

    } catch (error: any) {
      console.error("Login error:", error);
      let errorMessage = "Invalid email or password.";

      if (error.response?.data?.detail) {
        errorMessage = error.response.data.detail;
      }

      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-md"
          >
            <div className="text-center">
              <img src={logo} alt="EZORDER Logo" className="mx-auto h-12 w-auto object-contain" />
              <h1 className="mt-4 font-heading text-2xl font-bold text-foreground">
                Admin Login
              </h1>
              <p className="mt-2 text-muted-foreground">
                Sign in to manage your restaurant
              </p>
            </div>

            <div className="mt-8 card-elevated p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="username"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1.5">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="********"
                      autoComplete="current-password"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/get-started" className="font-medium text-primary hover:underline">
                Register your restaurant
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminLogin;
```

#### 📄 `src\pages\Contact.tsx`

*Lines: 162*

```tsx
import { Layout } from "@/components/layout/Layout";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo.png";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <Layout>
            <section className="relative overflow-hidden py-12 lg:py-20 bg-background pt-24">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Have a question or need support? Get in touch with us!
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Contact Information */}
                        <div className="card-elevated p-8 bg-card rounded-3xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-border bg-white p-1">
                                    <img
                                        src={logo}
                                        alt="EzOrder Support"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading">Get in Touch</h3>
                                    <p className="text-muted-foreground">We're here to help you 24/7</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <a href="tel:+11234567890" className="flex items-center gap-4 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg text-foreground hover:text-primary transition-colors">+1 (123) 456-7890</span>
                                </a>

                                <a href="mailto:support@ezorder.com" className="flex items-center gap-4 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent-foreground group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg text-foreground hover:text-primary transition-colors">support@ezorder.com</span>
                                </a>

                                <div className="flex items-start gap-4 group">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1 text-lg">Office Address</h4>
                                        <p className="text-muted-foreground text-lg">
                                            1234 Market St, Suite 100,<br />
                                            City, State 12345
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                {/* Social Icons */}
                                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors">
                                    <MessageCircle className="h-5 w-5" />
                                </a>
                                {/* Removed potentially crashing brand icons */}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card-elevated p-8 bg-card rounded-3xl h-fit">
                            <h2 className="text-2xl font-bold font-heading mb-6">Send Us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Input
                                            placeholder="Your Name"
                                            className="pl-10 h-12 bg-muted/30 border-border/50 focus:bg-background transition-colors"
                                        />
                                        <div className="absolute left-3 top-3.5 text-muted-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="relative">
                                        <Input
                                            type="email"
                                            placeholder="Your Email"
                                            className="pl-10 h-12 bg-muted/30 border-border/50 focus:bg-background transition-colors"
                                        />
                                        <div className="absolute left-3 top-3.5 text-muted-foreground">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="relative">
                                        <Input
                                            placeholder="Subject"
                                            className="pl-10 h-12 bg-muted/30 border-border/50 focus:bg-background transition-colors"
                                        />
                                        <div className="absolute left-3 top-3.5 text-muted-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="relative">
                                        <Textarea
                                            placeholder="Your Message"
                                            className="pl-10 min-h-[150px] bg-muted/30 border-border/50 focus:bg-background transition-colors resize-none pt-3"
                                        />
                                        <div className="absolute left-3 top-3.5 text-muted-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.234 20.252 21 3l-18 9.027 6.452 2.622"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-lg rounded-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300 mt-4 text-white"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] hover:-translate-y-1 transition-all duration-300"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="h-8 w-8" />
            </a>
        </Layout>
    );
};

export default Contact;
```

#### 📄 `src\pages\GetStarted.tsx`

*Lines: 555*

```tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Building2, User, Mail, Phone, MapPin, Clock, Upload, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";
import logo from "@/assets/logo.png";

const cuisineOptions = [
  "Pakistani",
  "Chinese",
  "Fast Food",
  "BBQ",
  "Desi",
  "Continental",
  "Italian",
  "Indian",
  "Middle Eastern",
  "Other",
];

const timezones = [
  "Asia/Karachi (PKT)",
  "Asia/Dubai (GST)",
  "Europe/London (GMT)",
  "America/New_York (EST)",
];

const GetStarted = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
    cuisine: "",
    openingHours: "",
    closingHours: "",
    timezone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Logo must be less than 5MB.",
          variant: "destructive",
        });
        return;
      }
      setLogoFile(file);
    }
  };

  const normalizePhone = (value: string) => {
    const cleaned = value.replace(/[^\d+]/g, "");
    if (cleaned.startsWith("+")) {
      return cleaned;
    }
    return cleaned.length ? `+${cleaned}` : cleaned;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.businessName.trim() || !formData.ownerName.trim() || 
        !formData.email.trim() || !formData.phone.trim() || !formData.address.trim() ||
        !formData.city.trim() || !formData.password.trim() || !formData.confirmPassword.trim()) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the Terms & Privacy Policy.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 6 characters.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Please make sure both passwords match.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const phoneNumber = normalizePhone(formData.phone);

      await api.post("/api/v1/auth/register", {
        email: formData.email.trim(),
        password: formData.password,
        name: formData.ownerName.trim(),
        phone_number: phoneNumber,
        address: formData.address.trim(),
        city: formData.city.trim(),
        postal_code: null,
      });

      const loginResponse = await api.post("/api/v1/auth/login", {
        email: formData.email.trim(),
        password: formData.password,
      });

      const { access_token, refresh_token, user } = loginResponse.data;
      localStorage.setItem("token", access_token);
      if (refresh_token) {
        localStorage.setItem("refresh_token", refresh_token);
      }
      localStorage.setItem("user", JSON.stringify(user));

      const restaurantResponse = await api.post("/api/v1/restaurants/", {
        name: formData.businessName.trim(),
        address: formData.address.trim(),
        phone_number: phoneNumber,
        category: formData.cuisine || "General",
        description: `Owner: ${formData.ownerName.trim()}`,
        opening_hours: formData.openingHours,
        closing_hours: formData.closingHours,
        timezone: formData.timezone,
      });

      const restaurantId = restaurantResponse.data?.id;
      if (logoFile && restaurantId) {
        const payload = new FormData();
        payload.append("file", logoFile);
        await api.post(`/api/v1/restaurants/${restaurantId}/logo`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setIsSuccess(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-lg text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h1 className="mt-6 font-heading text-3xl font-bold text-foreground">
                Registration Successful!
              </h1>
              <p className="mt-4 text-muted-foreground">
                Set up your menu items in the admin dashboard.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/admin/login">Go to Admin Login</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <motion.img
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto h-12 w-auto object-contain"
              src={logo}
              alt="EZORDER Logo"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-heading text-2xl font-bold text-foreground"
            >
              Get Started
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-muted-foreground"
            >
              Register your restaurant and start accepting orders via WhatsApp today. 
              Setup takes less than 5 minutes.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-12 max-w-2xl"
          >
            <div className="card-elevated p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-border pb-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h2 className="font-heading font-semibold text-foreground">
                      Business Information
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your Restaurant Name"
                        className="mt-1.5"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cuisine">Cuisine Type</Label>
                      <Select
                        value={formData.cuisine}
                        onValueChange={(value) => handleSelectChange("cuisine", value)}
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select cuisine" />
                        </SelectTrigger>
                        <SelectContent>
                          {cuisineOptions.map((cuisine) => (
                            <SelectItem key={cuisine} value={cuisine}>
                              {cuisine}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Full restaurant address"
                      className="mt-1.5 min-h-[80px]"
                      maxLength={300}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="mt-1.5"
                      maxLength={100}
                      required
                    />
                  </div>
                </div>

                {/* Owner Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-border pb-2">
                    <User className="h-5 w-5 text-primary" />
                    <h2 className="font-heading font-semibold text-foreground">
                      Owner Information
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="ownerName">Owner Name *</Label>
                      <Input
                        id="ownerName"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="mt-1.5"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="mt-1.5"
                        maxLength={255}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">WhatsApp Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 123 4567"
                      className="mt-1.5"
                      maxLength={20}
                      required
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      This number will receive order notifications
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Minimum 6 characters"
                        className="mt-1.5"
                        minLength={6}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter password"
                        className="mt-1.5"
                        minLength={6}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-border pb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h2 className="font-heading font-semibold text-foreground">
                      Operating Hours
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <Label htmlFor="openingHours">Opening Time</Label>
                      <Input
                        id="openingHours"
                        name="openingHours"
                        type="time"
                        value={formData.openingHours}
                        onChange={handleChange}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="closingHours">Closing Time</Label>
                      <Input
                        id="closingHours"
                        name="closingHours"
                        type="time"
                        value={formData.closingHours}
                        onChange={handleChange}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select
                        value={formData.timezone}
                        onValueChange={(value) => handleSelectChange("timezone", value)}
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {timezones.map((tz) => (
                            <SelectItem key={tz} value={tz}>
                              {tz}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Logo Upload */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-border pb-2">
                    <Upload className="h-5 w-5 text-primary" />
                    <h2 className="font-heading font-semibold text-foreground">
                      Logo (Optional)
                    </h2>
                  </div>

                  <div>
                    <Label htmlFor="logo">Upload Logo</Label>
                    <div className="mt-1.5 flex items-center gap-4">
                      <Input
                        id="logo"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="cursor-pointer"
                      />
                      {logoFile && (
                        <span className="text-sm text-muted-foreground">
                          {logoFile.name}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Max 5MB. Recommended: Square image, at least 200x200px
                    </p>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Creating Account..." : "Create Restaurant Account"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/admin/login" className="font-medium text-primary hover:underline">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
```

#### 📄 `src\pages\Index.tsx`

*Lines: 28*

```tsx
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FAQSection } from "@/components/home/FAQSection";
import { RiderSection } from "@/components/home/RiderSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <FeaturesSection />
      <UseCasesSection />
      <ExperienceSection />
      <HowItWorksSection />
      <RiderSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
```

#### 📄 `src\pages\NotFound.tsx`

*Lines: 45*

```tsx
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="text-center">
          <h1 className="font-heading text-8xl font-bold text-primary">404</h1>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="mt-2 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link to="/" className="gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
```

#### 📄 `src\pages\Pricing.tsx`

*Lines: 321*

```tsx
import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BadgeCheck, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import pricingTrial from "@/assets/ai/pricing-trial.svg";
import pricingStarter from "@/assets/ai/pricing-starter.svg";
import pricingGrowth from "@/assets/ai/pricing-growth.svg";
import pricingEnterprise from "@/assets/ai/pricing-enterprise.svg";

type PlanTone = "primary" | "secondary" | "accent" | "neutral";

type Plan = {
  id: string;
  name: string;
  tone: PlanTone;
  priceLabel: string;
  periodLabel: string;
  description: string;
  image: string;
  badge?: string;
  features: string[];
  cta: {
    label: string;
    href: string;
    variant?: "default" | "secondary" | "outline" | "ghost";
    className?: string;
  };
  note?: string;
};

const toneStyles: Record<PlanTone, { ring: string; badge: string; check: string; icon: string; tint: string }> = {
  primary: {
    ring: "ring-primary/20 border-primary/25",
    badge: "bg-primary/10 text-primary",
    check: "text-primary",
    icon: "bg-primary/10 text-primary ring-primary/20",
    tint: "from-primary/12 via-background to-primary/5",
  },
  secondary: {
    ring: "ring-secondary/20 border-secondary/25",
    badge: "bg-secondary/10 text-secondary",
    check: "text-secondary",
    icon: "bg-secondary/10 text-secondary ring-secondary/20",
    tint: "from-secondary/12 via-background to-secondary/5",
  },
  accent: {
    ring: "ring-accent/20 border-accent/25",
    badge: "bg-accent/15 text-accent-foreground",
    check: "text-accent",
    icon: "bg-accent/15 text-accent-foreground ring-accent/30",
    tint: "from-accent/15 via-background to-accent/5",
  },
  neutral: {
    ring: "ring-border/60 border-border",
    badge: "bg-muted text-muted-foreground",
    check: "text-foreground",
    icon: "bg-muted text-muted-foreground ring-border/60",
    tint: "from-muted/40 via-background to-muted/10",
  },
};

const plans: Plan[] = [
  {
    id: "trial",
    name: "Trial",
    tone: "primary",
    priceLabel: "Rs 0",
    periodLabel: "first month",
    description: "Start fast and see real orders in your dashboard.",
    image: pricingTrial,
    badge: "Free for 30 days",
    features: [
      "Full WhatsApp ordering flow",
      "Dashboard + kitchen ticket",
      "Voice notes supported (Urdu / Roman Urdu)",
      "Delivery + pickup order types",
      "Email support",
    ],
    cta: { label: "Start Free Month", href: "/get-started", variant: "default" },
    note: "No credit card required.",
  },
  {
    id: "starter",
    name: "Starter",
    tone: "secondary",
    priceLabel: "Rs 4,999",
    periodLabel: "per month",
    description: "Perfect for a single outlet getting consistent orders.",
    image: pricingStarter,
    features: [
      "1 branch",
      "Up to 5 staff logins",
      "Menu & add-ons suggestions",
      "Basic analytics",
      "24-hour support response",
    ],
    cta: { label: "Choose Starter", href: "/get-started", variant: "secondary" },
  },
  {
    id: "growth",
    name: "Growth",
    tone: "accent",
    priceLabel: "Rs 9,999",
    periodLabel: "per month",
    description: "Built for growing teams and multi-branch workflows.",
    image: pricingGrowth,
    badge: "Most popular",
    features: [
      "Up to 3 branches",
      "Unlimited staff logins",
      "Branch routing + delivery zones",
      "Advanced analytics & reports",
      "Priority support",
    ],
    cta: {
      label: "Choose Growth",
      href: "/get-started",
      className: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl",
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tone: "neutral",
    priceLabel: "Rs 24,999",
    periodLabel: "per month",
    description: "For chains that need deeper control and custom workflows.",
    image: pricingEnterprise,
    features: [
      "Unlimited branches",
      "Custom order rules + automations",
      "Dedicated onboarding",
      "SLA + priority support",
      "Custom reporting exports",
    ],
    cta: { label: "Talk to Sales", href: "/contact", variant: "outline" },
    note: "Custom setup available for large teams.",
  },
];

const faqs = [
  {
    q: "Is the first month really free?",
    a: "Yes — your first 30 days are free. After that, you can choose a paid plan that matches your order volume.",
  },
  {
    q: "Are prices in PKR and billed monthly?",
    a: "Yes, all prices are in rupees and billed monthly. Taxes (if applicable) are not included.",
  },
  {
    q: "Can I upgrade or downgrade later?",
    a: "Anytime. Move up when you grow, or switch plans if your needs change.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="section-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Pricing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              Simple plans for every restaurant
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-lg text-muted-foreground"
            >
              Start with a free month, then pick a plan that fits your growth. All plans keep customers on the chat they already use.
            </motion.p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, index) => {
              const styles = toneStyles[plan.tone];
              const isFeatured = plan.badge === "Most popular";

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.06 }}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
                    "ring-1",
                    styles.ring,
                    isFeatured && "ring-2 ring-accent/30",
                  )}
                >
                  <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70", styles.tint)} aria-hidden />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading text-xl font-semibold text-foreground">{plan.name}</h3>
                          {plan.badge && (
                            <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold", styles.badge)}>
                              {isFeatured && <Sparkles className="h-3.5 w-3.5" />}
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mt-5 overflow-hidden rounded-2xl border border-border/60 bg-background/70 shadow-sm">
                      <img
                        src={plan.image}
                        alt={`${plan.name} plan illustration`}
                        loading="lazy"
                        className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-4xl font-bold tracking-tight text-foreground">{plan.priceLabel}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{plan.periodLabel}</p>
                      </div>
                      {plan.id === "trial" && (
                        <div className="flex items-center gap-2 rounded-2xl bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                          <BadgeCheck className="h-4 w-4" />
                          Setup included
                        </div>
                      )}
                    </div>

                    <ul className="mt-6 space-y-2">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="group/item flex items-start gap-3 rounded-xl px-2 py-2 text-sm text-foreground/90 transition-colors hover:bg-background/70"
                        >
                          <Check className={cn("mt-0.5 h-4 w-4 shrink-0", styles.check)} aria-hidden />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.note && <p className="mt-4 text-xs font-medium text-muted-foreground">{plan.note}</p>}
                  </div>

                  <div className="relative mt-auto pt-6">
                    <Button
                      asChild
                      variant={plan.cta.variant}
                      className={cn(
                        "h-11 w-full rounded-full text-base",
                        plan.cta.className,
                        plan.cta.variant === "outline" && "bg-background/60",
                      )}
                    >
                      <Link to={plan.cta.href}>{plan.cta.label}</Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Questions, answered</h2>
              <p className="mt-3 text-muted-foreground">
                Everything you need to know before you start. If you have a special workflow, talk to us.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="secondary" className="rounded-full">
                  <Link to="/get-started">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-background/60">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((item) => (
                    <AccordionItem key={item.q} value={item.q}>
                      <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
```

---

### 📂 src  /  components  /  admin

#### 📄 `src\components\admin\AdminSidebar.tsx`

*Lines: 103*

```tsx
import {
    LayoutDashboard,
    List,
    Users,
    BarChart,
    Map,
    ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface AdminSidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const menuItems = [
    {
        category: "Main",
        items: [
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        ],
    },
    {
        category: "Order Management",
        items: [
            { id: "bulk-update", label: "Orders", icon: ShoppingBag },
        ],
    },
    {
        category: "Menu Management",
        items: [
            { id: "menu-items", label: "Menu Items", icon: List },
            { id: "categories", label: "Categories", icon: List },
        ],
    },
    {
        category: "Operations",
        items: [
            { id: "riders", label: "Rider Management", icon: Users },
            { id: "delivery-zones", label: "Delivery Zones", icon: Map },
        ]
    },
    {
        category: "Analytics",
        items: [
            { id: "sales-report", label: "Sales Report", icon: BarChart },
            { id: "customers", label: "Customers", icon: Users },
        ],
    },
];

export function AdminSidebar({ activeSection, setActiveSection }: AdminSidebarProps) {
    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-800 bg-slate-900 text-slate-300 transition-transform shadow-xl">
            <div className="flex h-16 items-center border-b border-slate-800 px-6 backdrop-blur-sm bg-slate-900/50">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="EzOrder logo"
                        className="h-9 w-auto object-contain"
                    />

                </div>
            </div>
            <div className="h-[calc(100vh-64px)] overflow-y-auto py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <nav className="space-y-8 px-4">
                    {menuItems.map((group, index) => (
                        <div key={index}>
                            <h3 className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                                {group.category}
                            </h3>
                            <div className="space-y-1">
                                {group.items.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            className={cn(
                                                "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                                                isActive
                                                    ? "bg-secondary text-secondary-foreground shadow-md"
                                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                            )}
                                        >
                                            <Icon className={cn(
                                                "h-5 w-5 transition-colors",
                                                isActive ? "text-white" : "text-slate-500 group-hover:text-white"
                                            )} />
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
```

#### 📄 `src\components\admin\DashboardStats.tsx`

*Lines: 81*

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, ShoppingBag, Users, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardStatsProps {
    totalRevenue: number;
    totalOrders: number;
    totalCustomers: number;
    totalProducts: number;
}

export function DashboardStats({
    totalRevenue,
    totalOrders,
    totalCustomers,
    totalProducts,
}: DashboardStatsProps) {
    const currency = (value: number) =>
        new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(
            value || 0
        );

    const stats = [
        {
            label: "Revenue",
            value: currency(totalRevenue),
            icon: DollarSign,
            color: "bg-emerald-500",
            description: "Total revenue",
        },
        {
            label: "Orders",
            value: totalOrders.toString(),
            icon: ShoppingBag,
            color: "bg-purple-500",
            description: "Total orders processed",
        },
        {
            label: "Customers",
            value: totalCustomers.toString(),
            icon: Users,
            color: "bg-blue-500",
            description: "Unique customers (recent)",
        },
        {
            label: "Products",
            value: totalProducts.toString(),
            icon: ChefHat,
            color: "bg-orange-500",
            description: "Active menu items",
        },
    ];

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <Card key={index} className={cn("border-0 text-white", stat.color)}>
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                                    <p className="mt-1 text-sm font-medium uppercase opacity-90">
                                        {stat.label}
                                    </p>
                                </div>
                                <div className="rounded-lg bg-white/20 p-2">
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm font-medium">
                                <span className="opacity-80">{stat.description}</span>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
```

#### 📄 `src\components\admin\OrderStatusChart.tsx`

*Lines: 52*

```tsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OrderStatusChartProps {
    data: { name: string; value: number }[];
}

const COLORS = ["#3B82F6", "#F59E0B", "#10B981", "#06B6D4", "#84CC16", "#EF4444"];
// Colors map to: confirmed, preparing, ready, out_for_delivery, delivered, cancelled

export function OrderStatusChart({ data }: OrderStatusChartProps) {
    // Use provided data or empty fallback to avoid crashes, but no mock data
    const chartData = data || [];

    return (
        <Card className="col-span-full border-0 shadow-sm lg:col-span-4">
            <CardHeader>
                <CardTitle className="text-base font-semibold">Order Status</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                            No data available
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
```

#### 📄 `src\components\admin\RecentActivity.tsx`

*Lines: 78*

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, CheckCircle, Clock, Truck, XCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Re-using Order type for simplicity, or defining a subset
interface ActivityOrder {
    order_number: string;
    user_name: string;
    status: string;
    created_at: string;
    total: number;
}

interface RecentActivityProps {
    orders: ActivityOrder[];
}

const statusConfig: Record<string, { icon: any; color: string; text: string }> = {
    confirmed: { icon: ShoppingBag, color: "bg-blue-100 text-blue-600", text: "Order confirmed" },
    preparing: { icon: Clock, color: "bg-amber-100 text-amber-600", text: " preparing" },
    ready: { icon: CheckCircle, color: "bg-emerald-100 text-emerald-600", text: "Order ready" },
    out_for_delivery: { icon: Truck, color: "bg-cyan-100 text-cyan-600", text: "Out for delivery" },
    delivered: { icon: CheckCircle, color: "bg-lime-100 text-lime-600", text: "Delivered" },
    cancelled: { icon: XCircle, color: "bg-rose-100 text-rose-600", text: "Order cancelled" },
};

export function RecentActivity({ orders }: RecentActivityProps) {
    const timeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (seconds < 60) return "Just now";
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        return date.toLocaleDateString();
    };

    return (
        <Card className="col-span-full mb-8 border-0 shadow-sm lg:col-span-6">
            <CardHeader>
                <CardTitle className="text-base font-semibold">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {orders.slice(0, 5).map((order, index) => {
                        const config = statusConfig[order.status] || { icon: AlertCircle, color: "bg-gray-100", text: order.status };
                        const Icon = config.icon;

                        return (
                            <div key={index} className="flex">
                                <div className={cn("mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full", config.color)}>
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none text-foreground">
                                        {config.text} #{order.order_number}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {order.user_name} - {new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(order.total)}
                                    </p>
                                    <p className="text-xs text-muted-foreground pt-1">
                                        {timeAgo(order.created_at)}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                    {orders.length === 0 && (
                        <p className="text-center text-sm text-muted-foreground">No recent activity.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
```

#### 📄 `src\components\admin\SalesOverviewChart.tsx`

*Lines: 99*

```tsx
import { useRef } from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SalesOverviewChartProps {
    data: {
        name: string;
        uv: number;
        pv: number;
        amt: number;
    }[];
}

export function SalesOverviewChart({ data }: SalesOverviewChartProps) {
    // Mock data if none provided, but we expect data from parent
    const chartData = data?.length ? data : [
        { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
        { name: "May", uv: 1890, pv: 4800, amt: 2181 },
        { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
        { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <Card className="col-span-full border-0 shadow-sm lg:col-span-8">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-base font-semibold">Sales Overview</CardTitle>
                <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4 text-muted-foreground" />
                </Button>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#6B7280", fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#6B7280", fontSize: 12 }}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                            />
                            <Area
                                type="monotone"
                                dataKey="uv"
                                stroke="#8884d8"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorUv)"
                            />
                            <Area
                                type="monotone"
                                dataKey="pv"
                                stroke="#82ca9d"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorPv)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
```

#### 📄 `src\components\admin\TopProducts.tsx`

*Lines: 70*

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

export interface ComputedProduct {
    name: string;
    sales: number;
    revenue: number;
    status: string;
}

interface TopProductsProps {
    products: ComputedProduct[];
}

export function TopProducts({ products }: TopProductsProps) {
    const currency = (value: number) =>
        new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(
            value || 0
        );

    return (
        <Card className="col-span-full mb-8 border-0 shadow-sm lg:col-span-6">
            <CardHeader>
                <CardTitle className="text-base font-semibold">Top Products (Last 100 Orders)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b text-muted-foreground">
                                <th className="pb-3 font-medium">Product</th>
                                <th className="pb-3 font-medium">Sales</th>
                                <th className="pb-3 font-medium">Revenue</th>
                                <th className="pb-3 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {products.length > 0 ? products.map((product, index) => (
                                <tr key={index}>
                                    <td className="py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-8 w-8 items-center justify-center rounded bg-muted">
                                                <Package className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                            <span className="font-medium">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3">{product.sales}</td>
                                    <td className="py-3">{currency(product.revenue)}</td>
                                    <td className="py-3">
                                        <Badge variant="outline">
                                            Calculated
                                        </Badge>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={4} className="py-8 text-center text-muted-foreground">
                                        Not enough data to calculate top products.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
```

---

### 📂 src  /  components  /  home

#### 📄 `src\components\home\CTASection.tsx`

*Lines: 51*

```tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl bg-primary p-8 text-center shadow-glow-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:p-12 lg:p-16"
        >
          {/* Background decorations */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/15 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />

          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to Transform Your Restaurant?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/90">
              Join the restaurants already using ezOrder to streamline their ordering process. Get started in minutes.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-secondary px-8 text-lg text-secondary-foreground shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-secondary/90 hover:shadow-xl"
              >
                <Link to="/get-started" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 rounded-full bg-accent px-8 text-lg text-accent-foreground shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-accent/90 hover:shadow-xl"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

#### 📄 `src\components\home\ExperienceSection.tsx`

*Lines: 341*

```tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, AudioLines, MessageSquare, Mic, Smile, Wand2 } from "lucide-react";

import { cn } from "@/lib/utils";

type PerkId = "voice" | "smart-suggest" | "sync";

type Perk = {
  id: PerkId;
  title: string;
  description: string;
  icon: typeof Mic;
  tone: "primary" | "secondary" | "accent";
};

type ChatMessage = {
  sender: "Shaikh Ali" | "Mohsin Foods" | "Mohsin Foods";
  tone: "customer" | "bot" | "dashboard";
  text: string;
  time: string;
  highlights: PerkId[];
};

const perks: Perk[] = [
  {
    id: "voice",
    title: "Voice-to-text, instantly",
    description: "Customers talk naturally. You receive structured items, spice, and address.",
    icon: AudioLines,
    tone: "accent",
  },
  {
    id: "smart-suggest",
    title: "Smart Order taking system",
    description: "Boost order value with timely, relevant upsell prompts.",
    icon: Wand2,
    tone: "primary",
  },
  {
    id: "sync",
    title: "Auto-sync to dashboard",
    description: "Tickets appear instantly with status, payment, and kitchen-ready details.",
    icon: ArrowLeftRight,
    tone: "secondary",
  },
];

const chatMessages: ChatMessage[] = [
  {
    sender: "Shaikh Ali",
    tone: "customer",
    text: "Assalam-o-Alaikum 👋 2 Chicken Biryanis 🍛🍛 + 1 Chicken Karahi 🍲 for delivery.",
    time: "8:12 pm",
    highlights: [],
  },
  {
    sender: "Shaikh Ali",
    tone: "customer",
    text: "🎤 Voice note (0:07): “Mild please… Gulshan Block 5 📍”",
    time: "8:12 pm",
    highlights: ["voice"],
  },
  {
    sender: "Mohsin Foods",
    tone: "bot",
    text: "Got it ✅ Mild 🙂 Address saved 📍 Gulshan Block 5. Add soft drinks 🥤 or fries 🍟?",
    time: "8:13 pm",
    highlights: ["voice", "smart-suggest"],
  },
  {
    sender: "Shaikh Ali",
    tone: "customer",
    text: "Add 2 soft drinks 🥤🥤",
    time: "8:13 pm",
    highlights: ["smart-suggest"],
  },
  {
    sender: "Mohsin Foods",
    tone: "dashboard",
    text: "Order #4821 created ✅ Kitchen ticket 🧾 ready • Rider assigned 🛵",
    time: "8:13 pm",
    highlights: ["sync"],
  },
];

const CHAT_WALLPAPER_DATA_URI =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='180'%20height='180'%20viewBox='0%200%20180%20180'%3E%3Cg%20fill='none'%20stroke='%2388C456'%20stroke-opacity='0.14'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M42%2046h40c10%200%2018%208%2018%2018v8c0%2010-8%2018-18%2018H68l-14%2011v-11H42c-10%200-18-8-18-18v-8c0-10%208-18%2018-18z'/%3E%3Cpath%20d='M114%20114h34c9%200%2016%207%2016%2016v6c0%209-7%2016-16%2016h-10l-12%2010v-10h-12c-9%200-16-7-16-16v-6c0-9%207-16%2016-16z'/%3E%3Cpath%20d='M132%2046c0%2012-10%2022-22%2022s-22-10-22-22%2010-22%2022-22%2022%2010%2022%2022z'/%3E%3Cpath%20d='M96%2046h28'/%3E%3Cpath%20d='M52%20126h20'/%3E%3Cpath%20d='M48%20146h10'/%3E%3Cpath%20d='M26%20110h10'/%3E%3Cpath%20d='M150%2090h10'/%3E%3Cpath%20d='M124%2090h10'/%3E%3C/g%3E%3C/svg%3E";

const toneStyles = {
  primary: {
    icon: "bg-primary/10 text-primary ring-primary/20",
    active: "border-primary/30 ring-primary/20",
    glow: "from-primary/15 via-transparent to-primary/5",
    dot: "bg-primary",
    badge: "bg-primary text-primary-foreground",
  },
  secondary: {
    icon: "bg-secondary/10 text-secondary ring-secondary/20",
    active: "border-secondary/30 ring-secondary/20",
    glow: "from-secondary/15 via-transparent to-secondary/5",
    dot: "bg-secondary",
    badge: "bg-secondary text-secondary-foreground",
  },
  accent: {
    icon: "bg-accent/15 text-accent-foreground ring-accent/30",
    active: "border-accent/30 ring-accent/20",
    glow: "from-accent/15 via-transparent to-accent/5",
    dot: "bg-accent",
    badge: "bg-accent text-accent-foreground",
  },
} as const;

export function ExperienceSection() {
  const [activePerkId, setActivePerkId] = useState<PerkId>("voice");
  const activePerk = perks.find((perk) => perk.id === activePerkId) ?? perks[0];

  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          {/* <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Live experience
          </motion.span> */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            What customers chat and your team gets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            No app. No training. Just a familiar chat flow in, structured orders out.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              

              <div className="relative max-w-md">
                <div
                  className="pointer-events-none absolute bottom-9 left-9 top-9 w-px bg-gradient-to-b from-accent/40 via-primary/40 to-secondary/40"
                  aria-hidden
                />

                <div className="space-y-5">
                  {perks.map((perk) => {
                    const isActive = perk.id === activePerkId;
                    const Icon = perk.icon;
                    const styles = toneStyles[perk.tone];

                    return (
                      <motion.button
                        key={perk.id}
                        type="button"
                        onMouseEnter={() => setActivePerkId(perk.id)}
                        onFocus={() => setActivePerkId(perk.id)}
                        onClick={() => setActivePerkId(perk.id)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.99 }}
                        aria-pressed={isActive}
                        className={cn(
                          "group flex w-full items-center gap-4 rounded-2xl px-2 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                        )}
                      >
                        <span
                          className={cn(
                            "relative grid h-14 w-14 shrink-0 place-items-center rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105",
                            isActive ? "ring-2" : "ring-1",
                            styles.icon,
                          )}
                        >
                          <Icon className="h-6 w-6" />
                          <span
                            className={cn(
                              "pointer-events-none absolute -right-0.5 -top-0.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-background ring-2 ring-background transition-opacity",
                              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                            )}
                            aria-hidden
                          >
                            <span className={cn("h-1.5 w-1.5 rounded-full", styles.dot)} />
                          </span>
                        </span>

                        <div className="min-w-0 flex-1">
                          <p
                            className={cn(
                              "text-base font-semibold transition-colors",
                              isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                            )}
                          >
                            {perk.title}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">{activePerk.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{activePerk.description}</p>
              </div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-40 -bottom-48 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 border-b border-white/15 bg-primary px-5 py-4 text-primary-foreground">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">Mohsin Foods</p>
                    <p className="truncate text-xs text-primary-foreground/80">online</p>
                  </div>
                </div>
                
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-5 sm:p-6">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.75]"
                  style={{
                    backgroundImage: `url('${CHAT_WALLPAPER_DATA_URI}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "180px 180px",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    background:
                      "radial-gradient(circle_at_20%_10%,rgba(136,196,86,0.20),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(89,153,201,0.18),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(252,183,82,0.12),transparent_55%)",
                  }}
                  aria-hidden
                />

                <div className="relative space-y-4">
                  {chatMessages.map((message, index) => {
                    const isHighlighted = message.highlights.includes(activePerkId);
                    const highlightRing =
                      activePerkId === "sync"
                        ? "ring-2 ring-secondary/25"
                        : activePerkId === "voice"
                        ? "ring-2 ring-accent/25"
                        : "ring-2 ring-primary/25";

                    return (
                      <motion.div
                        key={`${message.sender}-${message.time}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 }}
                        className={cn("flex", message.tone === "customer" ? "justify-start" : "justify-end")}
                      >
                        <div
                          className={cn(
                            "max-w-xl rounded-2xl border px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5",
                            message.tone === "bot" &&
                              "border-primary/25 bg-gradient-to-br from-primary/15 to-primary/5 text-foreground",
                            message.tone === "dashboard" &&
                              "border-secondary/25 bg-gradient-to-br from-secondary/15 to-secondary/5 text-foreground",
                            message.tone === "customer" && "border-border bg-background/80 text-foreground",
                            isHighlighted && highlightRing,
                          )}
                        >
                          <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <span
                                className={cn(
                                  "flex h-2 w-2 rounded-full",
                                  message.tone === "bot" ? "bg-primary" : message.tone === "dashboard" ? "bg-secondary" : "bg-foreground",
                                )}
                                aria-hidden
                              />
                              {message.sender}
                            </span>
                            <span className="font-medium normal-case tracking-normal">{message.time}</span>
                          </div>

                          <p className="mt-2 text-sm leading-relaxed">{message.text}</p>

                          {message.tone === "dashboard" && (
                            <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-secondary">
                              
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}

                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
                    <Smile className="h-5 w-5 text-muted-foreground" />
                    <span className="flex-1">Type a message…</span>
                    <Mic className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
```

#### 📄 `src\components\home\FAQSection.tsx`

*Lines: 82*

```tsx
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can we launch?",
    answer:
      "Most restaurants go live the same day. Share your menu, pick your WhatsApp number, and our team configures the bot plus your admin dashboard.",
  },
  {
    question: "Do customers need to install anything?",
    answer:
      "No apps or downloads. Customers use the same WhatsApp chat they already have, whether they type, send voice notes, or switch languages mid-order.",
  },
  {
    question: "Can staff take over a conversation?",
    answer:
      "Yes. You can jump into any live chat from the dashboard, send manual replies, or adjust an order without breaking the AI flow.",
  },
  {
    question: "Does it work for delivery and pickup?",
    answer:
      "EZORDER collects delivery addresses, drop-off instructions, and pickup times automatically, then pushes them to the kitchen and rider tools you use.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-sm font-semibold uppercase tracking-wider text-primary"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl"
          >
            Answers for owners and managers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground"
          >
            Still deciding? These are the questions we hear most from restaurants rolling out WhatsApp ordering.
          </motion.p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-border">
                <AccordionTrigger className="text-left font-heading text-base text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
```

#### 📄 `src\components\home\FeaturesSection.tsx`

*Lines: 135*

```tsx
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mic, FileText, LayoutDashboard, Timer } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Instant WhatsApp Ordering",
    description: "Order directly from your favorite chat app. No downloads, just delicious food.",
    color: "text-primary", // Green
    bgColor: "bg-primary/10",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Follow your meal's journey from kitchen to doorstep with live updates.",
    color: "text-secondary", // Blue
    bgColor: "bg-secondary/10",
  },
  {
    icon: Mic,
    title: "Smart Voice-to-Text",
    description: "Speak your order, and our AI-powered bot will understand and confirm it instantly.",
    color: "text-accent", // Orange
    bgColor: "bg-accent/10",
  },
  {
    icon: FileText,
    title: "Digital PDF Receipts",
    description: "Get a professional, shareable receipt delivered straight to your WhatsApp.",
    color: "text-secondary", // Blue
    bgColor: "bg-secondary/10",
  },
  {
    icon: LayoutDashboard,
    title: "Powerful Admin Dashboard",
    description: "Manage orders, menus, riders, and analytics from one intuitive web portal.",
    color: "text-primary", // Green
    bgColor: "bg-primary/10",
  },
  {
    icon: Timer,
    title: "Fast & Reliable Delivery",
    description: "Optimized rider assignment ensures your food arrives hot and on time.",
    color: "text-accent", // Orange
    bgColor: "bg-accent/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration to match the swirl lines if possible, using simple SVGs or CSS */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <path d="M0 0 Q 50 50 100 0 T 200 0" stroke="currentColor" fill="none" />
          {/* Just a placeholder for the swirl effect, actual assets would be better */}
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Why Choose ezOrder?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Experience the simplest, most connected food ordering system.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative flex flex-col items-center p-8 bg-card rounded-2xl shadow-sm border border-border/50 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 text-center overflow-hidden"
            >
              {/* Relevant Background Image (Watermark Icon) */}
              <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <feature.icon className={`h-40 w-40 ${feature.color}`} strokeWidth={1} />
              </div>

              <div
                className={`flex h-20 w-20 items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.color} relative z-10`}
              >
                <feature.icon className="h-16 w-16" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 relative z-10">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

#### 📄 `src\components\home\HeroSection.tsx`

*Lines: 110*

```tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const WHATSAPP_NUMBER = "923001234567";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to place an order.");

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 lg:py-12 bg-background">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >


            <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Order Food Fast
              <span className="block mt-2">
                with{" "}
                <span className="text-primary italic">ez</span>
                <span className="text-secondary">Order</span>
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground lg:text-xl">
              Experience the easiest way to order food. Simply chat on WhatsApp, voice or text, and get your favorite meals delivered instantly.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-primary text-white border-0 h-12 px-8 text-lg rounded-full transition-all duration-300 hover:-translate-y-1">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <MessageCircle className="h-5 w-5 filled" />
                  Order on WhatsApp
                </a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-secondary to-sky-400 hover:shadow-glow-secondary text-white border-0 h-12 px-8 text-lg rounded-full transition-all duration-300 hover:-translate-y-1">
                <Link to="/get-started" className="gap-2">
                  <Store className="h-5 w-5" />
                  Start Selling
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground lg:justify-start">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <span>Voice Order</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <span className="font-bold text-lg">Ur</span>
                </div>
                <span>Urdu / English</span>
              </div>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Swirling background effects */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl animate-pulse"></div>
              <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl -z-10 translate-y-[-20%] translate-x-[20%]"></div>

              <img
                src={heroIllustration}
                alt="EZORDER WhatsApp food ordering"
                className="relative rounded-3xl shadow-elevated border-[6px] border-white/50 backdrop-blur-sm"
                width={600}
                height={400}
              />


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

#### 📄 `src\components\home\HighlightsSection.tsx`

*Lines: 109*

```tsx
import { motion } from "framer-motion";

import highlightAlwaysOn from "@/assets/highlight-always-on.png";
import highlightMultilingual from "@/assets/highlight-multilingual.png";
import highlightSetup from "@/assets/highlight-setup.png";
import highlightAccuracy from "@/assets/how-step3-order.png"; // Placeholder for Accuracy
import highlightSecure from "@/assets/how-step1-connect.png"; // Placeholder for Secure
import highlightHandoff from "@/assets/how-step4-enjoy.png"; // Placeholder for Handoff

const features = [
  {
    title: "Instant 24/7 Responses",
    description: "Automated replies in seconds, always on for busy times.",
    image: highlightAlwaysOn,
    isIcon: false,
    color: "bg-green-50 border-green-100",
  },
  {
    title: "Chef-Trusted Accuracy",
    description: "AI confirms quantities and spice levels precisely.",
    image: highlightAccuracy,
    isIcon: false,
    color: "bg-blue-50 border-blue-100",
  },
  {
    title: "Multilingual Support",
    description: "Ready in English, Roman Urdu, and Urdu from day one.",
    image: highlightMultilingual,
    isIcon: false,
    color: "bg-teal-50 border-teal-100",
  },
  {
    title: "Simple 10-Minute Setup",
    description: "Connect WhatsApp and start receiving orders quickly.",
    image: highlightSetup,
    isIcon: false,
    color: "bg-sky-50 border-sky-100",
  },
  {
    title: "Secure & Role-Based",
    description: "Admin access and local WhatsApp support included.",
    image: highlightSecure,
    isIcon: false,
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    title: "Seamless Human Handoff",
    description: "Escalate to staff instantly without losing context.",
    image: highlightHandoff,
    isIcon: false,
    color: "bg-cyan-50 border-cyan-100",
  },
];

export function HighlightsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 lg:py-24 overflow-hidden">
      <div className="section-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl leading-tight"
          >
            More than a chatbot.
            <br />
            <span className="text-primary">A full WhatsApp service line.</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start p-6 rounded-2xl border ${feature.color} shadow-sm transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex-shrink-0 mr-4">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-white/50 flex items-center justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

#### 📄 `src\components\home\HowItWorksSection.tsx`

*Lines: 118*

```tsx
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import howStep1Connect from "@/assets/how-step1-connect.png";
import howStep2Browse from "@/assets/how-step2-browse.png";
import howStep3Order from "@/assets/how-step3-order.png";
import howStep4Enjoy from "@/assets/how-step4-enjoy.png";

type Step = {
  number: string;
  title: string;
  description: string;
  isIcon: boolean;
  image?: string;
  icon?: LucideIcon;
  color?: string;
};

const steps: Step[] = [
  {
    number: "1",
    title: "Connect",
    description: "Link your account",
    image: howStep1Connect,
    isIcon: false,
  },
  {
    number: "2",
    title: "Browse Menu",
    description: "Explore our offerings",
    image: howStep2Browse,
    isIcon: false,
  },
  {
    number: "3",
    title: "Place Order",
    description: "Securely confirm",
    image: howStep3Order,
    isIcon: false,
  },
  {
    number: "4",
    title: "Enjoy!",
    description: "Track & receive",
    image: howStep4Enjoy,
    isIcon: false,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground font-medium">
            Simple Steps to Get Started
          </p>
        </div>

        <div className="relative mt-10 grid gap-8 md:grid-cols-4">
          {/* Dashed Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[80px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-border/60 -z-10" />

          {steps.map((step, index) => {
            const mediaContent = step.isIcon ? (
              <step.icon className="h-16 w-16" />
            ) : (
              <img
                src={step.image}
                alt={step.title}
                className="h-full w-full object-cover p-2"
              />
            );

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Arrow for steps 1-3 (Mobile/Desktop adjustment usually needed, keeping simple loop for now) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/30 rotate-90">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}

                <div className="relative mb-6">
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md z-10">
                    {step.number}
                  </div>

                  {/* Image/Icon Container */}
                  <div className={`relative h-40 w-40 rounded-full flex items-center justify-center shadow-sm border-4 border-white ring-1 ring-border/20 overflow-hidden ${step.isIcon ? step.color : 'bg-orange-50'}`}>
                    {mediaContent}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

#### 📄 `src\components\home\RiderSection.tsx`

*Lines: 107*

```tsx
import { motion } from "framer-motion";
import { Bike, DollarSign, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function RiderSection() {
    return (
        <section id="riders" className="py-16 lg:py-24 bg-background">
            <div className="section-container">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        
                        <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Become an <span className="text-primary">ez</span><span className="text-secondary">Rider</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Earn money on your own schedule. Join our growing fleet of delivery partners and deliver smiles with every mile.
                        </p>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <DollarSign className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Competitive Pay</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Earn for every delivery plus tips and bonuses.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Flexible Hours</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Be your own boss. Work whenever you want.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-foreground">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Local Areas</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Deliver in your preferred neighborhoods.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                    <Bike className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Easy Signup</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Start delivering in less than 24 hours.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                                <Link to="/rider-registration" className="gap-2">
                                    Apply Now <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right side - maybe a form or just an image placeholder for now, or a styled card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:ml-auto"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 p-8 lg:p-12 text-center">
                            <div className="mx-auto rounded-full bg-white p-4 w-24 h-24 flex items-center justify-center shadow-lg mb-6">
                                <Bike className="w-12 h-12 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Ready to start?</h3>
                            <p className="mt-2 text-muted-foreground mb-6">Join our riders and be part of a team delivering happiness across the city.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                                    <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                                    <p className="text-sm font-medium">Apply for Registration</p>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                                    <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                                    <p className="text-sm font-medium">Submit Documents</p>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                                    <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                                    <p className="text-sm font-medium">Start Earning</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
```

#### 📄 `src\components\home\UseCasesSection.tsx`

*Lines: 119*

```tsx
import { motion } from "framer-motion";
import { CheckCircle2, QrCode, Truck } from "lucide-react";
import useCaseCafe from "@/assets/ai/usecase-cafe.svg";
import useCaseCloudKitchen from "@/assets/ai/usecase-cloud-kitchen.svg";
import useCaseChains from "@/assets/ai/usecase-chains.svg";

const useCases = [
  {
    title: "Fast casual & cafés",
    image: useCaseCafe,
    accent: "from-primary/10 via-background to-secondary/10",
    description: "Turn table scans into confirmed orders in one WhatsApp chat.",
    points: ["QR ordering at tables", "Kitchen + pickup updates"],
  },
  {
    title: "Cloud kitchens and home chefs",
    image: useCaseCloudKitchen,
    accent: "from-secondary/10 via-background to-primary/10",
    description: "Collect delivery details automatically and dispatch with confidence.",
    points: ["Auto-capture address & notes", "Schedule delivery windows"],
  },
  {
    title: "Chains and multi-branch teams",
    image: useCaseChains,
    accent: "from-primary/10 via-background to-accent/10",
    description: "Route to the right branch and keep teams aligned.",
    points: ["Auto-route by location", "Role-based dashboards"],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-sm font-semibold uppercase tracking-wider text-primary"
          >
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Purpose-built for the way you serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            From single outlets to fast-growing chains, EZORDER flexes to your workflow without forcing a new app on customers.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm outline-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated focus-visible:-translate-y-1 focus-visible:border-primary/30 focus-visible:shadow-elevated focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.accent}`} aria-hidden />

              <div className="relative z-10 overflow-hidden rounded-xl border border-border/60 bg-background shadow-sm">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={useCase.image}
                  alt={`${useCase.title} illustration`}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <h3 className="relative z-10 mt-5 font-heading text-xl font-semibold text-foreground">
                {useCase.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm text-muted-foreground">
                {useCase.description}
              </p>
              <ul className="relative z-10 mt-4 space-y-2 text-sm text-muted-foreground">
                {useCase.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-auto pt-6">
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary transition-colors hover:bg-primary/15">
                    <QrCode className="h-4 w-4" />
                    QR to chat
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-secondary transition-colors hover:bg-secondary/15">
                    <Truck className="h-4 w-4" />
                    Delivery ready
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 📂 src  /  components  /  layout

#### 📄 `src\components\layout\Footer.tsx`

*Lines: 123*

```tsx
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white text-foreground">
      <div className="section-container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
              <img src={logo} alt="EZORDER Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Revolutionizing food ordering through WhatsApp. Fast, simple, and multilingual ordering for restaurants and customers.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors hover:bg-secondary hover:text-white"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()} EZORDER. All rights reserved.
          </p>
          <div className="text-center text-sm text-muted-foreground sm:text-right">
            <p>Powered by Nexus Nao</p>
            <p>
              <a className="text-foreground hover:underline" href="https://www.nexusnao.com" target="_blank" rel="noreferrer">
                www.nexusnao.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

#### 📄 `src\components\layout\Layout.tsx`

*Lines: 18*

```tsx
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function Layout({ children, showFooter = true }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}
```

#### 📄 `src\components\layout\Navbar.tsx`

*Lines: 138*

```tsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (!stored) return;
      const parsed = JSON.parse(stored);
      setIsAdmin(parsed?.role === "admin" || parsed?.role === "staff");
    } catch {
      setIsAdmin(false);
    }
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold">
          <img src={logo} alt="EZORDER Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a /* Using a for anchor to scroll to ID if on same page, or navigate */
            href="#riders"
            onClick={(e) => {
              // Simple hash navigation fix
              if (location.pathname !== '/') return;
              e.preventDefault();
              const element = document.getElementById('riders');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
          >
            Payload Rider
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to={isAdmin ? "/admin/dashboard" : "/admin/login"}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <LogIn className="h-4 w-4" />
            {isAdmin ? "Dashboard" : "Admin"}
          </Link>
          <Button asChild variant="nav" size="sm">
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="section-container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-2 text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#riders"
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm font-medium text-muted-foreground transition-colors"
            >
              Payload Rider
            </a>
            <hr className="border-border" />
            <Link
              to={isAdmin ? "/admin/dashboard" : "/admin/login"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground"
            >
              <LogIn className="h-4 w-4" />
              {isAdmin ? "Dashboard" : "Admin Login"}
            </Link>
            <Button asChild variant="nav" className="w-full">
              <Link to="/get-started" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
```

---

### 📂 src  /  components  /  ui

#### 📄 `src\components\ui\accordion.tsx`

*Lines: 52*

```tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

#### 📄 `src\components\ui\alert-dialog.tsx`

*Lines: 104*

```tsx
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
```

#### 📄 `src\components\ui\alert.tsx`

*Lines: 43*

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
```

#### 📄 `src\components\ui\aspect-ratio.tsx`

*Lines: 5*

```tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
```

#### 📄 `src\components\ui\avatar.tsx`

*Lines: 38*

```tsx
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
```

#### 📄 `src\components\ui\badge.tsx`

*Lines: 29*

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
```

#### 📄 `src\components\ui\breadcrumb.tsx`

*Lines: 90*

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
```

#### 📄 `src\components\ui\button.tsx`

*Lines: 58*

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary hover:shadow-glow-primary/80 rounded-[12px]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[12px]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-[12px]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-secondary hover:shadow-glow-secondary/80 rounded-[12px]",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-[12px]",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary hover:shadow-glow-primary/80 font-bold rounded-[12px]",
        heroSecondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-secondary hover:shadow-glow-secondary/80 font-bold rounded-[12px]",
        heroOutline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-[12px]",
        nav: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-[12px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

#### 📄 `src\components\ui\calendar.tsx`

*Lines: 54*

```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
```

#### 📄 `src\components\ui\card.tsx`

*Lines: 43*

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

#### 📄 `src\components\ui\carousel.tsx`

*Lines: 224*

```tsx
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
```

#### 📄 `src\components\ui\chart.tsx`

*Lines: 303*

```tsx
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
```

#### 📄 `src\components\ui\checkbox.tsx`

*Lines: 26*

```tsx
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
```

#### 📄 `src\components\ui\collapsible.tsx`

*Lines: 9*

```tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
```

#### 📄 `src\components\ui\command.tsx`

*Lines: 132*

```tsx
import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
```

#### 📄 `src\components\ui\context-menu.tsx`

*Lines: 178*

```tsx
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
```

#### 📄 `src\components\ui\dialog.tsx`

*Lines: 95*

```tsx
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
```

#### 📄 `src\components\ui\drawer.tsx`

*Lines: 87*

```tsx
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
```

#### 📄 `src\components\ui\dropdown-menu.tsx`

*Lines: 179*

```tsx
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
```

#### 📄 `src\components\ui\form.tsx`

*Lines: 129*

```tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
  },
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
```

#### 📄 `src\components\ui\hover-card.tsx`

*Lines: 27*

```tsx
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
```

#### 📄 `src\components\ui\input-otp.tsx`

*Lines: 61*

```tsx
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  ),
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  ),
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
```

#### 📄 `src\components\ui\input.tsx`

*Lines: 22*

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
```

#### 📄 `src\components\ui\label.tsx`

*Lines: 17*

```tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

#### 📄 `src\components\ui\menubar.tsx`

*Lines: 207*

```tsx
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
```

#### 📄 `src\components\ui\navigation-menu.tsx`

*Lines: 120*

```tsx
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
```

#### 📄 `src\components\ui\pagination.tsx`

*Lines: 81*

```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
```

#### 📄 `src\components\ui\popover.tsx`

*Lines: 29*

```tsx
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
```

#### 📄 `src\components\ui\progress.tsx`

*Lines: 23*

```tsx
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
```

#### 📄 `src\components\ui\radio-group.tsx`

*Lines: 36*

```tsx
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
```

#### 📄 `src\components\ui\resizable.tsx`

*Lines: 37*

```tsx
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
```

#### 📄 `src\components\ui\scroll-area.tsx`

*Lines: 38*

```tsx
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
```

#### 📄 `src\components\ui\select.tsx`

*Lines: 143*

```tsx
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
```

#### 📄 `src\components\ui\separator.tsx`

*Lines: 20*

```tsx
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
```

#### 📄 `src\components\ui\sheet.tsx`

*Lines: 107*

```tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
```

#### 📄 `src\components\ui\sidebar.tsx`

*Lines: 637*

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<React.ElementRef<typeof Input>, React.ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<React.ElementRef<typeof Separator>, React.ComponentProps<typeof Separator>>(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        data-sidebar="separator"
        className={cn("mx-2 w-auto bg-sidebar-border", className)}
        {...props}
      />
    );
  },
);
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-sidebar="group-content" className={cn("w-full text-sm", className)} {...props} />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul ref={ref} data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
```

#### 📄 `src\components\ui\skeleton.tsx`

*Lines: 7*

```tsx
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
```

#### 📄 `src\components\ui\slider.tsx`

*Lines: 23*

```tsx
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
```

#### 📄 `src\components\ui\sonner.tsx`

*Lines: 27*

```tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
```

#### 📄 `src\components\ui\switch.tsx`

*Lines: 27*

```tsx
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
```

#### 📄 `src\components\ui\table.tsx`

*Lines: 72*

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />,
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  ),
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
  ),
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
```

#### 📄 `src\components\ui\tabs.tsx`

*Lines: 53*

```tsx
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
```

#### 📄 `src\components\ui\textarea.tsx`

*Lines: 21*

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
```

#### 📄 `src\components\ui\toast.tsx`

*Lines: 111*

```tsx
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
```

#### 📄 `src\components\ui\toaster.tsx`

*Lines: 24*

```tsx
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
```

#### 📄 `src\components\ui\toggle-group.tsx`

*Lines: 49*

```tsx
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
```

#### 📄 `src\components\ui\toggle.tsx`

*Lines: 37*

```tsx
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
```

#### 📄 `src\components\ui\tooltip.tsx`

*Lines: 28*

```tsx
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

#### 📄 `src\components\ui\use-toast.ts`

*Lines: 3*

```typescript
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };
```

---

### 📂 src  /  components  /  admin  /  analytics

#### 📄 `src\components\admin\analytics\CustomerList.tsx`

*Lines: 152*

```tsx
import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
}

interface Order {
    order_number: string;
    user_name: string;
    phone_number: string;
    items: OrderItem[];
    total: number;
    status: string;
    created_at: string;
}

interface CustomerListProps {
    orders: Order[];
}

interface CustomerStats {
    name: string;
    phone: string;
    totalOrders: number;
    totalSpent: number;
    lastOrderDate: string;
    status: "Active" | "Inactive"; // Simple logic: Active if order in last 30 days
}

export function CustomerList({ orders }: CustomerListProps) {
    const currency = (value: number) =>
        new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(
            value || 0
        );

    const customers = useMemo(() => {
        const customerMap = new Map<string, CustomerStats>();

        orders.forEach(order => {
            const current = customerMap.get(order.phone_number) || {
                name: order.user_name,
                phone: order.phone_number,
                totalOrders: 0,
                totalSpent: 0,
                lastOrderDate: order.created_at,
                status: "Inactive"
            };

            // Update stats
            current.totalOrders += 1;
            current.totalSpent += order.total;

            // Keep most recent name
            current.name = order.user_name;

            // Update last order date if this one is newer
            if (new Date(order.created_at) > new Date(current.lastOrderDate)) {
                current.lastOrderDate = order.created_at;
            }

            customerMap.set(order.phone_number, current);
        });

        // Determine status (Active = ordered in last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        return Array.from(customerMap.values()).map(c => ({
            ...c,
            status: new Date(c.lastOrderDate) > thirtyDaysAgo ? "Active" : "Inactive"
        })).sort((a, b) => b.totalSpent - a.totalSpent); // Sort by highest spender

    }, [orders]);

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold tracking-tight">Customers</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Customer Database ({customers.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead className="text-center">Total Orders</TableHead>
                                <TableHead className="text-right">Total Spent</TableHead>
                                <TableHead className="text-right">Last Order</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-24 text-center">
                                        No customer data found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                customers.map((customer) => (
                                    <TableRow key={customer.phone}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-9 w-9">
                                                    <AvatarFallback className="bg-primary/10 text-primary">
                                                        {customer.name.slice(0, 2).toUpperCase()}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="font-medium">{customer.name}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{customer.phone}</TableCell>
                                        <TableCell className="text-center">{customer.totalOrders}</TableCell>
                                        <TableCell className="text-right font-medium text-emerald-600">
                                            {currency(customer.totalSpent)}
                                        </TableCell>
                                        <TableCell className="text-right text-muted-foreground">
                                            {new Date(customer.lastOrderDate).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Badge variant={customer.status === "Active" ? "default" : "secondary"}>
                                                {customer.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
```

#### 📄 `src\components\admin\analytics\SalesReport.tsx`

*Lines: 90*

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SalesOverviewChart } from "../SalesOverviewChart";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface SalesDataPoint {
    date: string;
    day: string;
    orders: number;
    revenue: number;
}

interface SalesReportProps {
    data: SalesDataPoint[];
}

export function SalesReport({ data }: SalesReportProps) {
    const currency = (value: number) =>
        new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
            value || 0
        );

    // Prepare chart data format
    const chartData = data.map(s => ({
        name: s.day,
        uv: s.orders,
        pv: s.revenue / 2, // Scaling factor for dual axis simulation if needed, or just visual
        amt: s.revenue
    }));

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold tracking-tight">Sales Report</h1>

            {/* Chart Section */}
            <div className="grid gap-6">
                <SalesOverviewChart data={chartData} />
            </div>

            {/* Detailed Table Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Daily Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Day</TableHead>
                                <TableHead className="text-right">Orders</TableHead>
                                <TableHead className="text-right">Revenue</TableHead>
                                <TableHead className="text-right">Avg. Order Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-24 text-center">
                                        No sales data available.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                [...data].reverse().map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.day}</TableCell>
                                        <TableCell className="text-right">{row.orders}</TableCell>
                                        <TableCell className="text-right text-emerald-600 font-medium">
                                            {currency(row.revenue)}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {currency(row.orders > 0 ? row.revenue / row.orders : 0)}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
```

---

### 📂 src  /  components  /  admin  /  menu

#### 📄 `src\components\admin\menu\CategoryManager.tsx`

*Lines: 153*

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit2, Trash2, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface CategoryManagerProps {
    categories: string[];
    onCreate: (name: string) => void;
    onRename: (oldName: string, newName: string) => void;
    onDelete: (name: string) => void;
}

export function CategoryManager({
    categories,
    onCreate,
    onRename,
    onDelete,
}: CategoryManagerProps) {
    const { toast } = useToast();
    const [newCategory, setNewCategory] = useState("");
    const [editingCategory, setEditingCategory] = useState<string | null>(null);
    const [renameValue, setRenameValue] = useState("");
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const handleCreate = () => {
        if (!newCategory.trim()) {
            toast({
                title: "Category name required",
                description: "Enter a name to create a category.",
                variant: "destructive",
            });
            return;
        }
        onCreate(newCategory.trim());
        setNewCategory("");
        setIsCreateOpen(false);
    };

    const startEditing = (category: string) => {
        setEditingCategory(category);
        setRenameValue(category);
    };

    const cancelEditing = () => {
        setEditingCategory(null);
        setRenameValue("");
    };

    const handleRename = () => {
        if (!renameValue.trim() || !editingCategory) return;
        onRename(editingCategory, renameValue.trim());
        setEditingCategory(null);
    };

    return (
        <Card className="border-0 shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex justify-end">
                    <Button onClick={() => setIsCreateOpen(true)}>Add</Button>
                </div>

                <div className="space-y-4">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="flex items-center justify-between rounded-lg border p-3 hover:bg-slate-50"
                        >
                            {editingCategory === category ? (
                                <div className="flex flex-1 items-center gap-2">
                                    <Input
                                        value={renameValue}
                                        onChange={(e) => setRenameValue(e.target.value)}
                                        className="h-8"
                                    />
                                    <Button size="icon" variant="ghost" onClick={handleRename}>
                                        <Check className="h-4 w-4 text-green-600" />
                                    </Button>
                                    <Button size="icon" variant="ghost" onClick={cancelEditing}>
                                        <X className="h-4 w-4 text-red-600" />
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <span className="font-medium">{category}</span>
                                    <div className="flex gap-1">
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => startEditing(category)}
                                        >
                                            <Edit2 className="h-4 w-4 text-blue-500" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => onDelete(category)}
                                        >
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    {categories.length === 0 && (
                        <p className="text-center text-muted-foreground p-4">No categories defined yet.</p>
                    )}
                </div>

                <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                    <DialogContent className="sm:max-w-[420px]">
                        <DialogHeader>
                            <DialogTitle>Add Category</DialogTitle>
                            <DialogDescription>Give your menu category a clear name.</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-2">
                            <Input
                                placeholder="Category name"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        handleCreate();
                                    }
                                }}
                            />
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={handleCreate}>Create</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}
```

#### 📄 `src\components\admin\menu\MenuItemForm.tsx`

*Lines: 150*

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export interface MenuItem {
    id?: number;
    name: string;
    price: number;
    category: string;
    description: string;
}

interface MenuItemFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: MenuItem | null;
    categories: string[];
    onSubmit: (data: MenuItem) => void;
    isSubmitting?: boolean;
}

export function MenuItemForm({
    open,
    onOpenChange,
    initialData,
    categories,
    onSubmit,
    isSubmitting,
}: MenuItemFormProps) {
    const [formData, setFormData] = useState<MenuItem>({
        name: "",
        price: 0,
        category: "",
        description: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
                name: "",
                price: 0,
                category: "",
                description: "",
            });
        }
    }, [initialData, open]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Menu Item" : "Create Menu Item"}</DialogTitle>
                    <DialogDescription>
                        {initialData
                            ? "Make changes to your item here."
                            : "Add a new item to your menu."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Cheese Burger"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="price">Price ($)</Label>
                            <Input
                                id="price"
                                type="number"
                                step="0.01"
                                value={formData.price}
                                onChange={(e) =>
                                    setFormData({ ...formData, price: parseFloat(e.target.value) })
                                }
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="category">Category</Label>
                            <Select
                                value={formData.category}
                                onValueChange={(value) =>
                                    setFormData({ ...formData, category: value })
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((cat) => (
                                        <SelectItem key={cat} value={cat}>
                                            {cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({ ...formData, description: e.target.value })
                            }
                            placeholder="Description of the item..."
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
```

#### 📄 `src\components\admin\menu\MenuItemsTable.tsx`

*Lines: 93*

```tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Plus } from "lucide-react";
import { MenuItem } from "./MenuItemForm";
import { Badge } from "@/components/ui/badge";

interface MenuItemsTableProps {
    items: MenuItem[];
    onEdit: (item: MenuItem) => void;
    onDelete: (id: number) => void;
    onCreate: () => void;
}

export function MenuItemsTable({
    items,
    onEdit,
    onDelete,
    onCreate,
}: MenuItemsTableProps) {
    const currency = (value: number) =>
        new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(
            value || 0
        );

    return (
        <div className="rounded-md border bg-white shadow-sm">
            <div className="flex items-center justify-between border-b p-4">
                <h2 className="text-lg font-semibold">Menu Items</h2>
                <Button onClick={onCreate} className="gap-2">
                    <Plus className="h-4 w-4" /> Add Item
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="hidden md:table-cell">Description</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
                                No menu items found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell>
                                    <Badge variant="secondary">{item.category}</Badge>
                                </TableCell>
                                <TableCell>{currency(item.price)}</TableCell>
                                <TableCell className="hidden max-w-[200px] truncate md:table-cell text-muted-foreground">
                                    {item.description}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => onEdit(item)}
                                        >
                                            <Edit2 className="h-4 w-4 text-blue-500" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => item.id && onDelete(item.id)}
                                        >
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
```

---

### 📂 src  /  components  /  admin  /  orders

#### 📄 `src\components\admin\orders\OrderDetailsModal.tsx`

*Lines: 175*

```tsx
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { User, Phone, Calendar, Package } from "lucide-react";

// Reuse types from parent or define shared types
type OrderStatus =
    | "confirmed"
    | "preparing"
    | "ready"
    | "out_for_delivery"
    | "delivered"
    | "cancelled";

interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
}

interface Order {
    order_number: string;
    user_name: string;
    phone_number: string;
    items: OrderItem[];
    total: number;
    status: OrderStatus;
    created_at: string;
}

interface OrderDetailsModalProps {
    order: Order | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const statusBadgeTone: Record<OrderStatus, string> = {
    confirmed: "bg-blue-100 text-blue-900 border-blue-200",
    preparing: "bg-amber-100 text-amber-900 border-amber-200",
    ready: "bg-emerald-100 text-emerald-900 border-emerald-200",
    out_for_delivery: "bg-cyan-100 text-cyan-900 border-cyan-200",
    delivered: "bg-lime-100 text-lime-900 border-lime-200",
    cancelled: "bg-rose-100 text-rose-900 border-rose-200",
};

export function OrderDetailsModal({
    order,
    open,
    onOpenChange,
}: OrderDetailsModalProps) {
    if (!order) return null;

    const currency = (value: number) =>
        new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(
            value || 0
        );

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl overflow-hidden p-0">
                <DialogHeader className="bg-slate-50 px-6 py-4 border-b">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <DialogTitle className="text-lg font-bold">
                                Order #{order.order_number}
                            </DialogTitle>
                            <Badge
                                variant="outline"
                                className={`capitalize ${statusBadgeTone[order.status]}`}
                            >
                                {order.status.replace(/_/g, " ")}
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {formatDate(order.created_at)}
                        </div>
                    </div>
                </DialogHeader>

                <div className="grid gap-6 p-6 md:grid-cols-2">
                    {/* Customer Details */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 font-semibold">
                            <User className="h-4 w-4" /> Customer Details
                        </h3>
                        <div className="rounded-lg border bg-slate-50 p-4 text-sm">
                            <div className="grid grid-cols-[80px_1fr] gap-2">
                                <span className="text-muted-foreground">Name:</span>
                                <span className="font-medium">{order.user_name}</span>

                                <span className="text-muted-foreground">Phone:</span>
                                <div className="flex items-center gap-1 font-medium">
                                    <Phone className="h-3 w-3 text-muted-foreground" />
                                    {order.phone_number}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 font-semibold">
                            <Package className="h-4 w-4" /> Order Summary
                        </h3>
                        <div className="rounded-lg border bg-slate-50 p-4 text-sm">
                            <div className="grid grid-cols-[80px_1fr] gap-2">
                                <span className="text-muted-foreground">Items:</span>
                                <span className="font-medium">{order.items.reduce((acc, item) => acc + item.quantity, 0)} items</span>

                                <span className="text-muted-foreground">Total:</span>
                                <span className="text-lg font-bold text-emerald-600">{currency(order.total)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 pb-6">
                    <h3 className="mb-4 font-semibold">Order Items</h3>
                    <div className="rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-slate-50">
                                    <TableHead className="w-[50%]">Item</TableHead>
                                    <TableHead className="text-center">Qty</TableHead>
                                    <TableHead className="text-right">Price</TableHead>
                                    <TableHead className="text-right">Subtotal</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {order.items.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.name}</TableCell>
                                        <TableCell className="text-center">{item.quantity}</TableCell>
                                        <TableCell className="text-right">{currency(item.price)}</TableCell>
                                        <TableCell className="text-right font-medium">{currency(item.subtotal)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <div className="space-y-1 text-right">
                            <div className="text-sm text-muted-foreground">Total Amount</div>
                            <div className="text-2xl font-bold">{currency(order.total)}</div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
```

#### 📄 `src\components\admin\orders\OrderManager.tsx`

*Lines: 177*

```tsx
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { OrdersTable, Order } from "./OrdersTable";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import api from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { RiderSelectionModal } from "@/components/admin/riders/RiderSelectionModal";
import { Rider } from "@/types";

interface OrderManagerProps {
    onOrderClick: (order: Order) => void;
}

export function OrderManager({ onOrderClick }: OrderManagerProps) {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [targetStatus, setTargetStatus] = useState<string>("");
    const [pendingOrderId, setPendingOrderId] = useState<string | null>(null);
    const [isRiderModalOpen, setIsRiderModalOpen] = useState(false);

    // Reusing the general orders query, but maybe we want specific filtering later
    // For now fetch recent orders
    const ordersQuery = useQuery({
        queryKey: ["orders-bulk"],
        queryFn: async () => {
            // Fetching 100 most recent for management
            const res = await api.get("/api/v1/orders/", { params: { limit: 100 } });
            return res.data.orders as Order[];
        },
    });

    const ridersQuery = useQuery({
        queryKey: ["riders"],
        queryFn: async () => {
            const res = await api.get("/api/v1/riders/");
            return res.data.items as Rider[];
        },
    });

    const bulkUpdateMutation = useMutation({
        mutationFn: async () => {
            if (!targetStatus) throw new Error("No status selected");
            const res = await api.post("/api/v1/orders/bulk/status-update", {
                order_numbers: selectedIds,
                status_update: { status: targetStatus },
            });
            return res.data;
        },
        onSuccess: (data) => {
            toast({
                title: "Bulk update successful",
                description: data.message,
            });
            setSelectedIds([]);
            setTargetStatus("");
            queryClient.invalidateQueries({ queryKey: ["orders-bulk"] });
            queryClient.invalidateQueries({ queryKey: ["orders"] }); // sync main list
            queryClient.invalidateQueries({ queryKey: ["active-orders"] }); // sync active list
            queryClient.invalidateQueries({ queryKey: ["order-stats"] });
        },
        onError: () => {
            toast({ title: "Bulk update failed", variant: "destructive" });
        },
    });

    const singleStatusMutation = useMutation({
        mutationFn: async (payload: { orderNumber: string; status: string; riderId?: string }) => {
            await api.put(`/api/v1/orders/${payload.orderNumber}/status`, {
                status: payload.status,
                rider_id: payload.riderId,
            });
        },
        onSuccess: () => {
            toast({ title: "Order status updated" });
            queryClient.invalidateQueries({ queryKey: ["orders-bulk"] });
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            queryClient.invalidateQueries({ queryKey: ["active-orders"] });
        },
    });

    const handleStatusChange = (orderNumber: string, status: string) => {
        if (status === "out_for_delivery") {
            const activeRiders = (ridersQuery.data || []).filter((r) => r.status === "active");
            if (activeRiders.length === 0) {
                toast({
                    title: "No active riders",
                    description: "Add or activate a rider to assign deliveries.",
                    variant: "destructive",
                });
                return;
            }
            setPendingOrderId(orderNumber);
            setIsRiderModalOpen(true);
            return;
        }
        singleStatusMutation.mutate({ orderNumber, status });
    };

    const handleRiderSelect = (riderId: string) => {
        if (!pendingOrderId) return;
        singleStatusMutation.mutate({
            orderNumber: pendingOrderId,
            status: "out_for_delivery",
            riderId,
        });
        setPendingOrderId(null);
    };

    if (ordersQuery.isLoading) {
        return (
            <div className="flex h-64 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    return (
        <div className="space-y-6 relative pb-20">
            <h1 className="text-2xl font-bold tracking-tight">Order Management</h1>

            <OrdersTable
                orders={ordersQuery.data || []}
                onOrderClick={onOrderClick}
                onStatusChange={handleStatusChange}
                selectable
                selectedIds={selectedIds}
                onSelectionChange={setSelectedIds}
            />

            {/* Sticky Action Bar */}
            {selectedIds.length > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 rounded-lg border bg-white p-4 shadow-lg animate-in slide-in-from-bottom-4">
                    <span className="font-medium">{selectedIds.length} orders selected</span>
                    <div className="h-6 w-px bg-border" />
                    <Select value={targetStatus} onValueChange={setTargetStatus}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Change status to..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="preparing">Preparing</SelectItem>
                            <SelectItem value="ready">Ready</SelectItem>
                            <SelectItem value="out_for_delivery">Out for delivery</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button
                        onClick={() => bulkUpdateMutation.mutate()}
                        disabled={!targetStatus || bulkUpdateMutation.isPending}
                    >
                        {bulkUpdateMutation.isPending ? "Updating..." : "Apply Change"}
                    </Button>
                </div>
            )}

            <RiderSelectionModal
                open={isRiderModalOpen}
                onOpenChange={(open) => {
                    setIsRiderModalOpen(open);
                    if (!open) setPendingOrderId(null);
                }}
                riders={ridersQuery.data || []}
                onSelect={handleRiderSelect}
            />
        </div>
    );
}
```

#### 📄 `src\components\admin\orders\OrdersTable.tsx`

*Lines: 210*

```tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Types derived or shared
type OrderStatus =
    | "confirmed"
    | "preparing"
    | "ready"
    | "out_for_delivery"
    | "delivered"
    | "cancelled";

interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
}

export interface Order {
    order_number: string;
    user_name: string;
    phone_number: string;
    items: OrderItem[];
    total: number;
    status: OrderStatus;
    created_at: string;
}

interface OrdersTableProps {
    orders: Order[];
    onOrderClick: (order: Order) => void;
    onStatusChange: (orderNumber: string, status: OrderStatus) => void;
    selectable?: boolean;
    selectedIds?: string[];
    onSelectionChange?: (ids: string[]) => void;
}

const orderStatusOptions: { value: OrderStatus; label: string }[] = [
    { value: "confirmed", label: "Confirmed" },
    { value: "preparing", label: "Preparing" },
    { value: "ready", label: "Ready" },
    { value: "out_for_delivery", label: "Out for delivery" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" },
];

const statusBadgeTone: Record<OrderStatus, string> = {
    confirmed: "bg-blue-100 text-blue-900",
    preparing: "bg-amber-100 text-amber-900",
    ready: "bg-emerald-100 text-emerald-900",
    out_for_delivery: "bg-cyan-100 text-cyan-900",
    delivered: "bg-lime-100 text-lime-900",
    cancelled: "bg-rose-100 text-rose-900",
};

export function OrdersTable({
    orders,
    onOrderClick,
    onStatusChange,
    selectable = false,
    selectedIds = [],
    onSelectionChange,
}: OrdersTableProps) {
    const currency = (value: number) =>
        new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(
            value || 0
        );

    const handleSelectAll = (checked: boolean) => {
        if (onSelectionChange) {
            if (checked) {
                onSelectionChange(orders.map((o) => o.order_number));
            } else {
                onSelectionChange([]);
            }
        }
    };

    const handleSelectOne = (checked: boolean, id: string) => {
        if (onSelectionChange) {
            if (checked) {
                onSelectionChange([...selectedIds, id]);
            } else {
                onSelectionChange(selectedIds.filter((sid) => sid !== id));
            }
        }
    };

    const allSelected = orders.length > 0 && selectedIds.length === orders.length;
    const someSelected = selectedIds.length > 0 && selectedIds.length < orders.length;

    return (
        <div className="rounded-md border bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-slate-50">
                            {selectable && (
                                <TableHead className="w-[50px]">
                                    <Checkbox
                                        checked={allSelected || (someSelected ? "indeterminate" : false)}
                                        onCheckedChange={(checked) => handleSelectAll(!!checked)}
                                    />
                                </TableHead>
                            )}
                            <TableHead>Order #</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={selectable ? 6 : 5}
                                    className="h-24 text-center text-muted-foreground"
                                >
                                    No orders found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            orders.map((order) => (
                                <TableRow
                                    key={order.order_number}
                                    className="cursor-pointer hover:bg-muted/50"
                                    onClick={() => onOrderClick(order)}
                                >
                                    {selectable && (
                                        <TableCell onClick={(e) => e.stopPropagation()}>
                                            <Checkbox
                                                checked={selectedIds.includes(order.order_number)}
                                                onCheckedChange={(checked) =>
                                                    handleSelectOne(!!checked, order.order_number)
                                                }
                                            />
                                        </TableCell>
                                    )}
                                    <TableCell className="font-medium text-emerald-600">
                                        {order.order_number}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{order.user_name}</span>
                                            <span className="text-xs text-muted-foreground">
                                                {order.phone_number}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {currency(order.total)}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            className={cn(
                                                "font-semibold capitalize shadow-none",
                                                statusBadgeTone[order.status]
                                            )}
                                        >
                                            {order.status.replace(/_/g, " ")}
                                        </Badge>
                                    </TableCell>
                                    <TableCell onClick={(e) => e.stopPropagation()}>
                                        <Select
                                            value={order.status}
                                            onValueChange={(value: OrderStatus) =>
                                                onStatusChange(order.order_number, value)
                                            }
                                        >
                                            <SelectTrigger className="w-[140px] h-8 bg-white">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {orderStatusOptions.map((status) => (
                                                    <SelectItem key={status.value} value={status.value}>
                                                        {status.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
```

---

### 📂 src  /  components  /  admin  /  riders

#### 📄 `src\components\admin\riders\RiderForm.tsx`

*Lines: 123*

```tsx
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rider, RiderFormData } from "@/types";

interface RiderFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: Rider | null;
    onSubmit: (data: RiderFormData) => void;
    isSubmitting: boolean;
}

export function RiderForm({
    open,
    onOpenChange,
    initialData,
    onSubmit,
    isSubmitting
}: RiderFormProps) {
    const [formData, setFormData] = useState<RiderFormData>({
        name: "",
        phone_number: "",
        vehicle_info: "",
        status: "active"
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name,
                phone_number: initialData.phone_number,
                vehicle_info: initialData.vehicle_info,
                status: initialData.status
            });
        } else {
            setFormData({
                name: "",
                phone_number: "",
                vehicle_info: "",
                status: "active"
            });
        }
    }, [initialData, open]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Rider" : "Add New Rider"}</DialogTitle>
                    <DialogDescription>
                        {initialData ? "Edit the details of the rider here." : "Enter the details of the new rider."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Rider Name"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            value={formData.phone_number}
                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                            placeholder="+1234567890"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="vehicle">Vehicle Info</Label>
                        <Input
                            id="vehicle"
                            value={formData.vehicle_info}
                            onChange={(e) => setFormData({ ...formData, vehicle_info: e.target.value })}
                            placeholder="Honda C100 - Red (ABC-123)"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="status">Status</Label>
                        <Select
                            value={formData.status}
                            onValueChange={(value: 'active' | 'inactive') =>
                                setFormData({ ...formData, status: value })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save Rider"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
```

#### 📄 `src\components\admin\riders\RiderList.tsx`

*Lines: 86*

```tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus } from "lucide-react";
import { Rider } from "@/types";

interface RiderListProps {
    riders: Rider[];
    onCreate: () => void;
    onEdit: (rider: Rider) => void;
    onDelete: (id: string) => void;
}

export function RiderList({ riders, onCreate, onEdit, onDelete }: RiderListProps) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Registered Riders</h2>
                <Button onClick={onCreate} className="gap-2">
                    <Plus className="h-4 w-4" /> Add Rider
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Vehicle</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {riders.map((rider) => (
                            <TableRow key={rider.id}>
                                <TableCell className="font-medium">{rider.name}</TableCell>
                                <TableCell>{rider.phone_number}</TableCell>
                                <TableCell>{rider.vehicle_info}</TableCell>
                                <TableCell>
                                    <Badge variant={rider.status === 'active' ? 'default' : 'secondary'}>
                                        {rider.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => onEdit(rider)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-destructive hover:text-destructive"
                                            onClick={() => {
                                                if (confirm('Are you sure you want to delete this rider?')) {
                                                    onDelete(rider.id);
                                                }
                                            }}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {riders.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                    No riders found. Add your first rider!
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
```

#### 📄 `src\components\admin\riders\RiderSelectionModal.tsx`

*Lines: 73*

```tsx
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rider } from "@/types";

interface RiderSelectionModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    riders: Rider[];
    onSelect: (riderId: string) => void;
}

export function RiderSelectionModal({
    open,
    onOpenChange,
    riders,
    onSelect
}: RiderSelectionModalProps) {
    const [selectedRiderId, setSelectedRiderId] = useState<string>("");

    const handleConfirm = () => {
        if (selectedRiderId) {
            onSelect(selectedRiderId);
            onOpenChange(false);
            setSelectedRiderId(""); // Reset
        }
    };

    const activeRiders = riders.filter(r => r.status === 'active');

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Assign Rider for Delivery</DialogTitle>
                    <DialogDescription>
                        Choose an active rider to deliver this order.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="rider">Select Rider</Label>
                        <Select onValueChange={setSelectedRiderId} value={selectedRiderId}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a rider..." />
                            </SelectTrigger>
                            <SelectContent>
                                {activeRiders.map((rider) => (
                                    <SelectItem key={rider.id} value={rider.id}>
                                        {rider.name} ({rider.vehicle_info})
                                    </SelectItem>
                                ))}
                                {activeRiders.length === 0 && (
                                    <SelectItem value="none" disabled>No active riders available</SelectItem>
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} disabled={!selectedRiderId}>
                        Assign & Update Status
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
```

---

### 📂 src  /  components  /  admin  /  zones

#### 📄 `src\components\admin\zones\DeliveryZoneForm.tsx`

*Lines: 169*

```tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { DeliveryZone, DeliveryZoneFormData } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface DeliveryZoneFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (data: DeliveryZoneFormData) => void;
    initialData?: DeliveryZone;
    isLoading?: boolean;
}

export function DeliveryZoneForm({
    open,
    onOpenChange,
    onSubmit,
    initialData,
    isLoading,
}: DeliveryZoneFormProps) {
    const [formData, setFormData] = useState<DeliveryZoneFormData>({
        name: "",
        latitude: 0,
        longitude: 0,
        radius_km: 5,
        is_active: true,
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name,
                latitude: initialData.latitude,
                longitude: initialData.longitude,
                radius_km: initialData.radius_km,
                is_active: initialData.is_active,
            });
        } else {
            setFormData({
                name: "",
                latitude: 0,
                longitude: 0,
                radius_km: 5,
                is_active: true,
            });
        }
    }, [initialData, open]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.latitude || !formData.longitude) {
            toast({
                title: "Validation Error",
                description: "Please fill all required fields",
                variant: "destructive",
            });
            return;
        }
        onSubmit(formData);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>
                        {initialData ? "Edit Delivery Zone" : "Add New Delivery Zone"}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Zone Name</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="e.g. Clifton, Gulshan"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="latitude">Latitude</Label>
                            <Input
                                id="latitude"
                                type="number"
                                step="any"
                                value={formData.latitude}
                                onChange={(e) =>
                                    setFormData({ ...formData, latitude: parseFloat(e.target.value) })
                                }
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="longitude">Longitude</Label>
                            <Input
                                id="longitude"
                                type="number"
                                step="any"
                                value={formData.longitude}
                                onChange={(e) =>
                                    setFormData({ ...formData, longitude: parseFloat(e.target.value) })
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="radius">Delivery Radius (km)</Label>
                        <Input
                            id="radius"
                            type="number"
                            step="0.1"
                            min="0.1"
                            value={formData.radius_km}
                            onChange={(e) =>
                                setFormData({ ...formData, radius_km: parseFloat(e.target.value) })
                            }
                            required
                        />
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                        <Switch
                            id="active-mode"
                            checked={formData.is_active}
                            onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                        />
                        <Label htmlFor="active-mode">Active Zone</Label>
                    </div>

                    <div className="rounded-md bg-slate-100 p-3 text-sm text-slate-500">
                        <p>💡 Tip: Use Google Maps to find the Latitude/Longitude of the center of your delivery area.</p>
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90">
                            {isLoading ? "Saving..." : initialData ? "Update Zone" : "Add Zone"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
```

#### 📄 `src\components\admin\zones\DeliveryZoneList.tsx`

*Lines: 184*

```tsx
import { useState } from "react";
import { Plus, Pencil, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DeliveryZone, DeliveryZoneFormData } from "@/types";
import { DeliveryZoneForm } from "./DeliveryZoneForm";
import api from "@/lib/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

export function DeliveryZoneList() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingZone, setEditingZone] = useState<DeliveryZone | undefined>();
    const queryClient = useQueryClient();

    // Fetch Zones
    const zonesQuery = useQuery({
        queryKey: ["zones"],
        queryFn: async () => {
            const response = await api.get("/api/v1/zones");
            return response.data;
        },
    });

    const zones = zonesQuery.data?.items || [];

    // Mutations
    const createZone = useMutation({
        mutationFn: async (data: DeliveryZoneFormData) => {
            await api.post("/api/v1/zones", data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["zones"] });
            setIsFormOpen(false);
            setEditingZone(undefined);
            toast({ title: "Success", description: "Zone created successfully" });
        },
        onError: () => toast({ title: "Error", description: "Failed to create zone", variant: "destructive" }),
    });

    const updateZone = useMutation({
        mutationFn: async ({ id, data }: { id: string; data: DeliveryZoneFormData }) => {
            await api.put(`/api/v1/zones/${id}`, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["zones"] });
            setIsFormOpen(false);
            setEditingZone(undefined);
            toast({ title: "Success", description: "Zone updated successfully" });
        },
        onError: () => toast({ title: "Error", description: "Failed to update zone", variant: "destructive" }),
    });

    const deleteZone = useMutation({
        mutationFn: async (id: string) => {
            await api.delete(`/api/v1/zones/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["zones"] });
            toast({ title: "Success", description: "Zone deleted successfully" });
        },
        onError: () => toast({ title: "Error", description: "Failed to delete zone", variant: "destructive" }),
    });

    const handleSubmit = (data: DeliveryZoneFormData) => {
        if (editingZone) {
            updateZone.mutate({ id: editingZone.id, data });
        } else {
            createZone.mutate(data);
        }
    };

    const handleEdit = (zone: DeliveryZone) => {
        setEditingZone(zone);
        setIsFormOpen(true);
    };

    const handleCreate = () => {
        setEditingZone(undefined);
        setIsFormOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-slate-800">Delivery Zones</h2>
                <Button onClick={handleCreate} className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Plus className="mr-2 h-4 w-4" /> Add Zone
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Active Zones</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Zone Name</TableHead>
                                <TableHead>Center Coords</TableHead>
                                <TableHead>Radius (km)</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {zonesQuery.isLoading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24">Loading zones...</TableCell>
                                </TableRow>
                            ) : zones.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">No delivery zones defined.</TableCell>
                                </TableRow>
                            ) : (
                                zones.map((zone: DeliveryZone) => (
                                    <TableRow key={zone.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center">
                                                <MapPin className="mr-2 h-4 w-4 text-primary" />
                                                {zone.name}
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-mono text-xs">
                                            {zone.latitude.toFixed(4)}, {zone.longitude.toFixed(4)}
                                        </TableCell>
                                        <TableCell>{zone.radius_km} km</TableCell>
                                        <TableCell>
                                            <Badge variant={zone.is_active ? "default" : "secondary"}>
                                                {zone.is_active ? "Active" : "Inactive"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleEdit(zone)}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-500 hover:text-red-600"
                                                onClick={() => {
                                                    if (confirm("Are you sure you want to delete this zone?")) {
                                                        deleteZone.mutate(zone.id);
                                                    }
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <DeliveryZoneForm
                open={isFormOpen}
                onOpenChange={(open) => {
                    setIsFormOpen(open);
                    if (!open) setEditingZone(undefined);
                }}
                onSubmit={handleSubmit}
                initialData={editingZone}
                isLoading={createZone.isPending || updateZone.isPending}
            />
        </div>
    );
}
```

---

## 📝 Notes

- This documentation was auto-generated
- Binary files and assets were excluded
- Environment files (.env) were excluded for security
- Lock files and build artifacts were excluded

---

*End of Documentation - Generated by compile_docs.py*
