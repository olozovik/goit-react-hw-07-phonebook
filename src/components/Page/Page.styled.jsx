import styled from '@emotion/styled';

export const PageStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 15px;
  background-color: ${({ theme }) => theme.pageBgColor};

  @media (max-width: 600px) {
    padding: 0;
  }
`;
