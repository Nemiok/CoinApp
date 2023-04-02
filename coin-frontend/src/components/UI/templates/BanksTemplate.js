import React from 'react'
import Div from '../atoms/Div'
import PageTitle from '../atoms/PageTitle'
import YandexMap from '../organisms/YandexMap'

const BanksTemplate = () => {
  return (
    <>

      <main>
        <Div minHeight='100vh' flexDirection='column' mainBackgroundColor style={{ padding: '50px' }}>

          <Div flexDirectionTablet='row' flexDirectionMobileS='column' justifyContent='space-between' alignItems='center' margin='0 0 50px 0'>

            <PageTitle verticalAlign='middle' margin='0'>
              Карта банкоматов
            </PageTitle>

          </Div>

          <Div alignItems='center' justifyContent='center'>
            <YandexMap />
          </Div>
        </Div>
      </main>
    </>
  )
}

export default BanksTemplate