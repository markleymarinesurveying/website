# Design Guidelines for Markley Marine Surveying Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional maritime service websites that balance trust, expertise, and nautical aesthetics. The design should convey reliability and professionalism while maintaining visual appeal.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Navy: 220 85% 15% (primary brand color)
- Ocean Blue: 210 75% 45% (secondary)
- Maritime White: 200 10% 98% (backgrounds)

**Supporting Colors:**
- Charcoal Gray: 220 15% 25% (text)
- Light Gray: 220 10% 85% (borders, subtle backgrounds)
- Success Green: 140 70% 40% (CTAs, positive indicators)

### B. Typography
**Primary Font**: Inter (Google Fonts) - clean, professional, highly readable
**Headings**: Inter Bold (600-700 weight)
**Body Text**: Inter Regular (400 weight)
**Accent Text**: Inter Medium (500 weight) for navigation and buttons

**Scale**:
- Hero Title: text-5xl (desktop) / text-3xl (mobile)
- Section Headers: text-3xl / text-2xl
- Subsections: text-xl / text-lg
- Body: text-base
- Captions: text-sm

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, and 16 consistently
- Small gaps: space-y-4, p-4
- Medium sections: py-8, px-8
- Large sections: py-16, px-12
- Container max-width: max-w-7xl with mx-auto

### D. Component Library

**Navigation**: Sticky header with logo left, nav center, phone number right. Mobile hamburger menu with slide-out drawer.

**Buttons**: 
- Primary: Deep navy background with white text
- Secondary: Outline variant with navy border on maritime white/transparent backgrounds
- CTA: Success green for quote requests

**Cards**: Clean white backgrounds with subtle shadows (shadow-md), rounded corners (rounded-lg), and navy accent borders.

**Forms**: Clean inputs with focus states in ocean blue, proper spacing, and clear validation states.

**Gallery**: Grid layout with hover overlays showing vessel details, filterable by survey type.

### E. Visual Treatments

**Gradients**: Subtle navy to ocean blue gradients for hero overlays and section backgrounds. Use sparingly for accent elements.

**Maritime Elements**: Incorporate subtle nautical touches like anchor icons, wave patterns in dividers, and compass rose elements as decorative accents.

**Professional Photography**: High-quality vessel imagery should dominate visual hierarchy.

## Images

**Hero Image**: Large, full-width hero image featuring a professional yacht or boat survey in progress, with surveyor visible. Overlay with semi-transparent navy gradient (opacity-60) for text readability.

**Service Cards**: Square aspect ratio images (365x365px) showing different types of vessels being surveyed - center console boats, sailboats, yachts.

**Gallery**: Diverse collection of surveyed vessels in various settings - marina shots, on-water photography, detail shots of equipment and inspections.

**Certification Logos**: SAMS, ABYC, and Chapman School logos prominently displayed in footer and about section.

**Background Treatments**: Subtle maritime textures or patterns for section dividers, keeping focus on content and imagery.

## Key Design Principles

1. **Trust Through Professionalism**: Clean layouts, consistent spacing, and high-quality imagery establish credibility
2. **Maritime Identity**: Nautical color scheme and subtle maritime elements without being overly themed
3. **Mobile-First Responsiveness**: Ensure seamless experience across all devices
4. **Clear Hierarchy**: Strong typographic scale and strategic use of white space guide user attention
5. **Conversion Focus**: Prominent phone numbers and quote request forms throughout the experience

The design should feel like a modern, trustworthy marine service website that boat owners would confidently choose for their surveying needs.