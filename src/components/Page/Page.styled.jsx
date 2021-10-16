import styled from '@emotion/styled';

export const PageStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 30px;

  background-color: ${({ theme }) => theme.pageBgColor};
`;
