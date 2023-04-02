import styled from "styled-components";
import { device } from "../../screenResolutions/devices";

const Input = styled.input`
  padding: 8px 10px 8px 16px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.inputBorderColor};
  border-radius: 7px;
  width: ${({ width }) => width || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  color: ${({ theme }) => theme.commonTextColor};
  background-color: ${({ theme }) => theme.mainBackgroundColor};

  @media ${device.mobileS} {
    max-width: ${({ maxWidthmobileS }) => maxWidthmobileS || ''};
  }

  @media ${device.laptopL} {
    max-width: ${({ maxWidthlaptopL }) => maxWidthlaptopL || '100%'};
  }

  ::placeholder {
    font-family: 'Ubuntu';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }

  :focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.inputFocusColor};
    background-color: rgba(160, 195, 255, 0.1);
    
  }
`

export default Input