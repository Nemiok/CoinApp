import { configureStore } from '@reduxjs/toolkit'
import currentAccountReducer from '../reducers/currentAccountReducer'
import loginReducer from '../reducers/loginReducer'
import notificationReducer from '../reducers/notificationReducer'
import userAccountsReducer from '../reducers/userAccountsReducer'
import userCurrenciesReducer from '../reducers/userCurrenciesReducer'
import userLoggedReducer from '../reducers/userLoggedReducer'

const store = configureStore({
  reducer: {
    login: loginReducer,
    userLoggedIn: userLoggedReducer,
    accounts: userAccountsReducer,
    currentAccount: currentAccountReducer,
    currencies: userCurrenciesReducer,
    notification: notificationReducer
  }
})

export default store
