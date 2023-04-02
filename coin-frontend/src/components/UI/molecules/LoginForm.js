import React, { useEffect, useState } from 'react'
import Button from '../atoms/Button'
import FormContainer from '../atoms/FormContainer'
import Input from '../atoms/Input'
import InputLabel from '../atoms/InputLabel'
import PageTitle from '../atoms/PageTitle'
import { useDispatch, useSelector } from 'react-redux'
import { setUsername, setPassword } from '../../../reducers/loginReducer'
import accountServices from '../../../services/accountServices'
import { setUserAction } from '../../../reducers/userLoggedReducer'
import { setNotificationAction } from '../../../reducers/notificationReducer'
import { validate } from '../../../utils/loginValidation'
import { useNavigate } from 'react-router-dom'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

const LoginForm = () => {

  const { height, width } = useWindowDimensions();
  const [shouldBeLowerThanHeader, setBeLowerThanHeader] = useState(false)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInCoinAppUser')
    if (loggedUserJSON) {
      navigate('/accounts')
    }
  }, [])

  useEffect(() => {
    height <= 740 ? setBeLowerThanHeader(true) : setBeLowerThanHeader(false)
  }, [height])


  const navigate = useNavigate()

  const dispatch = useDispatch()

  const login = useSelector(state => state.login.login)
  const password = useSelector(state => state.login.password)

  const handleUsername = (username) => {
    dispatch(setUsername(username))
  }

  const handlePassword = (password) => {
    dispatch(setPassword(password))
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const errorsArray = validate({ login, password })
      if (errorsArray.length !== 0) {
        dispatch(setNotificationAction({ type: 'error', message: errorsArray }, 5000))
        return
      }

      const user = await accountServices.logIn({
        login,
        password
      })

      if (user.payload === null) {
        throw new Error(user.error)
      }

      console.log(user)
      window.localStorage.setItem(
        'loggedInCoinAppUser', JSON.stringify(user)
      )

      dispatch(setUsername(''))
      dispatch(setPassword(''))
      dispatch(setUserAction(user))
      dispatch(setNotificationAction({ type: 'success', message: 'Авторизация успешна' }, 5000))
      navigate('/accounts')
    } catch (exception) {
      console.log(exception)
      dispatch(setNotificationAction({ type: 'error', message: exception.message }, 5000))
    }
  }

  return (
    <FormContainer position='absolute' transform='translate(-50%, -50%)' top={!shouldBeLowerThanHeader ? '50%' : 'calc(50% + 100px)'} left='50%' maxWidth='500px' width='80vw'>

      <PageTitle>Вход в аккаунт</PageTitle>

      <InputLabel htmlFor='login__username'>
        <span style={{ minWidth: 73 + 'px', textAlign: 'center' }}>Логин</span>
        <Input value={login || ''} onChange={({ target }) => handleUsername(target.value)} type='text' id='login__username' placeholder='Введите логин' maxWidth='300px' />
      </InputLabel>

      <InputLabel htmlFor='login__password'>
        <span style={{ minWidth: 73 + 'px', textAlign: 'center' }}>Пароль</span>
        <Input value={password || ''} onChange={({ target }) => handlePassword(target.value)} type='password' id='login__password' placeholder='Введите пароль' maxWidth='300px' />
      </InputLabel>

      <Button onClick={handleLogin} primary position='relative' left='-18%'>Войти</Button>
    </FormContainer>
  )
}

export default LoginForm