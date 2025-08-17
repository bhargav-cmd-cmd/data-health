# DataPulse Frontend

A simple Next.js frontend for the DataPulse data analytics platform.

## Features

- 🚀 Simple and clean design
- 📱 Responsive layout
- 🎨 Tailwind CSS styling

## Tech Stack

- **Framework**: Next.js (Pages Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript

## Setup

1. Install Node.js and npm (if not already installed)

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Lint**: `npm run lint`

## Project Structure

```
datapulse-frontend/
├── pages/
│   ├── _app.js        # App wrapper
│   ├── _document.js   # Document wrapper
│   └── index.js       # Home page
├── styles/
│   └── globals.css    # Global styles with Tailwind
├── package.json       # Dependencies
├── tailwind.config.ts # Tailwind configuration
├── postcss.config.js  # PostCSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Current Page

The main page displays a simple centered message:
"DataPulse Frontend 🚀"

## Next Steps

To expand this frontend:
1. Add more pages in the `pages/` directory
2. Create components in a `components/` directory
3. Add API integration with the backend
4. Include data visualization libraries like Plotly.js
