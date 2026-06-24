---
name: frontend
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
---

# Frontend Design

Approach this as the design lead at a small studio known for giving every client a visual identity that could not be mistaken for anyone else's. This client has already rejected proposals that felt templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take one real aesthetic risk you can justify.

## Technology Stack
1. **Core**: Use HTML for structure and Javascript for logic.
2. **Styling (CSS)**: Use Vanilla CSS for maximum flexibility and control. Avoid using TailwindCSS unless explicitly requested.
3. **Web App**: If a more complex web app is requested, use a framework like Next.js or Vite.
4. **Running Locally**: When running locally, use `npm run dev` or equivalent dev server.

## Design Aesthetics
1. **Use Rich Aesthetics**: The design must WOW at first glance. Use best practices in modern web design (e.g. vibrant colors, dark modes, glassmorphism, and dynamic animations) to create a stunning first impression.
2. **Prioritize Visual Excellence**:
    - Avoid generic colors (plain red, blue, green). Use curated, harmonious color palettes (e.g., HSL tailored colors, sleek dark modes).
    - Use modern typography (e.g., from Google Fonts like Inter, Roboto, or Outfit) instead of browser defaults.
    - Use smooth gradients.
    - Add subtle micro-animations for enhanced user experience.
3. **Use a Dynamic Design**: An interface that feels responsive and alive encourages interaction. Achieve this with hover effects and interactive elements.
4. **Premium Designs**: Make a design that feels premium and state of the art. Avoid simple MVPs.
5. **No Placeholders**: If you need an image, generate one or use a real demonstration.

## Implementation Workflow
1. **Plan and Understand**: Outline features and draw inspiration.
2. **Build the Foundation**: Start with `index.css` and a core design system.
3. **Create Components**: Build reusable components with predefined styles.
4. **Assemble Pages**: Incorporate design, routing, and responsive layouts.
5. **Polish and Optimize**: Review UX, interactions, and performance.

## SEO Best Practices
Automatically implement SEO best practices on every page:
- **Title Tags**: Descriptive title tags.
- **Meta Descriptions**: Compelling summaries.
- **Heading Structure**: Single `<h1>` per page.
- **Semantic HTML**: HTML5 elements.
- **Unique IDs**: For interactive elements.
- **Performance**: Fast page load times.
