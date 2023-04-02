import React from 'react'
import Div from '../../atoms/Div'

const CurrenciesSkeleton = () => {
  return (
    <Div className='animate-pulse' margin='0 0 9px 0' backgroundColor='rgb(199, 199, 199)' width='25%' height='1.5rem' borderRadius='0.5rem'></Div>
  )
}

export default CurrenciesSkeleton