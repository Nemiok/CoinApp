import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useDefaultNavigate = (whenToNavigateURL, localStorageItem) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorageItem) {
      navigate(whenToNavigateURL)
    }
  }, [])
}