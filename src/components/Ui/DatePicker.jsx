import React from "react";
import styled from "styled-components";
import DatePickerComp from "react-datepicker";
import makeAnimated from "react-select/animated";
export default function DatePicker({
  placeholder,
  label,
  startDate = new Date(),
}) {
  const animatedComponents = makeAnimated();

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
      <DatePickerComp
        selected={startDate}
        placeholderText={placeholder}
        //onChange={(date) => setStartDate(date)}
      />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.span`
input{
  width:100%;
  padding: 12px 16px;
  border: 1px solid #E6E6E6;
border-radius: 8px;
background: #F2F2F2;
}
`;
