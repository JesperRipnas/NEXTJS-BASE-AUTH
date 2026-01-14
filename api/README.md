# BASE-AUTH-PROJECT API

A NestJS-based authentication API for the BASE-AUTH-PROJECT application.

## Overview

This is a REST API built with NestJS that provides authentication and user management functionality for the application.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL=

# JWT/Authentication
JWT_SECRET=
JWT_EXPIRATION=

# Session
SESSION_SECRET=

# CORS
CORS_ORIGIN=http://localhost:4200
```

For development, you can copy from `.env.example` if available.

## Available Scripts

### Development

```bash
# Start the API in development mode with watch
npm run start:dev

# Start the API in debug mode with watch
npm run start:debug

# Start the API in production mode
npm run start:prod

# Build the application
npm run build
```

### Linting & Formatting

```bash
# Run ESLint with auto-fix
npm run lint

# Format code with Prettier
npm run format
```

### Testing

```bash
# Run all tests with coverage
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:cov

# Run tests in debug mode
npm run test:debug

# Run end-to-end tests
npm run test:e2e
```

## Project Structure

```
src/
├── apps.module.ts        # Root application module
├── main.ts               # Application entry point
├── auth/                 # Authentication module
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
├── users/                # Users module
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.module.ts
│   ├── user.interface.ts
│   └── dto/
│       ├── create-user.dto.ts
│       └── update-user.dto.ts
├── common/               # Common utilities
│   ├── common.module.ts
│   ├── middleware/
│   │   └── logger.middleware.ts
│   └── uuid/
│       └── uuid.service.ts
├── configs/              # Configuration files
└── db/                   # Database-related files
```

## Key Features

- User authentication (login/signup)
- Password validation
- Email validation
- Request logging middleware
- UUID generation service
- Comprehensive error handling
- Data validation using class-validator and class-transformer
- Input sanitization with Joi

## API Endpoints

### Authentication

- `POST /auth/login` - User login
- `POST /auth/signup` - User registration

### Users

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## Testing

The project includes comprehensive test suites:

- **Unit Tests**: Service and controller tests
- **E2E Tests**: Full endpoint integration tests
- **Coverage Reports**: Generated in `/coverage` directory

Run tests with:

```bash
npm run test
```

## Development

### Code Quality

- **ESLint**: Ensures code quality and consistency
- **Prettier**: Automatic code formatting
- **TypeScript**: Full type safety

### Git Workflow

Before committing:

```bash
npm run lint
npm run format
npm run test
```

### Security

Never commit the following to version control:

- `.env` files (use `.env.example` for reference)
- Certificates and keys (_.pem, _.key, \*.cert)
- Secrets and configuration files
- JWT keys or signing materials
- Database credentials

These are covered by `.gitignore`.

## Deployment

### Production Build

```bash
npm run build
npm run start:prod
```

The compiled output will be in the `dist/` directory.

### Docker

Build and run using the provided `Dockerfile.dev`:

```bash
docker build -f Dockerfile.dev -t api .
docker run -p 3000:3000 api
```

## Contributing

1. Follow the existing code structure and naming conventions
2. Write tests for new features
3. Run linting and format code before committing
4. Update this README if adding new features or endpoints

## License

UNLICENSED
