export type CurrencyOptions = {
  digits?: number;
  maxDigits?: number;
  symbol?: string | string[];
  locale?: string;
  currency?: string | 'BRL' | 'USD' | 'PYG' | 'TZS' | 'ARS';
  debug?: boolean;
  shortFormat?: boolean;
  shortFormatDigits?: number;
  trunc?: boolean;
};

export type FormatOptions = {
  digits?: number;
};

export type QuantityOptions = {
  digits?: number;
  separator?: { thousand: string; decimal: string };
  locale?: string;
  debug?: boolean;
  shortFormat?: boolean;
  shortFormatDigits?: number;
  trunc?: boolean;
};

export type TruncOptions = FormatOptions;
export type MoneyOptions = Omit<CurrencyOptions, 'locale' | 'debug'>;
export type MoneyFn = (number: number | string, options?: MoneyOptions) => string | number;
export type ConfigFn = (options?: CurrencyOptions & QuantityOptions) => CurrencyOptions & QuantityOptions;
export type FormatFn = (number: number, options?: FormatOptions | undefined) => string | number;
export type ClampFn = (value: number, min: number, max: number) => number;
export type TruncFn = (value: number, options?: TruncOptions) => number;
export type QuantityFn = (number: number, options?: QuantityOptions | undefined) => string | number;
