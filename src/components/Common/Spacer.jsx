import React from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components';

export default function Spacer({SpacerClassName='',ReUsableStyle}) {
  return (
    <SpacerStyle style={{...ReUsableStyle}} className={`${SpacerClassName}`}></SpacerStyle>
  )
}

const SpacerStyle = styled.div`

@media only screen and (max-width: 500px) {
 height:20px !important;
}
`
Spacer.prototype={
    SpacerClassName:PropTypes.string,
    ReUsableStyle:PropTypes.object
}
