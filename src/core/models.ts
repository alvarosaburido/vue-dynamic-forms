export type InputTypeKeys =
  | 'text'
  | 'email'
  | 'url'
  | 'number'
  | 'password'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'color'
  | 'custom-field';

export type InputType =
  | TextInput
  | NumberInput
  | SelectInput
  | TextAreaInput
  | CheckboxInput
  | RadioInput
  | EmailInput
  | PasswordInput
  | RadioInput
  | ColorInput
  | UrlInput
  | CustomInput;

type ValidationError = {
  text: string;
  // eslint-disable-next-line
  value: any;
};

type ValidationErrors = {
  [key: string]: ValidationError;
};

interface ValidatorFn {
  (control: FormControl<InputType> | undefined): ValidationErrors | null;
}

export interface FormValidation {
  validator: ValidatorFn;
  text: string;
}

interface InputBase {
  name: string;
  label: string;
  disabled?: boolean;
  customClass?: string;
  placeholder?: string;
  validations?: FormValidation[];
}

export type TextInput = InputBase & {
  type: 'text';
  value: string;
};

export type NumberInput = InputBase & {
  type: 'number';
  value: number;
  min?: number;
  max?: number;
  step?: number;
};

export type SelectInput<T = boolean | string> = InputBase & {
  type: 'select';
  value: T;
  options?: { key: string; value: string; disabled?: boolean }[];
};

export type TextAreaInput = InputBase & {
  type: 'textarea';
  value: string;
  cols?: number;
  rows?: number;
};

export type CheckboxInput = InputBase & {
  type: 'checkbox';
  value: boolean;
};

export type CustomInput = InputBase & {
  type: 'custom-field';
  value: boolean | string;
};

export type EmailInput = InputBase & {
  type: 'email';
  value: string;
};

export type PasswordInput = InputBase & {
  type: 'password';
  value: string;
};

export type ColorInput = InputBase & {
  type: 'color';
  value: string;
};

export type UrlInput = InputBase & {
  type: 'url';
  value: string;
};

export type RadioInput = InputBase & {
  type: 'radio';
  value: string;
  options?: { key: string; value: string; disabled?: boolean }[];
};

export type FormControl<T extends InputType> = T & {
  valid: boolean;
  invalid: boolean;
  dirty: boolean;
  touched: boolean;
  errors: ValidationErrors | null;
};

export interface FormOptions {
  customClass?: string;
  method?: string;
  netlify?: boolean;
  netlifyHoneypot?: string;
}
