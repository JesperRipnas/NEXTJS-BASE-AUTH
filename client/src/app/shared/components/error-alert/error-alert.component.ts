import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-error-alert',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css'],
})
export class ErrorAlertComponent {
  message = input<string>('');
  type = input<'error' | 'warning' | 'info'>('error');
  dismissible = input<boolean>(false);
  isVisible = input<boolean>(true);
}
