import React, { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import Select from 'react-select'
import { ThemeContext } from 'styled-components'


const CurrencySelect = forwardRef(function currencySelect(props, refs) {

  const [value, setValue] = useState(null)

  const theme = useContext(ThemeContext)

  const styles = {
    control: (styles, state) => ({
      ...styles,
      minWidth: '134px',
      backgroundColor: theme.mainBackgroundColor,

    }),

    singleValue: (styles) => ({
      ...styles,
      color: theme.commonTextColor
    }),

    option: (styles) => ({
      ...styles,
      color: theme.commonTextColor,
      backgroundColor: theme.mainBackgroundColor,
      ':hover': {
        backgroundColor: styles.backgroundColor,
        color: '#333',
      },
    }),

    menu: (styles) => ({
      ...styles,
      backgroundColor: theme.mainBackgroundColor
    })

  }

  useImperativeHandle(refs, () => {
    return {
      value,
    }
  })

  useEffect(() => {
    props.handleSelect()
  }, [value])

  return (
    <Select onChange={(e) => {
      setValue(e)
    }}
      isSearchable={true}
      styles={styles} options={props.optionsForExchangeSelect.length > 0 && props.optionsForExchangeSelect}
      defaultValue={{ label: "валюта" }} />
  )
}
)

export default CurrencySelect