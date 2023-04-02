const validateTransfer = (transferAccount) => {
  if (String(transferAccount).length === 0) {
    return 'Введите номер счёта'
  }

  return true
}

const validateTransferAmount = (transferAmount) => {
  if (Number(transferAmount) <= 0) {
    return 'Сумма должна быть больше 0'
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
