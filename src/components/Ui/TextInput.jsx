import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styled from "styled-components";

export default function TextInput({
  suffixIcon,
  prefixIcon,
  placeholder,
  type,
  label,
  ...props
}) {
  const [isPassword, setIsPassword] = useState(false);
  return (
    <TextInputStyled>
      {label && (
        <label
          className="mb-2 h6t font-2"
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
          type={type==="password"?isPassword?'text':'password':'text'}
          {...props}
        />
        {suffixIcon ||
          (type === "password" && (
            <InputGroup.Text
              id="basic-addon1"
              style={{ backgroundColor: "transparent" }}
              onClick={()=>setIsPassword(!isPassword)}
            >
              {type === "password" ? (
                isPassword ? (
                  <AiOutlineEye size={25} />
                ) : (
                  <AiOutlineEyeInvisible size={25} />
                )
              ) : (
                suffixIcon
              )}
            </InputGroup.Text>
          ))}
      </InputGroup>
    </TextInputStyled>
  );
}

const TextInputStyled = styled.span`
  input {
    padding: 12px 16px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    background: #f2f2f2;
  }
`;
