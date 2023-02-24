import CheckTypeInput from "@/components/Ui/CheckTypeInput";
import React from "react";

export default function Box({ name, action, selectName }) {
  return (
    <div
      onClick={action}
      //#E7E7E7
      style={{
        border: `1.8px solid ${name === selectName ? "#00AA96" : "#B3B3B3"}`,
      }}
      className="d-flex align-items-center justify-content-between rounded1 py-3 px-3 mb-4"
    >
      <div>
        <p className="font-3 fw-1 mb-0">{name}</p>
      </div>
      <div>
        <CheckTypeInput type="radio" name="Id" checked={name === selectName} />
      </div>
    </div>
  );
}
