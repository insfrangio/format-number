import { ChangeEvent, useEffect, useState } from 'react'

import { formatCurrency } from './formatCurrency'
import { CurrencyProps } from './types'
import { Input } from '../../../component/Input/Input'
// import { trunc } from '../formatNumber/useFormatNumber'

const defaultConfig: CurrencyProps = {
  PYG: {
    style: 'currency',
    currency: 'PYG',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    locale: 'en-US',
    symbol: 'Gs '
  },
  BRL: {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    locale: 'pt-BR',
    symbol: 'R$ '
  },
  ARS: {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    locale: 'es-AR',
    symbol: '$ '
  },
  USD: {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    locale: 'en-US',
    symbol: '$ '
  },
  TZS: {
    style: 'currency',
    currency: 'TZS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    locale: 'en-TZ',
    symbol: 'TSh '
  },
  FUN: {
    style: 'currency',
    currency: 'FUN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    locale: 'en-US',
    symbol: 'FUN '
  }
}

interface InputCurrencyProps {
  currency: string
  max?: number
  value?: string
  defaultValue?: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number,
    maskedValue: string
  ) => void
}

export const InputCurrency = (props: InputCurrencyProps) => {
  const { value, currency = 'BRL', max, onChange, defaultValue } = props

  const [maskedValue, setMaskedValue] = useState(defaultValue || '0')

  // to prevent a malformed config object
  const safeConfig = defaultConfig[currency]

  const clean = (number: string | number) => {
    if (typeof number === 'number') {
      return number
    }

    // strips everything that is not a number (positive or negative)
    return Number(number.toString().replace(/[^0-9-]/g, ''))
  }

  const normalizeValue = (value: string | number): number => {
    const { maximumFractionDigits } = safeConfig
    let safeNumber

    if (typeof value === 'string') {
      safeNumber = clean(value)

      if (safeNumber % 1 !== 0) {
        safeNumber = safeNumber.toFixed(maximumFractionDigits)
      }
    } else {
      safeNumber = Number.isInteger(value)
        ? Number(value) * 10 ** maximumFractionDigits
        : Number(value).toFixed(maximumFractionDigits)
    }

    return clean(safeNumber) / 10 ** maximumFractionDigits
  }

  const calculateValues = (
    inputFieldValue: string | number
  ): [number, string] => {
    const value = normalizeValue(inputFieldValue)
    const maskedValue = formatCurrency(value, safeConfig)

    return [value, maskedValue]
  }

  const updateValues = (value: string): [number, string] => {
    const [calculatedValue, calculatedMaskedValue] = calculateValues(value)

    if (!max || calculatedValue <= max) {
      setMaskedValue(calculatedMaskedValue)

      return [calculatedValue, calculatedMaskedValue]
    } else {
      return [normalizeValue(maskedValue), maskedValue]
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    const currentValue: string = event.target.value

    const [value, maskedValue] = updateValues(currentValue)

    if (maskedValue) {
      onChange(event, value, maskedValue)
    }
  }

  useEffect(() => {
    // const currentValue = trunc(
    //   Number(value! || defaultValue || 0),
    //   safeConfig.maximumFractionDigits
    // )
    const currentValue = value || defaultValue || 0
    const [, maskedValue] = calculateValues(currentValue)

    setMaskedValue(maskedValue)
  }, [currency, value, defaultValue])

  console.log({ maskedValue: maskedValue })

  return (
    <Input
      defaultValue={defaultValue}
      value={maskedValue}
      onChange={handleChange}
      type='tel'
    />
  )
}
