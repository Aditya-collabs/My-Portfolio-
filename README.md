# Aditya Yadav - Full Stack Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, interactive portfolio showcasing my work as a Full Stack (MERN) Developer.

## Live Demo
*[Insert Live URL Here]*

## Features
- **Interactive UI**: Windows/macOS inspired window management and file explorer.
- **Dark/Light Mode**: Smooth theme toggling with CSS variables.
- **Live Clock**: Real-time clock updating accurately based on the user's timezone.
- **Component-Driven**: Built with React and structured for scalability.
- **Responsive Design**: Adapts beautifully to mobile, tablet, and desktop screens.
- **Performance Optimized**: Lazy-loaded assets and semantic HTML for fast rendering.

## Tech Stack
- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Vanilla CSS with modern Flexbox/Grid layouts
- **Tooling**: Oxlint (Linting)
- **Deployment**: [Platform Name, e.g., Vercel / Netlify]

## Folder Structure
```
inspired-portfolio/
├── public/                 # Static assets (robots.txt, favicon)
├── src/
│   ├── assets/             # Images, PDFs, SVGs
│   ├── components/         # Reusable React components (Header, Footer, Modal)
│   ├── App.tsx             # Main application layout and grid
│   ├── App.css             # Component-specific styles
│   ├── index.css           # Global variables and resets
│   └── main.tsx            # Application entry point
├── .env.example            # Environment variables template
├── .gitignore              # Ignored files for git
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Screenshots
*(Add screenshots of the portfolio here once deployed)*
![Portfolio Preview Placeholder](https://via.placeholder.com/800x450.png?text=Portfolio+Preview)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aditya-collabs/My-Portfolio-.git
   cd inspired-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Environment Variables
To run this project, you will need to add the environment variables. See `.env.example` for the required structure.
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

## Running Locally
Start the Vite development server:
```bash
npm run dev
```

## Build Commands
To build the project for production:
```bash
npm run build
```
This will compile TypeScript and generate a `dist` folder.

To preview the production build locally:
```bash
npm run preview
```

## Performance Optimizations
- **Image Loading**: Implemented `loading="lazy"` on all heavy images to improve Initial Page Load.
- **Component Splitting**: Extracted complex logic into isolated components to reduce unnecessary re-renders in the main `App.tsx`.
- **CSS Variables**: Utilized CSS custom properties for instant theme switching without JavaScript overhead.

## Accessibility
- Added `aria-label` tags to interactive elements like buttons and theme togglers.
- Ensured semantic HTML structure (`<header>`, `<main>`, `<footer>`).
- Implemented high-contrast modes for better readability.

## Future Improvements
- [ ] Add a functional contact form with backend integration.
- [ ] Implement a CMS (like Sanity or Strapi) to manage projects and experience dynamically.
- [ ] Add 3D elements (Three.js) for an even more interactive experience.

## Contributing
Contributions are always welcome! See `CONTRIBUTING.md` for ways to get started.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## Author
**Aditya Yadav**
- GitHub: [@Aditya-collabs](https://github.com/Aditya-collabs)
- LinkedIn: [Aditya Yadav](https://www.linkedin.com/in/aditya-yadav-70454831b)
