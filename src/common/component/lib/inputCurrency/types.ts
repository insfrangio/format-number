import React from 'react';

export type OptionsProps = {
  style: string;
  currency: string;
  minimumFractionDigits: number;
  maximumFractionDigits: number;
  locale: string;
  symbol: string;
};

export type CurrencyProps = {
  [key: string]: OptionsProps;
};

export type InputCurrencyProps = {
  defaultValue?: number;
  value?: number;
  max?: number;
  className?: string;
  overrideClassName?: string;
  currency: string;
  config?: CurrencyProps;
  autoFocus?: boolean;
  autoSelect?: boolean;
  autoReset?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: number, maskedValue: string) => unknown;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>, value: number, maskedValue: string) => unknown;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>, value: number, maskedValue: string) => unknown;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>, value: number, maskedValue: string) => unknown;
};
