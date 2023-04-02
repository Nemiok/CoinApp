import React, { useContext } from 'react'
import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ThemeContext } from 'styled-components'

const IncomeOutcomeRatioChart = ({ data }) => {

  const theme = useContext(ThemeContext)

  return (
    <>
      {data[0] ?
        <ResponsiveContainer width='99%' height={165}>
          <BarChart data={data} width='510px'>
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis stroke={theme.commonTextColor} dataKey='name' />
            <YAxis stroke={theme.commonTextColor} orientation='right' />
            <Tooltip labelStyle={{ color: '#333' }} />
            <ReferenceLine y={0} stroke="#F8F8FF" />
            <Bar dataKey='income' fill="#76CA66" />
            <Bar dataKey='outcome' fill="#FD4E5D" />
          </BarChart>
        </ResponsiveContainer> : <div>Нет данных</div>}
    </>
  )
}

export default IncomeOutcomeRatioChart