//tslint:disable
// @ts-nocheck

import {
  ClampFn,
  CurrencyOptions,
  FormatFn,
  MoneyFn,
  ConfigFn,
  QuantityFn,
  QuantityOptions,
  TruncFn,
  TruncOptions
} from './types'

const valueOrDefault = (
  object: Record<string, unknown>,
  property: string,
  defaultValue: unknown
): void => {
  if (object) {
    if (
      (property in object && object[property] === undefined) ||
      !(property in object)
    ) {
      object[property] = defaultValue
    }
  }
}

function currencyException() {
  throw new Error("Currency hasn't been set.")
}

function assertDigits(op: CurrencyOptions & QuantityOptions) {
  let { maxDigits: maximumFractionDigits, digits: minimumFractionDigits } = op
  if (minimumFractionDigits && maximumFractionDigits) {
    maximumFractionDigits =
      minimumFractionDigits > maximumFractionDigits
        ? minimumFractionDigits
        : maximumFractionDigits
  } else if (minimumFractionDigits) {
    maximumFractionDigits = minimumFractionDigits
  } else if (maximumFractionDigits) {
    minimumFractionDigits = maximumFractionDigits
  }
  return [minimumFractionDigits, maximumFractionDigits]
}

function Commarize(
  value: number | string,
  options: CurrencyOptions & QuantityOptions
) {
  const _value = typeof value === 'string' ? parseFloat(value) : value
  return new Intl.NumberFormat(options.locale, {
    maximumFractionDigits: options.shortFormatDigits,
    notation: 'compact',
    compactDisplay: 'short'
  }).format(_value)
}

export function trunc(number: number, digits: number) {
  const regexIsDecimal = /^[-+]?[0-9]+\.[0-9]+$/
  var hasDecimal = String(number).match(regexIsDecimal)

  if (hasDecimal) {
    const decimalPart = number
      .toString()
      .split('.')
      .pop()
      .slice(0, digits || 0)

    return parseFloat(Math.trunc(Number(number)) + '.' + decimalPart)
  }

  return Math.trunc(Number(number))
}

function loadCurrencyOptions(settings, options): CurrencyOptions {
  let op: CurrencyOptions = {
    ...settings,
    ...options,
    debug: settings?.debug || false
  }

  const curr = options?.currency || settings?.currency

  try {
    if (!curr) {
      currencyException()
    }

    switch (curr) {
      case 'PYG': {
        op = {
          symbol: 'Gs ',
          locale: 'en-US', // Intl.NumberFormat formata errado quando o locale for py ou es-PY
          ...op
        }

        valueOrDefault(op, 'maxDigits', 0)
        valueOrDefault(op, 'digits', 0)
        valueOrDefault(op, 'separator', { thousand: ',', decimal: '.' })
        valueOrDefault(op, 'shortFormatDigits', 1)

        break
      }

      case 'BRL': {
        op = {
          symbol: 'R$ ',
          locale: 'pt-BR',
          ...op
        }

        valueOrDefault(op, 'maxDigits', 2)
        valueOrDefault(op, 'digits', 2)
        valueOrDefault(op, 'separator', { thousand: '.', decimal: ',' })
        valueOrDefault(op, 'shortFormatDigits', 1)

        break
      }

      case 'ARS': {
        op = {
          symbol: '$ ',
          locale: 'es-AR',
          ...op
        }

        valueOrDefault(op, 'maxDigits', 2)
        valueOrDefault(op, 'digits', 2)
        valueOrDefault(op, 'separator', { thousand: '.', decimal: ',' })
        valueOrDefault(op, 'shortFormatDigits', 1)

        break
      }

      case 'USD': {
        op = {
          symbol: '$ ',
          locale: 'en-US',
          ...op
        }

        valueOrDefault(op, 'maxDigits', 2)
        valueOrDefault(op, 'digits', 2)
        valueOrDefault(op, 'separator', { thousand: ',', decimal: '.' })
        valueOrDefault(op, 'shortFormatDigits', 1)

        break
      }

      case 'TZS': {
        op = {
          symbol: 'TSh ',
          locale: 'en-TZ',
          ...op
        }

        valueOrDefault(op, 'maxDigits', 0)
        valueOrDefault(op, 'digits', 0)
        valueOrDefault(op, 'separator', { thousand: ',', decimal: '.' })
        valueOrDefault(op, 'shortFormatDigits', 1)

        break
      }

      case 'FUN': {
        op = {
          symbol: 'FUN ',
          locale: 'en-US',
          ...op
        }

        valueOrDefault(op, 'maxDigits', 2)
        valueOrDefault(op, 'digits', 2)
        valueOrDefault(op, 'separator', { thousand: ',', decimal: '.' })
        valueOrDefault(op, 'shortFormatDigits', 1)

        break
      }
    }
  } catch (e) {
    if (op.debug) {
      console.warn(`formatting number: cause an exception "${e.message}"`)
    }
  }

  return op
}

