import { themeColor } from '@pokodex/ui';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { UiFlatButtonComponent } from '../components/flat-button/flat-button.component';

export default {
  title: 'UiFlatButton',
  component: UiFlatButtonComponent,
  decorators: [
    applicationConfig({
      providers: [],
    }),
    moduleMetadata({ imports: [] }),
  ],
  argTypes: {
    color: {
      options: themeColor,
      control: { type: 'radio' },
    },
  },
} as Meta<UiFlatButtonComponent>;

type Story = StoryObj<UiFlatButtonComponent>;

const PrimaryTemplate = (args: Story) => {
  return {
    props: { ...args },
    template: `
      <button ui-flat-btn [color]="color" type='button'>Click</button>
    `,
  };
};

export const Primary = PrimaryTemplate.bind({});
