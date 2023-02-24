import React from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export default function CheckTypeInput({size,CheckTypeInputClassName,name,type='checkbox',checked}) {
  return (
    <CheckTypeInputStyled Size={size}>
         <Form.Group className="" controlId="formBasicCheckbox">
        <Form.Check type={type} name={name} className={CheckTypeInputClassName} checked={checked}/>
      </Form.Group>
    </CheckTypeInputStyled>
  )
}


const CheckTypeInputStyled = styled.span`
input{
    width: ${props=>props?.Size?props?.Size:'20px'};
    height: ${props=>props?.Size?props?.Size:'20px'};
    outline:none !important;
}
// .form-check-input:checked {
//     background-color: #0d6efd;
//     border-color: #0d6efd;
// }
.form-check-input:checked {
  background-color: #00AA96 !important;
  border-color: #00AA96 !important;
}
`