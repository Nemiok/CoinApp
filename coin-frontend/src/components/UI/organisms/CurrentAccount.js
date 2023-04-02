import React, { useEffect, useState } from 'react'
import { countLastNMonths } from '../../../utils/countBalanceDynamics'
import sortLastMonths2DArray from '../../../utils/sortLastMonths2DArray'
import Div from '../atoms/Div'
import BalanceChart from '../molecules/BalanceChart'
import CurrentAccountHead from '../molecules/CurrentAccountHead'
import TransactionsTable from '../molecules/TransactionsTable'
import TransferForm from '../molecules/TransferForm'

const CurrentAccount = ({ currentAccount, handleInfoExtention }) => {

  const [chartData, setChartData] = useState([])


  useEffect(() => {
    if (currentAccount.transactions && currentAccount.balance) {
      let sixMonthsBalance = countLastNMonths(currentAccount.transactions, currentAccount.balance, -6)
      const chartDataEntries = Object.entries(sixMonthsBalance)
      const chartDataSorted = sortLastMonths2DArray(chartDataEntries, 6, new Date().getMonth()).reverse()

      setChartData(chartDataSorted.map(month => {
        return {
          name: month[0],
          balance: Math.round(month[1] * 100) / 100,
        }
      }))
    }
  }, [currentAccount])

  return (
    <Div flexGrow='1' flexDirection='column' gap='50px'>
      <CurrentAccountHead account={currentAccount.account} balance={currentAccount.balance} />

      <Div flexWrap='wrap' gap='50px' justifyContent='space-between'>
        <TransferForm />

        <Div minorBackgroundColor commonTextColor onClick={(e) => { handleInfoExtention(e) }}
          flexBasis='45%'
          flexGrow='1'
          fontFamily='GraphikLCG'
          gap='25px'
          flexDirection='column'
          boxShadow='0px 5px 20px rgba(0, 0, 0, 0.25)'
          borderRadius='50px'
          alignItems='center'
          justifyContent='space-between'
          padding='25px 50px'
          cursor='pointer'>
          <Div
            width='100%'
            fontWeight='700'
            fontSize='20px'
            lineHeight='23px'>Динамика баланса</Div>
          {chartData[0] ? <BalanceChart data={chartData} /> : 'Нет данных'}
        </Div>

        <Div commonTextColor cursor='pointer' onClick={(e) => { handleInfoExtention(e) }} overflowX='auto' formBackgroundColor borderRadius='56px' flexDirection='column' padding='25px 50px' width='100%' flexGrow='1' flexBasis='100%'
          fontFamily='Ubuntu'
          fontWeight='400'
          fontSize='16px'
          lineHeight='24px'>
          <Div fontFamily='GraphikLCG'
            fontWeight='700'
            fontSize='20px'
            lineHeight='23px'
            margin='0 0 25px 0'
            alignSelf='flex-start'>История переводов
          </Div>
          {currentAccount.transactions[0] ? <TransactionsTable transactionsNumber={10} currentAccount={currentAccount} /> : 'Нет данных'}

        </Div>
      </Div>


    </Div>
  )
}

export default CurrentAccount