import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountsAction } from '../../../reducers/userAccountsReducer'
import ListItem from '../atoms/ListItem'
import UnorderedList from '../atoms/UnorderedList'
import AccountCard from '../molecules/AccountCard'
import CardSkeleton from '../molecules/Skeletons/CardSkeleton'

const AccountsCardList = () => {
  const accounts = useSelector(state => state.accounts)
  const dispatch = useDispatch()

  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    dispatch(getAccountsAction())
  }, [])

  useEffect(() => {
    if (accounts !== null && accounts.length > 0) {
      setLoaded(true)
    }
  }, [accounts])

  return (
    <UnorderedList>
      {isLoaded ?
        accounts.map(acc => {
          return <ListItem minorBackgroundColor boxShadow='0px 5px 20px rgba(0, 0, 0, 0.25)' backgroundColor='#fff' padding='22px' borderRadius='9px' justifyContent='space-between'
            flexBasis='30%' flexGrow='1' flexDirectionMobileS='column' flexDirectionTablet='row'
            key={acc.account}>
            <AccountCard
              accountNumber={acc.account} balance={acc.balance} date={acc.transactions.length > 0 && acc.transactions[acc.transactions.length - 1].date} />
          </ListItem>
        }) :
        [...Array(9).keys()].map((el, i) => (
          <ListItem minorBackgroundColor key={i} boxShadow='0px 5px 20px rgba(0, 0, 0, 0.25)' backgroundColor='#fff' padding='22px' borderRadius='9px' justifyContent='space-between'
            flexBasis='30%' flexGrow='1' flexDirectionMobileS='column' flexDirectionTablet='row'>
            <CardSkeleton />
          </ListItem>
        ))
      }
    </UnorderedList>
  )
}

export default AccountsCardList