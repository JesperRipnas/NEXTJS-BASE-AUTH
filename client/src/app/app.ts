import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: 0, // ChangeDetectionStrategy.OnPush,
  template: `
    <main class="p-4">
      <h1 class="text-xl font-bold">Welcome to Base App 🎯</h1>
      <router-outlet />
    </main>
  `,
})
export class AppComponent { }
