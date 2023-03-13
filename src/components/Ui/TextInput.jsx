import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styled from "styled-components";

export default function TextInput({
  suffixIcon,
  suffixIconStyle,
  prefixIcon,
  placeholder,
  type,
  label,
  labelClassName,
  labelColor,
  required,
  ...props
}) {
  const [isPassword, setIsPassword] = useState(false);
  return (
    <TextInputStyled suffixIcon={suffixIcon}>
      {label && (
        <label
          className={`${labelClassName || ' h6t mb-2'} font-2 `}
          style={{ color: labelColor?labelColor:" #333333", fontWeight: "500" }}
        >
          {label || "Target Amount"} {required && <span className="text-danger">*</span>}
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
              style={{ backgroundColor: "transparent",...suffixIconStyle }}
              onClick={()=>setIsPassword(!isPassword)}
            >
              {type === "password" ? (
                isPassword ? (
                  <AiOutlineEye size={20} />
                ) : (
                  <AiOutlineEyeInvisible size={20} />
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
    border: ${props=>props?.suffixIcon?'none':''};
  }
`;
