import FallbackImage from "@/components/Common/ImageWrapper";
import Spacer from "@/components/Common/Spacer";
import React from "react";

export default function AtmCard({bgColor,userFullName,amount,CardNumber,icon}) {
  return (
    <div className="p-3 rounded text-white" style={{ background: bgColor||"#002199" }}>
      <Spacer SpacerClassName="py-1" />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Pilla</h4>
        <div className="fw-bold font-1 h4t">{amount}</div>
      </div>
      <div className="h5t font-1 fw-bold mb-4">{CardNumber}</div>
      <Spacer
        SpacerClassName="my-3"
        ReUsableStyle={{ height: "2px", backgroundColor: bgColor==='#00665A'?"#009987":"#384DAA", }}
      />
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="h6tt">{userFullName}</div>
        <div className="fw-bold font-1 h4t">
          <FallbackImage
            src={icon?"/Images/Icon/Verve-Logo.png":"/Images/Icon/visa-logo.svg"}
            width={41}
            height={13}
          />
        </div>
      </div>
    </div>
  );
}
