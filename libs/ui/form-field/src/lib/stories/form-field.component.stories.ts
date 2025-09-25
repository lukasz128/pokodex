import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UiInputDirective } from '@pokodex/ui/input';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { UiFormFieldComponent } from '../components/form-field/form-field.component';
import { UiFormFieldModule } from '../components/form-field/form-field.module';

export default {
  title: 'UiFormField',
  component: UiFormFieldComponent,
  decorators: [
    applicationConfig({
      providers: [],
    }),
    moduleMetadata({
      imports: [ReactiveFormsModule, UiFormFieldModule, UiInputDirective],
    }),
  ],
} as Meta<UiFormFieldComponent>;

type Story = StoryObj<UiFormFieldComponent>;

const PrimaryTemplate = (args: Story) => {
  return {
    props: { ...args, formControl: new FormControl('') },
    template: `
      <ui-form-field>
        <input uiInput [formControl]="formControl"  placeholder='Input placeholder'  type="text" />
      </ui-form-field>
    `,
  };
};

const TemplateWithLabel = (args: Story) => {
  return {
    props: { ...args, formControl: new FormControl('test') },
    template: `
      <ui-form-field>
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
      <ui-form-field>
        <span uiSuffix>%</span>
        <label uiLabel>Input label</label>
        <input uiInput [formControl]="formControl" placeholder="Input placeholder" type="text" />
        <span uiPrefix>$</span>

      </ui-form-field>
    `,
  };
};

export const Primary = PrimaryTemplate.bind({});
export const WithLabel = TemplateWithLabel.bind({});
export const WithPrefixAndSuffix = TemplateWithPrefixAndSuffix.bind({});
