import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('authGuard', () => {
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let urlTree: UrlTree;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const routerSpy = jasmine.createSpyObj('Router', ['createUrlTree']);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
        provideHttpClient(),
      ],
    });

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    urlTree = new UrlTree();
  });

  it('should allow access when user is logged in', () => {
    authService.isLoggedIn.and.returnValue(true);

    TestBed.runInInjectionContext(() => {
      const result = authGuard(
        {} as ActivatedRouteSnapshot,
        {} as RouterStateSnapshot
      );

      expect(result).toBe(true);
      expect(authService.isLoggedIn).toHaveBeenCalled();
      expect(router.createUrlTree).not.toHaveBeenCalled();
    });
  });

  it('should redirect to home when user is not logged in', () => {
    authService.isLoggedIn.and.returnValue(false);
    router.createUrlTree.and.returnValue(urlTree);

    TestBed.runInInjectionContext(() => {
      const result = authGuard(
        {} as ActivatedRouteSnapshot,
        {} as RouterStateSnapshot
      );

      expect(result).toBe(urlTree);
      expect(authService.isLoggedIn).toHaveBeenCalled();
      expect(router.createUrlTree).toHaveBeenCalledWith(['/']);
    });
  });

  it('should check authentication status on each activation', () => {
    authService.isLoggedIn.and.returnValue(true);

    TestBed.runInInjectionContext(() => {
      authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);
      authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

      expect(authService.isLoggedIn).toHaveBeenCalledTimes(2);
    });
  });
});
