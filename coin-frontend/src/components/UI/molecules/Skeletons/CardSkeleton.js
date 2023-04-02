import React from 'react'
import Div from '../../atoms/Div'

const CardSkeleton = () => {
  return (
    <Div flexDirection='column' minHeight='123px' width='100%'>
      <Div className='animate-pulse' margin='0 0 9px 0' backgroundColor='rgb(199, 199, 199)' width='50%' height='1rem' borderRadius='0.5rem'></Div>

      <Div className='animate-pulse' margin='0 0 30px 0' backgroundColor='rgb(199, 199, 199)' width='25%' height='0.75rem' borderRadius='0.5rem'></Div>

      <Div flexDirection='column'>
        <Div className='animate-pulse' margin='0 0 9px 0' lineHeight='15px' backgroundColor='rgb(199, 199, 199)' width='50%' height='0.75rem' borderRadius='0.5rem'></Div>

        <Div className='animate-pulse' margin='0 0 9px 0' lineHeight='15px' backgroundColor='rgb(199, 199, 199)' width='25%' height='0.75rem' borderRadius='0.5rem'></Div>
      </Div >
    </Div >
  )
}

export default CardSkeleton