import styled from '@emotion/styled';

const TableStyled = styled.table`
  width: 100%;

  & td {
    padding: 6px 0;
  }
`;

const FirstColumn = styled.td`
  width: 40%;
`;

const SecondColumn = styled.td`
  width: 40%;
`;

export { TableStyled, FirstColumn, SecondColumn };
