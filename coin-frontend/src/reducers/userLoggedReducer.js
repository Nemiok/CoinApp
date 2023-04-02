import { createSlice } from "@reduxjs/toolkit";
import accountServices from "../services/accountServices";

const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState: '',
  reducers: {
    setUser(state, action) {
      return action.payload
    }
  }
})

export const setUserAction = (user) => {
  return dispatch => {
    accountServices.setToken(user.payload.token)
    dispatch(setUser(user.payload))
  }
}


export const { setUser } = userLoggedSlice.actions
export default userLoggedSlice.reducer