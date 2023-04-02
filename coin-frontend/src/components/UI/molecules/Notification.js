import React from 'react'
import Div from '../atoms/Div'

const Notification = (props) => {
  const { children, ...cleanProps } = props
  return (
    <Div {...cleanProps}>
      {children}
    </Div>
  )
}

export default Notification