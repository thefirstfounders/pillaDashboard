import React from "react";
import OtpInput from "react-otp-input";
import styled from "styled-components";


export default function OtpComp({ otpData, setOtp }) {
  return (
    <OtpCompStyled  

    >
      <OtpInput
      
    //   containerStyle={{
    //     borderColor:'red'
    //   }}
    inputStyle="otp-code__input"
        shouldAutoFocus={true}
        value={otpData}
        onChange={(e) => setOtp(e)}
        numInputs={6}
        // separator={<span>-</span>}
      />
    </OtpCompStyled>
  );
}

const OtpCompStyled = styled.div`
.otp-code__input {
    border-radius: .5rem;
    font-family: monospace;
    height: 50px;
    border: 1px solid #ccc;
    font-size: 2rem;
    text-align: center;
    transition: all .2s ease;
    color: $dark;
    width: 3rem !important;
    margin: 0 .5rem;

    &:focus {
      border-color: #00CCB4 !important;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(red,.25);
    }

    &.otp-code__input--error {
    border-color: $red;

      &:focus {
        box-shadow: 0 0 0 0.2rem rgba($red,.25);
      }
    }
  }
`;
