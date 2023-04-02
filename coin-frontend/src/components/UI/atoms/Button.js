import styled from "styled-components";
import { device } from "../../screenResolutions/devices";

const Button = styled.button`
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding || '14px 21px'};
  border-radius: 7px;
  border: 0;
  color: ${({ theme, primary, secondary }) => primary ? theme.buttonTextColor : secondary ? theme.buttonPrimaryBackgroundColor : 'yellow'};
  background-color: ${({ theme, primary, secondary, backgroundColor }) => primary ? theme.buttonPrimaryBackgroundColor : secondary ? theme.buttonTextColor : backgroundColor ? backgroundColor : 'yellow'};
  font-family: 'Ubuntu', 'Arial';
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  line-height: ${({ lineHeight }) => lineHeight || '20px'};
  transition: all 0.2s;
  cursor: pointer;

  :hover,
  :focus-visible {
    outline: none;
    background: ${({ primary }) => primary && 'linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #116ACC'};
    background: ${({ secondary }) => secondary && 'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #116ACC'};
  }

  :active {
    background: ${({ primary }) => primary && '  linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #116ACC'};
    background: ${({ secondary }) => secondary && 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #116ACC'};
  }

  @media ${device.mobileS} {
    display: ${({ displayMobileS }) => displayMobileS || ''};
    position: ${({ positionMobileS, position }) => positionMobileS ? positionMobileS : position};
  }

  @media ${device.tablet} {
    display: ${({ displayTablet }) => displayTablet || ''};
    position: ${({ positionTablet, position }) => positionTablet ? positionTablet : position};
  }

  @media ${device.laptop} {
    left: ${({ left }) => left || ''};
  }

  
`

export default Button