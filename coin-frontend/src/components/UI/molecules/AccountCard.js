import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCurrentAccountAction } from '../../../reducers/currentAccountReducer'
import processDate from '../../../utils/processDate'
import Button from '../atoms/Button'
import Div from '../atoms/Div'

const AccountCard = (props) => {
  const date = props.date
  const accountNumber = props.accountNumber

  const { DDay, DYear, DMonthName } = processDate(date)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOpenCard = (id) => {
    dispatch(getCurrentAccountAction(id))
    navigate(id)
  }

  return (
    <>
      <Div flexDirection='column' commonTextColor>
        <Div margin='0 0 9px 0'
          fontFamily='Roboto'
          fontWeight='500'
          fontSize='18px'
          lineHeight='22px'
          wordBreakMobileS='break-all' >
          {accountNumber}
        </Div>

        <Div margin='0 0 30px 0'
          fontFamily='Ubuntu'
          fontWeight='400'
          fontSize='14px'
          lineHeight='20px'>
          {props.balance} &#8381;
        </Div>

        <Div flexDirection='column'>
          <Div fontFamily='GraphikLCG'
            fontWeight='700'
            fontSize='13px'
            lineHeight='15px'
          >Последняя транзакция:
          </Div>

          <Div fontFamily='GraphikLCG'
            fontWeight='400'
            fontSize='13px'
            lineHeight='15px'>
            {date ? `${DDay} ${DMonthName} ${DYear}` : 'Нет данных'}
          </Div>
        </Div>
      </Div>

      <Div alignItems='flex-end'>
        <Button onClick={() => handleOpenCard(accountNumber)} primary maxWidth='110px' maxHeight='52px'>
          Открыть
        </Button>
      </Div>
    </>
  )
}

export default AccountCard