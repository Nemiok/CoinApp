import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import Button from '../atoms/Button'
import Div from '../atoms/Div'
import FormContainer from '../atoms/FormContainer'
import Input from '../atoms/Input'
import InputLabel from '../atoms/InputLabel'
import CurrencySelect from './CurrencySelect'
import { useDispatch, useSelector } from 'react-redux'
import { getNonEmptyCurrencies } from '../../../utils/getNonEmptyCurrencies'
import { validateExchangeForm } from '../../../utils/validateExchangeForm'
import { setNotificationAction } from '../../../reducers/notificationReducer'
import accountServices from '../../../services/accountServices'
import { getUserCurrenciesAction } from '../../../reducers/userCurrenciesReducer'

const ExchangeForm = memo(() => {
  const dispatch = useDispatch()

  const [exchangeAmount, setExchangeAmount] = useState('')

  const currencies = useSelector(state => state.currencies)

  const fromSelectRef = useRef()
  const toSelectRef = useRef()

  const optionsForExchangeSelect = []

  const nonEmptyCurrenciesArray = useMemo(() => getNonEmptyCurrencies(currencies), [currencies])
  const upToDateFrom = nonEmptyCurrenciesArray.find(el => el.code === fromSelectRef.current?.value?.label)
  const upToDateTo = nonEmptyCurrenciesArray.find(el => el.code === toSelectRef.current?.value?.label)

  console.log(upToDateFrom, upToDateTo)

  const upToDateFromStandartized = {
    value: upToDateFrom?.amount,
    label: upToDateFrom?.code
  }

  const upToDateToStandartized = {
    value: upToDateTo?.amount,
    label: upToDateTo?.code
  }

  let optionsSelected = {
    from: upToDateFromStandartized || null,
    to: upToDateToStandartized || null,
    amount: exchangeAmount
  }

  nonEmptyCurrenciesArray.forEach(curr => {
    optionsForExchangeSelect.push({
      value: curr.amount,
      label: curr.code
    })
  })

  const handleSelect = () => {
    optionsSelected = {
      from: fromSelectRef.current.value,
      to: toSelectRef.current.value,
      amount: exchangeAmount
    }
    console.log(optionsSelected)
  }

  const handleExchangeCurrencies = async (e) => {
    e.preventDefault()
    console.log(optionsSelected)
    const errorOfValidation = validateExchangeForm(optionsSelected)

    if (errorOfValidation.length != 0) {
      dispatch(setNotificationAction({ type: 'error', message: errorOfValidation }, 5000))
      return
    }

    const exchangeResult = await accountServices.buyCurrency({
      from: optionsSelected.from.label,
      to: optionsSelected.to.label,
      amount: optionsSelected.amount
    })

    setExchangeAmount('')
    dispatch(getUserCurrenciesAction(exchangeResult))
    dispatch(setNotificationAction({ type: 'success', message: 'Перевод успешно совершён' }, 5000))
  }

  const handleSetExchangeAmount = (amount) => {
    setExchangeAmount(amount)
  }

  return (
    <FormContainer padding='50px' width='100%' maxHeight='273px'>
      <Div fontFamily='GraphikLCG'
        fontWeight='700'
        fontSize='20px'
        lineHeight='23px'
        margin='0 0 25px 0'
        alignSelf='flex-start'
        textAlign='left'>
        Обмен валюты
      </Div>

      <Div width='100%' gap='25px' justifyContent='space-between' height='100%' flexGrow='1' flexDirectionMobileS='column' flexDirectionTablet='row'>
        <Div flexBasis='80%' flexDirection='column' gap='25px' justifyContent='space-between'>

          <Div justifyContent='space-between' alignItems='center' flexDirectionMobileS='column' flexDirectionTablet='row' gap='25px'>
            <Div gap='20px' alignItems='center'>
              <Div
                fontFamily='Ubuntu'
                fontWeight='500'
                fontSize='16px'
                lineHeight='20px'
              >Из</Div>
              <CurrencySelect ref={fromSelectRef} handleSelect={handleSelect} optionsForExchangeSelect={optionsForExchangeSelect} />
            </Div>

            <Div gap='20px' alignItems='center'>
              <Div
                fontFamily='Ubuntu'
                fontWeight='500'
                fontSize='16px'
                lineHeight='20px'
              >в</Div>
              <CurrencySelect ref={toSelectRef} handleSelect={handleSelect} optionsForExchangeSelect={optionsForExchangeSelect} />
            </Div>
          </Div>

          <Div>
            <InputLabel marginBottom='0' htmlFor='exchange__amount'>
              <span>Сумма</span>
              <Input value={exchangeAmount} onChange={(e) => handleSetExchangeAmount(e.target.value)} type='number' id='exchange__amount' placeholder='Введите сумму' />
            </InputLabel>
          </Div>
        </Div>
        <Div>
          <Button onClick={handleExchangeCurrencies} width='100%' primary>Обменять</Button>
        </Div>
      </Div>
    </FormContainer>
  )
})

export default ExchangeForm