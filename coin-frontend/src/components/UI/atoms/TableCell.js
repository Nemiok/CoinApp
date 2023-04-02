import styled from "styled-components";

const TableCell = styled.td`
  color: ${({ theme, tableHeadCellColor }) => tableHeadCellColor && theme.tableHeadCellColor || theme.tableCellCommonColor || ''};
`
export default TableCell