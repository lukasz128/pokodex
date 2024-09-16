import type { Meta, StoryObj } from '@storybook/angular';
import { RegisterPageComponent } from './register-page.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RegisterPageComponent> = {
  component: RegisterPageComponent,
  title: 'RegisterPageComponent',
};
export default meta;
type Story = StoryObj<RegisterPageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/register-page works!/gi)).toBeTruthy();
  },
};
