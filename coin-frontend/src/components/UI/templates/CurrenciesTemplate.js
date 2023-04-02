import React, { useEffect, useState } from 'react'
import Div from '../atoms/Div'
import PageTitle from '../atoms/PageTitle'
import UserCurrenciesList from '../molecules/UserCurrenciesList'
import ExchangeRatesList from '../molecules/ExchangeRatesList'
import ExchangeForm from '../molecules/ExchangeForm'
import CurrenciesSkeleton from '../molecules/Skeletons/CurrenciesSkeleton'
import { useSelector } from 'react-redux'

const CurrenciesTemplate = () => {
  const [isLoaded, setLoaded] = useState(false)

  const currencies = useSelector(state => state.currencies)

  useEffect(() => {
    if (currencies !== null && Object.keys(currencies).length > 0) {
      setLoaded(true)
    }
  }, [currencies])

  return (
    <main>
      <Div flexDirection='column' mainBackgroundColor style={{ padding: '50px' }}>

        <Div flexDirectionTablet='row' flexDirectionMobileS='column' justifyContent='space-between' alignItems='center' margin='0 0 50px 0'>

          {isLoaded
            ?
            <PageTitle verticalAlign='middle' margin='0'>
              Валютный обмен
            </PageTitle>
            :
            <CurrenciesSkeleton />
          }

        </Div>
        <Div gap='50px' display='grid' templateColumnsLaptop='1fr 1fr' templateColumnsMobileS='1fr' templateRows='3fr'>

          <Div display='grid' templateRows='2fr 1fr' gap='45px'>
            <Div boxShadow='0px 5px 20px rgba(0, 0, 0, 0.25)' borderRadius='50px' minorBackgroundColor padding='50px' display='column'>
              <UserCurrenciesList />
            </Div>
            <Div boxShadow='0px 5px 20px rgba(0, 0, 0, 0.25)' borderRadius='50px' formBackgroundColor>
              <ExchangeForm />
            </Div>

          </Div>

          <Div currenciesChangeBackgroundColor flexDirectionMobileS='column' flexBasis='47%' backgroundColor='#E5E5E5' borderRadius='50px' padding='50px'>
            <ExchangeRatesList />
          </Div>
        </Div>

      </Div>
    </main>
  )
}

export default CurrenciesTemplate