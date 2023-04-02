import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { ThemeContext } from 'styled-components'
import { setAccounts } from '../../../reducers/userAccountsReducer'

const SortSelect = (props) => {
  const accounts = useSelector(state => state.accounts)
  const dispatch = useDispatch()

  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    if (accounts !== null && Object.keys(accounts).length > 0) {
      setLoaded(true)
    }
  }, [accounts])

  const options = props.options

  const handleSelect = (selected) => {
    const accs = accounts.slice()
    console.log(selected)
    switch (selected) {
      case 'balance': {
        const sortedA = accs.sort((a, b) => { return a.balance > b.balance ? 1 : -1 })
        dispatch(setAccounts(sortedA))
        break
      }

      case 'transaction': {
        const sortedB = accs.sort((a, b) => {
          if (a.transactions.length === 0 || b.transactions.length === 0) return -10

          return new Date(a.transactions.at(-1).date) > new Date(b.transactions.at(-1).date) ? 1 : -1
        })
        console.log(sortedB)
        dispatch(setAccounts(sortedB))
        break
      }
      case 'account': {
        const sortedC = accs.sort((a, b) => { return Number(a.account) > Number(b.account) ? 1 : -1 })
        dispatch(setAccounts(sortedC))
        break
      }
    }

  }


  const theme = useContext(ThemeContext)

  const styles = {
    control: (styles, state) => ({
      ...styles,
      minWidth: '300px',
      backgroundColor: theme.mainBackgroundColor,

    }),

    singleValue: (styles) => ({
      ...styles,
      color: theme.commonTextColor
    }),

    option: (styles) => ({
      ...styles,
      color: theme.commonTextColor,
      backgroundColor: theme.mainBackgroundColor,
      ':hover': {
        backgroundColor: styles.backgroundColor,
        color: '#333',
      },

    }),

    menu: (styles) => ({
      ...styles,
      backgroundColor: theme.mainBackgroundColor
    })
  }

  return (
    <Select isDisabled={!isLoaded} onChange={(e) => { handleSelect(e.value) }}
      isSearchable={false}
      styles={styles} options={options}
      defaultValue={{ label: "Сортировка" }} />
  )
}

export default SortSelect