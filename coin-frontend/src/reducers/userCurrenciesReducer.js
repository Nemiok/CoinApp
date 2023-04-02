import { createSlice } from '@reduxjs/toolkit'
import accountServices from '../services/accountServices'

const userCurrenciesSlice = createSlice({
  name: 'currencies',
  initialState: {},
  reducers: {
    setCurrencies(state, action) {
      return action.payload
    }
  }
})

export const getUserCurrenciesAction = (id) => {
  return async dispatch => {
    const currencies = await accountServices.getCurrencies()

    dispatch(setCurrencies(currencies))
  }
}

export const { setCurrencies } = userCurrenciesSlice.actions
export default userCurrenciesSlice.reducer