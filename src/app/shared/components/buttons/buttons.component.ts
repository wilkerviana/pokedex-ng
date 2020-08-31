import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button class="btn" [ngClass]="classes">
      {{ label }}
    </button>
  `,
  styleUrls: ['./buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
  @Input() primary: boolean;
  @Input() selected: boolean;
  @Input() label: string;

  get classes(): string[] {
    const mode = this.primary ? '-primary' : '-secondary';
    const hovered = this.selected ? '-selected' : '';
    return ['button-default', mode, hovered];
  }
}
