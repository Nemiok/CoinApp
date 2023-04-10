import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './organisms/Header'
import NavBar from './molecules/NavBar'
import Notification from './molecules/Notification'
import { useTheme } from '../../hooks/useTheme'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../assets/themes/themes'

const Layout = () => {
  const userLoggedIn = useSelector(state => state.userLoggedIn)
  const notification = useSelector(state => state.notification)


  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  };

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {userLoggedIn.token ?
          <Header toggleTheme={toggleTheme} justifyContent='space-between'>
            <NavBar />
          </Header>
          :
          <Header toggleTheme={toggleTheme} justifyContent='space-between' />}
        <Outlet />
        {notification &&
          <Notification flexDirection='column' borderRadius='7px' padding='12px 24px' type={notification.type} max-width='440px' min-width='20vw'
            position='fixed' left='50%' bottom='25px' transform='translateX(-50%)' zIndex='100000'>
            {Array.isArray(notification.message) ? notification.message.map((message, i) => { return <span key={i}>{message}</span> }) : notification.message}
          </Notification>}
      </ThemeProvider>
    </>
  )
}

export default Layout