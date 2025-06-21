# useEffect POC - Comprehensive Examples

A modern, interactive demonstration of React's useEffect hook patterns built with Next.js and Tailwind CSS.

## 🌐 Live Demo

**Visit the live site:** [use-state-poc-22hy.vercel.app](https://use-state-poc-22hy.vercel.app)

## 🎯 Overview

This project showcases six different useEffect patterns through interactive components, demonstrating real-world usage scenarios and best practices for React developers.

## ✨ Features

### Interactive Components:
1. **Basic useEffect Patterns** - Demonstrates effects with no dependencies, empty dependencies, and conditional dependencies
2. **Data Fetching** - Async API calls with loading states and error handling
3. **Timer with Cleanup** - Interval management with proper cleanup to prevent memory leaks
4. **Event Listeners** - Window resize and mouse tracking with cleanup
5. **Online/Offline Status** - Network status detection using browser APIs
6. **Conditional useEffect** - Dynamic user profile fetching based on input changes

### Design Features:
- 🎨 **Modern UI** with Tailwind CSS styling
- 📱 **Responsive design** (mobile, tablet, desktop)
- 🔄 **Interactive toggles** to show/hide components
- 📊 **Symmetrical grid layout** (3 columns on desktop)
- ⚡ **Real-time updates** and smooth animations
- 🎯 **Consistent component heights** for visual harmony

## 🛠️ Technology Stack

- **Framework:** Next.js 15.3.4
- **UI Library:** React 19.0.0
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd useeffectpoc
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind CSS imports
│   ├── layout.js           # Root layout with fonts
│   └── page.js             # Main page with component orchestration
└── components/
    ├── BasicUseEffect.js    # Basic useEffect patterns
    ├── DataFetching.js      # API data fetching example
    ├── TimerExample.js      # Timer with cleanup
    ├── EventListenerExample.js # Window event listeners
    ├── OnlineStatus.js      # Network status detection
    └── ConditionalEffect.js # Conditional effect execution
```

## 🎨 Component Features

### BasicUseEffect
- **No dependencies:** Runs after every render
- **Empty dependencies:** Runs only on mount/unmount
- **With dependencies:** Runs when specific values change
- **Document title updates:** Demonstrates side effects

### DataFetching
- **Async/await patterns:** Modern promise handling
- **Loading states:** User feedback during API calls
- **Error handling:** Graceful error management
- **JSONPlaceholder API:** Real external data source

### TimerExample
- **setInterval management:** Proper timer cleanup
- **State-based control:** Start/stop/reset functionality
- **Memory leak prevention:** Cleanup on unmount
- **Visual feedback:** Real-time display updates

### EventListenerExample
- **Window resize tracking:** Responsive design helpers
- **Mouse position tracking:** Interactive demonstrations
- **Event cleanup:** Proper listener removal
- **Real-time updates:** Live data display

### OnlineStatus
- **Network detection:** Browser connectivity APIs
- **Visual indicators:** Color-coded status display
- **Event-driven updates:** Automatic status changes
- **User guidance:** Helpful interaction hints

### ConditionalEffect
- **Input-driven effects:** Dynamic API calls
- **Debounced execution:** Efficient API usage
- **User profile display:** Rich data presentation
- **Loading states:** Smooth user experience

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

The project uses Tailwind CSS for styling. Modify `tailwind.config.js` to customize:
- Colors and themes
- Spacing and typography
- Responsive breakpoints
- Custom utilities

## 📱 Responsive Design

- **Mobile (sm):** Single column layout
- **Tablet (md):** Two column grid
- **Desktop (lg+):** Three column grid
- **Consistent experience** across all devices

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own version:

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically on push

Visit: [use-state-poc-22hy.vercel.app](https://use-state-poc-22hy.vercel.app)

## 📚 Learning Resources

- [React useEffect Documentation](https://react.dev/reference/react/useEffect)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Feel free to open issues and pull requests for improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, Next.js, and Tailwind CSS
