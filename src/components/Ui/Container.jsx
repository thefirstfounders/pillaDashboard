import React from 'react'

export default function Container({children,Wrapper,}) {
  return (
    <div className={`card border-0 ${Wrapper} position-relative`}>
        <div className='card-body'>{children}</div>
    </div>
  )
}
