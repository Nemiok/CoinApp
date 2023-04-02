export const getNonEmptyCurrencies = (currenciesObject) => {
  const currenciesArray = []

  for (const currencyName in currenciesObject) {
    const currency = currenciesObject[currencyName]
    if (currency.amount > 0) currenciesArray.push(currency)
  }

  console.log(currenciesArray)
  return currenciesArray
}