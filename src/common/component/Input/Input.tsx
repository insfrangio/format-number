import { ChangeEvent } from 'react'
import * as S from './styles'

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type: string
  value: string
  defaultValue?: string
  prefix?: string | string[] | undefined
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void
}

export function Input(props: InputProps) {
  const { placeholder, onChange, type, value, prefix, onInput, defaultValue } =
    props
  return (
    <S.Wrapper>
      {prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Container
        defaultValue={defaultValue}
        onInput={onInput}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </S.Wrapper>
  )
}
