import React from 'react'

export default function PageSwitch({pageArray,pageName}) {
  return pageArray?.find((item)=>item?.name===pageName)?.component;
  
}
