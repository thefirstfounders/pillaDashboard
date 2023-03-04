import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

export default function SwitchInput({bgColor}) {
  return (
    <SwitchInputStyled bgColor={bgColor}>
      <Form.Check type="switch" id="custom-switch" />
    </SwitchInputStyled>
  );
}

const SwitchInputStyled = styled.span`
.form-switch .form-check-input {
  width: 3em !important;
}
.form-check-input {
  height: 1.4em !important;
}

.form-check-input:checked {
  background-color:  ${props=>props?.bgColor?props?.bgColor:'#0d6efd'} !important;
  border-color: ${props=>props?.bgColor?props?.bgColor:'#0d6efd'} !important;
}
`;
