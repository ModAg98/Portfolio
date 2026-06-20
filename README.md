# Mohamed Agoubi - Portfolio

Professional portfolio website built with React and Vite, designed for company and client review.

This project presents:
- Personal profile and positioning
- Technical skills
- Project highlights
- Contact channels (LinkedIn, Gmail, Outlook)
- Dark/Light theme toggle
- EN/FR language switch

## Tech Stack

- React 18
- Vite 4
- Bootstrap 4 + jQuery + Popper.js
- Sass (SCSS support)
- Lightbox2
- Typed.js / react-typed
- Ionicons

## Features

- Responsive single-page portfolio
- Smooth section scrolling and navbar behavior
- Dark mode (default enabled, persisted in localStorage)
- Language switch (English/French, persisted in localStorage)
- Contact form integration via Formspree
- Social links in contact section

## Requirements

- Node.js 18+ recommended
- npm 9+ recommended

Check versions:

```bash
node -v
npm -v
```

## Installation

```bash
npm install
```

## Run In Development

```bash
npm run dev
```

Default local URL:
- http://localhost:5173

If port `5173` is busy, Vite may switch to another port automatically.

## Build For Production

```bash
npm run build
```

Output is generated in:
- `dist/`

## Preview Production Build Locally

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Project Structure

```text
src/
	components/
		navbar.jsx
		intro.jsx
		about.jsx
		portfolio.jsx
		contact.jsx
		preloader.jsx
		back-top.jsx
	img/
	index.js
	style.css
	animate.css
public/
index.html
vite.config.js
```

## Key Configuration Notes

### Bootstrap + jQuery

This project intentionally uses Bootstrap 4 JavaScript plugins.
In `src/index.js`, jQuery/Popper/Bootstrap JS are imported in the required order.

### Theme Management

- Dark mode is controlled by `data-theme` on the root element.
- Preference is stored in `localStorage` under `darkMode`.

### Language Management

- Language state is controlled at app level in `src/index.js`.
- Preference is stored in `localStorage` under `language`.

## Contact Form

Contact form posts to Formspree endpoint configured in:
- `src/components/contact.jsx`

Before production launch, verify:
- Formspree endpoint is active
- Destination inbox receives messages

## Customization Guide

### Update Personal Information

Edit these files:
- `src/components/intro.jsx`
- `src/components/about.jsx`
- `src/components/portfolio.jsx`
- `src/components/contact.jsx`

### Update Social Links

Edit social anchors in:
- `src/components/contact.jsx`

### Update Colors/Theme Styles

Edit:
- `src/style.css`

## Deployment

Any static hosting platform can deploy this project:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Nginx/Apache static hosting

Deployment steps are generally:
1. Run `npm run build`
2. Upload/publish `dist/`

## Troubleshooting

### 1. `Outdated Optimize Dep` or `504` in dev

```bash
rm -rf node_modules/.vite
npm run dev -- --force
```

### 2. Icons not visible

Ensure Ionicons CSS is imported in:
- `src/index.js`

### 3. Port conflict (5173 already used)

Run with explicit port:

```bash
npm run dev -- --port 5173 --force
```

### 4. Build passes but browser shows old UI

Hard refresh browser:
- `Ctrl+Shift+R`

## License

This repository is for personal portfolio and professional presentation use.
