import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconForStoriesModule } from '@pokodex/ui';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { UiIconButtonComponent } from '../components/icon-button/icon-button.component';

export default {
  title: 'UiIconButton',
  component: UiIconButtonComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
    moduleMetadata({ imports: [MatIconModule, CustomIconForStoriesModule] }),
  ],
} as Meta<UiIconButtonComponent>;

type Story = StoryObj<UiIconButtonComponent>;

const PrimaryTemplate = (args: Story) => {
  return {
    props: { ...args },
    template: `
      <button ui-icon-btn type='button'>
        <mat-icon svgIcon='chevron_backward' />
      <button>
    `,
  };
};

export const Primary = PrimaryTemplate.bind({});
