import axios from 'axios'

const baseURL = 'http://localhost:3000'
let token = ''

function setToken(newToken) {
  token = `Basic ${newToken}`
}

const logIn = async (user) => {
  const response = await axios.post(`${baseURL}/login`, user)
  return response.data
}

const getAccounts = async () => {
  const config = {
    headers: { authorization: token },
  }

  const response = await axios.get(`${baseURL}/accounts`, config)
  return response.data.payload
}

const getAccount = async (id) => {

  if (id === null) return null
  const config = {
    headers: { authorization: token }
  }

  const response = await axios.get(`${baseURL}/account/${id}`, config)
  return response.data.payload
}

const createAccount = async () => {
  const config = {
    headers: { authorization: token },
  }

  const response = await axios.post(`${baseURL}/create-account`, null, config)

  return response.data.payload
}

const transferMoney = async ({ from, to, amount }) => {
  const config = {
    headers: { authorization: token },
  }

  const response = await axios.post(`${baseURL}/transfer-funds`, { from, to, amount }, config)

  return response.data.payload
}

const getCurrencies = async () => {
  const config = {
    headers: { authorization: token },
  }

  const response = await axios.get(`${baseURL}/currencies`, config)

  return response.data.payload
}

const buyCurrency = async ({ from, to, amount }) => {
  const config = {
    headers: { authorization: token },
  }

  const response = await axios.post(`${baseURL}/currency-buy`, { from, to, amount }, config)
  console.log(response)
  return response.data.payload
}

const getBanksGeoLocations = async () => {
  const config = {
    headers: { authorization: token },
  }

  const response = await axios.get(`${baseURL}/banks`, config)

  return response.data.payload
}

const accountServices = { setToken, logIn, getAccounts, getAccount, createAccount, transferMoney, getCurrencies, buyCurrency, getBanksGeoLocations }

export default accountServices