import { Component, Input } from '@angular/core';

@Component({
  selector: 'promptui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true
})
export class PromptUIButtonComponent {
  @Input() appearance: 'solid' | 'outline' | 'ghost' = 'solid';
  @Input() intent: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() fullWidth = false;

  get classList(): string[] {
    return [
      'promptui-button',
      `appearance-${this.appearance}`,
      `intent-${this.intent}`,
      `size-${this.size}`,
      this.fullWidth ? 'full-width' : '',
      this.disabled ? 'is-disabled' : ''
    ].filter(Boolean);
  }
}
