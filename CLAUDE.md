# CLAUDE.md - Project Instructions for Claude

## Project Summary

Frugally Website - Marketing and documentation site for Frugally for Slack, a cloud cost optimization tool. Built with Docusaurus 3.8.x, React 19.x, and deployed to https://frugally.app via GitHub Pages.

## Quick Reference

```bash
# Development
npm start          # Start dev server at localhost:3000
npm run build      # Production build to /build
npm run serve      # Preview production build
npm run clear      # Clear cache (useful for debugging)
```

## Architecture

- **Docusaurus 3.8.x** - Static site generator
- **React 19.x** - UI components
- **MDX** - Enhanced Markdown with JSX support
- **CSS Modules** - Scoped component styling
- **Prism** - Code syntax highlighting

## Directory Layout

```
docs/              → Documentation (Markdown/MDX)
  getting-started/ → Setup and onboarding
  faqs/            → Common questions
  billing/         → Payment information
  advanced/        → IAM roles, scheduling, tags
blog/              → Blog posts
src/components/    → React components with CSS Modules
src/pages/         → Static pages (pricing, terms, etc.)
src/css/           → Global CSS (custom.css)
static/img/        → Images and assets
```

## Key Files

- `docusaurus.config.js` - Main site configuration (navbar, footer, theme)
- `sidebars.js` - Documentation sidebar structure
- `src/css/custom.css` - Global styles and CSS variables
- `CNAME` - Custom domain configuration (frugally.app)

## Conventions

### Documentation
- Place docs in `/docs/` with `.md` or `.mdx` extension
- Use `_category_.json` in folders for sidebar grouping
- Frontmatter example:
  ```yaml
  ---
  title: Page Title
  sidebar_position: 1
  ---
  ```

### Components
- Create in `/src/components/ComponentName/`
- Use `index.js` or `ComponentName.jsx` for main file
- Use `styles.module.css` for scoped styles

### Pages
- Add to `/src/pages/` - filename becomes URL path
- Support: `.js`, `.jsx`, `.md`, `.mdx`

## Gotchas

- Dark mode is disabled in theme config
- `editUrl` in docusaurus.config.js still points to Facebook's template - update if enabling edit links
- Blog posts require valid date prefix in filename (YYYY-MM-DD)

## Domain & Deployment

- Production URL: https://frugally.app
- Deployment: GitHub Pages (gh-pages branch)
- Organization: ozthegreat
- Run `npm run deploy` for deployment

## Context

Frugally is a Slack app for AWS cloud cost optimization. The documentation covers:
- Setting up IAM roles for AWS access
- Adding and managing AWS resources
- Creating schedules for resource management
- Viewing usage, bills, and savings
