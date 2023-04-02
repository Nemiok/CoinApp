import { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import Div from '../atoms/Div'

const Togglable = forwardRef(function Togglable(props, refs) {
  const [visible, setVisible] = useState(false)

  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    props.isVisible ? setVisible(true) : setVisible(false)
  }, [props])

  useImperativeHandle(refs, () => {
    return {
      toggleVisibility,
    }
  })

  return (
    <Div style={showWhenVisible}>
      {props.children}
    </Div>
  )
})
export default Togglable