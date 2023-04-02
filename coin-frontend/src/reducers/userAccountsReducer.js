import { createSlice } from "@reduxjs/toolkit";
import accountServices from "../services/accountServices";

const userAccountsSlice = createSlice({
  name: 'accounts',
  initialState: [],
  reducers: {
    setAccounts(state, action) {
      return action.payload
    },

    addAccount(state, action) {
      state.push(action.payload)
    }
  }
})

export const addAccountAction = () => {
  return async dispatch => {
    const account = await accountServices.createAccount()
    dispatch(addAccount(account))
  }
}

export const getAccountsAction = () => {
  return async dispatch => {
    const accounts = await accountServices.getAccounts()
    dispatch(setAccounts(accounts))
  }
}

export const { setAccounts, addAccount } = userAccountsSlice.actions
export default userAccountsSlice.reducer