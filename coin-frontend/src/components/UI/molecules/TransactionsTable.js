import React, { useState } from 'react'
import TransactionsTableRow from './TransactionsTableRow'
import { Pagination, PaginationItem } from '@mui/material'
import TableCell from '../atoms/TableCell'

const TransactionsTable = ({ currentAccount, transactionsNumber }) => {
  let currentPageElements = currentAccount.transactions.slice(-transactionsNumber).reverse()

  const [page, setPage] = useState(1)

  const transactionsLength = currentAccount.transactions.length
  const pagesCount = Math.ceil(transactionsLength / transactionsNumber)
  const pagesDictionary = {}

  if (transactionsNumber >= 25) {

    let pagesToShowCurrIndexes = transactionsNumber
    let pagesToShowPrevIndexes = 0

    for (let currPage = 1; currPage <= pagesCount; currPage++) {

      currentPageElements = currentAccount.transactions.slice(pagesToShowPrevIndexes, pagesToShowCurrIndexes).reverse()

      pagesDictionary[currPage] = currentPageElements
      pagesToShowPrevIndexes = pagesToShowCurrIndexes
      pagesToShowCurrIndexes += transactionsNumber
    }
  }

  const handleSetPage = (num) => {
    setPage(num)
  }

  return (
    <>
      <table style={{
        display: 'table',
        borderCollapse: 'separate',
      }}
        cellSpacing='0'>

        <thead style={{
          color: '#fff',
          maxHeight: '64px',
          backgroundColor: '#116acc',
          fontFamily: 'Ubuntu',
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '24px'
        }}>
          <tr>
            <TableCell tableHeadCellColor style={{
              textAlign: 'left',
              padding: '20px 20px 20px 35px',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px'
            }}>Счёт отправителя</TableCell>
            <TableCell tableHeadCellColor style={{
              textAlign: 'left',
              padding: '20px'
            }}>Счёт получателя</TableCell>
            <TableCell tableHeadCellColor style={{
              textAlign: 'left',
              padding: '20px'
            }}>Сумма</TableCell>
            <TableCell tableHeadCellColor style={{
              textAlign: 'left',
              padding: '20px'
            }}>Баланс</TableCell>
            <TableCell tableHeadCellColor style={{
              textAlign: 'left',
              padding: '20px 35px 20px 20px',
              borderTopRightRadius: '15px',
              borderBottomRightRadius: '15px'
            }}>Дата</TableCell>
          </tr>
        </thead>

        <tbody>
          {pagesDictionary[page] ? pagesDictionary[page].map((transaction) => {
            return <TransactionsTableRow key={transaction.date + Math.random()} transaction={transaction} />
          }) :
            currentPageElements.map((transaction) => {
              return <TransactionsTableRow key={transaction.date + Math.random()} transaction={transaction} />
            })}
        </tbody>
      </table>
      {transactionsNumber >= 25 && <Pagination
        style={{ alignSelf: 'center', paddingTop: '25px' }}
        page={page}
        count={pagesCount}
        shape="rounded"
        color='primary'
        onChange={(_, num) => handleSetPage(num)}
        renderItem={(item) => (
          <PaginationItem
            {...item}
          />
        )}
      />}
    </>

  )
}

export default TransactionsTable