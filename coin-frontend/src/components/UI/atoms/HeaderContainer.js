import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  width: 100%;
  padding: 25px 50px;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.headerBackgroundColor};
`

export default HeaderContainer