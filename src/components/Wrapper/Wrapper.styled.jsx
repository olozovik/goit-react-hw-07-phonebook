import styled from '@emotion/styled';

export const WrapperStyled = styled.div`
  margin: 0 auto;
  max-width: 900px;
  min-height: calc(100vh - 30px);
  padding: 30px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.wrapperBgColor};
  box-shadow: 1px 1px 3px 1px rgba(1, 1, 1, 0.5);

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;
