# PropFirmsTech - Design Brief

Figma Source: https://www.figma.com/design/NznlFQhEw6ohJU7oacFX6L/PropFirmstech.?node-id=2307-39

## Layout

- Desktop-first: 1440px wide, content area ~1158px (141px side margins)
- Single page, ~10646px tall
- Dark theme throughout

## Page Sections (top to bottom)

1. **Hero Section** (y:0, h:1024) - Full-width, grid background pattern, navbar + headline + CTA
2. **Hero 2 - Feature Cards** (y:1068, h:599) - 3x2 grid of feature cards + logo marquee
3. **Marketing Section (Stats)** (y:1767, h:1269) - Stats grid + platform showcase with checklist
4. **Features Section** (y:3136, h:1026) - "Features" pill label, 2x2 feature cards with images
5. **Integrations Section** (y:4262, h:560) - 4x2 grid of integration partner logos
6. **How It Works** (y:4902, h:1210) - Heading: "Automate payouts, enforce fair challenges & monitor all trades in real time - all from one white-label platform purpose-built for prop firms." Video embed (1040x684) with play button + award banner: "Prop Firms Tech has officially secured the title Best Prop Firm Tech Provider at the Funded Trading Awards -- two years in a row 2024 & 2025." + partner logo strip (6 logos with fade edges)
7. **Stand Out Section** (y:6232, h:569) - Left: person photo in decorative gradient card (blob-shine, arc vectors, noise texture, glow ellipses). Right: "How PropFirmsTech Stands Out?" heading + 3 accordion items with vertical progress bar (11px wide, active segment 133px of 431px)
8. **Testimonials** (y:6901, h:1812) - Masonry grid of testimonial cards + FAQ accordion
9. **Insights/Blog** (y:8813, h:749) - 3-column blog card grid
10. **Footer with CTA** (y:9662, h:984) - CTA banner + dark footer with links/socials

## Color Palette

