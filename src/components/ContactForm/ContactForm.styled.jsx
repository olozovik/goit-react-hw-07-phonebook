import styled from '@emotion/styled';

const FormStyled = styled.form`
  margin-bottom: 50px;
  display: flex;
  align-items: flex-end;

  & button {
    flex-shrink: 0;
    font-weight: 700;
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LabelsWrapper = styled.div`
  display: flex;

  & label {
    font-weight: 700;
    margin-right: 25px;

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

export { FormStyled, LabelsWrapper };
