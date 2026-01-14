import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieConsentComponent } from './cookie-consent.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

describe('CookieConsentComponent', () => {
  let component: CookieConsentComponent;
  let fixture: ComponentFixture<CookieConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieConsentComponent, TranslatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(CookieConsentComponent);
    component = fixture.componentInstance;
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show banner when consent is not given', () => {
    fixture.detectChanges();
    expect(component.showBanner()).toBe(true);
  });

  it('should not show banner when consent is already given', () => {
    localStorage.setItem('cookie_consent', 'true');
    fixture.detectChanges();
    expect(component.showBanner()).toBe(false);
  });

  it('should accept cookies and hide banner', () => {
    fixture.detectChanges();
    component.acceptCookies();
    expect(localStorage.getItem('cookie_consent')).toBe('true');
    expect(component.showBanner()).toBe(false);
  });

  it('should decline cookies and hide banner', () => {
    fixture.detectChanges();
    component.declineCookies();
    expect(localStorage.getItem('cookie_consent')).toBeNull();
    expect(component.showBanner()).toBe(false);
  });
});
