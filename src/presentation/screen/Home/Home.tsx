import { ChangeEvent, useState } from 'react'
import { CheckBox } from '../../../common/component'
// import { useFormatNumber } from '../../../common/util'
import * as S from './styles'
import { InputCurrency } from '../../../common/component/lib'

// 'BRL' | 'USD' | 'PYG' | 'TZS' | 'ARS' | 'FUN'

// let value = '0'

function Home() {
  // const [trunc, setTrunc] = useState(false)
  const [value, setValue] = useState<string>()

  const [currency, setCurrency] = useState<
    'BRL' | 'USD' | 'PYG' | 'TZS' | 'ARS' | 'FUN'
  >('BRL')

  // const { money } = useFormatNumber({
  //   currency: currency
  // })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!value) return

    setValue(value)
  }

  console.log({ value })

  return (
    <S.Container>
      <S.Content>
        {/* <h4>Value no format: {value}</h4>
        <h4>Value format: {value}</h4> */}

        <InputCurrency
          defaultValue={'1000'}
          onChange={handleOnChange}
          value={value}
          currency={currency}
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
          <CheckBox
            checked={currency === 'FUN'}
            id='FUN'
            label='FUN'
            name='FUN'
            onClick={() => setCurrency('FUN')}
          />
        </S.CheckBoxs>
        {/* <CheckBox
          checked={trunc}
          id='trunc'
          label='Trunc'
          name='trunc'
          onClick={() => setTrunc((prev) => !prev)}
        /> */}
      </S.Content>
    </S.Container>
  )
}

export default Home
