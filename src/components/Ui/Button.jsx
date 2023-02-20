import React from 'react'
import {Button} from 'react-bootstrap'
export default function ButtonComp({btnText,btnClassName,btnStyle,onClick}) {
  return (
    <Button onClick={onClick} variant="" className={btnClassName} style={{...btnStyle}}>{btnText}</Button>
  )
}
