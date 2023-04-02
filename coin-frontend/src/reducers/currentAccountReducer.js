import { createSlice } from '@reduxjs/toolkit'
import accountServices from '../services/accountServices'

const currentAccountSlice = createSlice({
  name: 'currentUser',
  initialState: {},
  reducers: {
    setCurrentAccountUser(state, action) {
      return action.payload
    }
  }
})

export const getCurrentUserAction = (id) => {
  return async dispatch => {
    const currentUser = await accountServices.getAccount(id)

    currentUser == null ? dispatch(setCurrentAccountUser({})) :
      dispatch(setCurrentAccountUser(currentUser))
  }
}

export const { setCurrentAccountUser } = currentAccountSlice.actions
export default currentAccountSlice.reducer