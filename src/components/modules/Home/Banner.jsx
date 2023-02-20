import React from "react";

export default function Banner({ title, amount,background,color,otherColor }) {
  return (
    <div className='col-md-6 col-lg-3 mb-3 mb-lg-0'>
    <div style={{background:background, color:color,border:'2px solid #E6E6E6'}} className="px-3 py-3 py-lg-4  rounded1 d-flex flex-column justify-content-center h-100">
      <p className="mb-3">{title}</p>
      <h4 className="fw-bold" style={{color:otherColor}}>₦ 0.00</h4>
    </div>
    </div>
  );
}
