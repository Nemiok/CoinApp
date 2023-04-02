import styled from "styled-components";
import { device } from "../../screenResolutions/devices";

const Nav = styled.nav`
  position: ${({ position }) => position || 'static'};
  top: ${({ top }) => top || ''};
  left: ${({ left }) => left || ''};
  right: ${({ right }) => right || ''};
  bottom: ${({ bottom }) => bottom || ''};
  transform: ${({ transform }) => transform || ''};
  z-index: ${({ zIndex }) => zIndex};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding || '0'};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  min-width: ${({ minWidth }) => minWidth || ''};
  box-shadow: ${({ boxShadow }) => boxShadow || ''};
  gap: ${({ gap }) => gap || ''};
  font-family: 'Ubuntu';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  top: ${({ top }) => top || ''};
  left: ${({ left }) => left || ''};
  box-sizing: border-box;
  margin: ${({ margin }) => margin || '0'};

  @media ${device.mobileS} {
    display: ${({ displayMobileS }) => displayMobileS || 'flex'};
    flex-direction: column;
    position: ${({ positionMobileS }) => positionMobileS || ''};
    align-items: center;
    padding: 20px;
    margin: 0;
    width: 100vw;
    background-color: ${({ theme }) => theme.buttonPrimaryBackgroundColor || ''};
  }

  @media ${device.tablet} {
    display: flex;
    width: ${({ width }) => width || 'max-content'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    padding: ${({ padding }) => padding || '0'};
    position: ${({ positionTablet }) => positionTablet || ''};
  }
`

export default Nav