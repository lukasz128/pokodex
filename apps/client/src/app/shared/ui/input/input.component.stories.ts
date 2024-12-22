import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputComponent, InputType } from './input.component';

const inputType: InputType[] = ['text', 'password', 'search'] as const;

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'InputComponent',
  decorators: [
    applicationConfig({
      providers: [
        FormsModule,
        ReactiveFormsModule,
        { provide: NgControl, useValue: new FormControl('') },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    placeholder: 'Input placeholder',
    type: 'text',
  } as any,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    type: {
      control: {
        type: 'select',
      },
      options: inputType,
    },
  },
};

export const InputTypeText: Story = {
  args: {
    placeholder: 'Input placeholder',
    type: 'text',
  } as any,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
};

export const InputTypePassword: Story = {
  args: {
    placeholder: 'Input password',
    type: 'password',
  } as any,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
};
