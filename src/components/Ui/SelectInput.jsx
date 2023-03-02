import React from "react";
import styled from "styled-components";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
export default function SelectInput({
  options=[{label:'',value:''}],
  placeholder,
  type,
  label,
  handleChange={},
  selectedOption=[]
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
      <Select
       styles={{
        control:(baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? '#E6E6E6' : '#E6E6E6',
          padding:'7px 0px',
          backgroundColor:'#F2F2F2',
          borderRadius:'8px',
          borderWidth:'1px',
        
        }),
      }}

        value={selectedOption}
        onChange={handleChange}
        components={animatedComponents}
        options={options}
        className='rounded'
        placeholder={placeholder}
      />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.span`
  
.css-1xc3v61-indicatorContainer{
  color:black;
}
`;
