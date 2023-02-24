import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";

export default function TextInput({
  suffixIcon,
  prefixIcon,
  placeholder,
  type,
  label,
}) {
  return (
    <TextInputStyled>
      {label && (
        <label
          className="mb-2 h5t font-2"
          style={{ color: " #333333", fontWeight: "500" }}
        >
          {label || "Target Amount"}
        </label>
      )}
      <InputGroup className="">
        {prefixIcon && (
          <InputGroup.Text id="basic-addon1">{prefixIcon}</InputGroup.Text>
        )}
        <Form.Control
          placeholder={placeholder}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        {suffixIcon && (
          <InputGroup.Text id="basic-addon1">{suffixIcon}</InputGroup.Text>
        )}
      </InputGroup>
    </TextInputStyled>
  );
}

const TextInputStyled = styled.span`
input{
    padding: 12px 16px;
    border: 1px solid #E6E6E6;
border-radius: 8px;
background: #F2F2F2;
}

`;
