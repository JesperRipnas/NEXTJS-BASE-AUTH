import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginSignupModalComponent } from './shared/components/login-signup-modal/login-signup-modal.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CookieConsentComponent } from './shared/components/cookie-consent/cookie-consent.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    LoginSignupModalComponent,
    SidebarComponent,
    CookieConsentComponent,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  isLoggedIn = computed(() => this.authService.isLoggedIn());
  showAuthModal = signal(false);

  toggleAuthModal(): void {
    this.showAuthModal.update((value) => !value);
  }

  goToProfile(): void {
    this.showAuthModal.set(false);
    this.router.navigate(['/profile']);
  }
}
