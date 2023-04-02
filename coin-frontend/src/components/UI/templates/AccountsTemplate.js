import React from 'react'
import PageTitle from '../atoms/PageTitle'
import Div from '../atoms/Div'
import NewAccountButton from '../molecules/newAccountButton'
import AccountsCardList from '../organisms/AccountsCardList'
import SortSelect from '../molecules/SortSelect'

const AccountsTemplate = () => {
  const optionsForSortSelect = [
    { value: 'account', label: 'По номеру' },
    { value: 'balance', label: 'По балансу' },
    { value: 'transaction', label: 'По последней транзакции' },
  ]

  return (
    <>

      <main>
        <Div minHeight='100vh' flexDirection='column' mainBackgroundColor style={{ padding: '50px' }}>

          <Div gap='35px' mainBackgroundColor flexDirectionTablet='row' flexDirectionMobileS='column' justifyContent='space-between' alignItems='center' margin='0 0 50px 0'>

            <Div flexDirectionTablet='row' flexDirectionMobileS='column' gap='35px' alignItems='center'>
              <PageTitle verticalAlign='middle' margin='0'>
                Ваши счета
              </PageTitle>

              <SortSelect options={optionsForSortSelect} />
            </Div>

            <NewAccountButton />

          </Div>

          <AccountsCardList />
        </Div>
      </main>

    </>
  )
}

export default AccountsTemplate