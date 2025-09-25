import {
  LabelDirective,
  PrefixDirective,
  SuffixDirective,
} from '@pokodex/ui/common';
import { UiFormFieldComponent } from './form-field.component';

export const UiFormFieldModule = [
  LabelDirective,
  UiFormFieldComponent,
  SuffixDirective,
  PrefixDirective,
];
