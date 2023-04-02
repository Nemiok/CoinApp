import React from 'react'
import processDate from '../../../utils/processDate'
import TableCell from '../atoms/TableCell'

const TransactionsTableRow = ({ transaction }) => {

  const date = processDate(transaction.date)
  return (
    <tr style={{

    }}>
      <TableCell style={{
        padding: '20px 20px 20px 35px',
        borderBottom: '2px solid rgba(0, 82, 255, 0.1)',
        wordBreak: 'break-all'
      }}>{transaction.from}</TableCell>
      <TableCell style={{
        padding: '20px',
        borderBottom: '2px solid rgba(0, 82, 255, 0.1)',
        wordBreak: 'break-all'
      }}>{transaction.to}</TableCell>

      {String(transaction.amount).includes('-') ? <TableCell style={{
        padding: '20px',
        borderBottom: '2px solid rgba(0, 82, 255, 0.1)',
        color: '#FD4E5D',
        wordBreak: 'break-all'
      }}>{transaction.amount} ₽</TableCell> :
        <TableCell style={{
          padding: '20px',
          borderBottom: '2px solid rgba(0, 82, 255, 0.1)',
          color: '#76CA66'
          ,
          wordBreak: 'break-all'
        }}>{transaction.amount} ₽</TableCell>}

      <TableCell style={{
        padding: '20px',
        borderBottom: '2px solid rgba(0, 82, 255, 0.1)',
        wordBreak: 'break-all'
      }}>{Math.trunc(transaction?.balance) || 'Нет данных'}</TableCell>
      <TableCell style={{
        padding: '20px 35px 20px 20px',
        borderBottom: '2px solid rgba(0, 82, 255, 0.1)',
        wordBreak: 'break-all'
      }}>{date.DDay}.{date.DMonth}.{date.DYear}</TableCell>
    </tr>
  )
}

export default TransactionsTableRow