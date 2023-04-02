import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import Svg from '../atoms/svgIcon'

const GoBackButton = () => {
  const navigation = useNavigate()

  const handleGoBackClick = () => {
    navigation(-1)
  }

  return (
    <Button primary maxHeight='52px' maxWidth='234px' display='flex' alignItems='center' gap='10px' fontSize='16px'
      onClick={handleGoBackClick}>
      <Svg width="16" height="12" viewBox="0 0 16 12" >
        <path d="M3.83 5L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7L16 7V5L3.83 5Z" fill="white" />
      </Svg>
      <span>Вернуться назад</span>
    </Button >
  )
}

export default GoBackButton