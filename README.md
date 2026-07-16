# MANA: Mentoria AI Navigation Architect Certification

The website for MANA, Mentoria's Training & Certification vertical. Built as an official
extension of the Mentoria brand, same design language, its own conversion-focused platform.

## Stack

- **Next.js 16** (App Router, TypeScript, static prerendering)
- **Tailwind CSS v4** with Mentoria brand tokens (`src/app/globals.css`)
- **Framer Motion** (available) + CSS mount animations (`src/components/ui/Reveal.tsx`)
- **lucide-react** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/`: one route per page (Home, About, Curriculum, Orientation, FAQs, etc.)
- `src/components/ui/`: design-system primitives (Button, Card, Section, Accordion, Reveal, etc.)
- `src/components/sections/`: reusable page sections (FinalCta, FounderOfferBand, forms)
- `src/lib/constants.ts`: single source of truth for nav, contacts, fees, modules, FAQs

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build (static prerender)
npm run lint    # ESLint
```
