export const validateExchangeForm = (exchangeOptions) => {
  const errorArray = []

  const amount = Number(exchangeOptions.amount)
  if (isNaN(amount)) {
    errorArray.push('Введена некорректная сумма')
    return errorArray
  }

  if (!exchangeOptions.from || !exchangeOptions.to || !amount & amount !== 0) {
    errorArray.push('Все поля обмена валют должны быть заполнены')
    return errorArray
  }

  if (exchangeOptions.from.label === exchangeOptions.to.label) {
    errorArray.push('Нельзя осуществить перевод на один и тот же валютный счёт')
    return errorArray
  }

  if (amount <= 0) {
    errorArray.push('Сумма перевода должна быть больше нуля')
  }

  if (amount > exchangeOptions.from.value) {
    errorArray.push('Недостаточно средств на валютном счёте')
  }

  return errorArray

}