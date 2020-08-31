import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

export interface Pokemon {
  name: string;
  number: string;
  type: string;
  badges: Array<string>;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  @ViewChild('card', { static: true }) card: ElementRef<HTMLElement>;
  @Input() pokemon: Pokemon;

  imgUrl = `https://pokeres.bastionbot.org/images/pokemon`;

  constructor() {}

  ngOnInit(): void {
    this.card.nativeElement.style.setProperty(
      'background-color',
      `var(--bgcolor-type-${this.pokemon.type})`
    );
  }
}
