import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

export default function SwitchInput({bgColor,width,height,checked}) {
  return (
    <SwitchInputStyled bgColor={bgColor} Width={width} Height={height}>
      <Form.Check checked={checked} type="switch" id="custom-switch" />
    </SwitchInputStyled>
  );
}

const SwitchInputStyled = styled.span`
.form-switch .form-check-input {
  width:  ${props=>props?.Width?props?.Width:'3em'}  !important;
}
.form-check-input {
  height:  ${props=>props?.Height?props?.Height:'1.4em'} !important;
}

.form-check-input:checked {
  background-color:  ${props=>props?.bgColor?props?.bgColor:'#0d6efd'} !important;
  border-color: ${props=>props?.bgColor?props?.bgColor:'#0d6efd'} !important;
}
`;
