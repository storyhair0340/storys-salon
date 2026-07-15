# Design Tokens — extracted from tedy.app (getComputedStyle, 2026-07-06)

## Typography (Montreal Neue → Pretendard Variable for Korean)
- H1 display: 85px / 86.7px (1.02), weight 500, letter-spacing -1.7px (-0.02em), color ink
- Section display (h2): ~64px / 1.05, weight 500, ls -0.02em
- Card title (h3): 27.52px / 26.4px, weight 500, ls -1.24px
- Eyebrow label: 12.16px, weight 600, uppercase, ls +1.46px (0.12em), color ink/46
- Body: 16px / 24px, weight 400; muted body = ink/60, secondary = ink/72
- Root font-size 16px

## Colors
- Ink (text/bg dark): rgb(3, 7, 18) #030712; opacities: 72%, 60%, 46%
- Surface: #FFFFFF
- Pink (primary CTA): rgb(253, 23, 116) #FD1774; glow shadow rgba(253,23,116,.6) 0 14px 35px -18px
- Hero card yellow: #FFF4D9
- Purple band / cards: #E5D6FF, #E7D6FF
- Quote card pastels: purple #EBD8FF, cream #FFF1CD, green #E3F7D6, pink #FFDCEA, blue #DDF5FB
- Category chip pastels: green #EAF8DB, blue #DDF5FB, yellow #FFF1CD, purple #EBD8FF, pink #FFDCEA
- Neutral photo cards: #F4EFE9, #ECE8E1
- Border: #E5E7EB; muted gray text #6B7280
- Footer stage: #020202
- Check circle green: #EAF8DB bg + green check; blue variant #DDF5FB

## Radii
- Large feature cards: 2.8rem (44.8px)
- Purple full band: rounded-t-[3rem] (48px top)
- Quote cards: 1.9rem (30.4px)
- Testimonial shell: rounded-t-[3.6rem] (57.6px)
- Footer stage: 2rem (32px), inner glass card ~2.5rem
- Buttons: 999px pill
- Photos: 1.5–2rem

## Buttons (computed)
- Primary pink: bg #FD1774, white, radius 999px, padding 10px 18px, 14px w400 (hero variant 14px 20px, 15.2px)
- Secondary white: bg #fff, ink, border 1px #E5E7EB, padding 10px 18px, 14px w500
- Dark: bg #000, white, same pill metrics
- Hover: slight darken + translateY(-1px), transition ~200ms ease

## Layout rhythm
- Section horizontal padding: 24px (px-6); content max-width 1200–1440px
- Section bottom padding: 80–96px (pb-20/pb-24); purple band py 96px
- Header: white, h-80px, logo left / nav center / actions right (lang pill, pink CTA, black pill)
- Hero: 2-col — rounded yellow card (left, ~55%) + bento photo grid (right: one tall + two stacked)
- Footer: black rounded stage inset 24px from edges, blurred glass inner card, centered white display text

## Behaviors (observed)
- Scroll: elements fade-up + translateY on viewport entry (IntersectionObserver, stagger children)
- Logo marquee: infinite horizontal loop, grayscale logos, pause N/A
- Testimonials: stacked cards, each sticky under the previous (position: sticky, increasing top offset) — cards overlap as you scroll
- Floating category chips: scattered absolute-positioned photo chips with pastel label pills, subtle float
- Buttons hover: darken + lift; header static (scrolls away, not sticky)
- Interaction model: page is scroll-driven reveal; no tabs
