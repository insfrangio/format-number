import styled from 'styled-components'

export const Container = styled.button<{ variant?: boolean }>`
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border: none;

  background: #8258e6;
  border: ${({ variant }) =>
    variant ? '1px solid #8258e6' : '1px solod transparent'};

  background: ${({ variant }) => (variant ? 'transparent' : '#8258e6')};

  font-family: 'Quicksand', sans-serif;
  text-align: center;

  outline: none;
`

export const Label = styled.label<{ variant?: boolean }>`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  color: ${({ variant }) => (variant ? '#8258e6' : '#202020')};
`
