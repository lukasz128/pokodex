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
  decorators: [
    applicationConfig({ providers: [] }),
    moduleMetadata({
      imports: [UiFormFieldModule],
    }),
  ],
} as Meta<UiFormFieldComponent>;

type Story = StoryObj<UiFormFieldComponent>;

const PrimaryTemplate = (args: Story) => {
  return {
    props: { ...args },
    template: `
      <ui-form-field>
        <input uiInput placeholder="Input placeholder" type="text" />
      </ui-form-field>
    `,
  };
};

const TemplateWithLabel = (args: Story) => {
  return {
    props: { ...args },
    template: `
      <ui-form-field>
        <label uiLabel>Input label </label>
        <input uiInput placeholder="Input placeholder" type="text" />
      </ui-form-field>
    `,
  };
};

export const Primary = PrimaryTemplate.bind({});
export const WithLabel = TemplateWithLabel.bind({});
