import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-texts',
  template: `<ng-container [ngSwitch]="kind">
    <h1
      *ngSwitchCase="'title'"
      [ngStyle]="{ color: color ? color : '#000000' }"
      class="title"
    >
      {{ label }}
    </h1>
    <h2
      *ngSwitchCase="'app-title'"
      [ngStyle]="{ color: color ? color : '#000000' }"
      class="app-title"
    >
      {{ label }}
    </h2>
    <h3
      *ngSwitchCase="'filter-title'"
      [ngStyle]="{ color: color ? color : '#000000' }"
      class="filter-title"
    >
      {{ label }}
    </h3>
    <p
      *ngSwitchCase="'description'"
      [ngStyle]="{ color: color ? color : '#000000' }"
      class="description"
    >
      {{ label }}
    </p>
    <p
      *ngSwitchCase="'pokemon-name'"
      [ngStyle]="{ color: color ? color : '#000000' }"
      class="pokemon-name"
    >
      {{ label }}
    </p>
    <span
      *ngSwitchCase="'pokemon-number'"
      [ngStyle]="{ color: color ? color : '#000000' }"
      class="pokemon-number"
      >#{{ label }}</span
    >
    <p
      *ngSwitchCase="'pokemon-type'"
      [ngStyle]="{ color: color ? color : '#000000' }"
      class="pokemon-type"
    >
      {{ label }}
    </p>
  </ng-container>`,
  styleUrls: ['./texts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextsComponent {
  @Input() kind: string;
  @Input() label: string;
  @Input() color: string;
}
