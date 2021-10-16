import styled from '@emotion/styled';

export const ButtonDeleteStyled = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  & span {
    margin-right: 5px;
  }

  & svg {
    font-size: 18px;
  }

  &:hover,
  &:focus {
    color: orange;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3) inset;

    & svg {
      color: orange;
    }
  }
`;
