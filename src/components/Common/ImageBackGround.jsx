import React from 'react'
import styled from 'styled-components'

export default function ImageBackGround({image}) {
  return (
    <ImageBackGroundStyled Image={image}>

    </ImageBackGroundStyled>
  )
}


const ImageBackGroundStyled =styled.div`
position:absolute;
background-image: url(${props=>props?.Image});
left: 0;
right: 0;
top: 0;
bottom: 0;
background-size: cover;
`