import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getCurrentAccountAction } from '../../../reducers/currentAccountReducer'
import Div from '../atoms/Div'
import PageTitle from '../atoms/PageTitle'
import GoBackButton from '../molecules/GoBackButton'
import AccountSkeleton from '../molecules/Skeletons/AccountSkeleton'
import CurrentAccount from '../organisms/CurrentAccount'
import CurrentAccountExtended from '../organisms/CurrentAccountExtended'

const CurrentAccountTemplate = () => {

  const dispatch = useDispatch()
  const location = useLocation()

  const account = location.pathname.replace(/[^0-9]/g, '')
  const currentAccount = useSelector(state => state.currentAccount)

  const [isInfoExtended, setisInfoExtended] = useState();
  const [isLoaded, setLoaded] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const handleInfoExtention = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setSearchParams({ extended: true })

  }

  useEffect(() => {
    dispatch(getCurrentAccountAction(account))
    return () => {
      dispatch(getCurrentAccountAction(null))
    }
  }, [])

  useEffect(() => {
    (/[?]extended=true/).test(location.search) ? setisInfoExtended(true) : setisInfoExtended(false)
  }, [location])


  useEffect(() => {
    if (currentAccount !== null && Object.keys(currentAccount).length > 0) {
      setLoaded(true)
    }
  }, [currentAccount])


  return (
    <>

      <main>
        <Div minHeight='100vh' flexDirection='column' mainBackgroundColor style={{ padding: '50px' }}>
          <Div flexDirectionTablet='row' flexDirectionMobileS='column' justifyContent='space-between' alignItems='center' margin='0 0 25px 0'>

            {isLoaded
              ?
              <PageTitle verticalAlign='middle' margin='0 0 25px 0'>
                {isInfoExtended ? 'История баланса' : 'Просмотр счёта'}
              </PageTitle>
              :
              <AccountSkeleton />
            }

            <GoBackButton />

          </Div>

          {isInfoExtended
            ?
            <Div>{Object.keys(currentAccount).length !== 0 && <CurrentAccountExtended currentAccount={currentAccount} />}</Div>
            :
            <Div>
              {Object.keys(currentAccount).length !== 0 && <CurrentAccount handleInfoExtention={handleInfoExtention} currentAccount={currentAccount} />}
            </Div>}

        </Div>
      </main>
    </>
  )
}

export default CurrentAccountTemplate