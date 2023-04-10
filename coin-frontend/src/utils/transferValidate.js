export const errorsReturnValuesTransVal = {
  EMPTY_ACCOUNT_NUMBER: 'Введите номер счёта',
  EMPTY_TRANSFER_AMOUNT: 'Сумма должна быть больше 0',
  INCORRECT_ACCOUNT_NUMBER: 'Некорректный номер счёта',
  NO_SPACES: 'Пробелы нельзя использовать'
}

export const validateTransfer = (transferAccount) => {
  if (String(transferAccount).length === 0) {
    return errorsReturnValuesTransVal.EMPTY_ACCOUNT_NUMBER
  }

  if (String(transferAccount).length <= 12) {
    return errorsReturnValuesTransVal.INCORRECT_ACCOUNT_NUMBER
  }

  if (String(transferAccount).includes(' ')) {
    return errorsReturnValuesTransVal.NO_SPACES
  }

  return true
}

export const validateTransferAmount = (transferAmount) => {
  if (Number(transferAmount) <= 0) {
    return errorsReturnValuesTransVal.EMPTY_TRANSFER_AMOUNT
  }

  if (String(transferAmount).includes(' ')) {
    return errorsReturnValuesTransVal.NO_SPACES
  }

  return true
}

export const validate = ({ transferAccount, transferAmount }) => {
  const errorsArray = []

  const isTransferAccountValid = validateTransfer(transferAccount)
  const isTransferAmountValid = validateTransferAmount(transferAmount)

  isTransferAccountValid !== true && errorsArray.push(isTransferAccountValid)
  isTransferAmountValid !== true && errorsArray.push(isTransferAmountValid)

  return errorsArray
}
