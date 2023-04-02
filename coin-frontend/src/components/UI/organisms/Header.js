import React, { useEffect, useRef, useState } from 'react'
import { useMatch } from 'react-router-dom'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import Button from '../atoms/Button'
import Div from '../atoms/Div'
import HeaderContainer from '../atoms/HeaderContainer'
import Svg from '../atoms/svgIcon'
import Burger from '../molecules/Burger'
import ChangeAppThemeButton from '../molecules/ChangeAppTheme'
import Togglable from '../molecules/Togglable'

const Header = (props) => {
  const { children, ...cleanProps } = props

  const navRef = useRef()

  const match = useMatch('/login')

  const { height, width } = useWindowDimensions();

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    width >= 768 ? setIsVisible(true) : setIsVisible(false)
  }, [width])

  const toggleNavbar = () => {
    navRef.current.toggleVisibility()
  }

  return (
    <HeaderContainer {...cleanProps}>
      <Div alignItems='center' gap='25px'>

        <a href='/accounts'>
          <Svg width="106" height="50" viewBox="0 0 106 34">
            <path d="M28.048 24.984C27.44 26.744 26.528 28.264 25.312 29.544C24.128 30.824 22.688 31.8 20.992 32.472C19.328 33.144 17.456 33.48 15.376 33.48C12.496 33.48 9.968 32.824 7.792 31.512C5.648 30.168 3.968 28.28 2.752 25.848C1.568 23.416 0.976 20.52 0.976 17.16C0.976 13.8 1.568 10.904 2.752 8.472C3.936 6.04 5.6 4.168 7.744 2.856C9.92 1.512 12.448 0.839999 15.328 0.839999C17.472 0.839999 19.344 1.144 20.944 1.752C22.576 2.328 23.952 3.208 25.072 4.392C26.192 5.544 27.04 6.968 27.616 8.664L25.264 9.768C24.528 7.56 23.36 5.896 21.76 4.776C20.16 3.624 18.064 3.048 15.472 3.048C13.104 3.048 11.008 3.624 9.184 4.776C7.392 5.896 5.984 7.512 4.96 9.624C3.968 11.704 3.472 14.216 3.472 17.16C3.472 20.072 3.968 22.584 4.96 24.696C5.952 26.808 7.344 28.44 9.136 29.592C10.928 30.712 13.008 31.272 15.376 31.272C17.936 31.272 20.112 30.664 21.904 29.448C23.696 28.2 24.944 26.408 25.648 24.072L28.048 24.984ZM43.939 8.52C46.179 8.52 48.147 9.016 49.843 10.008C51.571 11 52.915 12.44 53.875 14.328C54.867 16.184 55.363 18.408 55.363 21C55.363 23.592 54.867 25.832 53.875 27.72C52.915 29.576 51.571 31 49.843 31.992C48.147 32.984 46.179 33.48 43.939 33.48C41.699 33.48 39.715 32.984 37.987 31.992C36.291 31 34.947 29.576 33.955 27.72C32.995 25.832 32.515 23.592 32.515 21C32.515 18.408 32.995 16.184 33.955 14.328C34.947 12.44 36.291 11 37.987 10.008C39.715 9.016 41.699 8.52 43.939 8.52ZM43.939 10.584C42.115 10.584 40.531 11 39.187 11.832C37.843 12.664 36.787 13.864 36.019 15.432C35.283 16.968 34.915 18.824 34.915 21C34.915 23.144 35.283 25 36.019 26.568C36.787 28.136 37.843 29.336 39.187 30.168C40.531 31 42.115 31.416 43.939 31.416C45.763 31.416 47.347 31 48.691 30.168C50.035 29.336 51.075 28.136 51.811 26.568C52.579 25 52.963 23.144 52.963 21C52.963 18.824 52.579 16.968 51.811 15.432C51.075 13.864 50.035 12.664 48.691 11.832C47.347 11 45.763 10.584 43.939 10.584ZM63.4251 4.344C62.8171 4.344 62.3211 4.168 61.9371 3.816C61.5851 3.432 61.4091 2.936 61.4091 2.328C61.4091 1.72 61.5851 1.24 61.9371 0.887999C62.3211 0.503998 62.8171 0.311997 63.4251 0.311997C64.0331 0.311997 64.5131 0.503998 64.8651 0.887999C65.2491 1.24 65.4411 1.72 65.4411 2.328C65.4411 2.936 65.2491 3.432 64.8651 3.816C64.5131 4.168 64.0331 4.344 63.4251 4.344ZM64.6251 9V33H62.2251V9H64.6251ZM73.147 33V9H75.307L75.499 15L75.115 14.664C75.563 13.352 76.235 12.248 77.131 11.352C78.027 10.424 79.099 9.72 80.347 9.24C81.595 8.76 82.939 8.52 84.379 8.52C86.171 8.52 87.755 8.856 89.131 9.528C90.507 10.2 91.579 11.192 92.347 12.504C93.147 13.816 93.547 15.464 93.547 17.448V33H91.147V18.216C91.147 15.592 90.491 13.672 89.179 12.456C87.899 11.24 86.219 10.632 84.139 10.632C82.635 10.632 81.227 10.984 79.915 11.688C78.635 12.36 77.579 13.352 76.747 14.664C75.947 15.976 75.547 17.576 75.547 19.464V33H73.147ZM102.843 29.064C103.483 29.064 103.995 29.272 104.379 29.688C104.795 30.072 105.003 30.584 105.003 31.224C105.003 31.864 104.795 32.392 104.379 32.808C103.995 33.192 103.483 33.384 102.843 33.384C102.203 33.384 101.675 33.192 101.259 32.808C100.875 32.392 100.683 31.864 100.683 31.224C100.683 30.584 100.875 30.072 101.259 29.688C101.675 29.272 102.203 29.064 102.843 29.064Z" fill="white" />
          </Svg>
        </a>

        <ChangeAppThemeButton toggleTheme={cleanProps.toggleTheme} />
      </Div>

      <Togglable ref={navRef} isVisible={isVisible}>
        {children}
      </Togglable>

      {!match && <Button positionMobileS='static' positionTablet='absolute' height='46px' padding='0' backgroundColor='transparent' onClick={toggleNavbar} >
        <Burger />
      </Button>}
    </HeaderContainer>
  )
}

export default Header