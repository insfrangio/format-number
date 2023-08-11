import { ChangeEvent, useState } from 'react'
import { CheckBox } from '../../../common/component'
import * as S from './styles'
import { InputCurrency } from '../../../common/component/lib'
import { simulatePostRequest } from '../../../common/util'
import { Button } from '../../../common/component'

function Home() {
  const [value, setValue] = useState<number>(0)
  const [valueResponse, setValueResponse] = useState<number>(0)
  const [showResult, setShowResult] = useState<number>(0)
  const [loading, setLoading] = useState(false)

  const [currency, setCurrency] = useState<
    'BRL' | 'USD' | 'PYG' | 'TZS' | 'ARS' | 'FUN'
  >('BRL')

  const onSubmit = async (value: number) => {
    setLoading(true)
    await simulatePostRequest(value)
      .then((res) => {
        setShowResult(res as number)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleOnChange = (
    _: ChangeEvent<HTMLInputElement>,
    valueNumber: number
  ) => {
    setValueResponse(valueNumber)
    setValue(valueNumber)
  }

  return (
    <S.Container>
      <S.Content>
        <h3>{loading ? 'loading' : showResult}</h3>
        <h4>Typeof: {typeof valueResponse}</h4>
        <h4>Value no format: {valueResponse}</h4>

        <InputCurrency
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

        <Button
          variant
          onClick={() => onSubmit(valueResponse)}
          label={loading ? 'loading...' : 'Submit'}
          id='submit'
          name='submit'
          type='button'
        />
      </S.Content>
    </S.Container>
  )
}

export default Home
