import styled from "styled-components";
import { device } from "../../screenResolutions/devices";

const Div = styled.div`
  position: ${({ position }) => position || 'static'};
  top: ${({ top }) => top || ''};
  left: ${({ left }) => left || ''};
  right: ${({ right }) => right || ''};
  bottom: ${({ bottom }) => bottom || ''};
  transform: ${({ transform }) => transform || ''};
  z-index: ${({ zIndex }) => zIndex};
  display: ${({ display }) => display || 'flex'};;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-basis: ${({ flexBasis }) => flexBasis || ''};
  flex-grow: ${({ flexGrow }) => flexGrow || ''};
  flex-wrap: ${({ flexWrap }) => flexWrap || ''};
  grid-template-columns: ${({ templateColumns }) => templateColumns || ''};
  grid-template-rows: ${({ templateRows }) => templateRows || ''};
  gap: ${({ gap }) => gap};
  align-items: ${({ alignItems }) => alignItems || ''};
  align-self: ${({ alignSelf }) => alignSelf || ''};
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  min-width: ${({ minWidth }) => minWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  min-height: ${({ minHeight }) => minHeight || ''};
  overflow: ${({ overflow }) => overflow || ''};
  cursor: ${({ cursor }) => cursor || ''};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || ''};

  background-color: ${({ theme, backgroundColor, formBackgroundColor, type, mainBackgroundColor, minorBackgroundColor, currenciesChangeBackgroundColor }) => type === 'error' && `#FFCDD2`
    || type === 'success' && `rgba(${theme.successColorRGB}, 0.1)`
    || formBackgroundColor && theme.formBackgroundColor
    || mainBackgroundColor && theme.mainBackgroundColor
    || minorBackgroundColor && theme.minorBackgroundColor
    || currenciesChangeBackgroundColor && theme.currenciesChangeBackgroundColor
    || backgroundColor || ''};

  border-radius: ${({ borderRadius }) => borderRadius || ''};
  border: 1px solid ${({ theme, borderColor, type }) => type === 'error' && theme.errorColor || type === 'success' && theme.successColor || borderColor || 'transparent'};
  color: ${({ theme, color, type, commonTextColor }) => type === 'error' && theme.errorColor || type === 'success' && theme.successColor || commonTextColor && theme.commonTextColor || color || ''};
  box-shadow: ${({ boxShadow }) => boxShadow || ''};
  box-sizing: border-box;
  word-break: ${({ wordBreak }) => wordBreak || ''};
  text-align: ${({ textAlign }) => textAlign || ''};
  font-family: ${({ fontFamily }) => fontFamily || 'Ubuntu'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: ${({ lineHeight }) => lineHeight || '24px'};
  overflow-x:  ${({ overflowX }) => overflowX || ''};
  
  @media ${device.mobileS} {
    display: ${({ displayMobileS }) => displayMobileS || ''};
    z-index: ${({ zIndexMobileS }) => zIndexMobileS || ''};
    position: ${({ positionMobileS }) => positionMobileS || ''};
    flex-direction: ${({ flexDirectionMobileS }) => flexDirectionMobileS || ''};
    word-break: ${({ wordBreakMobileS }) => wordBreakMobileS || ''};
    grid-template-columns: ${({ templateColumnsMobileS }) => templateColumnsMobileS || ''};
    grid-template-rows: ${({ templateRowsMobileS }) => templateRowsMobileS || ''};
  }

  @media ${device.tablet} {
    display: ${({ displayTablet }) => displayTablet || ''};
    z-index: ${({ zIndexTablet }) => zIndexTablet || ''};
    position: ${({ positionTablet }) => positionTablet || ''};
    flex-direction: ${({ flexDirectionTablet }) => flexDirectionTablet || ''};
    word-break: initial;
  }

  @media ${device.laptop} {
    display: ${({ displayLaptop }) => displayLaptop || ''};
    z-index: ${({ zIndexLaptop }) => zIndexLaptop || ''};
    position: ${({ positionLaptop }) => positionLaptop || ''};
    flex-direction: ${({ flexDirectionLaptop }) => flexDirectionLaptop || ''};
    word-break: initial;
    grid-template-columns: ${({ templateColumnsLaptop }) => templateColumnsLaptop || ''};
    grid-template-rows: ${({ templateRowsLaptop }) => templateRowsLaptop || ''};
  }
`

export default Div