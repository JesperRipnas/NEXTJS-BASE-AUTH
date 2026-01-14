# BASE-AUTH-PROJECT Client

An Angular 20 web application providing user authentication and profile management for the BASE-AUTH-PROJECT.

## Overview

This is a modern, responsive web application built with Angular 20, featuring:

- User authentication (login/signup)
- User profile management
- Dark mode support
- Multi-language support (English/Swedish)
- Session management with cookies
- Responsive design with Tailwind CSS utilities

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Environment Variables

Create a `.env.local` file in the root directory if needed for API configuration:

```bash
# API Configuration
API_URL=http://localhost:3000
```

## Available Scripts

### Development

```bash
# Start the development server with polling
npm start

# Open http://localhost:4200/ in your browser
# The application automatically reloads on file changes
```

### Building

```bash
# Build for production
npm run build

# Build in watch mode (development)
npm run watch
```

### Code Quality

```bash
# Run ESLint with auto-fix
npm run lint

# Run linting
ng lint
```

### Testing

```bash
# Run unit tests with Karma
npm test

# Run tests in watch mode
npm test -- --watch
```

## Project Structure

```
src/
├── index.html
├── main.ts                          # Application entry point
├── styles.scss                      # Global styles
├── app/
│   ├── app.ts                       # Root component
│   ├── app.config.ts                # Application configuration
│   ├── app.routes.ts                # Application routing
│   │
│   ├── shared/                      # Shared utilities and components
│   │   ├── components/
│   │   │   ├── header/              # Header navigation component
│   │   │   ├── sidebar/             # Sidebar navigation
│   │   │   ├── login-signup-modal/  # Authentication modal
│   │   │   └── cookie-consent/      # Cookie consent banner
│   │   ├── services/
│   │   │   ├── auth.service.ts      # Authentication management
│   │   │   ├── theme.service.ts     # Dark mode management
│   │   │   └── translation.service.ts # Multi-language support
│   │   ├── pipes/
│   │   │   └── translate.pipe.ts    # Translation pipe
│   │   └── translations/            # i18n translation files
│   │       ├── en.ts                # English translations
│   │       └── sv.ts                # Swedish translations
│   │
│   ├── home/                        # Home page component
│   ├── dashboard/                   # User dashboard
│   └── profile/                     # User profile page
│
├── public/                          # Static assets
└── styles.scss                      # Global styles
```

## Key Features

### Authentication

- Login with email/password
- User registration with profile information
- Session management with cookie persistence
- OAuth integration placeholders (Google, Facebook)

### User Interface

- Responsive design that works on all devices
- Dark mode support with system preference detection
- Multi-language support (English and Swedish)
- Modal-based authentication flow
- Clean, modern design

### State Management

- Angular Signals for reactive state
- Computed signals for derived state
- OnPush change detection for performance

### Forms

- Reactive form validation
- Real-time error feedback
- Email validation
- Password strength requirements

## Development Guide

### Components

All components use:

- **Standalone components** (no NgModules)
- **Signals** for state management
- **OnPush change detection** for performance
- **Computed signals** for derived state

Example component structure:

```typescript
import { Component, input, output, signal, computed } from "@angular/core";

@Component({
  selector: "app-example",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "...",
})
export class ExampleComponent {
  items = input<string[]>();
  selected = output<string>();

  isLoading = signal(false);
  itemCount = computed(() => this.items().length);
}
```

### Adding Translations

1. Add keys to `src/app/shared/translations/en.ts`
2. Add corresponding Swedish translations to `sv.ts`
3. Use in templates with the translate pipe:
   ```html
   <p>{{ 'key.path' | translate }}</p>
   ```

### Authentication Service

The `AuthService` manages:

- User login state
- Current user data
- Cookie persistence
- Session expiration

Usage:

```typescript
constructor(private auth: AuthService) {
  this.isLoggedIn = computed(() => this.auth.isLoggedIn());
}
```

## Testing

### Unit Tests

Run unit tests with Karma:

```bash
npm test
```

Tests are written using Jasmine and run with Karma. Coverage reports are generated in the `coverage/` directory.

### Test Structure

- Component tests: `*.component.spec.ts`
- Service tests: `*.service.spec.ts`
- Pipe tests: `*.pipe.spec.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Considerations

### Do Not Commit

- `.env.local` files with sensitive data
- API keys or tokens
- JWT signing keys
- OAuth credentials

These are covered by `.gitignore`.

### Best Practices

- All forms validate input before submission
- CSRF protection through cookies
- Secure session management
- Input sanitization

## Docker

Build and run using the provided `Dockerfile.dev`:

```bash
docker build -f Dockerfile.dev -t client .
docker run -p 4200:4200 client
```

## Performance Optimizations

- OnPush change detection strategy
- Lazy loading of route modules
- Optimized image loading with NgOptimizedImage
- Memoized computed signals
- Tree-shaking of unused code

## Accessibility

- WCAG AA compliance target
- Keyboard navigation support
- Semantic HTML
- ARIA labels where appropriate

## Contributing

1. Follow the existing code structure and naming conventions
2. Use standalone components with signals
3. Write tests for new features
4. Run linting before committing:
   ```bash
   npm run lint
   ```
5. Update this README if adding new features

## Troubleshooting

### Development server not starting

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Port 4200 already in use

The start script uses polling, which may help with some systems. If port is in use:

```bash
ng serve --port 4300 --host 0.0.0.0 --poll=2000
```

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

UNLICENSED
