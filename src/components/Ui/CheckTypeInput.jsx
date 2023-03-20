import React from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export default function CheckTypeInput({size,CheckTypeInputClassName,name,type='checkbox',checked,borderWidth,value,onChange,borderColor}) {
  return (
    <CheckTypeInputStyled Size={size} BorderWidth={borderWidth} borderColor={borderColor}>
         <Form.Group className="" controlId="formBasicCheckbox">
        <Form.Check type={type} name={name} value={value} className={`${CheckTypeInputClassName} m-0 p-0`} onChange={onChange} checked={checked}/>
      </Form.Group>
    </CheckTypeInputStyled>
  )
}


const CheckTypeInputStyled = styled.span`
input{
    width: ${props=>props?.Size?props?.Size:'20px'};
    height: ${props=>props?.Size?props?.Size:'20px'};
    outline:none !important;
    margin:0 !important;
    border: ${props=>props?.BorderWidth?props?.BorderWidth:'2px'} solid  ${props=>props?.borderColor?props?.borderColor:'#CCCCCC'} !important;
}
// .form-check-input:checked {
//     background-color: #0d6efd;
//     border-color: #0d6efd;
// }
.form-check-input:checked {
  background-color: #00332D !important;
  border-color: #00AA96 !important;
}
`