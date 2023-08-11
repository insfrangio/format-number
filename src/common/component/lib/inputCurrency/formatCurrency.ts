import { OptionsProps } from './types'

export function formatCurrency(value: number, config: OptionsProps) {
  const formatter = new Intl.NumberFormat(config.locale, { ...config }).format(
    value
  )
  const symbol = formatter.replace(/[.,\s^0-9]/g, '')
  return formatter.replace(symbol, config.symbol)
}
