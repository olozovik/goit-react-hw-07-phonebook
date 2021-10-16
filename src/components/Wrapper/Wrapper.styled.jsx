import styled from '@emotion/styled';

export const WrapperStyled = styled.div`
  margin: 0 auto;
  padding: 30px;

  max-width: 900px;
  min-height: calc(100vh - 60px);

  box-shadow: 1px 1px 3px 1px rgba(1, 1, 1, 0.5);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.wrapperBgColor};
`;
