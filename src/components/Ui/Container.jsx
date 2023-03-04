import React from 'react'

export default function Container({children,Wrapper,WrapperStyle}) {
  return (
    <div className={`card ${Wrapper||'border-0 '} position-relative`} style={{...WrapperStyle}}>
        <div className='card-body'>{children}</div>
    </div>
  )
}
