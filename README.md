# BASE-AUTH-PROJECT

A full-stack authentication application combining a NestJS API backend with an Angular 20 frontend client.

## Project Overview

BASE-AUTH-PROJECT is a complete authentication solution featuring user login, registration, profile management, and session handling. The project is organized as a monorepo with separate API and Client applications.

```
BASE-AUTH-PROJECT/
├── api/          # NestJS REST API
├── client/       # Angular 20 web application
└── docker-compose.dev.yml
```

## Tech Stack

### Backend (API)

- **Framework**: NestJS 11
- **Language**: TypeScript 5.7
- **Runtime**: Node.js
- **Testing**: Jest, Supertest
- **Validation**: class-validator, class-transformer
- **Configuration**: Joi

### Frontend (Client)

- **Framework**: Angular 20
- **Language**: TypeScript 5.8
- **Build Tool**: Angular CLI 20
- **Styling**: CSS with Tailwind utilities
- **Testing**: Jasmine, Karma
- **State Management**: Angular Signals

## Quick Start

### Prerequisites

- Node.js v18+
- npm or yarn
- Docker & Docker Compose (optional)

### Installation & Development

```bash
# Start both API and Client with Docker
docker-compose -f docker-compose.dev.yml up

# Or manually:

# Terminal 1 - Start API
cd api
npm install
npm run start:dev

# Terminal 2 - Start Client
cd client
npm install
npm start
```

**Access:**

- Client: http://localhost:4200
- API: http://localhost:3000

## API - Quick Reference

### Setup

```bash
cd api
npm install
npm run start:dev
```

### Available Scripts

- `npm run build` - Build for production
- `npm run start:dev` - Start with watch mode
- `npm run start:prod` - Run production build
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm test` - Run tests with coverage
- `npm run test:watch` - Run tests in watch mode
- `npm run test:e2e` - Run end-to-end tests

### Key Features

- User authentication (login/signup)
- Password and email validation
- Request logging with IP tracking
- UUID generation service
- Comprehensive error handling
- Data validation with class-validator

### Project Structure

```
api/src/
├── main.ts
├── apps.module.ts
├── auth/              # Authentication module
├── users/             # User management
├── common/            # Shared utilities
│   ├── middleware/    # Logger middleware
│   └── uuid/          # UUID service
├── configs/
└── db/
```

### API Endpoints

- `POST /auth/login` - User login
- `POST /auth/signup` - User registration
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID

### Environment Variables (.env)

```bash
DATABASE_URL=
JWT_SECRET=
SESSION_SECRET=
CORS_ORIGIN=http://localhost:4200
```

## Client - Quick Reference

### Setup

```bash
cd client
npm install
npm start
```

### Available Scripts

- `npm start` - Start development server (http://localhost:4200)
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm run lint` - Run ESLint with auto-fix
- `npm test` - Run unit tests

### Key Features

- User authentication (login/signup modal)
- User profile management
- Dark mode support
- Multi-language support (English/Swedish)
- Session management with cookies
- Responsive design

### Project Structure

```
client/src/
├── main.ts
├── app/
│   ├── app.ts         # Root component
│   ├── app.routes.ts  # Routing
│   ├── shared/        # Shared utilities
│   │   ├── components/
│   │   ├── services/
│   │   ├── pipes/
│   │   └── translations/
│   ├── home/          # Home page
│   ├── dashboard/     # User dashboard
│   └── profile/       # User profile
└── styles.scss
```

### Components

- **Header** - Navigation with login/logout
- **LoginSignupModal** - Authentication form
- **Sidebar** - Navigation menu
- **CookieConsent** - Cookie banner

### Services

- **AuthService** - User authentication & session management
- **TranslationService** - Multi-language support
- **ThemeService** - Dark mode management

## Development Workflow

### Before Committing

**API:**

```bash
cd api
npm run lint
npm run format
npm run test
```

**Client:**

```bash
cd client
npm run lint
npm test
```

### Git Workflow

The project includes comprehensive `.gitignore` files that protect:

- Environment variables (`.env*`)
- Certificates and keys (`*.pem`, `*.key`, `*.cert`)
- Secrets and credentials (`secrets/`, `api-keys.json`)
- Database files (`*.sqlite`, `*.db`)
- Session storage
- JWT keys

**Always use `.env.example` files as templates** and never commit actual `.env` files.

## Testing

### API Tests

```bash
cd api
npm test              # Unit tests with coverage
npm run test:watch   # Watch mode
npm run test:e2e     # End-to-end tests
```

### Client Tests

```bash
cd client
npm test             # Run tests with Karma
```

## Deployment

### Production Build

**API:**

```bash
cd api
npm run build
npm run start:prod
```

**Client:**

```bash
cd client
npm run build
# Output in dist/client/browser/
```

### Docker

Both services have `Dockerfile.dev` for development:

```bash
docker-compose -f docker-compose.dev.yml up
```

## Security

### Key Principles

✓ Never commit `.env` files or secrets  
✓ Use `.env.example` for reference  
✓ Keep dependencies updated  
✓ Validate all user input  
✓ Use HTTPS in production  
✓ Implement rate limiting  
✓ Use secure session cookies

### Protected Files

- Environment files
- API keys and credentials
- JWT signing keys
- OAuth credentials
- Database credentials
- SSL certificates

## Detailed Documentation

- [API README](./api/README.md) - Complete backend documentation
- [Client README](./client/README.md) - Complete frontend documentation

## Troubleshooting

### Port Already in Use

```bash
# API (port 3000)
cd api && npm run start:dev -- --port 3001

# Client (port 4200)
cd client && ng serve --port 4300
```

### Clear Node Modules

```bash
# API
cd api && rm -rf node_modules package-lock.json && npm install

# Client
cd client && rm -rf node_modules package-lock.json && npm install
```

### Docker Issues

```bash
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up --build
```

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [NestJS Documentation](https://docs.nestjs.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Angular CLI Reference](https://angular.dev/tools/cli)

## License

UNLICENSED
