# Planning Guide

A multi-page website featuring Aibomi ApS's company landing page and a dedicated marketing site for their mobile app 7Plates, including legal documentation pages for privacy policy and terms of use.

**Experience Qualities**:
1. **Airy** - Generous white space and breathing room make the page feel uncluttered and calm, like walking into a well-designed Scandinavian home
2. **Professional** - Crisp typography and structured layouts convey expertise and reliability without unnecessary decoration
3. **Approachable** - Soft rounded corners and warm accent colors create an inviting atmosphere that balances professionalism with warmth

**Complexity Level**: Light Application (multiple features with basic state)
This is a multi-page website with client-side routing featuring: a company landing page, a product landing page for 7Plates mobile app, and legal documentation pages (Privacy Policy and Terms of Use) - primarily static content with navigation between pages and a contact form.

## Essential Features

### Page Routing
- **Functionality**: Client-side navigation between different pages (Home, 7Plates, Privacy, Terms)
- **Purpose**: Enable users to navigate between different sections of the website without full page reloads
- **Trigger**: User clicks on navigation links
- **Progression**: User clicks link → Route changes → New page loads instantly with smooth transitions
- **Success criteria**: All routes work correctly, navigation feels instant, URL updates properly, back/forward browser buttons work

### Home Page (Aibomi ApS Landing)
- **Functionality**: Introduces Aibomi ApS and their core value proposition with services and contact form
- **Purpose**: Communicate company identity and enable client inquiries
- **Trigger**: User visits root URL or clicks "Aibomi" logo
- **Progression**: User lands on page → Reads company info → Views services → Contacts via form
- **Success criteria**: Clear company messaging, working contact form, professional appearance

### 7Plates Landing Page
- **Functionality**: Marketing page for 7Plates meal planning app with features, benefits, stats, and download CTAs
- **Purpose**: Convert visitors into app downloads by showcasing value proposition
- **Trigger**: User navigates to /7plates
- **Progression**: User arrives → Reads hero message → Views features → Sees benefits → Clicks download button
- **Success criteria**: Compelling value proposition, clear feature display, prominent download buttons, engaging visuals

### Privacy Policy Page
- **Functionality**: Displays comprehensive privacy policy for 7Plates app
- **Purpose**: Legal compliance and user transparency about data practices
- **Trigger**: User clicks Privacy Policy link in 7Plates footer
- **Progression**: User clicks link → Navigates to policy page → Reads legal content → Can return to main site
- **Success criteria**: Easy to read, properly formatted legal text, clear navigation back to app page

### Terms of Use Page
- **Functionality**: Displays comprehensive terms of use for 7Plates app
- **Purpose**: Legal protection and clear user agreements
- **Trigger**: User clicks Terms of Use link in 7Plates footer
- **Progression**: User clicks link → Navigates to terms page → Reads legal content → Can return to main site
- **Success criteria**: Easy to read, properly formatted legal text, clear navigation back to app page

### Navigation System
- **Functionality**: Consistent navigation between pages with logo links and footer links
- **Purpose**: Enable easy movement throughout the site
- **Trigger**: User clicks navigation elements
- **Progression**: User identifies nav element → Clicks → Page changes smoothly
- **Success criteria**: Navigation present on all pages, links work correctly, active page indicated

## Edge Case Handling

- **Empty form submission**: Prevent submission and highlight required fields with gentle error states
- **Invalid email format**: Show inline validation error below email field
- **Form submission failure**: Display friendly error message with retry option
- **Long message content**: Textarea expands appropriately, enforces reasonable character limit
- **Mobile viewport**: All pages responsive, forms stack vertically, touch-friendly buttons (min 44px)
- **Slow network**: Show loading state on submit button, prevent double submission
- **Direct URL access**: All routes accessible via direct URL, proper 404 handling
- **Browser back button**: Navigation history works correctly, state preserved
- **Missing legal content**: Placeholder text shown until actual legal documents provided
- **Footer navigation**: Legal links only visible on 7Plates pages, not on Aibomi home page

## Design Direction

The design should evoke feelings of **calm professionalism**, **trustworthiness**, and **modern Nordic simplicity** for the Aibomi corporate pages. Think of a sunlit Copenhagen office with clean lines, natural materials, and thoughtful space.

For the 7Plates app pages, the design should feel **vibrant and health-focused** while maintaining professionalism - evoking feelings of **wellness**, **organization**, and **culinary excitement**. The pages should feel effortless and unintimidating - technology made human, food made simple.

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
  - `Button`: Download CTAs on 7Plates page, form submission on Home, with variant styles
  - `Input`: Text inputs for name and email fields with clean borders and focus states
  - `Textarea`: Message field with auto-resize capability
  - `Label`: Form field labels with proper association
  - `Card`: Service showcase cards on Home, feature cards on 7Plates with subtle shadows and hover states
  - `Separator`: Thin horizontal dividers between sections on all pages
  - React Router: `BrowserRouter`, `Routes`, `Route`, `Link` for navigation
  
- **Customizations**:
  - Hero sections on both Home and 7Plates with centered layouts and generous vertical padding
  - Sticky navigation bar on 7Plates pages with logo links
  - Service/feature cards in responsive grids (3-4 columns desktop, 1 column mobile)
  - Legal document pages with prose-style typography and readable line lengths
  - Custom form layout with proper spacing and validation states
  - Icons from @phosphor-icons/react with thin weight for Scandinavian aesthetic
  - App store button styling for iOS/Android download CTAs
  
- **States**:
  - Buttons: Default (solid colors), Hover (slight scale + deeper shadow), Active (pressed state), Disabled (reduced opacity during form submission)
  - Inputs: Default (light border), Focus (blue ring, no harsh outline), Error (subtle red border + error text below)
  - Cards: Default (subtle shadow), Hover (elevated shadow + slight translate up)
  - Links: Default (colored), Hover (color change with smooth transition), Active (underline or bold)
  - Navigation: Active page indicated by logo/link styling
  
- **Icon Selection**:
  - Use Phosphor icons with `weight="thin"` for delicate line work
  - Aibomi page: `Brain`, `AppWindow`, `DeviceMobile`, `PaperPlaneTilt`, `EnvelopeSimple`
  - 7Plates page: `CookingPot`, `Heart`, `Clock`, `Star`, `Users`, `ChartLine`, `CheckCircle`, `AppleLogo`, `GooglePlayLogo`
  - Navigation: `ArrowLeft` for back buttons
  
- **Spacing**:
  - Section padding: `py-20 md:py-32` for main sections, `py-12 md:py-20` for legal pages
  - Container max-width: `max-w-6xl` (main pages), `max-w-4xl` (legal/content pages)
  - Grid gaps: `gap-8` for feature/service cards
  - Form field spacing: `space-y-6` 
  - Micro-spacing: `gap-4` for related elements, `gap-2` for icon+text pairs
  - Navigation padding: `py-4` for navbar
  
- **Mobile**:
  - Hero headlines scale down appropriately on mobile (text-4xl → text-5xl → text-6xl)
  - Feature/service grids collapse to single column with responsive classes
  - Forms maintain full width with proper touch targets
  - Download button groups stack vertically on mobile (flex-col sm:flex-row)
  - Navigation maintains sticky position, logo links remain accessible
  - Legal content maintains readable line length with proper padding
