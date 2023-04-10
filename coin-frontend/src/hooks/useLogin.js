import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUserAction } from "../reducers/userLoggedReducer"

export const useLogin = (localStorageItem) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorageItem) {
      const user = JSON.parse(localStorageItem)
      dispatch(setUserAction(user))
    }
  }, [])
}