- **Background**: Dark/near-black (#0A0A0A or similar deep dark)
- **Card backgrounds**: Slightly lighter dark with subtle borders
- **Primary accent**: Gradient pinks/purples (used in CTA backgrounds, glows)
- **Text primary**: White (#FFFFFF)
- **Text secondary**: Light gray (~#A0A0A0)
- **Borders**: Subtle white/gray at low opacity
- **CTA buttons**: Gradient or semi-transparent with border

## Typography

- **H1 (Hero)**: ~55px, bold, white
- **H2 (Section headings)**: ~55px, bold, white
- **H3 (Stats/Card titles)**: ~38px / ~25px bold
- **Body**: ~20px, light gray
- **Small/Labels**: ~18px, pill badges with borders
- **Nav links**: ~18px
- **Footer text**: ~20px

## Components

### Navbar
- Logo left (x:100), nav links center: Home | Affiliate Program | How it works | Features | Contact Us
- CTA button right: "Contact Us" (126x44)
- Glass/blur background effect (two overlapping rounded rectangles)

### Hero
- Grid dot background pattern (20x15 blocks ~109px) with radial gradient ellipse (948x991)
- Badge/Flag: "All In One Solution For Prop Firms" with arrow icon (287x32)
- Headline: "Power Your Prop Firm with our Cutting Edge Tech"
- Subtitle: "Launch your Prop Firm in just 14 days -- from setup to brand to scaling..."
- Right side: Avatar stack (5 overlapping 44px circles + plus icon) with "130+" / "Active Users"
- CTAs: "Book a Demo" (primary, 174x44) | "Learn More" (secondary, 154x44)
- Dashboard screenshot below (1158x824)

### Feature Card (small)
- Icon (24x30), title (~25px bold), description (~56px height)
- 3 per row, 2 rows, bordered card style
- 370x217px each

Row 1 titles/descriptions:
1. "Customised Plan & Rules" - "Tailor your trading environment to fit your strategy."
2. "Customised Plan & Rules" - "Optimize your workflow with seamless integration of management."
3. "Customised Plan & Rules" - "Streamline client relationships and operational processes with our CRM system."

Row 2 titles/descriptions:
4. "Customised Plan & Rules" - "Enhance regulatory compliance with automated Anti-Money Laundering."
5. "Customised Plan & Rules" - "Implement robust prop firm risk management solutions to safeguard your operations."
6. "Customised Plan & Rules" - "Offer your clients flexibility and convenience with a wide range of payment options."

Below cards: "Trusted by 50+ prop firms worldwide" + scrolling logo marquee (14+ client logos, duplicated for infinite scroll)

### Feature Card (large)
- Image background (568x400 or 1160x420)
- Title + description overlay
- "large-comet" decorative vector element

Card 1 - "Risk Intelligence": "Continuous, real-time checks detect and prevent threats."
  - Shows account list UI: #4876 Jay Anderson, statuses (Breached Account, Passed Account)
Card 2 - "PSPs & Payment Solutions": "Prop Firm Tech Accept Payments easily with Card & Crypto."
  - Shows payment grid: PayPal, Stripe, crypto icons with PropFirmsTech logo center
Card 3 (full width): Card Title/Subtitle placeholders, "Book a Demo" CTA, photo right side

### Stats Grid
- Heading: "Scale. Speed. Control."
- Description: "Production-proven performance for modern trading firms. Automation-first infrastructure, real-time risk oversight, and global scale backed by measurable results."
- CTA: "Book a Demo"
- 2 columns x 3 rows of stat items
- Large number (38px), label below (23px)
- Horizontal dividers between rows

Stats: $202M+ (Total partner revenue) | 45+ (Integrations) | 45K+ (Accounts created monthly) | 0M+ (Unique traders onboarded) | 42% (Of workflows fully automated) | 24/7 (Support coverage)

### Integration Logo Card
- Section heading: "Easy Built-In Integrations"
- Description: "Our solutions seamlessly integrate with a powerful suite of 13 essential tools and platforms, empowering you with comprehensive control over your business processes."
- Layout: heading left, description right (split 50/50)
- 282x~111px, centered logo, bordered card
- 4 per row, 2 rows
- Row 1: MetaTrader 5 | Match Trader | Sumsub | WooCommerce
- Row 2: Veriff | Stripe | Rise | Confirmo

### Testimonial Card
- Section heading: "Do Not just Take Our Word for It"
- Subheading: "See What Our Clients Have to Say About PropFirmsTech."
- Company logo top, quote text, author name + role
- Masonry layout: 3 columns, variable heights (~291-415px)

Testimonials:
1. Nick, CEO, @Nick - "PropFirmsTech is the backbone of our operations -- their platform sets the standard in the prop space, and their support is outstanding. Huge thanks to Nigel, Herman & the team -- we truly rely on you!"
2. Abdel, CEO, @Abdel - "The PropFirmsTech team is without exaggerating one of the best I've met so far. Really knowledgeable and always helpful. The tech itself never fails me and is customizable which is great in our industry!"
3. James, Co-Founder, @James - "PropFirmsTech changed the game for us. Fast setup, stable infra, and great support. Feels like they're part of our own team. Our CFD & futures business runs smoother than ever."
4. Long testimonial from Blueberry Funded about Axcera/PropFirmsTech scaling from startup to top 10 firm
5. Alex, CEO, @Alex - "Smart tech, no drama. PropFirmsTech made our workflows tighter and life easier, exactly what we needed."
6. Zain, CEO, @Zain - "With PropFirmsTech, we finally found a partner who gets it. Solid tech, fast delivery, and real people behind it. Running our futures & CFD setup has never felt this seamless."

### FAQ Accordion
- Left: "Frequently Asked Questions?" heading + "Answers to common questions about our services, processes, and what sets us apart." + "Read All Faqs" button (148x52)
- Right: expandable items (606px wide, 72px collapsed)
- Chevron down icon for expand/collapse

FAQ Items:
1. "How long does setup take?" (EXPANDED with answer)
2. "Do you offer risk management system?"
3. "What payout method do you offer?"
4. "What KYC solutions are available?"
5. "Can i customize my client dashboard?"

### Blog Card
- Section heading: "Do Not just Take Our Word for It"
- Subheading: "Explore the latest industry trends and best practices with our expert-driven Insights/Blog"
- Image top (373x380), title + description below, "Read More" link with arrow
- 3 per row, ~20px gap

All 3 cards identical content:
- Title: "PropFirmsTech November 2025"
- Description: "November 2025 was a milestone month for PropFirmsTech. The company received industry recognition as the year's best prop trading technology provider."

### CTA Banner
- Centered heading: "Section Title" (513px wide, placeholder)
- Description text (646px wide, placeholder)
- CTA: "Request A Demo" button with arrow icon (236x61)
- Decorative wave/chevron pattern vectors background
- Gradient rectangles overlay

### Footer
- Logo + email/registration info top bar
- Company description left, nav links + social icons right
- Social icons: Instagram, Facebook, YouTube, Telegram, X (Twitter)
- Copyright bar bottom with legal links

## Button Styles

- **Primary CTA**: Rounded, padding 24px horizontal, 12-18px vertical, text + arrow-right icon
- **Secondary/Outline**: Border only, similar padding
- **Pill/Tag**: Small rounded, ~38px height, used for section labels ("Features", "Our Platforms")

## Spacing Patterns

- Section vertical padding: ~120px
- Content max-width: 1158px (centered in 1440px)
- Card gaps: ~20-24px
- Inner card padding: ~20-34px

## Icons

- Arrow-right (used in CTAs and "Read More" links)
- Chevron down (FAQ accordion)
- Social icons (Instagram, Facebook, YouTube, Telegram, X)
- Checkmark circle (platform feature list)
- Flag icon (risk intelligence feature)

## Key Assets Needed

- Logo (PropFirmsTech wordmark + icon)
- Hero dashboard screenshot
- Feature section background images (4 images)
- Integration partner logos (8: MetaTrader 5, Match Trader, Sumsub, WooCommerce, Veriff, Stripe, Rise, Confirmo)
- Testimonial company logos (6)
- Blog post images (3)
- Award badge image
- Partner logo strip (6 logos)
- Client logo marquee (~14 logos, duplicated for infinite scroll)
