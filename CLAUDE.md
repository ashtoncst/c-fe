# Converge ICT Solutions — Development Guide

## Project
**B2B telecom website** for Converge ICT Solutions (Philippines). Serves enterprise clients seeking fiber internet (DIA), data centers, cloud, managed services, and submarine cable infrastructure.

**Stack:** Next.js 14+ · React 18+ · TypeScript 5 (strict) · Tailwind CSS 3 · Supabase (PostgreSQL) · Node 18+  
**Tools:** ESLint · Prettier + Tailwind plugin · npm/yarn · Git  
**Icons:** Lucide React (preferred) or Heroicons — **SVG only, never emojis**  
**Deploy:** Vercel · Environments: production / staging / dev

**File naming:** Pages `kebab-case.tsx` · Components `PascalCase.tsx` · Utils `camelCase.ts` · Data `kebab-case.ts`

---

## Development Workflow (Mandatory Phases)

> From [Superpowers](https://github.com/obra/superpowers). These are **required phases**, not suggestions.

**1 — Brainstorm first.** Clarify the real goal before touching code. Agree on scope in writing. Never start coding without a confirmed spec.

**2 — Write an implementation plan.** Break work into ~2–5 min tasks with exact file paths, expected changes, and verification steps. Follow YAGNI + DRY.

**3 — TDD: RED → GREEN → REFACTOR → COMMIT.**
- Write the failing test first. Run it. Watch it fail.
- Write minimal code to pass. Run it. Watch it pass.
- Refactor. Tests must still pass. Commit.
- Never write code before a test. Never skip "watch it fail."

**4 — Code review before merge.** Check spec compliance, then code quality. Critical issues block progress.

**5 — Git hygiene.** Feature branches only (`feat/`, `fix/`, `chore/`). Never push directly to `main`. Squash/clean commits before merging.

**Debugging protocol:** Reproduce → Isolate → Find root cause → Fix minimal → Verify test passes → Confirm no regressions. Never guess.

---

## TypeScript Rules

- **Strict mode always.** No `any` without documented justification.
- Explicit return types on all async functions.
- Props interfaces named `[Component]Props`.
- State typed explicitly: `useState<string>('')`, `useState<User | null>(null)`.
- Error handling on every async operation — check `response.ok`, catch, set error state, finally reset loading.
- Import order: React/externals → internal utils/hooks → components → types → data.

```typescript
// Component pattern
interface CardProps {
  title: string;
  description?: string;
  variant?: 'default' | 'featured';
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, variant = 'default', onClick, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      {description && <p className="text-base leading-relaxed text-gray-600">{description}</p>}
    </div>
  );
};
```

---

## Tailwind Rules (CRITICAL)

**Only Tailwind utility classes. No inline styles. No CSS Modules. No Styled Components. No Emotion.**  
Inline styles are only acceptable for truly dynamic values (e.g. `style={{ backgroundImage: \`url(${src})\` }}`).

**Responsive pattern (mobile-first):**
```tsx
<div className="flex flex-col gap-4 px-6 py-12 md:flex-row md:gap-6 md:px-8 md:py-16 lg:gap-8 lg:px-10 lg:py-20">
  <h1 className="text-[45px] font-bold mb-4 md:text-[55px] md:mb-6 lg:text-[65px] lg:mb-8">Heading</h1>
</div>
```

**Breakpoints:** `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px · `2xl` 1536px

---

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Primary | `#038F8D` | Brand color, CTAs, links, borders |
| Primary hover | `#027573` | Hover states |
| `text-gray-900` | `#1A1A1A` | Headings |
| `text-gray-600` | `#666666` | Body / muted text |
| `border-gray-200` | `#E5E5E5` | Borders, dividers |
| `bg-gray-50` | `#F8F9FA` | Section backgrounds |

### Typography
| Element | Size | Weight | Leading |
|---|---|---|---|
| Hero title | `text-[65px]` (→ 45px mobile) | `font-bold` | `leading-tight` |
| Section title | `text-[35px]` (→ 28px mobile) | `font-bold` | `leading-snug` |
| Body / description | `text-lg` (18px) | `font-normal` | `leading-relaxed` |
| Button text | `text-sm` (14px) | `font-semibold` | — |
| Fine print | `text-xs` (12px) | — | — |

### Spacing
| Context | Value |
|---|---|
| Section vertical padding | `py-16 md:py-20 lg:py-24` |
| Section horizontal padding | `px-6 md:px-8 lg:px-10` |
| Container max-width | `max-w-7xl mx-auto` (standard) · `max-w-5xl` (text-heavy) |
| Title → Description gap | `mb-6` |
| Description → Content gap | `mb-12` |
| Description max-width | `max-w-3xl` |

### Shapes, Shadows, Transitions
- **Cards:** `rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`
- **Buttons:** `rounded-full` (pill) or `rounded-lg`
- **Modals/overlays:** `rounded-2xl shadow-xl`
- **Inputs:** `rounded-full` or `rounded-lg`
- **Hover effects:** `transition-colors duration-200`
- **Accordions/complex:** `transition-all duration-300`

---

## UI/UX Design Intelligence

> From [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill). Run this reasoning before building any new page or section.

**Design system reasoning sequence:**
1. Identify page type (enterprise landing, product detail, dashboard, etc.)
2. Select UI style from table below
3. Confirm color mood aligns with brand (`#038F8D` teal = trust, technology)
4. Confirm typography pairing (professional, clean)
5. Identify anti-patterns for this industry
6. Run pre-delivery checklist before handoff

**Recommended styles for Converge ICT (B2B Enterprise / Telecom):**
| Style | Use When |
|---|---|
| Minimalism & Swiss Style | Dashboards, product pages, docs |
| Glassmorphism | Modern SaaS features, data sections |
| Soft UI Evolution | Customer-facing pages, service showcases |
| Bento Box Grid | Feature grids, service comparisons |
| Trust & Authority | About, partners, case studies |
| Feature-Rich Showcase | Solution/product detail pages |

**Anti-patterns — never use for Converge:**
- Neon colors or harsh gradients
- AI purple/pink gradient clichés
- Heavy animations that compete with content
- Dark mode as default
- Multiple competing CTAs in the same section
- Emoji as icons (SVG only)
- Decorative elements that break content hierarchy

---

## Component Templates

### Hero Section
```tsx
<section className="min-h-screen flex items-center py-20 md:py-24 bg-gradient-to-r from-[#038F8D] to-[#027573]">
  <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
    <h1 className="text-[45px] sm:text-[55px] md:text-[65px] font-bold leading-tight text-white mb-6">
      Title
    </h1>
    <p className="text-lg leading-relaxed text-white/90 mb-8 max-w-2xl">Description</p>
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="bg-white hover:bg-gray-100 text-[#038F8D] text-sm font-semibold py-3 px-8 rounded-full transition-colors duration-200">
        Primary CTA
      </button>
      <button className="border-2 border-white text-white hover:bg-white hover:text-[#038F8D] text-sm font-semibold py-3 px-8 rounded-full transition-all duration-200">
        Secondary CTA
      </button>
    </div>
  </div>
</section>
```

### Standard Section
```tsx
<section className="py-16 md:py-20 lg:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
    <div className="text-center mb-12"> {/* remove text-center for left-aligned */}
      <h2 className="text-[28px] sm:text-[32px] md:text-[35px] font-bold leading-snug text-gray-900 mb-6">Title</h2>
      <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">Description</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* cards */}
    </div>
  </div>
</section>
```

### Card
```tsx
<div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
  <div className="w-12 h-12 bg-[#038F8D]/10 rounded-lg flex items-center justify-center mb-6">
    <Icon className="w-6 h-6 text-[#038F8D]" />
  </div>
  <h3 className="text-2xl font-bold text-gray-900 mb-4">Title</h3>
  <p className="text-base leading-relaxed text-gray-600 mb-6">Description</p>
  <a href="#" className="text-[#038F8D] hover:text-[#027573] font-semibold text-sm inline-flex items-center">Learn More →</a>
</div>
```

### Accordion
```tsx
const [isOpen, setIsOpen] = useState(false);
// ...
<div className="border-b border-gray-200">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="w-full flex items-center justify-between py-5 text-left hover:bg-gray-50 transition-colors"
    aria-expanded={isOpen}
  >
    <span className="text-lg font-semibold text-gray-900">{question}</span>
    <span className="text-2xl text-gray-600">{isOpen ? '−' : '+'}</span>
  </button>
  {isOpen && <div className="pb-5 text-gray-600 leading-relaxed">{answer}</div>}
</div>
```

### Search Input
```tsx
<div className="relative">
  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search..."
    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:border-[#038F8D] focus:ring-2 focus:ring-[#038F8D]/20 outline-none transition-colors"
  />
</div>
```

---

## Accessibility (WCAG 2.1 AA — Mandatory)

- Use semantic HTML (`<button>`, `<nav>`, `<main>`, `<section>`) — never `<div onClick>`
- All interactive elements keyboard-accessible with visible focus: `focus:ring-2 focus:ring-[#038F8D] focus:ring-offset-2 outline-none`
- ARIA on interactive components: `aria-expanded`, `aria-controls`, `aria-label`, `role`
- Images: meaningful `alt` text; decorative images use `alt=""` + `aria-hidden="true"`
- Forms: `<label htmlFor>` on every input
- Text contrast minimum 4.5:1 (large text 3:1)
- Touch targets minimum 44×44px on mobile

---

## Performance

- All images via `next/image` with explicit `width` + `height`
- Above-fold images: `priority` prop; below-fold: `loading="lazy"`
- Heavy/client-only components: `dynamic(() => import(...), { ssr: false })`
- Static pages: `getStaticProps` + `revalidate`; dynamic data: `getServerSideProps`

---

## Redesign Protocol

When an RP says "redesign": **delete the old file entirely and build fresh.** Do not preserve, patch, or update old code. Keep the same route. Remove any external redirects and replace with the new internal page.

---

## Pre-Delivery Checklist

Run before marking **any** component or page complete.

**Code quality**
- [ ] TypeScript types on all props, state, and async return values — no untyped `any`
- [ ] Error handling on all `fetch` calls (`response.ok` check + catch + finally)
- [ ] Only Tailwind classes — no inline styles (except dynamic values), no CSS modules
- [ ] No console errors or warnings

**Design & brand**
- [ ] Hero: 65px title / 18px description / 14px uppercase button text
- [ ] Non-hero sections: 35px title / 18px description
- [ ] Brand color `#038F8D` used correctly; hover `#027573`
- [ ] SVG icons only (Lucide React) — zero emojis as icons
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with `transition-*` (150–300ms)
- [ ] Matches design reference pixel-perfect

**Accessibility**
- [ ] Semantic HTML; no `<div onClick>`
- [ ] ARIA attributes on accordions, modals, dropdowns
- [ ] Keyboard navigable; visible focus rings
- [ ] All images have `alt` text

**Responsiveness**
- [ ] Tested at 375px / 768px / 1024px / 1440px
- [ ] No horizontal scroll at any breakpoint
- [ ] `prefers-reduced-motion` respected

**Images & performance**
- [ ] All images via `next/image` with `width` + `height`
- [ ] Above-fold images have `priority`

**Workflow**
- [ ] Spec agreed before coding started
- [ ] Failing test written before implementation
- [ ] Code review completed before merge

---

## Absolute Don'ts

1. No `any` type without documented reason
2. No inline styles for static values
3. No CSS Modules / Styled Components / Emotion
4. No hardcoded content that belongs in data files
5. No class components
6. No direct state mutation (`setItems([...items, x])` not `items.push(x)`)
7. No async calls without error handling
8. No non-reusable components
9. No coding before an agreed spec
10. No implementation before a failing test
11. No emojis as icons
12. Never push directly to `main`

---

## External Skills

| Skill | Install | Purpose |
|---|---|---|
| [Superpowers](https://github.com/obra/superpowers) | `/plugin install superpowers@superpowers-marketplace` | Dev workflow: brainstorm → plan → TDD → review → git |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | `npm i -g uipro-cli && uipro init --ai claude` | Design system gen, 67 UI styles, 96 palettes, anti-patterns |
| [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code) | Reference only | Curated skills, hooks, commands, and tooling index |