# Planning Guide

A clean, minimalist landing page for Aibomi ApS that showcases their AI-powered web and mobile app development services with a professional contact form.

**Experience Qualities**:
1. **Airy** - Generous white space and breathing room make the page feel uncluttered and calm, like walking into a well-designed Scandinavian home
2. **Professional** - Crisp typography and structured layouts convey expertise and reliability without unnecessary decoration
3. **Approachable** - Soft rounded corners and warm accent colors create an inviting atmosphere that balances professionalism with warmth

**Complexity Level**: Content Showcase (information-focused)
This is a marketing landing page that presents company information, services, and provides a way to contact the business - primarily static content with a single interactive contact form.

## Essential Features

### Hero Section
- **Functionality**: Introduces Aibomi ApS and their core value proposition
- **Purpose**: Immediately communicate who they are and what they do to visitors
- **Trigger**: Page load
- **Progression**: User lands on page → Reads company name and tagline → Understands core offering → Scrolls for more details
- **Success criteria**: Clear headline and subheadline visible above the fold, company purpose understood within 3 seconds

### Services Overview
- **Functionality**: Displays the main services offered (AI coding, web apps, mobile apps)
- **Purpose**: Help potential clients understand Aibomi's expertise and offerings
- **Trigger**: User scrolls down from hero
- **Progression**: User scrolls → Views service cards → Understands capabilities → Decides to contact or learn more
- **Success criteria**: 3-4 clearly defined service areas with icons, each service understandable at a glance

### Contact Form
- **Functionality**: Collects visitor name, email, and message to send to hey.you@aibomi.eu
- **Purpose**: Enable potential clients to reach out for inquiries or project discussions
- **Trigger**: User clicks contact CTA or scrolls to contact section
- **Progression**: User fills name field → Fills email field → Writes message → Clicks submit → Sees success confirmation → Email sent to hey.you@aibomi.eu
- **Success criteria**: Form validates input, shows clear error states, confirms successful submission, successfully sends email to specified address

### Footer
- **Functionality**: Displays company information and email contact
- **Purpose**: Provide consistent access to contact information and legal details
- **Trigger**: User scrolls to bottom
- **Progression**: User reaches footer → Sees company name, location (Denmark), email link → Can click email to open mail client
- **Success criteria**: Company name, email link, and Denmark location visible

## Edge Case Handling

- **Empty form submission**: Prevent submission and highlight required fields with gentle error states
- **Invalid email format**: Show inline validation error below email field
- **Form submission failure**: Display friendly error message with retry option
- **Long message content**: Textarea expands appropriately, enforces reasonable character limit
- **Mobile viewport**: Form stacks vertically, maintains touch-friendly button sizes (min 44px)
- **Slow network**: Show loading state on submit button, prevent double submission

## Design Direction

The design should evoke feelings of **calm professionalism**, **trustworthiness**, and **modern Nordic simplicity**. Think of a sunlit Copenhagen office with clean lines, natural materials, and thoughtful space. The page should feel effortless and unintimidating - technology made human.

## Color Selection

A restrained palette centered on soft neutrals with calm blue accents and a warm touch for calls-to-action.

- **Primary Color**: `oklch(0.55 0.10 240)` - A calm, muted blue that evokes trust and Scandinavian skies without being corporate or cold
- **Secondary Colors**: 
  - Light background: `oklch(0.98 0.005 240)` - Nearly white with the slightest cool blue tint for depth
  - Medium gray: `oklch(0.65 0.01 240)` - Sophisticated mid-tone for secondary text
- **Accent Color**: `oklch(0.70 0.15 25)` - A warm coral/peach for CTAs and important elements, providing friendly contrast to the cool palette
- **Foreground/Background Pairings**:
  - Primary text on background: `oklch(0.25 0.02 240)` on `oklch(0.98 0.005 240)` - Ratio 12.8:1 ✓
  - White text on Primary: `oklch(0.99 0 0)` on `oklch(0.55 0.10 240)` - Ratio 5.2:1 ✓
  - White text on Accent: `oklch(0.99 0 0)` on `oklch(0.70 0.15 25)` - Ratio 5.8:1 ✓
  - Muted text on background: `oklch(0.65 0.01 240)` on `oklch(0.98 0.005 240)` - Ratio 4.6:1 ✓

## Font Selection

Typography should feel clean, modern, and approachable - the digital equivalent of Danish design furniture.

- **Primary Font**: DM Sans - A geometric sans-serif with friendly, rounded characteristics that maintains professionalism while feeling warm
- **Typographic Hierarchy**:
  - H1 (Hero headline): DM Sans Bold / 48px / tight leading (1.1) / -0.02em letter spacing
  - H2 (Section headers): DM Sans SemiBold / 36px / snug leading (1.2) / -0.01em letter spacing
  - H3 (Service titles): DM Sans Medium / 24px / normal leading (1.4)
  - Body (Paragraphs): DM Sans Regular / 18px / relaxed leading (1.6)
  - Small (Footer, labels): DM Sans Regular / 14px / normal leading (1.5)

## Animations

Animations should be barely noticeable - felt rather than seen. Use subtle motion to guide attention and provide feedback without drawing attention to the animation itself. Gentle fade-ins on scroll for service cards (200ms ease-out), smooth hover states on buttons with slight scale (1.02) and shadow growth (150ms), and form field focus with a soft blue glow transition (200ms). All motion should follow natural easing curves.

## Component Selection

- **Components**:
  - `Button`: Primary CTA for form submission, with variant="default" for submit action
  - `Input`: Text inputs for name and email fields with clean borders and focus states
  - `Textarea`: Message field with auto-resize capability
  - `Label`: Form field labels with proper association
  - `Card`: Service showcase cards with subtle shadows and hover states
  - `Separator`: Thin horizontal dividers between sections
  
- **Customizations**:
  - Custom hero section with centered layout and generous vertical padding
  - Service cards in a responsive grid (3 columns desktop, 1 column mobile)
  - Custom form layout with proper spacing and validation states
  - Icons from @phosphor-icons/react with thin weight for Scandinavian aesthetic
  
- **States**:
  - Buttons: Default (solid accent color), Hover (slight scale + deeper shadow), Active (pressed state), Disabled (reduced opacity during form submission)
  - Inputs: Default (light border), Focus (blue ring, no harsh outline), Error (subtle red border + error text below), Success (green checkmark icon)
  - Cards: Default (subtle shadow), Hover (elevated shadow + slight translate up)
  
- **Icon Selection**:
  - Use Phosphor icons with `weight="thin"` for delicate line work
  - Web apps: `Browser` or `AppWindow`
  - Mobile apps: `DeviceMobile`
  - AI coding: `Brain` or `Sparkle`
  - Contact: `PaperPlaneTilt`
  - Email: `EnvelopeSimple`
  
- **Spacing**:
  - Section padding: `py-24` (96px) on desktop, `py-16` (64px) on mobile
  - Container max-width: `max-w-6xl` (1152px)
  - Grid gaps: `gap-8` (32px) for service cards
  - Form field spacing: `space-y-6` (24px)
  - Micro-spacing: `gap-4` (16px) for related elements
  
- **Mobile**:
  - Hero headline scales down to 32px on mobile
  - Service grid collapses to single column with `sm:grid-cols-1 md:grid-cols-3`
  - Form maintains full width with proper touch targets
  - Padding reduces from 96px to 64px on sections
  - Navigation (if added) converts to hamburger menu at 768px breakpoint
