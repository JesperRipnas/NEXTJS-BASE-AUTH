import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  signal,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';
import { AuthService } from '../../services/auth.service';
import { ErrorAlertComponent } from '../error-alert/error-alert.component';

type AuthMode = 'login' | 'signup';

@Component({
  selector: 'app-login-signup-modal',
  imports: [CommonModule, FormsModule, TranslatePipe, ErrorAlertComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-signup-modal.component.html',
  styleUrls: ['./login-signup-modal.component.css'],
})
export class LoginSignupModalComponent implements OnDestroy {
  translationService = inject(TranslationService);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly destroy$ = new Subject<void>();

  initialMode = input<AuthMode>('login');
  closeModal = output<void>();

  mode = signal<AuthMode>('login');
  firstName = signal('');
  lastName = signal('');
  username = signal('');
  gender = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  loginError = signal('');
  emailError = signal('');

  isLoading = computed(() => this.authService.isLoading());

  isLoginMode = computed(() => this.mode() === 'login');
  isSignupMode = computed(() => this.mode() === 'signup');

  modalTitle = computed(() =>
    this.isLoginMode()
      ? this.translationService.translate(
          'auth.login.title',
          this.translationService.language()
        )
      : this.translationService.translate(
          'auth.signup.title',
          this.translationService.language()
        )
  );
  submitButtonText = computed(() =>
    this.isLoginMode()
      ? this.translationService.translate(
          'auth.loginButton',
          this.translationService.language()
        )
      : this.translationService.translate(
          'auth.signupButton',
          this.translationService.language()
        )
  );

  isFormValid = computed(() => {
    const emailValue = this.email().trim();
    const passwordValid = this.password().trim().length > 0;

    if (this.isLoginMode()) {
      return emailValue.length > 0 && passwordValid;
    }

    const emailValid = emailValue.length > 0 && this.isValidEmail(emailValue);
    return (
      this.firstName().trim().length > 0 &&
      this.lastName().trim().length > 0 &&
      this.username().trim().length > 0 &&
      this.gender().trim().length > 0 &&
      emailValid &&
      this.password().trim().length > 5 &&
      this.password() === this.confirmPassword()
    );
  });

  passwordsMatch = computed(() => {
    if (this.confirmPassword().length === 0) return true;
    return this.password() === this.confirmPassword();
  });

  constructor() {
    this.mode.set(this.initialMode());
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  validateEmail(): void {
    this.loginError.set('');
    const emailValue = this.email().trim();
    if (emailValue.length === 0) {
      this.emailError.set('');
    } else if (this.isSignupMode() && !this.isValidEmail(emailValue)) {
      this.emailError.set('auth.errors.invalidEmail');
    } else {
      this.emailError.set('');
    }
  }

  onPasswordInput(): void {
    this.loginError.set('');
  }

  switchMode(): void {
    this.mode.set(this.isLoginMode() ? 'signup' : 'login');
    this.loginError.set('');
    this.clearfields();
  }

  clearfields(): void {
    this.firstName.set('');
    this.lastName.set('');
    this.username.set('');
    this.gender.set('');
    this.email.set('');
    this.password.set('');
    this.confirmPassword.set('');
    this.emailError.set('');
    this.loginError.set('');
  }

  async onSubmit(): Promise<void> {
    if (this.isFormValid()) {
      if (this.isLoginMode()) {
        const username = this.email().trim();
        const password = this.password().trim();

        this.authService
          .login({ username, password })
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: () => {
              this.loginError.set('');
              this.closeModal.emit();
              this.router.navigate(['/dashboard']);
            },
            error: () => {
              this.email.set('');
              this.password.set('');
              this.loginError.set(
                this.authService.error() || 'auth.errors.invalidCredentials'
              );
            },
          });
      } else {
        this.authService
          .signup({
            firstName: this.firstName(),
            lastName: this.lastName(),
            username: this.username(),
            email: this.email(),
            password: this.password(),
            birthDate: '',
            gender: this.gender(),
          })
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: () => {
              this.loginError.set('');
              this.closeModal.emit();
              this.router.navigate(['/dashboard']);
            },
            error: () => {
              this.loginError.set(
                this.authService.error() || 'auth.errors.signupFailed'
              );
            },
          });
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loginWithGoogle(): void {
    console.log(`${this.mode()} with Google`);
    // TODO: implement Google OAuth flow
  }

  loginWithFacebook(): void {
    console.log(`${this.mode()} with Facebook`);
    // TODO: implement Facebook OAuth flow
  }
}
