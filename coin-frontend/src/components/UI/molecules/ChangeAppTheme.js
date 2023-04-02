import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

import Button from '../atoms/Button';
import Svg from '../atoms/svgIcon';

const ChangeAppThemeButton = (props) => {

  const theme = useContext(ThemeContext)

  const [buttonShouldShrink, setButtonShrink] = useState(false)

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    width <= 940 ? setButtonShrink(true) : setButtonShrink(false)
  }, [width])


  return (
    <Button onClick={props.toggleTheme} display='flex' fontSize='16px' gap='8px' secondary tabIndex={0}>
      <Svg width="18px" height="18px" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.2839 12.0429L13.2838 12.0429C13.2113 12.0351 13.1417 12.0276 13.0749 12.0205C12.3917 11.9472 12.0097 11.9062 11.954 11.9024C11.4492 11.8675 10.917 11.8884 10.4745 12.1128C10.2289 12.2373 10.0126 12.4238 9.86025 12.6775C9.71276 12.9233 9.65894 13.176 9.64447 13.388C9.61827 13.7717 9.71659 14.1649 9.78421 14.4249C9.80728 14.5136 9.82966 14.5965 9.85114 14.676C9.90644 14.8808 9.95579 15.0636 9.99563 15.2669C10.1342 15.9744 9.59902 16.5 9 16.5C6.92866 16.5 5.05503 15.6616 3.6967 14.3033C2.33837 12.945 1.5 11.0713 1.5 9C1.5 6.92866 2.33837 5.05503 3.6967 3.6967C5.05503 2.33837 6.92866 1.5 9 1.5C11.0713 1.5 12.945 2.33837 14.3033 3.6967C15.6616 5.05503 16.5 6.92866 16.5 9C16.5 10.414 16.0434 11.1534 15.5314 11.5478C14.9854 11.9683 14.1903 12.1401 13.2839 12.0429C13.2839 12.0429 13.2839 12.0429 13.2839 12.0429Z" stroke="#2C2D2E" strokeWidth="2" />
        <rect x="9.80005" y="3.79999" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E" />
        <rect x="12.2" y="7.20001" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E" />
        <rect x="3.30005" y="7.20001" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E" />
        <rect x="5.59998" y="3.79999" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E" />
      </Svg>

      {!buttonShouldShrink ? `Тема: ${theme.mainBackgroundColor === '#FFF' ? 'светлая' : 'тёмная'}` : ''}
    </Button>
  );
};

export default ChangeAppThemeButton;
