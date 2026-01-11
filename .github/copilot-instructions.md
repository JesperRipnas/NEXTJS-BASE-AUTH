You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## NESTJS Best Practices

Architecture & Structure

- Use modules to organize features logically
- Keep controllers thin—delegate business logic to services
- Use dependency injection via @Injectable() and constructor injection
- Follow Single Responsibility Principle for each class

Services & Business Logic

- Services handle all business logic and data operations
- Use providedIn: 'root' for global services
- Keep services focused on one domain

Controllers

- Keep controllers focused on HTTP request/response handling
- Use DTOs for request/response validation
- Apply decorators like @Get(), @Post(), @Body(), @Param()
- Use guards and pipes for cross-cutting concerns

Validation & DTOs

- Use class-validator and class-transformer
- Create separate DTOs for CreateDto, UpdateDto, ResponseDto
- Apply @IsNotEmpty(), @IsEmail(), etc. on DTO properties

Error Handling

- Use built-in HttpException or custom exception filters
- Create global exception filters for consistent error responses
- Implement proper HTTP status codes

Database & ORM

- Use TypeORM or Prisma for database operations
- Implement repository pattern for data access
- Use transactions for complex operations

Middleware & Guards

- Use guards for authentication/authorization
- Implement custom pipes for data transformation
- Use middleware for logging, CORS, etc.

Testing

- Write unit tests for services
- Use e2e tests for API endpoints
- Mock dependencies in tests

Performance

- Implement caching where appropriate
- Use pagination for large datasets
- Add proper database indexing

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection
