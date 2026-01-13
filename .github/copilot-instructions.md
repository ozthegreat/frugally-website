# Copilot Instructions for Frugally Website

## Project Overview

This is the marketing and documentation website for **Frugally for Slack** - a cloud cost optimization tool. The site is built with Docusaurus 3.x and deployed to https://frugally.app.

## Tech Stack

- **Framework**: Docusaurus 3.8.x (static site generator)
- **Frontend**: React 19.x, MDX
- **Styling**: CSS Modules, custom CSS
- **Syntax Highlighting**: Prism React Renderer
- **Deployment**: GitHub Pages (gh-pages branch)

## Project Structure

```
/
├── docs/           # Documentation pages (Markdown/MDX)
│   ├── getting-started/   # Onboarding guides
│   ├── faqs/              # Frequently asked questions
│   ├── billing/           # Payment and billing info
│   └── advanced/          # Advanced configuration
├── blog/           # Blog posts (Markdown/MDX)
├── src/
│   ├── components/ # React components
│   ├── css/        # Global styles
│   └── pages/      # Static pages (pricing, about, etc.)
├── static/         # Static assets (images, robots.txt)
└── docusaurus.config.js  # Main configuration
```

## Common Commands

```bash
npm start          # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm run serve      # Serve production build locally
npm run clear      # Clear Docusaurus cache
```

## Guidelines

### Documentation

- Documentation files are in `/docs/` as Markdown or MDX
- Each folder has a `_category_.json` for sidebar configuration
- Use frontmatter for page metadata (title, sidebar_position, etc.)
- Keep docs concise and user-focused

### Components

- React components live in `/src/components/`
- Use CSS Modules for component-specific styles (`styles.module.css`)
- Follow existing patterns for new components

### Styling

- Global styles are in `/src/css/custom.css`
- Primary brand color is defined in CSS custom properties
- Dark mode is currently disabled

### Pages

- Static pages (pricing, terms, privacy) are in `/src/pages/`
- Can be `.js`, `.jsx`, `.md`, or `.mdx` files
- URL path matches filename (e.g., `pricing.md` → `/pricing`)

### Content Guidelines

- Target audience: DevOps engineers, platform teams, developers
- Focus on AWS cloud cost optimization via Slack
- Keep language professional but approachable
- Include practical examples where helpful

## Important Notes

- Site is served from custom domain: frugally.app (see CNAME file)
- GitHub organization: ozthegreat
- Repository: frugally-website
- Node.js 16.14+ required
