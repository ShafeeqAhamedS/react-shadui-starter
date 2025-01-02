# React ShadUI Starter

A modern React boilerplate using Create React App with Shadcn UI components, offering a clean starting point for building beautiful React applications.

## Features

- 🚀 Create React App
- 🎨 Shadcn UI Components
- 📱 Responsive Design
- 🔧 Tailwind CSS
- 🛠 Easy Configuration

## Quick Start

### Clone the repository

```bash
git clone https://github.com/ShafeeqAhamedS/react-shadui-starter.git
```

### Navigate to project directory
```bash
cd react-shadui-starter
```

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm start
```

## Project Structure

```
react-shadui-starter/
├── src/
│   ├── components/
│   ├── lib/
│   └── App.jsx
├── public/
└── package.json
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production

## Shadcn UI Components

You can easily download and use  components using the Shadcn UI CLI. For more information, visit the [Shadcn UI documentation](https://ui.shadcn.com/cli).

To install and use Shadcn UI components, first install the CLI:
```bash
npm install -D shadcn-ui
```
Then, add any needed component (for example, an alert) using:
```bash
npx shadcn-ui add alert
```
This will generate files in `src/components/ui` that you can import and customize as needed.

Import and use the new component in your code:
```jsx
import { Alert } from "@/components/ui/alert"

function MyAlert() {
  return <Alert>This is an alert!</Alert>
}
```

## Customization

### Theme

Modify `tailwind.config.js` to customize:
- Colors
- Typography
- Spacing
- Breakpoints

### Components

All Shadcn UI components can be found in `src/components/ui`. Customize them by:
1. Locating the component file
2. Modifying the component's code
3. Styling using Tailwind classes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/)
- [Create React App](https://create-react-app.dev/)
- [Tailwind CSS](https://tailwindcss.com/)