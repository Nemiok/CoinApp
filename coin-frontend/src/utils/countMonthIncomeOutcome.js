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

export const countLastNMonthsIncOut = (transactionsArray, currentBalance, N) => {
  const MonthsBalance = {
    'Янв': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Фев': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Мар': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Апр': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Май': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Июн': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Июл': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Авг': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Сен': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Окт': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Ноя': {
      balance: 0,
      income: 0,
      outcome: 0
    },
    'Дек': {
      balance: 0,
      income: 0,
      outcome: 0
    }
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
      MonthsBalance[nameOfCurrMonth] = {
        ...MonthsBalance[nameOfCurrMonth],
        balance: currentBalance,
        income: !String(transactionsArray.at(index).amount).includes('-') ?
          MonthsBalance[nameOfCurrMonth].income + Number(transactionsArray.at(index).amount) :
          MonthsBalance[nameOfCurrMonth].income,

        outcome: String(transactionsArray.at(index).amount).includes('-') ?
          MonthsBalance[nameOfCurrMonth].outcome + Number(transactionsArray.at(index).amount) :
          MonthsBalance[nameOfCurrMonth].outcome
      }

      continue
    }
    MonthsBalance[nameOfCurrMonth] = {
      ...MonthsBalance[nameOfCurrMonth],
      balance: MonthsBalance[nameOfCurrMonth].balance + Number(transactionsArray.at(index).amount),

      income: !String(transactionsArray.at(index).amount).includes('-') ?
        MonthsBalance[nameOfCurrMonth].income + Number(transactionsArray.at(index).amount) :
        MonthsBalance[nameOfCurrMonth].income,

      outcome: String(transactionsArray.at(index).amount).includes('-') ?
        MonthsBalance[nameOfCurrMonth].outcome + Number(transactionsArray.at(index).amount) :
        MonthsBalance[nameOfCurrMonth].outcome

    }

  }

  return MonthsBalance
}