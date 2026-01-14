import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
} from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieConsentComponent implements OnInit {
  private static readonly CONSENT_KEY = 'cookie_consent';
  readonly showBanner = signal<boolean>(true);

  ngOnInit(): void {
    const consentGiven = localStorage.getItem(
      CookieConsentComponent.CONSENT_KEY
    );
    if (consentGiven) {
      this.showBanner.set(false);
    }
  }

  acceptCookies(): void {
    localStorage.setItem(CookieConsentComponent.CONSENT_KEY, 'true');
    this.showBanner.set(false);
  }

  declineCookies(): void {
    localStorage.removeItem(CookieConsentComponent.CONSENT_KEY);
    this.showBanner.set(false);
  }
}
