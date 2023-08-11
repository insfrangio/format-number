import { styled } from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  min-height: 300px;
  min-width: 400px;

  border: 1px solid white;

  border-radius: 8px;

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 12px;
`

export const CheckBoxs = styled.div`
  display: flex;
  gap: 12px;

  align-self: stretch;
  width: 100%;
`
