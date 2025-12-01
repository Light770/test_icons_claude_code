# React Icon Libraries Comparison Demo

A comprehensive side-by-side comparison of popular React icon libraries, showcasing their visual differences and characteristics.

## Featured Libraries

This demo compares the following icon libraries:

1. **Lucide React** - Clean, consistent icons with ~1,300 options
2. **Font Awesome** (via react-icons) - Widely-used library with ~2,000 free icons
3. **Material Design** (via react-icons) - Google's design system with ~2,100 icons
4. **Heroicons** - Beautiful, modern icons from Tailwind CSS creators (~300 icons)

## Features

- **Side-by-side comparison**: View the same icon concept across all four libraries
- **20 common icons**: Home, Search, Heart, Star, Cart, User, Settings, and more
- **Pros & Cons**: Detailed comparison of each library's strengths and weaknesses
- **Interactive UI**: Hover effects and smooth animations
- **Responsive design**: Works on desktop and mobile devices
- **Beautiful gradient background**: Modern, eye-catching design

## Installation

```bash
npm install
```

## Running the Demo

```bash
npm run dev
```

The demo will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Dependencies

- **React 18.3.1**: UI framework
- **Vite 5.4.2**: Build tool and dev server
- **lucide-react**: Lucide icon library
- **react-icons**: Unified package for Font Awesome, Material Design, and more
- **@heroicons/react**: Heroicons library

## Project Structure

```
├── src/
│   ├── App.jsx          # Main component with icon comparison
│   ├── App.css          # Styling for the demo
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Icon Comparison Table

The demo displays 20 common icons across all four libraries:

- Home, Search, Heart, Star, Cart
- User, Settings, Mail, Bell, Download
- Upload, Trash, Edit, Eye, Lock
- Check, X, Alert, Info, Help

## Library Highlights

### Lucide React
✓ Clean, consistent design
✓ Tree-shakeable
✓ TypeScript support
✓ Customizable stroke width

### Font Awesome
✓ Large library
✓ Widely recognized
✓ Multiple styles
✓ Brand icons included

### Material Design
✓ Google's design system
✓ Comprehensive coverage
✓ Filled & outlined variants
✓ Well documented

### Heroicons
✓ Tailwind CSS compatible
✓ Beautiful, modern design
✓ Solid & outline variants
✓ MIT license

## License

MIT
