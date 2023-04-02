import React from 'react'
import styled from 'styled-components'
import { device } from '../../screenResolutions/devices'

const InputLabel = styled.label`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
gap: 18px;
color: ${({ theme }) => theme.labelTextColor};
font-family: 'Ubuntu';
font-weight: 500;
font-size: 16px;
line-height: 20px;
margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom || '25px'};
color: ${({ theme }) => theme.commonTextColor};


@media ${device.mobileS} {
  flex-direction: column;
}

/* @media ${device.tablet} {
  flex-direction: row;
} */

@media ${device.laptop} {
  flex-direction: row;
}
`

export default InputLabel