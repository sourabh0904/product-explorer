# Product Explorer Dashboard

A modern, production-quality product browsing application built with Next.js 16, TypeScript, and Tailwind CSS. Browse products from the FakeStore API with advanced search, filtering, and favorites functionality.

![Product Explorer](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)

## ✨ Features

### Core Features
- **Product Listing** - Responsive grid layout displaying products with images, titles, prices, and categories
- **Search** - Real-time client-side search by product title
- **Category Filtering** - Filter products by category with intuitive button interface
- **Favorites** - Mark products as favorites with localStorage persistence
- **Product Details** - Detailed product view with full description, ratings, and large images
- **Responsive Design** - Mobile-first design that works seamlessly on all devices

### Bonus Features
- **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- **Price Sorting** - Sort products by price (low to high, high to low)
- **Loading States** - Skeleton loaders for better UX during data fetching
- **Error Handling** - User-friendly error messages with retry functionality
- **Accessibility** - ARIA labels, keyboard navigation, and semantic HTML
- **Smooth Animations** - Fade-in effects and smooth transitions throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sourabh0904/product-explorer.git
   cd product-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with FavoritesProvider
│   ├── page.tsx                # Main product listing page
│   ├── globals.css             # Global styles and animations
│   └── products/
│       └── [id]/
│           ├── page.tsx        # Product details server component
│           ├── ProductDetailClient.tsx  # Product details client component
│           └── not-found.tsx   # 404 page
├── components/
│   ├── Header.tsx              # App header with logo and favorites badge
│   ├── ProductCard.tsx         # Individual product card
│   ├── ProductGrid.tsx         # Responsive product grid
│   ├── SearchBar.tsx           # Search input component
│   ├── FilterBar.tsx           # Category filter buttons
│   ├── SortDropdown.tsx        # Price sorting dropdown
│   ├── LoadingSkeleton.tsx     # Loading state skeleton
│   ├── ErrorMessage.tsx        # Error display component
│   └── DarkModeToggle.tsx      # Dark mode toggle button
├── contexts/
│   └── FavoritesContext.tsx    # Favorites state management
├── hooks/
│   └── useLocalStorage.ts      # localStorage hook
├── lib/
│   └── api.ts                  # API functions
└── types/
    └── product.ts              # TypeScript interfaces
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **State Management:** React Context API
- **Data Fetching:** Native Fetch API
- **API:** FakeStore API

## 🎯 Key Technical Decisions

### Architecture
- **Server Components** - Product details page uses server components for optimal performance
- **Client Components** - Interactive features (search, filters, favorites) use client components
- **Context API** - Lightweight state management for favorites, avoiding unnecessary complexity
- **localStorage** - Client-side persistence for favorites and theme preferences

### TypeScript
- **Strict Typing** - All components, props, and API responses are fully typed
- **No `any` Types** - Proper type inference and explicit types throughout
- **Type Safety** - Compile-time error checking for better code quality

### Performance
- **Image Optimization** - Next.js Image component with proper sizing
- **Code Splitting** - Automatic code splitting via Next.js App Router
- **Memoization** - useMemo for expensive filtering/sorting operations
- **Loading States** - Skeleton loaders prevent layout shift

### UX/UI
- **Mobile-First** - Responsive design starting from mobile breakpoints
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Dark Mode** - System preference detection with manual override
- **Smooth Animations** - CSS transitions and keyframe animations

## 📝 Features Implementation

### Search & Filtering
- Client-side search for instant results
- Category filtering with visual feedback
- Favorites-only filter
- Price sorting (ascending/descending)
- All filters work together seamlessly

### Favorites System
- Toggle favorites on product cards and detail pages
- Persistent storage using localStorage
- Favorites count badge in header
- Filter to show only favorited products
- SSR-safe implementation

### Responsive Design
- **Mobile** (< 640px): Single column grid
- **Tablet** (640px - 1024px): Two column grid
- **Desktop** (> 1024px): Three to four column grid
- Touch-friendly buttons and interactions
- Optimized typography for all screen sizes

## 🧪 Testing

### Manual Testing Checklist
- [x] Products load from API
- [x] Search filters products by title
- [x] Category filters work correctly
- [x] Favorites toggle and persist
- [x] Product details page displays correctly
- [x] Dark mode toggles properly
- [x] Sort by price works
- [x] Responsive on mobile/tablet/desktop
- [x] Loading states display
- [x] Error states display with retry

### Build Verification
```bash
npm run build
```
Build completes successfully with no TypeScript errors.

## 🚧 Assumptions & Trade-offs

### Assumptions
- Users have modern browsers with localStorage support
- API is reliable and returns consistent data structure
- No authentication/authorization required
- Single-user experience (no multi-device sync)

### Trade-offs
- **localStorage vs Backend** - Using localStorage for simplicity, but favorites won't sync across devices
- **Client-side Filtering** - All products loaded at once for instant filtering, acceptable for small dataset (~20 products)
- **No Pagination** - Current API dataset is small enough to load all at once
- **Basic Error Handling** - Simple retry mechanism, could be enhanced with exponential backoff

## 🎨 Design Philosophy

- **Modern & Clean** - Purple/blue gradient accent colors
- **Premium Feel** - Smooth animations, glassmorphism effects
- **User-Centric** - Clear visual feedback for all interactions
- **Accessible** - WCAG compliant color contrasts and semantic markup

## 📄 License

This project was created as a technical assignment.

## 🙏 Acknowledgments

- Product data from [FakeStore API](https://fakestoreapi.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/) (Geist Sans & Geist Mono)
