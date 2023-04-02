import styled from "styled-components";

const PageTitle = styled.h1`
  font-family: 'GraphikLCG';
  font-weight: 700;
  margin: ${({ margin }) => margin || '0 0 35px 0'};
  font-size: 34px;
  line-height: 40px;
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  color: ${({ theme }) => theme.commonTextColor};
`

export default PageTitle