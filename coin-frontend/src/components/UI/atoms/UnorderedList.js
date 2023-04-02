import styled from "styled-components";
import { device } from "../../screenResolutions/devices";

const UnorderedList = styled.ul`
  position: ${({ position }) => position || 'static'};
  top: ${({ top }) => top || ''};
  left: ${({ left }) => left || ''};
  right: ${({ right }) => right || ''};
  bottom: ${({ bottom }) => bottom || ''};
  transform: ${({ transform }) => transform || ''};
  z-index: ${({ zIndex }) => zIndex};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || ''};
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  min-width: ${({ minWidth }) => minWidth || ''};
  box-shadow: ${({ boxShadow }) => boxShadow || ''};
  box-sizing: border-box;
  list-style-type: none;
  flex-wrap: wrap;
  column-gap: ${({ columnGap }) => columnGap || '70px'};
  row-gap: ${({ rowGap }) => rowGap || '50px'};
  text-align: ${({ textAlign }) => textAlign || ''};
  font-family: ${({ fontFamily }) => fontFamily || 'Ubuntu'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: ${({ lineHeight }) => lineHeight || '24px'};
  color: ${({ color, commonTextColor, theme }) => commonTextColor && theme.commonTextColor || color || ''};
  
  @media ${device.mobileS} {
    display: ${({ displayMobileS }) => displayMobileS || ''};
    z-index: ${({ zIndexMobileS }) => zIndexMobileS || ''};
    position: ${({ positionMobileS }) => positionMobileS || ''};
    flex-direction: ${({ flexDirectionMobileS }) => flexDirectionMobileS || ''};
  }

  @media ${device.tablet} {
    display: ${({ displayTablet }) => displayTablet || ''};
    z-index: ${({ zIndexTablet }) => zIndexTablet || ''};
    position: ${({ positionTablet }) => positionTablet || ''};
    flex-direction: ${({ flexDirectionTablet }) => flexDirectionTablet || ''};
  }
`
export default UnorderedList