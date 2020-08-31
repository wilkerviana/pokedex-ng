import { moduleMetadata } from '@storybook/angular';
import { CardsModule } from './cards.module';
import { CardsComponent } from './cards.component';

const metadata = moduleMetadata({
  imports: [CardsModule],
});

export default {
  title: 'Cards',
  decorators: [metadata],
};

export const CardBulbasaur = () => ({
  component: CardsComponent,
  props: {
    pokemon: {
      name: 'Bulbasaur',
      number: '1',
      type: 'grass',
      badges: ['grass', 'poison'],
    },
  },
});

export const CardCharmander = () => ({
  component: CardsComponent,
  props: {
    pokemon: {
      name: 'Charmander',
      number: '4',
      type: 'fire',
      badges: ['fire'],
    },
  },
});

export const CardSquirtle = () => ({
  component: CardsComponent,
  props: {
    pokemon: {
      name: 'Squirtle',
      number: '7',
      type: 'water',
      badges: ['water'],
    },
  },
});

export const CardPikachu = () => ({
  component: CardsComponent,
  props: {
    pokemon: {
      name: 'Pikachu',
      number: '25',
      type: 'electric',
      badges: ['electric'],
    },
  },
});
