import { ReactNode } from 'react'
import * as S from './styles'

interface CheckBoxProps {
  checked: boolean
  id: string
  name: string
  onClick: () => void
  label: string | ReactNode
}

export function CheckBox(props: CheckBoxProps) {
  const { label, checked, id, onClick } = props

  return (
    <S.Container id={id}>
      <S.Box active={checked} onClick={onClick}>
        {checked && <S.CheckIcon />}
      </S.Box>
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
