import type { Meta, StoryObj } from '@storybook/angular';
import { AuthShellComponent } from './auth-shell.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AuthShellComponent> = {
  component: AuthShellComponent,
  title: 'AuthShellComponent',
};
export default meta;
type Story = StoryObj<AuthShellComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/auth-shell works!/gi)).toBeTruthy();
  },
};
