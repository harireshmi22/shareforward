/hallmark redesign ./

Act as a senior product designer, UX architect, and frontend engineer.

I want you to completely redesign my existing project, ShareForward, using the actual "Dose" theme from the Hallmark theme library.

This is a FULL WEBSITE REDESIGN, not just a homepage redesign.

First inspect the complete codebase, identify all routes, pages, reusable components, styling files, authentication flows, APIs, and database integrations. Understand how the application currently works before changing anything.

IMPORTANT:
Find and use the actual Hallmark Dose theme implementation or its available reference files. Do not silently substitute another theme. If Dose cannot be found, explain what is missing.

==================================================
1. PRODUCT VISION AND BRAND IDENTITY
==================================================

Product name: ShareForward

Product concept:
ShareForward is a community-driven surplus-sharing platform that connects people and organizations with extra resources to verified NGOs that can distribute those resources to communities that need them.

People and businesses may have surplus:
- Food and groceries
- Clothes and winter essentials
- Books and educational materials
- Household essentials
- Other useful, reusable items

Verified NGOs can discover suitable resources, claim available listings, and coordinate collection.

The core mission is:

"Turn surplus into shared opportunity."

The product should communicate:
- Generosity
- Trust
- Sustainability
- Community
- Transparency
- Simplicity
- Real-world social impact

ShareForward should feel like a polished, premium social-impact startup, not a generic donation website or an ordinary e-commerce marketplace.

Create a coherent brand identity that makes the purpose understandable within five seconds of opening the homepage.

==================================================
2. DESIGN SYSTEM — HALLMARK DOSE
==================================================

Use the actual Hallmark Dose theme as the primary visual reference.

Preserve its defining visual characteristics:
- Warm, soft cream backgrounds
- Deep green typography
- Clean, spacious layouts
- Elegant typography
- Minimalist surfaces
- Rounded buttons with restrained shadows
- Subtle borders
- Carefully balanced whitespace
- A welcoming, premium appearance

Adapt these characteristics to ShareForward rather than copying the unrelated Tandem application shown in the Dose preview.

Preferred ShareForward colors:

Background: #F8F8F2
Primary green: #205C43
Deep green: #164832
Main text: #202923
Secondary text: #68756C
White surfaces: #FFFFFF
Borders: #E4E9E1
Soft green: #EAF3E9
Lime accent: #C5F36A
Urgency accent: #D97736

Use green for primary actions and brand identity.

Use lime sparingly for meaningful highlights.

Use orange only for genuine urgency, approaching expiration, or time-sensitive listings.

Keep the majority of the interface neutral and readable.

Reuse the actual Dose theme's typography, spacing, button styles, borders, and shadows where appropriate and compatible with the product.

Create reusable design tokens and consistent component styles.

Avoid:
- Full-page dark backgrounds
- Low-contrast text
- Excessive gradients
- Excessive glassmorphism
- Large decorative shadows
- Unnecessary animation
- Inconsistent card designs
- Oversized headings that dominate the interface
- Generic AI-generated landing-page patterns

==================================================
3. REDESIGN THE ENTIRE APPLICATION
==================================================

Inspect the existing project and redesign every relevant existing page and route, including the following wherever they exist.

A. PUBLIC HOMEPAGE
B. BROWSE LISTINGS PAGE
C. LISTING DETAILS PAGE
D. CREATE OR ADD LISTING PAGE
E. LOGIN AND REGISTRATION PAGES
F. DONOR DASHBOARD
G. NGO DASHBOARD
H. NGO CLAIMING WORKFLOW
I. USER PROFILE AND ACCOUNT SETTINGS
J. ABOUT PAGE
K. HOW IT WORKS PAGE
L. NOTIFICATIONS AND CLAIM STATUS PAGES
M. EMPTY, LOADING, ERROR, AND SUCCESS STATES

Do not create duplicate routes when equivalent pages already exist.

Do not invent pages that are incompatible with the existing architecture.

If a listed feature does not currently exist, identify it before deciding whether it should be added.

Every page should share the same visual language, navigation patterns, spacing system, typography, and component styles.

