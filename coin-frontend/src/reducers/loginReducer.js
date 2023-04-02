import { createSlice } from "@reduxjs/toolkit";

const initialLogin = {
  login: '',
  password: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState: initialLogin,
  reducers: {
    setUsername(state, action) {
      return { ...state, login: action.payload }
    },

    setPassword(state, action) {
      return { ...state, password: action.payload }
    }
  }
})

export const { setUsername, setPassword } = loginSlice.actions
export default loginSlice.reducer