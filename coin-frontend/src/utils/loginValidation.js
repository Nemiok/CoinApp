export const errorsReturnTextLogVal = {
  SHORT_LOGIN: 'Логин должен иметь хотя-бы 6 символов',
  NO_LOGIN_SPACES: 'Логин должен быть без пробелов',
  SHORT_PASSWORD: 'Пароль должен иметь хотя-бы 6 символов',
  NO_PASSWORD_SPACES: 'Пароль должен быть без пробелов'
}

export const validateLogin = (login) => {
  if (login.length < 6) {
    return errorsReturnTextLogVal.SHORT_LOGIN
  }

  if (login.includes(' ')) {
    return errorsReturnTextLogVal.NO_LOGIN_SPACES
  }

  return true
}

export const validatePassword = (password) => {
  if (password.length < 6) {
    return errorsReturnTextLogVal.SHORT_PASSWORD
  }

  if (password.includes(' ')) {
    return errorsReturnTextLogVal.NO_PASSWORD_SPACES
  }

  return true
}

export const validate = ({ login, password }) => {
  const errorsArray = []

  const isLoginValid = validateLogin(login)
  const isPasswordValid = validatePassword(password)

  isLoginValid !== true && errorsArray.push(isLoginValid)
  isPasswordValid !== true && errorsArray.push(isPasswordValid)

  return errorsArray
}

