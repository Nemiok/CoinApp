import React, { useEffect, useState } from 'react'
import { countLastNMonthsIncOut } from '../../../utils/countMonthIncomeOutcome'
import sortLastMonths2DArray from '../../../utils/sortLastMonths2DArray'
import Div from '../atoms/Div'
import BalanceChart from '../molecules/BalanceChart'
import CurrentAccountHead from '../molecules/CurrentAccountHead'
import IncomeOutcomeRatioChart from '../molecules/IncomeOutcomeRatioChart'
import TransactionsTable from '../molecules/TransactionsTable'

const CurrentAccountExtended = ({ currentAccount }) => {

  const [chartData, setChartData] = useState([])
  const [chartDataIncOut, setChartDataIncOut] = useState([])
  useEffect(() => {
    if (currentAccount.transactions && currentAccount.balance) {
      let twelveMonthsBalance = countLastNMonthsIncOut(currentAccount.transactions, currentAccount.balance, -12)

      console.log(twelveMonthsBalance)
      const chartDataEntries = Object.entries(twelveMonthsBalance)
      const chartDataSorted = sortLastMonths2DArray(chartDataEntries, 12, new Date().getMonth()).reverse()

      console.log(chartDataSorted)

      setChartData(chartDataSorted.map(month => {
        return {
          name: month[0],
          balance: Math.round(month[1].balance * 100) / 100,
        }
      }))

      setChartDataIncOut(chartDataSorted.map(month => {
        return {
          name: month[0],
          income: Math.round(month[1].income * 100) / 100,
          outcome: Math.round(month[1].outcome * 100) / 100
        }
      }))
    }
  }, [currentAccount])

  return (
    <Div flexGrow='1' flexDirection='column' gap='50px'>
      <CurrentAccountHead account={currentAccount.account} balance={currentAccount.balance} />

      <Div commonTextColor flexWrap='wrap' gap='50px' justifyContent='space-between'>
        <Div minorBackgroundColor flexBasis='100%'
          flexGrow='1'
          fontFamily='GraphikLCG'
          gap='25px'
          flexDirection='column'
          boxShadow='0px 5px 20px rgba(0, 0, 0, 0.25)'
          borderRadius='50px'
          alignItems='center'
          justifyContent='space-between'
          padding='25px 50px'>
          <Div
            width='100%'
            fontWeight='700'
            fontSize='20px'
            lineHeight='23px'>Динамика баланса</Div>
          {chartData[0] ? <BalanceChart data={chartData} /> : 'Нет данных'}
        </Div>

        <Div commonTextColor minorBackgroundColor flexBasis='100%'
          flexGrow='1'
          fontFamily='GraphikLCG'
          gap='25px'
          flexDirection='column'
          boxShadow='0px 5px 20px rgba(0, 0, 0, 0.25)'
          borderRadius='50px'
          alignItems='center'
          justifyContent='space-between'
          padding='25px 50px'>
          <Div
            width='100%'
            fontWeight='700'
            fontSize='20px'
            lineHeight='23px'>Соотношение входящих исходящих транзакций</Div>
          {chartDataIncOut[0] ? <IncomeOutcomeRatioChart data={chartDataIncOut} /> : 'Нет данных'}
        </Div>

        <Div overflowX='auto' formBackgroundColor borderRadius='56px' flexDirection='column' padding='25px 50px' width='100%' flexGrow='1' flexBasis='100%'
          fontFamily='Ubuntu'
          fontWeight='400'
          fontSize='16px'
          lineHeight='24px'>
          <Div commonTextColor fontFamily='GraphikLCG'
            fontWeight='700'
            fontSize='20px'
            lineHeight='23px'
            margin='0 0 25px 0'
            alignSelf='flex-start'>История переводов</Div>
          {currentAccount.transactions[0] ? <TransactionsTable cursor='auto' transactionsNumber={25} currentAccount={currentAccount} /> : 'Нет данных'}

        </Div>
      </Div>


    </Div>
  )
}

export default CurrentAccountExtended