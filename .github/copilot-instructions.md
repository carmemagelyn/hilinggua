# Hilinggua Project Instructions for AI Agents

## Project Overview

Hilinggua is a Progressive Web App (PWA) for learning Hiligaynon vocabulary. It features tabs for Vocabulary (with Pronunciation, Meaning, and Example Sentences), Hiligaynon Markers, and Quiz (Scrambled Words and Question Form). Users can register and log in using Firebase Authentication. The app is built with React, Vite, React Router for navigation, and Vite PWA plugin for offline functionality.

## Color Palette

Primary colors used throughout the app (from ColorHunt palette):
- **Teal**: `#6aece1` - Primary accent
- **Cyan**: `#26ccc2` - Primary background gradient
- **Light Yellow**: `#fff57e` - Highlight and hover states
- **Peach**: `#ffb76c` - Secondary accent

## Architecture

- **Frontend Framework**: React with Vite as the build tool.
- **Routing**: React Router for client-side navigation between pages (Home, Vocabulary, Markers, Quiz, Login, Register).
- **Authentication**: Firebase Auth for user login and registration.
- **PWA Features**: Vite PWA plugin for service worker, manifest, and installability.
- **Styling**: CSS with gradient backgrounds and modern UI components using the color palette.
- **Data Storage**: Placeholder for Firebase Firestore to store vocabulary data; currently using static placeholders.
- **File Structure**:
  - `src/App.jsx`: Main app component with routing and navigation.
  - `src/components/`: Individual page components (Home, Vocabulary, Markers, Quiz, Login, Register).
  - `src/firebase.js`: Firebase configuration.
  - `src/App.css`: Navigation and layout styles.
  - `src/style.css`: Global styles, buttons, inputs, tabs, and form styling.
  - `vite.config.js`: Vite configuration with PWA plugin.
  - `public/`: Static assets and PWA icons.

## Key Workflows

- **Development**: Run `npm run dev` to start the Vite dev server at http://localhost:5173/.
- **Build**: `npm run build` to create production build with PWA assets.
- **PWA Installation**: After build, the app can be installed as a PWA on supported devices.
- **Authentication Flow**: Users register/login via Firebase; protect routes by checking auth state in components.
- **Data Integration**: Vocabulary and quiz data will be added to Firebase Firestore; update components to fetch and display data.

## Conventions and Patterns

- **Component Structure**: Each page is a functional component in `src/components/`, using React hooks for state (activeTab, email, password).
- **Routing**: Use `Link` from React Router for navigation; routes defined in App.jsx with emoji icons.
- **Firebase Usage**: Import auth from `src/firebase.js`; handle auth errors with try/catch and alerts.
- **Tab System**: Use `.tabs` div with `.tab-button` elements; active tab highlighted with `.active` class using yellow background.
- **Forms**: All forms wrapped in `.form` class with flexbox layout; inputs and buttons styled with border colors and hover effects.
- **PWA Config**: Manifest and service worker configured in `vite.config.js`; icons in `public/` (placeholders needed).
- **Styling**: Use CSS classes and inline styles; color palette applied globally in `style.css`.

## Integration Points and Dependencies

- **Firebase**: For auth and potential data storage; config in `src/firebase.js` (update with real project keys).
- **Vite PWA**: Handles caching and offline; generates manifest automatically.
- **React Router**: For SPA navigation with `BrowserRouter`, `Routes`, `Route`, and `Link`.
- **External Data**: User will provide Hiligaynon words and sentences; integrate into Vocabulary and Quiz components.

## UI/UX Guidelines

- **Buttons**: Yellow border with semi-transparent background; hover shows yellow fill with cyan text.
- **Inputs**: White background with yellow border; cyan text; focus state shows yellow border with shadow.
- **Cards**: Semi-transparent white background with backdrop blur for depth.
- **Navigation**: Gradient background with icon-prefixed links; hover effects on all interactive elements.
- **Responsive**: Mobile-first design with flexbox layouts.

## Next Steps

1. Update Firebase config in `src/firebase.js` with real project credentials.
2. Add vocabulary data fetching from Firestore.
3. Implement quiz logic and scoring.
4. Add user progress tracking and statistics.
5. Create PWA icons and test installability.
6. Enhance error handling and user feedback.