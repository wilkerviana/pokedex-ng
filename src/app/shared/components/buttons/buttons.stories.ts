import { moduleMetadata } from '@storybook/angular';
import { ButtonsComponent } from './buttons.component';
import { ButtonsModule } from './buttons.module';

const metadata = moduleMetadata({
  imports: [ButtonsModule],
});

export default {
  title: 'Buttons',
  component: ButtonsComponent,
  decorators: [metadata],
};

export const Primary = () => ({
  component: ButtonsComponent,
  props: {
    primary: true,
    label: 'Primary',
  },
});

export const Secondary = () => ({
  component: ButtonsComponent,
  props: {
    label: 'Secondary',
  },
});

export const Selected = () => ({
  component: ButtonsComponent,
  props: {
    primary: true,
    label: 'Selected',
    selected: true,
  },
});
