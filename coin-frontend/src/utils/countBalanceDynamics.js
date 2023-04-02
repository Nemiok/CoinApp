const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate()

const dayAsMs = 24 * 60 * 60 * 1000
const monthAsMs = 30 * dayAsMs

const addMonths = (input, months) => {
  const date = new Date(input)
  date.setDate(1)
  date.setMonth(date.getMonth() + months)
  date.setDate(Math.min(input.getDate(), getDaysInMonth(date.getFullYear(), date.getMonth() + 1)))
  return date
}

const Months = {
  1: 'Янв',
  2: 'Фев',
  3: 'Мар',
  4: 'Апр',
  5: 'Май',
  6: 'Июн',
  7: 'Июл',
  8: 'Авг',
  9: 'Сен',
  10: 'Окт',
  11: 'Ноя',
  12: 'Дек'
}

export const countLastNMonths = (transactionsArray, currentBalance, N) => {
  const MonthsBalance = {
    'Янв': 0,
    'Фев': 0,
    'Мар': 0,
    'Апр': 0,
    'Май': 0,
    'Июн': 0,
    'Июл': 0,
    'Авг': 0,
    'Сен': 0,
    'Окт': 0,
    'Ноя': 0,
    'Дек': 0
  }

  let currentTime = new Date()
  const dateNMonthsAgo = addMonths(currentTime, N)

  for (let index = -1; currentTime >= dateNMonthsAgo; index--) {
    if (!transactionsArray.at(index)) break
    const fixedCurrMonth = new Date().getMonth() + 1;
    currentTime = new Date(transactionsArray.at(index).date)
    const currMonth = currentTime.getMonth() + 1;
    const nameOfCurrMonth = Months[currMonth]

    if (fixedCurrMonth === currMonth) {
      MonthsBalance[nameOfCurrMonth] = currentBalance
      continue
    }
    MonthsBalance[nameOfCurrMonth] += Number(transactionsArray.at(index).amount)

  }

  return MonthsBalance
}