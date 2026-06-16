# Monkey Coffee — Frontend Internship Challenge

This repository contains the implementation of the **Monkey Coffee** landing page, sliced and developed as a frontend engineering challenge for **PT Daya Rekadigital Indonesia**.

## 🚀 Technologies Used

- **Next.js 15 (App Router)**: For server-side rendering, routing, search engine optimization, and native self-hosting fonts.
- **React 19**: Powered by Next.js for component-driven UI development.
- **TypeScript**: Ensuring type safety, static checking, and clean maintainable code.
- **Tailwind CSS v4 (CSS-first)**: Used for responsive layout slicing, modern fluid spacing, grid alignments, and a warm coffee-themed dark/light color palette.
- **Framer Motion**: For rich, premium micro-animations, slide-in drawers, and interactive transitions.
- **Lucide React**: For sharp, pixel-perfect modern vector icons.

---

## 🛠️ Getting Started & Installation

### Prerequisites
Make sure you have Node.js (v18.x or later recommended) and npm installed.

### 1. Clone the repository and navigate to the project directory:
```bash
cd "Coffe Landing Page"
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run the development server:
```bash
npm run dev
# The application will start at http://localhost:3000 (Vite configuration is mapped to 3000 in Next config)
```

### 4. Build for production:
```bash
npm run build
# The build output is optimized and saved in the .next/ directory
```

### 5. Preview production build locally:
```bash
npm run start
```

---

## 📐 Folder Structure (Best Practice)

The project layout follows the official Next.js App Router guidelines:

```
├── public/
│   ├── favicon.ico
│   └── images/                 ← Premium generated image assets
│       ├── hero_bg.png         ← Cozy dark cafe interior background
│       ├── menu_*.png          ← Custom high-definition product shots
│       ├── gallery_*.png       ← Cafe environment snaps
│       └── neon_sign.png       ← Custom glowing "Monkey Coffee" sign
└── src/
    ├── app/
    │   ├── globals.css         ← Tailwind v4 styling + scrollbar modifications
    │   ├── layout.tsx          ← Google Fonts loading & CartProvider wrapper
    │   └── page.tsx            ← Main page assembling sections
    ├── components/
    │   ├── Navbar.tsx          ← Sticky navigation + mobile drawer + cart indicator
    │   ├── CartDrawer.tsx      ← Framer Motion animated order drawer
    │   ├── Hero.tsx            ← Dark parallax introduction with call to actions
    │   ├── Reviews.tsx         ← Customer testimonials card grid
    │   ├── Menu.tsx            ← Highlighted signatures menu with "Add to Cart" triggers
    │   ├── Features.tsx        ← "More Than Coffee" core brand pillars
    │   ├── Gallery.tsx         ← "Where Moments Happen" asymmetric photo grid
    │   ├── Banner.tsx          ← Minimalist philosophy text callout
    │   └── Contact.tsx         ← Contact info & working table reservation form
    └── context/
        └── CartContext.tsx     ← Persistent global React context managing orders
```

---

## 💡 Hydration Mismatch & Cart Persistence in Next.js

### The Problem
Next.js pre-renders HTML on the server (SSR). When implementing shopping cart persistence using `localStorage`, a standard naive implementation would fetch the cart items directly from local storage during initial state definition:

```typescript
const [cartItems, setCartItems] = useState(
  typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '[]') : []
);
```

During server rendering, `window` is `undefined`, so Next.js renders an **empty cart** (0 items) into the static HTML. 

When that HTML reaches the client, if the user has items in their `localStorage`, React will immediately try to render those items in the browser during hydration. Because the server-rendered HTML (empty cart) does not match the client-rendered UI (cart with stored items), React throws a **Hydration Mismatch Error** and may fail to bind event listeners correctly, causing broken buttons or layout glitches.

### Our Solution (Mounted Guard Pattern)
To resolve this issue, we decoupled the initial render from the local storage loading phase:

1. **Uniform Initial Render**: We initialize the `cartItems` state as an empty array `[]` both on the server and on the client's initial layout load.
2. **Mount Detection**: We declare a `mounted` state variable initialized to `false`:
   ```typescript
   const [mounted, setMounted] = useState(false);
   ```
3. **Client-only Effect**: Inside a `useEffect` hook (which is guaranteed to run *only* after the browser has hydrated and mounted the components), we set `mounted` to `true` and safely read the contents of `localStorage`:
   ```typescript
   useEffect(() => {
     setMounted(true);
     const savedCart = localStorage.getItem("monkey_cart");
     if (savedCart) {
       setCartItems(JSON.parse(savedCart));
     }
   }, []);
   ```
4. **Context State Gateway**: In the `CartProvider` render return statement, we shield the UI from parsing inconsistent quantities before mounting:
   ```typescript
   return (
     <CartContext.Provider
       value={{
         cartItems: mounted ? cartItems : [],
         cartTotal: mounted ? cartTotal : 0,
         cartCount: mounted ? cartCount : 0,
         // ... functions
       }}
     >
       {children}
     </CartContext.Provider>
   );
   ```

By using this guard pattern, the client renders the exact same empty state as the server on the first tick, preventing hydration mismatch. Immediately on the next tick (once mounted), React updates the state with the actual `localStorage` data, seamlessly showing the user's cached cart items without any console warnings or rendering glitches.
