import styled, {css} from 'styled-components';

export const Wrapper = styled.input<{hasOverrideClassName: boolean}>`
  ${({hasOverrideClassName}) => !hasOverrideClassName && css`
    background: transparent;
    height: 30px;
    border: 0;
    outline: 0;
  ` }
`;
