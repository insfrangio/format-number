import { ChangeEvent } from 'react'

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
  defaultValue?: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number,
    maskedValue: string
  ) => void
}

let currentMaskedValue = '0'
let firstRender = false

export const InputCurrency = (props: InputCurrencyProps) => {
  const { currency = 'BRL', onChange, defaultValue } = props

  // const [maskedValue, setMaskedValue] = useState(defaultValue || '0')
  const safeConfig = defaultConfig[currency]

  // Retorna el valor numerico sin Mascara
  const clean = (number: string) => {
    return Number(number.toString().replace(/[^0-9-]/g, ''))
  }

  // Retorna el valor numerico con o sin "," decimal, normalizado dependiendo de la config de la currency
  const normalizeValue = (value: string): number => {
    const { maximumFractionDigits } = safeConfig
    let safeNumber

    safeNumber = clean(value)

    return safeNumber / 10 ** maximumFractionDigits
  }

  // Retorna un array de 2 posiciones, la primera es el valor numerico, la segunda es el valor con mascara
  const calculateValues = (inputFieldValue: string): [number, string] => {
    const value = normalizeValue(inputFieldValue)

    const valueFormatWithMask = formatCurrency(value, safeConfig)

    return [value, valueFormatWithMask]
  }

  // Actualiza los valores del state
  const updateValues = (value: string): [number, string] => {
    const [calculatedValue, calculatedMaskedValue] = calculateValues(value)

    currentMaskedValue = calculatedMaskedValue

    return [calculatedValue, calculatedMaskedValue]
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    firstRender = true
    event.preventDefault()

    const currentValue: string = event.target.value
    const [value, valueWithMasked] = updateValues(currentValue)

    if (valueWithMasked) {
      onChange(event, value, valueWithMasked)
    }
  }

  if (!firstRender) {
    currentMaskedValue = formatCurrency(
      normalizeValue(defaultValue || '0'),
      safeConfig
    )
  }

  return (
    <Input
      defaultValue={defaultValue}
      value={currentMaskedValue}
      onChange={handleChange}
      type='tel'
    />
  )
}
