import React from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components';

export default function TextArea({label,labelColor,labelClassName,placeholder,required,inputClassName}) {
  return (
    <TextInputStyled>
         <Form.Group className="" controlId="exampleForm.ControlTextarea1">
         {label && (
        <label
          className={`${labelClassName || ' h6t mb-2'} font-2 `}
          style={{ color: labelColor?labelColor:" #333333", fontWeight: "500" }}
        >
          {label || "Target Amount"} {required && <span className="text-danger">*</span>}
        </label>
      )}
        <Form.Control as="textarea" rows={3} placeholder={placeholder}    className={`${inputClassName}`}/>
      </Form.Group>
    </TextInputStyled>
  )
}

const TextInputStyled = styled.span`
  input {
    padding: 12px 16px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    background: #f2f2f2;
    border: ${props=>props?.suffixIcon?'none':''};
  }
`;
