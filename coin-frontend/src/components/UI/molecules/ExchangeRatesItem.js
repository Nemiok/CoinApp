import React from 'react'
import Div from '../atoms/Div'
import ListItem from '../atoms/ListItem'
import Svg from '../atoms/svgIcon'

const ExchangeRatesItem = ({ from, to, rate, change }) => {
  return (
    <>
      {change === 1 ? <ListItem color='inherit' position='relative' hasDottedBefore borderColorBefore='#FD4E5D' justifyContent='space-between'>
        <Div
          currenciesChangeBackgroundColor
          commonTextColor
          fontFamily='GraphikLCG'
          fontWeight='600'
          fontSize='20px'
          lineHeight='23px'
          backgroundColor='inherit'
          color='inherit'
          alignItems='center'
          letterSpacing='0.1em'
          zIndex='100'>{from}/{to}</Div>
        <Div
          currenciesChangeBackgroundColor
          commonTextColor
          fontFamily='GraphikLCG'
          fontWeight='400'
          fontSize='20px'
          lineHeight='23px'
          backgroundColor='inherit'
          color='inherit'
          alignItems='center'
          letterSpacing='0.1em'
          zIndex='100'>
          {rate.toLocaleString()}
          <Svg fill='#FD4E5D' width="20" height="10" viewBox="0 0 20 10">
            <path d="M0 0L10 10L20 0H0Z" fill="#FD4E5D" />
          </Svg>
        </Div>
      </ListItem> :

        change === -1 ? <ListItem backgroundColor='inherit' color='inherit' position='relative' hasDottedBefore borderColorBefore='#76CA66' justifyContent='space-between'>
          <Div
            currenciesChangeBackgroundColor
            fontFamily='GraphikLCG'
            fontWeight='600'
            fontSize='20px'
            lineHeight='23px'
            backgroundColor='inherit'
            color='inherit'
            alignItems='center'
            letterSpacing='0.1em'
            zIndex='100'>{from}/{to}</Div>
          <Div
            currenciesChangeBackgroundColor
            fontFamily='GraphikLCG'
            fontWeight='400'
            fontSize='20px'
            lineHeight='23px'
            backgroundColor='inherit'
            color='inherit'
            alignItems='center'
            letterSpacing='0.1em'
            zIndex='100'>
            {rate.toLocaleString()}
            <Svg fill='#76CA66' width="20" height="10" viewBox="0 0 20 10">
              <path d="M20 10L10 0L0 10L20 10Z" fill="#76CA66" />
            </Svg>

          </Div>
        </ListItem> :

          <ListItem backgroundColor='#E5E5E5' color='inherit' position='relative' hasDottedBefore justifyContent='space-between'>
            <Div
              fontFamily='GraphikLCG'
              fontWeight='600'
              fontSize='20px'
              lineHeight='23px'
              backgroundColor='inherit'
              color='inherit'

              letterSpacing='0.1em'
              zIndex='100'>{from}/{to}</Div>
            <Div
              fontFamily='GraphikLCG'
              fontWeight='400'
              fontSize='20px'
              lineHeight='23px'
              backgroundColor='inherit'
              color='inherit'

              letterSpacing='0.1em'
              zIndex='100'>{rate.toLocaleString()}</Div>
          </ListItem>}

    </>
  )
}

export default ExchangeRatesItem