import { AuthUser } from './auth-user.model';

export interface AuthCookie {
  isLoggedIn: boolean;
  user: AuthUser | null;
  expiresAt: number;
}
