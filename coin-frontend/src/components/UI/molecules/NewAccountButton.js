import React from 'react'
import { useDispatch } from 'react-redux'
import { addAccountAction } from '../../../reducers/userAccountsReducer'
import Button from '../atoms/Button'
import Svg from '../atoms/svgIcon'

const NewAccountButton = () => {
  const dispatch = useDispatch()

  const handleCreateAccount = async () => {
    dispatch(addAccountAction())
  }

  return (
    <Button onClick={handleCreateAccount}
      primary maxHeight='52px' maxWidth='234px' display='flex' alignItems='center' gap='10px' fontSize='16px'>
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" strokeWidth="2" />
      </Svg>
      <span>Создать новый счёт</span>
    </Button>
  )
}

export default NewAccountButton