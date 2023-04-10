import { validateLogin, errorsReturnTextLogVal, validatePassword } from "../loginValidation"


describe('Login validation works as expected', () => {
  it('username must be longer than 6 characters', () => {
    expect(validateLogin('12345')).toMatch(errorsReturnTextLogVal.SHORT_LOGIN)
  })

  it('username must have no spaces', () => {
    expect(validateLogin('12345    ')).toMatch(errorsReturnTextLogVal.NO_LOGIN_SPACES)
  })
})

describe('Password validation works as expected', () => {
  it('password must be longer than 6 characters', () => {
    expect(validatePassword('12345')).toMatch(errorsReturnTextLogVal.SHORT_PASSWORD)
  })

  it('password must have no spaces', () => {
    expect(validatePassword('12345    ')).toMatch(errorsReturnTextLogVal.NO_PASSWORD_SPACES)
  })
})