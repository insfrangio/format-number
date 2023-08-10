import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Check } from '../../../presentation/asset/Component/Check'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const Box = styled(motion.div)<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px;
  background: #8258e6;
  background: ${({ active }) => (active ? 'transparent' : '#8258e6')};

  width: 18px;
  height: 18px;

  border: 1px solid #8258e6;
`

export const CheckIcon = styled(Check)`
  color: #8258e6;
  scale: 0.6;
`

export const Label = styled.label`
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`
