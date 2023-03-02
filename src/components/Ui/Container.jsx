import React from 'react'

export default function Container({children,Wrapper,WrapperStyle}) {
  return (
    <div className={`card border-0 ${Wrapper} position-relative`} style={{...WrapperStyle}}>
        <div className='card-body'>{children}</div>
    </div>
  )
}
