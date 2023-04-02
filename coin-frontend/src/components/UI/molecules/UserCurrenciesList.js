import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCurrenciesAction } from '../../../reducers/userCurrenciesReducer'
import Div from '../atoms/Div'
import ListItem from '../atoms/ListItem'
import UnorderedList from '../atoms/UnorderedList'

const UserCurrenciesList = () => {
  const dispatch = useDispatch()
  const currencies = useSelector(state => state.currencies)
  useEffect(() => {
    dispatch(getUserCurrenciesAction())
  }, [])

  const [currenciesArray, setCurrenciesArray] = useState([])

  useEffect(() => {
    currencies && setCurrenciesArray(Object.entries(currencies))
    console.log(currenciesArray)
  }, [currencies])

  return (
    <>
      <Div
        commonTextColor
        fontFamily='GraphikLCG'
        width='100%'
        fontWeight='700'
        fontSize='20px'
        lineHeight='23px'
        margin='0 0 25px 0'>Ваши валюты</Div>

      <UnorderedList commonTextColor flexDirectionMobileS='column' rowGap='25px'>
        {currenciesArray && currenciesArray.map(el => {

          return <ListItem color='inherit' position='relative' hasDottedBefore justifyContent='space-between' key={`${el[0]}/${el[1].amount}`}>
            <Div
              fontFamily='GraphikLCG'
              fontWeight='600'
              fontSize='20px'
              lineHeight='23px'
              letterSpacing='0.1em'
              color='inherit' minorBackgroundColor zIndex='100'>{el[1].code}</Div>
            <Div
              fontFamily='GraphikLCG'
              fontWeight='400'
              fontSize='20px'
              lineHeight='23px'
              letterSpacing='0.1em'
              color='inherit' minorBackgroundColor zIndex='100'>{(el[1].amount).toLocaleString()}</Div>
          </ListItem>
        })}
      </UnorderedList>
    </>
  )
}

export default UserCurrenciesList