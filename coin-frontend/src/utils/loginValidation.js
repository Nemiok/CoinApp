const validateLogin = (login) => {
  if (login.length < 6) {
    return 'Логин должен иметь хотя-бы 6 символов'
  }

  if (login.includes(' ')) {
    return 'Логин должен быть без пробелов'
  }

  return true
}

const validatePassword = (password) => {
  if (password.length < 6) {
    return 'Пароль должен иметь хотя-бы 6 символов'
  }

  if (password.includes(' ')) {
    return 'Пароль должен быть без пробелов'
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

