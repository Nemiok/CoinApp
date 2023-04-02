import styled, { css } from "styled-components";
import { device } from "../../screenResolutions/devices";

const dottedBefore = css`

 &:before {
  content: '';
  position: absolute;
  bottom: .4rem;
  text-align: center;
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  height: 0;
  line-height: 0;
  border-bottom: 1px dashed;
  border-color: ${({ color, borderColorBefore }) => borderColorBefore ? borderColorBefore : color || 'inherit'};;
 }
`

const ListItem = styled.li`
  position: ${({ position }) => position || ''};
  top: ${({ top }) => top || ''};
  left: ${({ left }) => left || ''};
  right: ${({ right }) => right || ''};
  bottom: ${({ bottom }) => bottom || ''};
  transform: ${({ transform }) => transform || ''};
  z-index: ${({ zIndex }) => zIndex};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-basis: ${({ flexBasis }) => flexBasis || ''};
  flex-grow: ${({ flexGrow }) => flexGrow || ''};
  align-items: ${({ alignItems }) => alignItems || ''};
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  min-width: ${({ minWidth }) => minWidth || ''};
  background-color: ${({ theme, backgroundColor, type, minorBackgroundColor }) => type === 'error' && `rgba(${theme.errorColorRGB}, 0.1)` || type === 'success' && `rgba(${theme.successColorRGB}, 0.1)` || minorBackgroundColor && theme.minorBackgroundColor || backgroundColor || ''};
  border-radius: ${({ borderRadius }) => borderRadius || ''};
  box-shadow: ${({ boxShadow }) => boxShadow || ''};
  box-sizing: border-box;
  text-align: ${({ textAlign }) => textAlign || ''};
  font-family: ${({ fontFamily }) => fontFamily || 'Ubuntu'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: ${({ lineHeight }) => lineHeight || '24px'};
  color: ${({ color, commonTextColor, theme }) => commonTextColor && theme.commonTextColor || color || ''};

  ${props => props.hasDottedBefore && dottedBefore}
  
  @media ${device.mobileS} {
    display: ${({ displayMobileS }) => displayMobileS || ''};
    z-index: ${({ zIndexMobileS }) => zIndexMobileS || ''};
    position: ${({ positionMobileS }) => positionMobileS || ''};
    flex-direction: ${({ flexDirectionMobileS }) => flexDirectionMobileS || ''};
    flex-basis: ${({ flexBasisMobileS }) => flexBasisMobileS || ''};
  }

  @media ${device.tablet} {
    display: ${({ displayTablet }) => displayTablet || ''};
    z-index: ${({ zIndexTablet }) => zIndexTablet || ''};
    position: ${({ positionTablet }) => positionTablet || ''};
    flex-direction: ${({ flexDirectionTablet }) => flexDirectionTablet || ''};
    flex-basis: ${({ flexBasisTablet }) => flexBasisTablet || ''};
  }

`

export default ListItem