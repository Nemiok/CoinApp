import React from 'react'
import Div from '../atoms/Div'
import LoginForm from '../molecules/LoginForm'

const LoginTemplate = () => {
  return (
    <>
      <main>
        <Div mainBackgroundColor minHeight='100vh'>
          <LoginForm />
        </Div>
      </main>
    </>
  )
}

export default LoginTemplate