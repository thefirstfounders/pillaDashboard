import FallbackImage from "@/components/Common/ImageWrapper";
import React from "react";

export default function Banner({
  title,
  titleStyles,
  amount,
  amountStyles,
  icon,
  bgColor,
  BannerClassName,
  containerWrapper
}) {
  return (
    <div className={containerWrapper|| 'col-lg-6'}>
      <div
        style={{ backgroundColor: bgColor||'',border:'2px solid #E6E6E6' }}
        className={`d-flex justify-content-between align-items-center  rounded1 py-2 px-3 px-lg-4 ${BannerClassName} h-100`}
      >
        <div>
          <div style={{...titleStyles}} className="h5t fw-normal mb-2">{title}</div>
          <h4 className="mb-0" style={{...amountStyles}}>{amount}</h4>
        </div>
        <div>
          {icon && (
            <FallbackImage
              src="/Images/Saving/1.png"
              width={111}
              height={100}
            />
          )}
        </div>
      </div>
    </div>
  );
}
