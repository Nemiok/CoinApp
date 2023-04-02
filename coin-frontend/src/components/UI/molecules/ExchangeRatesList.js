import React from 'react'
import useWebSocketsConnection from '../../../hooks/useWebSocketsConnection'
import Div from '../atoms/Div'
import UnorderedList from '../atoms/UnorderedList'
import ExchangeRatesItem from './ExchangeRatesItem'

const ExchangeRatesList = () => {
  const { currWebSocket, webSocketsArray } = useWebSocketsConnection('currency-feed')
  webSocketsArray[0] === null ? webSocketsArray.shift() : false

  return (
    <>
      <Div
        commonTextColor
        fontFamily='GraphikLCG'
        width='100%'
        fontWeight='700'
        fontSize='20px'
        lineHeight='23px'
        margin='0 0 25px 0'>Изменение курсов в реальном времени</Div>

      <UnorderedList backgroundColor='inherit' width='100%' commonTextColor flexDirectionMobileS='column' rowGap='25px'>
        {webSocketsArray.map(ws => {
          return <ExchangeRatesItem key={ws.rate + Math.random()} from={ws.from} to={ws.to} rate={ws.rate} change={ws.change} />
        })}
      </UnorderedList>
    </>


  )
}

export default ExchangeRatesList