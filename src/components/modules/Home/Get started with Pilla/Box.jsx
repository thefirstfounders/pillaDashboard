import FallbackImage from "@/components/Common/ImageWrapper";
import React from "react";

export default function Box({name,desc,icon,action}) {
  return (
    <div
      style={{ backgroundColor: "#E5FFFC" }}
      className="d-flex align-items-center justify-content-between py-4 pointer rounded px-3 mb-4"
      onClick={action}
    >
      <div className="d-flex gap-2 align-items-center">
        <div>
          <FallbackImage src={icon} width={40} height={40} />
        </div>
        <div>
          <h6 className="fw-bold mb-1">{name}</h6>
          <div className="h6tt">{desc}</div>
        </div>
      </div>
      <div>
        <FallbackImage src="/Images/Home/warning.png" width={24} height={24} />
      </div>
    </div>
  );
}
