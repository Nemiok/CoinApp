import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    type: '',
    message: []
  },
  reducers: {
    setNotification(state, action) {
      const notification = action.payload
      return notification
    },
    removeNotification(state, action) {
      return { ...state, type: '', message: [] }
    }
  }
})

export const setNotificationAction = (payload, ms) => {
  return async dispatch => {
    dispatch(setNotification(payload))
    setTimeout(() => dispatch(removeNotification()), ms)

  }
}

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer