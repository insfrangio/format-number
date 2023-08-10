import * as S from './styles'

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: string
  value?: string | number
  prefix: string | string[] | undefined
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void
}

export function Input(props: InputProps) {
  const { placeholder, onChange, type, value, prefix, onInput } = props
  return (
    <S.Wrapper>
      <S.Prefix>{prefix}</S.Prefix>
      <S.Container
        onInput={onInput}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </S.Wrapper>
  )
}
