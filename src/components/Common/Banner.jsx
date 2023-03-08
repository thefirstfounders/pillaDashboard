import React from "react";

export default function Banner({
  title,
  titleClassName,
  titleStyles,
  amount,
  amountStyles,
  icon,
  bgColor,
  BannerClassName,
  ContainerWrapper,
  AlignPosition,
  borderWidth='2px'
}) {
  return (
    <div className={ContainerWrapper ||`col-lg-6 `}>
      <div
        style={{ backgroundColor: bgColor||'',border:`${borderWidth} solid #E6E6E6` }}
        className={`d-flex justify-content-between ${AlignPosition||'align-items-center'}  rounded1 px-3 px-lg-4  ${BannerClassName||'py-2 '} h-100`}
      >
        <div>
          <div style={{...titleStyles}} className={`${titleClassName?titleClassName:"mb-2 "} h5t fw-normal`}>{title}</div>
          <h4 className={titleClassName||"mb-0"} style={{...amountStyles}}>{amount}</h4>
        </div>
        <div>
          {icon && (
            icon
          )}
        </div>
      </div>
    </div>
  );
}
