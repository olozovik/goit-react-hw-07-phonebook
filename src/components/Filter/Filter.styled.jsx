import styled from '@emotion/styled';

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 20px;

  & span {
    margin-right: 10px;
    font-size: 14px;
    font-weight: 700;

    @media (max-width: 700px) {
      display: block;
      margin-bottom: 10px;
    }
  }
`;
