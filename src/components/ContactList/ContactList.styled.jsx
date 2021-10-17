import styled from '@emotion/styled';

export const TableStyled = styled.table`
  width: 100%;
  border-spacing: 0 12px;

  & tr {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
  }

  & td {
    padding: 8px 15px;

    &:first-of-type {
      font-weight: 600;
    }
  }

  @media (max-width: 500px) {
    & td {
      padding: 8px 10px;
      font-size: 14px;
    }
  } ;
`;

export const FirstColumn = styled.td`
  width: 50%;
`;

export const SecondColumn = styled.td`
  width: 40%;
`;

export const LoadMoreButton = styled.button`
  padding: 15px 0 0 15px;
  font-weight: 700;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: color 150ms linear;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.buttonActiveHover};
  }
`;
