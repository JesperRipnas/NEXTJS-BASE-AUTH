import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { LoginSignupModalComponent } from './login-signup-modal.component';

describe('LoginSignupModalComponent', () => {
  let component: LoginSignupModalComponent;
  let fixture: ComponentFixture<LoginSignupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignupModalComponent, FormsModule],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSignupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with login mode by default', () => {
      expect(component.mode()).toBe('login');
      expect(component.isLoginMode()).toBe(true);
      expect(component.isSignupMode()).toBe(false);
    });

    it('should initialize all form fields as empty', () => {
      expect(component.firstName()).toBe('');
      expect(component.lastName()).toBe('');
      expect(component.email()).toBe('');
      expect(component.password()).toBe('');
      expect(component.confirmPassword()).toBe('');
    });
  });

  describe('Mode Switching', () => {
    it('should switch from login to signup mode', () => {
      component.mode.set('login');
      component.switchMode();

      expect(component.mode()).toBe('signup');
      expect(component.isSignupMode()).toBe(true);
      expect(component.isLoginMode()).toBe(false);
    });

    it('should switch from signup to login mode', () => {
      component.mode.set('signup');
      component.switchMode();

      expect(component.mode()).toBe('login');
      expect(component.isLoginMode()).toBe(true);
      expect(component.isSignupMode()).toBe(false);
    });
  });
});