export function useFormatNumber(settings?: CurrencyOptions & QuantityOptions) {
  const obj: {
    money: MoneyFn
    config: ConfigFn
    format: FormatFn
    clamp: ClampFn
    quantity: QuantityFn
    trunc: TruncFn
  } = {
    money: (number, options) => {
      let op = loadCurrencyOptions(settings, options)

      if (!op.currency) return number

      try {
        let prefix = op.symbol
        let suffix = ''
        if (typeof op.symbol === 'object') {
          prefix = op.symbol[0]
          suffix = op.symbol[1]
        }

        if (isNaN(number as number)) {
          return `${prefix}${number}${suffix}`
        }

        if (op.shortFormat && Math.abs(number as number) > 99999.99) {
          const value = Commarize(number, op)
          return `${prefix}${value}${suffix}`
        }

        if (op.trunc) number = trunc(number as number, op.digits)

        const [minimumFractionDigits, maximumFractionDigits] = assertDigits(op)

        const formatValue = new Intl.NumberFormat(op.locale, {
          currency: op.currency,
          minimumFractionDigits,
          maximumFractionDigits
        }).format(number as number)
        return `${prefix}${formatValue}${suffix}`
      } catch (e: any) {
        if (op.debug) {
          console.warn(
            `formatting number: ${number} cause an exception "${e.message}"`
          )
        }
        return number
      }
    },
    config: (options) => {
      const moneySettings = loadCurrencyOptions(settings, options)
      return {
        ...moneySettings,
        digits:
          options?.digits || settings?.digits || moneySettings?.digits || 0
      }
    },
    clamp: (value, min, max) => {
      return Math.min(Math.max(value, min), max)
    },
    quantity: (number, options) => {
      const op: QuantityOptions = {
        ...settings,
        ...options,
        digits: options?.digits || settings?.digits || 0,
        debug: settings?.debug || false
      }

      try {
        if (op.shortFormat && Math.abs(number as number) > 99999.99) {
          return Commarize(number, op)
        }
        const _number = number.toFixed(op.digits)
        if (op.separator) {
          const { thousand, decimal } = op.separator
          const num = _number.split('.')
          const rgx = /(\d+)(\d{3})/
          const _decimal = num.length > 1 ? `${decimal}${num[1]}` : ''

          while (rgx.test(num[0])) {
            num[0] = num[0].replace(rgx, `$1${thousand}$2`)
          }
          return num[0].concat(_decimal)
        } else if (op.locale || (!op.locale && !op.separator)) {
          const locale = op.locale || navigator.language
          const [minimumFractionDigits, maximumFractionDigits] =
            assertDigits(op)
          return parseFloat(_number).toLocaleString(locale, {
            minimumFractionDigits,
            maximumFractionDigits
          })
        } else if (op.trunc) number = trunc(number as number, op.digits)

        return _number
      } catch (e: any) {
        if (op.debug) {
          console.warn(
            `formatting number: ${number} cause an exception "${e.message}"`
          )
        }
        return number
      }
    },
    trunc: (number, options) => {
      let op: TruncOptions = {
        ...settings,
        ...options
      }

      return trunc(number, op?.digits || 0)
    },
    format: (number, options) => {
      return ''
    }
  }
  return obj
}
