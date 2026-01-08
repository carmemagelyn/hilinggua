# Hilinggua - Learn Hiligaynon Vocabulary

A modern Progressive Web App (PWA) for learning Hiligaynon vocabulary with interactive features and offline support.

## Features

- 📚 **Vocabulary Learning**: Learn pronunciation, meanings, and example sentences
- 🏷️ **Hiligaynon Markers**: Explore linguistic markers and grammar
- 🎯 **Quiz System**: Test your knowledge with scrambled words and question forms
- 👤 **User Authentication**: Register and login with Firebase
- 📱 **Progressive Web App**: Install as an app on mobile and desktop devices
- 🌐 **Offline Support**: Access your learning materials offline
- 🎨 **Modern UI**: Beautiful gradient design with vibrant colors

## Color Palette

The app uses a beautiful color scheme from ColorHunt:
- **Teal** (#6aece1)
- **Cyan** (#26ccc2)
- **Light Yellow** (#fff57e)
- **Peach** (#ffb76c)

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Firebase** - Authentication and data storage
- **Vite PWA Plugin** - Progressive Web App support

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/carmemagelyn/hilinggua.git
cd hilinggua
```

2. Install dependencies
```bash
npm install
```

3. Set up Firebase
   - Update `src/firebase.js` with your Firebase project credentials

4. Start the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Project Structure

```
hilinggua/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Vocabulary.jsx
│   │   ├── Markers.jsx
│   │   ├── Quiz.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── style.css
│   ├── firebase.js
│   └── main.jsx
├── public/
│   └── (PWA icons and assets)
├── vite.config.js
├── package.json
└── index.html
```

## Usage

### Home Page
Introduction to the app and quick navigation to other sections.

### Vocabulary Tab
- **Pronunciation**: Learn how to pronounce Hiligaynon words
- **Meaning**: Discover the meanings of words
- **Example Sentences**: See words used in context

### Hiligaynon Markers
Learn about linguistic markers and grammar concepts in Hiligaynon.

### Quiz
- **Scrambled Words**: Unscramble words to form correct sentences
- **Question Form**: Answer questions to practice the language

### Authentication
- Register a new account with email and password
- Login to track your progress (coming soon)

## Firebase Setup

To add real data to the app:

1. Create a Firebase project at https://firebase.google.com
2. Get your project credentials
3. Update `src/firebase.js` with your credentials:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

## PWA Installation

After building the app:

1. `npm run build`
2. Open the app in a supported browser
3. Click the "Install" button to add it to your device

## Development

The app uses hot module replacement (HMR) for instant feedback during development. Changes to components and styles are reflected immediately in the browser.

## Roadmap

- [ ] Add real vocabulary data from Firestore
- [ ] Implement quiz scoring and leaderboard
- [ ] Add user progress tracking
- [ ] Create admin panel for vocabulary management
- [ ] Add audio pronunciation support
- [ ] Implement spaced repetition algorithm
- [ ] Add dark mode toggle
- [ ] Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email digihwycarme@example.com or open an issue on GitHub.

## Acknowledgments

- Color palette from [ColorHunt](https://colorhunt.co/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Powered by [Firebase](https://firebase.google.com/)
