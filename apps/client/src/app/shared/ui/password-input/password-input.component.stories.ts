import {
  applicationConfig,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { provideHttpClient } from '@angular/common/http';
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomIconForStoriesModule } from '../../data-access/custom-icon-for-stories.module';
import { PasswordInputComponent } from './password-input.component';

const meta: Meta<PasswordInputComponent> = {
  component: PasswordInputComponent,
  title: 'PasswordInputComponent',
  decorators: [
    applicationConfig({
      providers: [
        FormsModule,
        ReactiveFormsModule,
        provideHttpClient(),
        {
          provide: NgControl,
          useValue: { ...new FormControl(''), control: new FormControl('') },
        },
      ],
    }),
    moduleMetadata({
      imports: [CustomIconForStoriesModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<PasswordInputComponent>;

export const Primary: Story = {
  args: {
    placeholder: 'Input placeholder',
  } as any,
};
