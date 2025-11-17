import { provideHttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconForStoriesModule } from '@pokodex/ui';
import { UiInputDirective } from '@pokodex/ui/input';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { UiIconButtonComponent } from 'libs/ui/button/src/lib/components/icon-button/icon-button.component';
import { UiFormFieldComponent } from '../components/form-field/form-field.component';
import { UiFormFieldModule } from '../components/form-field/form-field.module';

export default {
  title: 'UiFormField',
  component: UiFormFieldComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
        UiFormFieldModule,
        UiInputDirective,
        UiIconButtonComponent,
        MatIconModule,
        CustomIconForStoriesModule,
      ],
    }),
  ],
  argTypes: {
    color: {
      options: ['white', 'brown'],
      control: { type: 'radio' },
    },
  },
} as Meta<UiFormFieldComponent>;

type Story = StoryObj<UiFormFieldComponent>;

const PrimaryTemplate = (args: Story) => {
  return {
    props: { ...args, formControl: new FormControl('') },
    template: `
      <ui-form-field [color]="color">
        <input uiInput [formControl]="formControl"  placeholder='Input placeholder'  type="text" />
      </ui-form-field>
    `,
  };
};

const TemplateWithLabel = (args: Story) => {
  return {
    props: { ...args, formControl: new FormControl('test') },
    template: `
      <ui-form-field [color]="color">
        <label uiLabel>Input label</label>
        <input uiInput [formControl]="formControl" placeholder="Input placeholder" type="text" />
      </ui-form-field>
    `,
  };
};

const TemplateWithPrefixAndSuffix = (args: Story) => {
  return {
    props: { ...args, formControl: new FormControl('test') },
    template: `
      <ui-form-field [color]="color">
        <span uiSuffix>%</span>
        <label uiLabel>Input label</label>
        <input uiInput [formControl]="formControl" placeholder="Input placeholder" type="text" />
        <span uiPrefix>$</span>
      </ui-form-field>
    `,
  };
};

const TemplateWithIconInPrefix = (args: Story) => {
  return {
    props: { ...args, formControl: new FormControl('test') },
    template: `
      <ui-form-field [color]="color">
        <label uiLabel>Input label</label>
        <input uiInput [formControl]="formControl" placeholder="Input placeholder" type="text" />
        <span uiPrefix>
          <button ui-icon-btn type='button'>
            <mat-icon svgIcon='visibility' />
          </button>
        </span>

      </ui-form-field>
    `,
  };
};

export const Primary = PrimaryTemplate.bind({});
export const WithLabel = TemplateWithLabel.bind({});
export const WithPrefixAndSuffix = TemplateWithPrefixAndSuffix.bind({});
export const WithIconInPrefix = TemplateWithIconInPrefix.bind({});
