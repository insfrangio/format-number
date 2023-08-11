import styled from 'styled-components'

export const Wrapper = styled.div`
  gap: 6px;
  display: flex;
  width: 100%;
`

export const Prefix = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background: #8258e6;
  padding: 8px 12px;
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  width: 44px;
`

export const Container = styled.input`
  width: 100%;
  border-radius: 8px;
  background: #8258e6;

  display: flex;
  padding: 8px 12px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border: none;

  color: #fff;

  font-family: 'Quicksand', sans-serif;

  font-size: 16px;
  font-weight: 600;
  line-height: 22px;

  outline: none;

  &::placeholder {
    opacity: 0.5;
    color: #fff;
  }
`
