import styled from '@emotion/styled';

export const InputStyled = styled.input`
  padding: 4px 10px;
  border: 2px solid ${({ theme }) => theme.inputBorderColor};
  box-shadow: 0 0 1px 1px transparent;
  border-radius: 4px;
  transition: border-color 100ms linear, box-shadow 100ms linear;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.inputHoverBorderColor};
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.inputHoverBorderColor};
  }
`;
