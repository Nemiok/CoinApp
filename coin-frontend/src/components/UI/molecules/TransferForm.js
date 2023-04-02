import React, { useState } from 'react'
import Button from '../atoms/Button'
import Div from '../atoms/Div'
import FormContainer from '../atoms/FormContainer'
import Input from '../atoms/Input'
import InputLabel from '../atoms/InputLabel'
import Svg from '../atoms/svgIcon'
import accountServices from '../../../services/accountServices'
import { useDispatch, useSelector } from 'react-redux'
import { setNotificationAction } from '../../../reducers/notificationReducer'
import { validate } from '../../../utils/transferValidate'
import { getCurrentUserAction } from '../../../reducers/currentAccountReducer'
import { countLastNMonths } from '../../../utils/countBalanceDynamics'

const TransferForm = () => {
  const currentAccount = useSelector(state => state.currentAccount.account)

  const [transferAccount, setTransferAccount] = useState('')
  const [transferAmount, setTransferAmount] = useState('')

  const handleAccountChange = (account) => {
    setTransferAccount(account)
  }

  const handleAmountChange = (amount) => {
    setTransferAmount(amount)
  }

  const dispatch = useDispatch()

  const handleTransaction = async (e) => {
    e.preventDefault()

    try {
      const errorsArray = validate({ transferAccount, transferAmount })

      if (errorsArray.length !== 0) {
        dispatch(setNotificationAction({ type: 'error', message: errorsArray }, 5000))
        return
      }

      const transactionAccount = await accountServices.transferMoney({
        from: currentAccount,
        to: transferAccount.trim(),
        amount: transferAmount.trim()
      })

      if (transactionAccount === null) {
        throw new Error('Неправильный номер счёта или недостаточно средств')
      }

      setTransferAccount('')
      setTransferAmount('')
      dispatch(getCurrentUserAction(transactionAccount.account))
      dispatch(setNotificationAction({ type: 'success', message: 'Транзакция успешна' }, 5000))
      currentAccount && currentAccount.transactions && countLastNMonths(currentAccount.transactions, currentAccount.balance, -6)
    } catch (exception) {
      console.log(exception)
      dispatch(setNotificationAction({ type: 'error', message: exception.message }, 5000))
    }


  }

  return (
    <FormContainer padding='25px 50px' flexBasis='45%' flexGrow='1'>
      <Div fontFamily='GraphikLCG'
        fontWeight='700'
        fontSize='20px'
        lineHeight='23px'
        margin='0 0 25px 0'
        alignSelf='flex-start'>
        Новый перевод
      </Div>
      <InputLabel htmlFor='transfer__account_recipient'>
        <span style={{ minWidth: '180px' }}>Номер счёта получателя</span>
        <Input value={transferAccount} onChange={(e) => handleAccountChange(e.target.value)} maxWidthmobileS='300px' type='text' id='transfer__account_recipient' placeholder='Введите номер счета' />
      </InputLabel>

      <InputLabel htmlFor='transfer__amount'>
        <span style={{ minWidth: '180px' }}>Сумма перевода</span>
        <Input value={transferAmount} onChange={(e) => handleAmountChange(e.target.value)} maxWidthmobileS='300px' type='text' id='transfer__amount' placeholder='Введите сумму' />
      </InputLabel>

      <Button onClick={(e) => handleTransaction(e)} primary maxHeight='52px' maxWidth='164px' display='flex' alignItems='center' gap='10px' fontSize='16px' padding='16px 24px'>
        <Svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z" fill="white" />
        </Svg>
        <span>Отправить</span>
      </Button>
    </FormContainer>
  )
}

export default TransferForm