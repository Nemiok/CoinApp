import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import AccountsPage from './components/pages/AccountsPage';
import CurrentAccountPage from './components/pages/CurrentAccountPage';
import CurrenciesPage from './components/pages/CurrenciesPage';
import BanksPage from './components/pages/BanksPage';
import { useDefaultNavigate } from './hooks/useDefaultNavigate';
import Layout from './components/UI/Layout';
import { useLogin } from './hooks/useLogin';

const App = () => {

  const localStorageItem = window.localStorage.getItem('loggedInCoinAppUser')
  const whenToNavigateURL = '/login'

  useDefaultNavigate(whenToNavigateURL, localStorageItem)
  useLogin(localStorageItem)

  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='login' exact element={<LoginPage />} />
        <Route path='accounts' exact element={<AccountsPage />} />
        <Route path='accounts/:id' exact element={<CurrentAccountPage />} />
        <Route path='currencies' exact element={<CurrenciesPage />} />
        <Route path='banks' exact element={<BanksPage />} />
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
