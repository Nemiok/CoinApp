import React, { useContext } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ThemeContext } from 'styled-components'

const BalanceChart = ({ data }) => {

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
            <Bar dataKey='balance' fill="#116ACC" />
          </BarChart>
        </ResponsiveContainer> : <div>Нет данных</div>}
    </>
  )
}

export default BalanceChart