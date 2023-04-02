import React, { useEffect, useState } from 'react'
import { lightTheme, darkTheme } from './assets/themes/themes';
import { ThemeProvider } from 'styled-components'
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/UI/molecules/Notification';
import AccountsPage from './components/pages/AccountsPage';
import { setUserAction } from './reducers/userLoggedReducer';
import CurrentAccountPage from './components/pages/CurrentAccountPage';
import CurrenciesPage from './components/pages/CurrenciesPage';
import Header from './components/UI/organisms/Header';
import NavBar from './components/UI/molecules/NavBar';
import BanksPage from './components/pages/BanksPage';
import { useTheme } from './hooks/useTheme';

const App = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate();
  const notification = useSelector(state => state.notification)
  const userLoggedIn = useSelector(state => state.userLoggedIn)

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInCoinAppUser')
    if (!loggedUserJSON) {
      navigate('/login')
    }
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUserAction(user))
    }
    console.log(theme)
  }, [])
  return (

    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {userLoggedIn.token ?
        <Header toggleTheme={toggleTheme} justifyContent='space-between'>
          <NavBar />
        </Header>
        :
        <Header toggleTheme={toggleTheme} justifyContent='space-between' />}

      <Routes>
        <Route path='/login' exact element={<LoginPage />} />
        <Route path='/accounts' exact element={<AccountsPage />} />
        <Route path='/accounts/:id' exact element={<CurrentAccountPage />} />
        <Route path='/currencies' exact element={<CurrenciesPage />} />
        <Route path='/banks' exact element={<BanksPage />} />
        <Route path='/' exact element={<LoginPage />} />
      </Routes>

      {notification &&
        <Notification flexDirection='column' borderRadius='7px' padding='12px 24px' type={notification.type} max-width='440px' min-width='20vw'
          position='fixed' left='50%' bottom='25px' transform='translateX(-50%)' zIndex='100000'>
          {Array.isArray(notification.message) ? notification.message.map((message, i) => { return <span key={i}>{message}</span> }) : notification.message}
        </Notification>}

    </ThemeProvider>
  )
}

export default App
