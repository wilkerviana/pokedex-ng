import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-badges',
  template: ` <div #badge class="badge">
    <i><img [src]="pathIcon" [alt]="type | titlecase" /></i>
    <span>{{ type | titlecase }}</span>
  </div>`,
  styleUrls: ['./badges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesComponent implements OnInit {
  @ViewChild('badge', { static: true }) badge: ElementRef<HTMLElement>;
  @Input() type: string;

  pathIcon: string;

  ngOnInit(): void {
    this.badge.nativeElement.style.setProperty(
      'background-color',
      `var(--color-type-${this.type})`
    );

    this.pathIcon = `/assets/icons/types/${this.type}.svg`;
  }
}
