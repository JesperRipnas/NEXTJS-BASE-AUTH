import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal(false);

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.isDarkMode.set(true);
    }

    effect(() => {
      const isDark = this.isDarkMode();
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update((current) => !current);
  }
}
