import { errorsReturnValuesTransVal, validateTransfer, validateTransferAmount } from '../transferValidate'

describe('Transfer account validation works as expected', () => {
  it('transfer account must be non empty string', () => {
    expect(validateTransfer('')).toMatch(errorsReturnValuesTransVal.EMPTY_ACCOUNT_NUMBER)
  })

  it('transfer account can not be shorter than 12 characters', () => {
    expect(validateTransfer('12333421')).toMatch(errorsReturnValuesTransVal.INCORRECT_ACCOUNT_NUMBER)
  })

  it('transfer account can not have spaces', () => {
    expect(validateTransfer(' 1233              3421 ')).toMatch(errorsReturnValuesTransVal.NO_SPACES)
  })
})


describe('Transfer amount validation works as expected', () => {
  it('transfer amount must be non empty string', () => {
    expect(validateTransferAmount('')).toMatch(errorsReturnValuesTransVal.EMPTY_TRANSFER_AMOUNT)
  })

  it('transfer amount can not have spaces', () => {
    expect(validateTransferAmount(' 1233              3421 ')).toMatch(errorsReturnValuesTransVal.NO_SPACES)
  })
})
