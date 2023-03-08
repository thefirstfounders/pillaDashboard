import React from 'react'

export default function FormTitle({title,desc,WrapperClassName}) {
  return (
    <section>
          <div className={WrapperClassName||'mb-5'}>
                    <h4 className='mb-1 font-2'>{title}</h4>
                  {desc &&  <div className='h6tt grayIV'>{desc}</div>}
                </div>
    </section>
  )
}
