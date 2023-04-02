import React from 'react'
import Div from '../atoms/Div'

const CurrentAccountHead = ({ account, balance }) => {

  return (
    <Div commonTextColor flexDirectionLaptop='row' flexDirectionMobileS='column' width='100%' justifyContent='space-between' alignItems='center'>
      <Div wordBreakMobileS='break-all' fontWeight='400'
        fontSize='34px'
        lineHeight='40px'>№ {account}</Div>
      <Div gap='50px'>
        <Div fontWeight='700'
          fontSize='20px'
          lineHeight='23px'>Баланс</Div>
        <Div fontWeight='400'
          fontSize='20px'
          lineHeight='23px'>{balance}</Div>
      </Div>
    </Div>
  )
}

export default CurrentAccountHead