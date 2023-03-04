import React from 'react'

export default function OffCanvasHeader({title,desc,decClassName}) {
  return (
    <section className="mb-5">
    <h4 className="fw-bold">{title} </h4>
    {desc&&<div className={`font-2 ${decClassName}`}>{desc}</div>}
  </section>
  )
}
