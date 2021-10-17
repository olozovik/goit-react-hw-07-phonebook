import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;

  & button {
    flex-shrink: 0;
    padding: 6px 10px;

    font-size: 14px;
    font-weight: 600;

    border: none;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 0 transparent inset, 0 0 2px 1px rgba(0, 0, 0, 0.3);
    transition: box-shadow 150ms linear, color 150ms linear;

    &:hover,
    &:active {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3) inset, 0 0 0 transparent;
      color: ${({ theme }) => theme.buttonActiveHover};
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LabelsWrapper = styled.div`
  display: flex;

  & label {
    margin-right: 25px;
    font-weight: 700;

    & span {
      margin-right: 10px;
      font-size: 14px;
    }
  }

  @media (max-width: 850px) {
    & label {
      display: flex;
      flex-direction: column;

      & span {
        margin-bottom: 4px;
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 15px;

    & label:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
