import styled from '@emotion/styled';

export const ButtonDeleteStyled = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  min-height: 30px;
  padding: 6px 5px 6px 10px;

  font-size: 13px;
  font-weight: 600;

  border-radius: 3px;
  border: none;
  cursor: pointer;

  box-shadow: 0 0 0 transparent inset, 0 0 2px 1px rgba(0, 0, 0, 0.3);
  transition: color 150ms linear, box-shadow 150ms linear;

  & span {
    margin-right: 5px;
  }

  & svg {
    font-size: 18px;
    transition: color 150ms linear;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.buttonActiveHover};
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3) inset, 0 0 0 transparent;

    & svg {
      color: ${({ theme }) => theme.buttonActiveHover};
    }
  }
`;
