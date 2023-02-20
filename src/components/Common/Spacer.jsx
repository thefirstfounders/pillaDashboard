import React from 'react'
import PropTypes from "prop-types";

export default function Spacer({SpacerClassName='',ReUsableStyle}) {
  return (
    <div style={{...ReUsableStyle}} className={`${SpacerClassName}`}></div>
  )
}


Spacer.prototype={
    SpacerClassName:PropTypes.string,
    ReUsableStyle:PropTypes.object
}
