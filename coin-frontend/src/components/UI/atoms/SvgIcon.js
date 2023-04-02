import styled from "styled-components";

const SvgIcon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``

const Svg = styled(SvgIcon)`
width: ${({ width }) => width};
height: ${({ height }) => height};
padding: ${({ padding }) => padding};
vertical-align: ${({ verticalAlign }) => verticalAlign};
stroke-width: ${({ strokeWidth }) => strokeWidth};

path {
  fill: ${({ theme, fill }) => fill ? fill : theme.appLogoColor ? theme.appLogoColor : 'yellow'};
}
`
export default Svg