==================================================
4. HOMEPAGE — CREATE A MEMORABLE FIRST IMPRESSION
==================================================

Build a premium, editorial-style homepage inspired by the Dose theme.

NAVIGATION

Create a clean navigation bar with:

ShareForward logo

Home
Browse Resources
How It Works
About

Right side:
Log In
Get Started

Use a warm cream background, deep green text, restrained borders, and a clear primary button.

Preserve existing authentication and route behavior.

HERO SECTION

Use a balanced two-column desktop layout.

Eyebrow:
"GOOD THINGS DESERVE A SECOND HOME"

Main headline:
"Your extra can mean everything."

Supporting text:
"Share surplus food, clothes, and books with verified NGOs. Give useful resources a second life and help them reach the people who need them."

Primary CTA:
"Share a Resource"

Secondary CTA:
"Explore Available Resources"

Supporting trust line:
"Less waste. More sharing. Stronger communities."

On the right, create a visually engaging preview of the actual ShareForward platform.

Show realistic resource listing cards with:
- Category
- Resource name
- Quantity
- Location
- Availability
- Relevant expiry information

Use actual application data when available.

If the application has no listings, show a clear empty state or explicitly identified demo content.

Do not present fictional listings, NGO partnerships, or impact numbers as real.

The hero should feel welcoming, trustworthy, modern, and visually balanced.

Avoid excessive decorative graphics.

==================================================
5. RESOURCE DISCOVERY EXPERIENCE
==================================================

Redesign the Browse Resources page as a simple, modern community marketplace.

Include existing supported functionality for:
- Search
- Category filters
- Location filters
- Availability filters
- Listing cards
- Sorting, if already supported
- Pagination or loading more, if already supported

Use a clean card layout with consistent spacing.

Each card should communicate:
- What is available?
- How much is available?
- Where is it located?
- Is it still available?
- When must it be collected, if applicable?

Use appropriate category icons or existing listing images.

Create clear visual differences between available, claimed, expired, and unavailable listings.

Make search and filters easy to use on mobile.

Do not implement fake filtering that only changes the appearance without updating the actual displayed data.

==================================================
6. LISTING DETAILS AND CLAIM WORKFLOW
==================================================

Make each listing details page clear and trustworthy.

Show available information such as:
- Resource title and description
- Category
- Quantity and unit
- Location
- Expiration or collection deadline
- Donor information, subject to existing privacy rules
- Current listing status
- Claim instructions

Provide the appropriate action for the current user's role.

For eligible NGO users, show the existing claim action.

For donors, show relevant management actions permitted by the existing authorization rules.

After a claim, display the actual claim status and relevant next steps.

Include loading, validation, success, and error states.

Preserve backend validation and authorization.

Never allow a frontend-only check to replace server-side permission enforcement.

==================================================
7. DONOR EXPERIENCE
==================================================

Make sharing a resource feel simple and rewarding.

Where the existing application supports listing creation, organize the form into clear sections.

Suggested fields:
- Resource title
- Category
- Description
- Quantity and unit
- Location
- Collection deadline
- Expiration date where relevant
- Image upload if supported

Use helpful labels and concise instructions.

Make the form easy to complete on mobile.

Provide useful validation messages and a clear success state.

The primary action should be:
"Publish Resource"

Use conditional fields where appropriate.

For example, food listings may require food-specific expiry or handling information that would not apply to books.

Do not add unsupported fields that break existing API contracts.

==================================================
8. NGO DASHBOARD
==================================================

Where an NGO dashboard exists, redesign it into a focused workspace.

Prioritize:
- Relevant available resources
- Active claims
- Claim status
- Collection deadlines
- Recently viewed or saved listings, if supported
- Account verification status, if supported

Use clear status labels and a compact summary.

Avoid excessive charts or decorative statistics.

Every displayed number must come from real application data.

Keep the interface useful for an organization managing multiple resource claims.

==================================================
9. DONOR DASHBOARD
==================================================

Where a donor dashboard exists, prioritize:
- Published listings
- Active availability
- Claims received
- Collection status
- Completed handovers
- Expired or closed listings

