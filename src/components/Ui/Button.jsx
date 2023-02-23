import React from 'react'
import {Button} from 'react-bootstrap'
export default function ButtonComp({btnText,btnClassName,btnStyle,onClick,ref}) {
  //console.log(btnStyle)
  return (
    <Button ref={ref} onClick={onClick} variant="" className={` ${btnClassName}`} style={{...btnStyle}}>{btnText}</Button>
  )
}
