import React from "react";

export default function Banner({ title, amount,background,color,otherColor,desc,descShow,containerWrapper,mainWrapper,action,icon }) {
  return (
    <div className={containerWrapper||'col-md-6 col-lg-3 mb-3 mb-lg-0'}>
    <div style={{background:background, color:color,border:'1px solid #E6E6E6'}} className={`px-3  ${mainWrapper||'pt-3 pt-lg-4 pb-3'} rounded1 d-flex flex-column justify-content-center h-100`}>
    <div className="d-flex justify-content-between align-items-start">
      <div >
      <p className="mb-2">{title}</p>
      <h4 className="fw-bold mb-0" style={{color:otherColor}}>₦ 0.00</h4>
      </div>
      {icon &&<div>{icon}</div>}
    </div>
    {descShow &&  <div onClick={action} className={desc?"h6tt text-end blackI text-decoration-underline pointer":'invisible'}>{desc||'-'}</div>}
    </div>
    </div>
  );
}
