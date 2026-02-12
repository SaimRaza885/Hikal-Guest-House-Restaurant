# Hickal Guest House - React JS + Tailwind v4

## Setup

1. Install dependencies
```bash
npm install
```

2. Start development server
```bash
npm run dev
```

3. Build production bundle
```bash
npm run build
```

4. Preview production build
```bash
npm run preview
```

## Stack

- Framework: React (JavaScript only)
- Styling: Tailwind CSS v4 (`@tailwindcss/postcss`)
- Routing: wouter
- Forms: react-hook-form
- Data: local mock services in `src/services/mockApi.js`
- SEO helper: `src/hooks/useSeo.js`

## Feature Highlights

- Dedicated room details page: `/rooms/:slug`
- WhatsApp booking actions on room cards and detail pages
- Hero background slider with fade transitions
- Sticky social action dock on home page
- Feed-style gallery page (scroll-first mobile UX)
- Detailed facilities layout with grouped sections
- FAQ accordion section on home page
- Custom 404 page and reusable loader component