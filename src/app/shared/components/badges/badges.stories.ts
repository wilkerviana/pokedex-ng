import { moduleMetadata } from '@storybook/angular';
import { BadgesComponent } from './badges.component';
import { BadgesModule } from './badges.module';

const metadata = moduleMetadata({
  imports: [BadgesModule],
});

export default {
  title: 'Badges',
  decorators: [metadata],
};

export const Bug = () => ({
  component: BadgesComponent,
  props: {
    type: 'bug',
  },
});

export const Dark = () => ({
  component: BadgesComponent,
  props: {
    type: 'dark',
  },
});

export const Dragon = () => ({
  component: BadgesComponent,
  props: {
    type: 'dragon',
  },
});

export const Electric = () => ({
  component: BadgesComponent,
  props: {
    type: 'electric',
  },
});

export const Fairy = () => ({
  component: BadgesComponent,
  props: {
    type: 'fairy',
  },
});

export const Fighting = () => ({
  component: BadgesComponent,
  props: {
    type: 'fighting',
  },
});

export const Fire = () => ({
  component: BadgesComponent,
  props: {
    type: 'fire',
  },
});

export const Flying = () => ({
  component: BadgesComponent,
  props: {
    type: 'flying',
  },
});

export const Ghost = () => ({
  component: BadgesComponent,
  props: {
    type: 'ghost',
  },
});

export const Grass = () => ({
  component: BadgesComponent,
  props: {
    type: 'grass',
  },
});
export const Ground = () => ({
  component: BadgesComponent,
  props: {
    type: 'ground',
  },
});

export const Ice = () => ({
  component: BadgesComponent,
  props: {
    type: 'ice',
  },
});

export const Normal = () => ({
  component: BadgesComponent,
  props: {
    type: 'normal',
  },
});

export const Poison = () => ({
  component: BadgesComponent,
  props: {
    type: 'poison',
  },
});

export const Psychic = () => ({
  component: BadgesComponent,
  props: {
    type: 'psychic',
  },
});

export const Rock = () => ({
  component: BadgesComponent,
  props: {
    type: 'rock',
  },
});

export const Steel = () => ({
  component: BadgesComponent,
  props: {
    type: 'steel',
  },
});

export const Water = () => ({
  component: BadgesComponent,
  props: {
    type: 'water',
  },
});