Use a simple and readable overview.

Help users understand what action they need to take next.

Keep actions aligned with the application's existing permissions and functionality.

==================================================
10. BRANDING AND VISUAL DETAILS
==================================================

Develop a distinctive ShareForward wordmark treatment using the existing branding where available.

If the current logo is basic, refine it into a simple, recognizable identity.

A subtle circular-arrow, connected-path, or resource-sharing motif may be appropriate.

Do not use complicated gradients or an overly detailed symbol.

Use one consistent icon library if already installed.

Use consistent icons for:
- Food
- Clothing
- Books
- Household items
- Location
- Time
- Availability
- Verification
- Collection

Choose a consistent illustration style.

Use meaningful imagery rather than generic stock photos wherever possible.

==================================================
11. COPYWRITING AND CONTENT QUALITY
==================================================

Improve the interface copy throughout the website.

Use concise, human, helpful language.

Possible brand messages:

"Your extra can mean everything."

"Good things deserve a second home."

"Pass it forward. Put it to good use."

"Resources shared. Communities strengthened."

"Make room for good."

"Find what your community needs."

Use these messages selectively.

Avoid repeating the same slogan across every page.

Explain the process clearly:

1. Share a resource.
2. Connect with a verified NGO.
3. Coordinate collection.
4. Help useful resources reach people who need them.

Do not make unsupported claims about environmental impact, poverty reduction, verification, or platform success.

==================================================
12. RESPONSIVE DESIGN AND ACCESSIBILITY
==================================================

Make the complete application responsive.

Desktop:
Spacious layouts and balanced content widths.

Tablet:
Adaptive grids and comfortable spacing.

Mobile:
Stacked content, readable cards, accessible menus, and easy-to-tap buttons.

Prevent horizontal overflow.

Ensure forms and dashboards work on small screens.

Use semantic HTML, visible keyboard focus, accessible labels, and sufficient color contrast.

Respect reduced-motion preferences.

Do not rely on color alone to communicate status.

==================================================
13. TECHNICAL REQUIREMENTS
==================================================

Before implementing:
1. Inspect the complete repository.
2. Identify all application routes and existing pages.
3. Identify the framework, styling system, and dependencies.
4. Locate the actual Hallmark Dose theme references.
5. Understand existing APIs, data models, authentication, and role permissions.
6. Identify shared components and opportunities for reuse.
7. Prepare a concise implementation plan.

Then implement the redesign directly in the existing codebase.

Preserve:
- Existing framework
- Existing routes
- Existing backend
- API contracts
- Database integration
- Authentication
- User roles
- NGO permissions
- Listing creation and editing
- Claiming behavior
- Existing working features

Do not replace functional components with static mockups.

Do not hardcode fake statistics or real-world NGO partnerships.

Do not delete existing functionality simply to simplify the redesign.

Avoid unnecessary dependencies and unrelated refactoring.

If you discover missing functionality or broken existing behavior, report it clearly rather than silently inventing a replacement.

==================================================
14. IMPLEMENTATION AND VERIFICATION
==================================================

Do not stop after the homepage.

Redesign all relevant existing routes and shared components.

After implementation:
- Run available build and lint commands.
- Fix errors caused by the changes.
- Check desktop and mobile layouts.
- Check navigation and internal links.
- Test forms and validation.
- Verify listing data and category filters.
- Verify authentication and role-specific actions.
- Verify the NGO claim workflow.
- Check loading, empty, error, and success states.
- Confirm that no existing functionality has been unintentionally removed.

At completion, summarize:
1. Which pages were redesigned.
2. Which components and styles were updated.
3. Which Dose theme references were reused.
4. Which existing features were preserved.
5. Any outstanding bugs or incomplete features.

FINAL GOAL:

Transform ShareForward into a complete, polished, modern social-impact product using the actual Hallmark Dose theme.

The finished website should feel cohesive, trustworthy, minimalist, warm, and production-ready.

Prioritize excellent UX, clear content, consistent design, and real functionality over unnecessary visual effects.