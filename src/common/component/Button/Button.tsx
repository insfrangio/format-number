import * as S from './styles'

interface ButtonProps {
  type: string
  id: string
  name: string
  onClick: () => void
  label: string
  variant?: boolean
}

export function Button(props: ButtonProps) {
  const { label, name, id, onClick, variant } = props

  return (
    <S.Container variant={variant} onClick={onClick} name={name} id={id}>
      <S.Label variant={variant}>{label}</S.Label>
    </S.Container>
  )
}
