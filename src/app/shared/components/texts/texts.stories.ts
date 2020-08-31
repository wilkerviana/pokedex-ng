import { moduleMetadata } from '@storybook/angular';
import { TextsModule } from './texts.module';
import { TextsComponent } from './texts.component';

const metadata = moduleMetadata({
  imports: [TextsModule],
});

export default {
  title: 'Text',
  decorators: [metadata],
};

export const Title = () => ({
  component: TextsComponent,
  props: {
    kind: 'title',
    label: 'Title',
  },
});

export const ApplicationTitle = () => ({
  component: TextsComponent,
  props: {
    kind: 'app-title',
    label: 'Application Title',
  },
});

export const FilterTitle = () => ({
  component: TextsComponent,
  props: {
    kind: 'filter-title',
    label: 'Filter Title',
  },
});

export const Description = () => ({
  component: TextsComponent,
  props: {
    kind: 'description',
    label: 'Description',
  },
});

export const PokemonName = () => ({
  component: TextsComponent,
  props: {
    kind: 'pokemon-name',
    label: 'Pokémon Name',
  },
});

export const PokemonNumber = () => ({
  component: TextsComponent,
  props: {
    kind: 'pokemon-number',
    label: 'Pokémon Number',
  },
});

export const PokemonType = () => ({
  component: TextsComponent,
  props: {
    kind: 'pokemon-type',
    label: 'Pokémon Type',
  },
});
