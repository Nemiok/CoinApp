import { createGlobalStyle } from "styled-components";

import UbuntuLightWoff from '../fonts/Ubuntu-Light.woff'
import UbuntuLightWoff2 from '../fonts/Ubuntu-Light.woff2'

import UbuntuRegularWoff from '../fonts/Ubuntu-Regular.woff'
import UbuntuRegularWoff2 from '../fonts/Ubuntu-Regular.woff2'

import UbuntuMediumWoff from '../fonts/Ubuntu-Medium.woff'
import UbuntuMediumWoff2 from '../fonts/Ubuntu-Medium.woff2'

import UbuntuBoldWoff from '../fonts/Ubuntu-Bold.woff'
import UbuntuBoldWoff2 from '../fonts/Ubuntu-Bold.woff2'

import RobotoRegularWoff from '../fonts/Roboto-Regular.woff'
import RobotoRegularWoff2 from '../fonts/Roboto-Regular.woff2'

import RobotoMediumWoff from '../fonts/Roboto-Medium.woff'
import RobotoMediumWoff2 from '../fonts/Roboto-Medium.woff2'

import GraphikLCGLightWoff from '../fonts/GraphikLCG-Light.woff'
import GraphikLCGLightWoff2 from '../fonts/GraphikLCG-Light.woff2'

import GraphikLCGRegularWoff from '../fonts/GraphikLCG-Regular.woff'
import GraphikLCGRegularWoff2 from '../fonts/GraphikLCG-Regular.woff2'

import GraphikLCGMediumWoff from '../fonts/GraphikLCG-Medium.woff'
import GraphikLCGMediumWoff2 from '../fonts/GraphikLCG-Medium.woff2'

import GraphikLCGSemiBoldWoff from '../fonts/GraphikLCG-SemiBold.woff'
import GraphikLCGSemiBoldWoff2 from '../fonts/GraphikLCG-SemiBold.woff2'

import GraphikLCGBoldWoff from '../fonts/GraphikLCG-Bold.woff'
import GraphikLCGBoldWoff2 from '../fonts/GraphikLCG-Bold.woff2'

const Fonts = createGlobalStyle`

@font-face {
  font-family: 'Ubuntu';
  src: local('Ubuntu'),
      url(${UbuntuLightWoff2}) format('woff2'),
      url(${UbuntuLightWoff}) format('woff');
  font-weight: 300;
}

@font-face {
  font-family: 'Ubuntu';
  src: local('Ubuntu'),
      url(${UbuntuRegularWoff2}) format('woff2'),
      url(${UbuntuRegularWoff}) format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'Ubuntu';
  src: local('Ubuntu'),
      url(${UbuntuMediumWoff2}) format('woff2'),
      url(${UbuntuMediumWoff}) format('woff');
  font-weight: 500;
}

@font-face {
  font-family: 'Ubuntu';
  src: local('Ubuntu'), 
      url(${UbuntuBoldWoff2}) format('woff2'),
      url(${UbuntuBoldWoff}) format('woff');
  font-weight: 700;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto'),  
      url(${RobotoRegularWoff2}) format('woff2'),
      url(${RobotoRegularWoff}) format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto'),   
      url(${RobotoMediumWoff2}) format('woff2'),
      url(${RobotoMediumWoff}) format('woff');
  font-weight: 500;
}

@font-face {
  font-family: 'GraphikLCG';
  src: local('GraphikLCG'),   
      url(${GraphikLCGLightWoff2}) format('woff2'),
      url(${GraphikLCGLightWoff}) format('woff');
  font-weight: 300;
}

@font-face {
  font-family: 'GraphikLCG';
  src: local('GraphikLCG'),  
      url(${GraphikLCGRegularWoff2}) format('woff2'),
      url(${GraphikLCGRegularWoff}) format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'GraphikLCG';
  src: local('GraphikLCG'), 
      url(${GraphikLCGMediumWoff2}) format('woff2'),
      url(${GraphikLCGMediumWoff}) format('woff');
  font-weight: 500;
}

@font-face {
  font-family: 'GraphikLCG';
  src: local('GraphikLCG'),  
      url(${GraphikLCGSemiBoldWoff2}) format('woff2'),
      url(${GraphikLCGSemiBoldWoff}) format('woff');
  font-weight: 600;
}

@font-face {
  font-family: 'GraphikLCG';
  src: local('GraphikLCG'),   
      url(${GraphikLCGBoldWoff2}) format('woff2'),
      url(${GraphikLCGBoldWoff}) format('woff');
  font-weight: 700;
}


`;

export default Fonts;