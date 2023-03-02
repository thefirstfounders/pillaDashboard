import React from "react";
import CurrencyInput from "react-currency-input-field";
import styled from "styled-components";

export default function MoneyInput({
  placeholder,
  value,
  onChange,
  label,
  CurrencyInputClassName,
  Extra,
}) {
  return (
    <CurrencyInputStyled className={CurrencyInputClassName}>
      {label && (
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label
            className=" h6t font-2"
            style={{ color: " #333333", fontWeight: "500" }}
          >
            {label || "Target Amount"}
          </label>
          <div>{Extra}</div>
        </div>
      )}
      <CurrencyInput
        id="input-example"
        name="input-name"
        placeholder="Please enter a number"
        defaultValue={0}
        decimalsLimit={2}
        className=" rounded px-2"
        style={{ padding: "12px 16px" }}
        // prefix="£"
        onValueChange={(value, name) => console.log(value, name)}
      />
    </CurrencyInputStyled>
  );
}

const CurrencyInputStyled = styled.span`
  input,
  input:focus {
    width: 100%;
    border: 1px solid #e6e6e6 !important;
    background: #f2f2f2;
    outline: none !important;
  }
`;
