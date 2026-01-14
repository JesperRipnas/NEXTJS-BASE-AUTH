import { Injectable, signal, computed } from '@angular/core';
import { Translation, en, sv } from '../translations';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly translations: Record<'en' | 'sv', Translation> = {
    en,
    sv,
  };

  private readonly languageStorageKey = 'language';
  language = signal<'en' | 'sv'>(this.getStoredLanguage());

  languageToggleLabel = computed(() =>
    this.translate(
      this.language() === 'en'
        ? 'header.switchToSwedish'
        : 'header.switchToEnglish'
    )
  );

  translate(key: string, lang?: 'en' | 'sv'): string {
    const language = lang ?? this.language();
    const keys = key.split('.');
    let value: unknown = this.translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }

  toggleLanguage(): void {
    this.language.update((lang) => {
      const next = lang === 'en' ? 'sv' : 'en';
      this.setStoredLanguage(next);
      return next;
    });
  }

  private getStoredLanguage(): 'en' | 'sv' {
    if (typeof window === 'undefined' || !window.localStorage) {
      return 'sv';
    }

    const stored = window.localStorage.getItem(this.languageStorageKey);
    return stored === 'en' ? 'en' : 'sv';
  }

  private setStoredLanguage(lang: 'en' | 'sv'): void {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }

    try {
      window.localStorage.setItem(this.languageStorageKey, lang);
    } catch {
      // ignore storage failures
    }
  }
}
