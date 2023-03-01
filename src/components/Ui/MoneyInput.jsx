import React from 'react'
import CurrencyInput from 'react-currency-input-field'
import styled from 'styled-components'

export default function MoneyInput({placeholder,value,onChange,label}) {
  return (
    <CurrencyInputStyled>
        <label className='mb-2 h6tt font-2' style={{color:' #333333',fontWeight:'500'}}>{label||'Target Amount'}</label>
        <CurrencyInput
    id="input-example"
    name="input-name"
    placeholder="Please enter a number"
    defaultValue={0.}
    decimalsLimit={2}
    className=' rounded px-2'
    style={{padding:'12px 16px'}}
    // prefix="£"
    onValueChange={(value, name) => console.log(value, name)}
  /></CurrencyInputStyled>
  )
}


const CurrencyInputStyled =styled.span`
input,input:focus{
    width:100%;
    border: 1px solid #E6E6E6 !important;
    background:#F2F2F2;
    outline:none !important;
}
`