import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../atoms/Button'
import Nav from '../atoms/Nav'

const NavBar = () => {

  const handleLogout = (e) => {
    e.preventDefault()
    if (confirm('Вы уверены, что хотите выйти?')) {
      localStorage.removeItem('loggedInCoinAppUser')
      window.location.reload()
    }
  }

  return (
    <Nav margin='0 0 0 25px' zIndex='1000' gap='25px' positionMobileS='absolute' positionTablet='static' top='100px' left='0'>
      <NavLink tabIndex='-1' to='/banks'>
        <Button secondary fontSize='16px'>Банкоматы</Button>
      </NavLink>
      <NavLink tabIndex='-1' to='/accounts'>
        <Button secondary fontSize='16px'>Счета</Button>
      </NavLink>
      <NavLink tabIndex='-1' to='/currencies'>
        <Button secondary fontSize='16px'>Валюта</Button>
      </NavLink>
      <Button secondary fontSize='16px' onClick={e => handleLogout(e)}>Выйти</Button>
    </Nav>
  )
}

export default NavBar