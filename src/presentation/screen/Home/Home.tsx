import { ChangeEvent, useState } from 'react'
import { Input, CheckBox } from '../../../common/component'
import { useFormatNumber } from '../../../common/util'
import * as S from './styles'

// 'BRL' | 'USD' | 'PYG' | 'TZS' | 'ARS'

function Home() {
  const [value] = useState<string | number>(0)
  const [trunc, setTrunc] = useState(false)

  const [currency, setCurrency] = useState<
    'BRL' | 'USD' | 'PYG' | 'TZS' | 'ARS'
  >('BRL')
  const {
    value: valueFormat,
    money,
    config
  } = useFormatNumber({
    currency: currency
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log({
      e: e.target.value,
      ed: valueFormat(e.target.value)
    })
    let currentValue: string | number = e.target.value
    if (currency === 'PYG') {
      if (/[^\d,]/.test(currentValue)) {
        console.log('es string')
        currentValue = '0'
      }
      currentValue = currentValue.split(',').join('')
      currentValue = Number(currentValue)
      currentValue = valueFormat(currentValue)
    }

    if (currency === 'BRL') {
    }

    return
  }
  return (
    <S.Container>
      <S.Content>
        <h4>Value example format BRL: {money(12.4, { currency: 'BRL' })}</h4>
        <h4>Value no format: {value}</h4>
        <h4>Value format: {money(value)}</h4>
        <Input
          prefix={config({ currency: currency }).symbol}
          onChange={handleChange}
          placeholder='Number'
          type='tel'
          key='number'
        />
        <S.CheckBoxs>
          <CheckBox
            checked={currency === 'BRL'}
            id='BRL'
            label='BRL'
            name='BRL'
            onClick={() => setCurrency('BRL')}
          />
          <CheckBox
            checked={currency === 'PYG'}
            id='PYG'
            label='PYG'
            name='PYG'
            onClick={() => setCurrency('PYG')}
          />
          <CheckBox
            checked={currency === 'ARS'}
            id='ARS'
            label='ARS'
            name='ARS'
            onClick={() => setCurrency('ARS')}
          />
          <CheckBox
            checked={currency === 'TZS'}
            id='TZS'
            label='TZS'
            name='TZS'
            onClick={() => setCurrency('TZS')}
          />
          <CheckBox
            checked={currency === 'USD'}
            id='USD'
            label='USD'
            name='USD'
            onClick={() => setCurrency('USD')}
          />
        </S.CheckBoxs>
        <CheckBox
          checked={trunc}
          id='trunc'
          label='Trunc'
          name='trunc'
          onClick={() => setTrunc((prev) => !prev)}
        />
      </S.Content>
    </S.Container>
  )
}

export default Home
