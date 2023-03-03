import React from "react";

export default function ShowDetails({ label, name }) {
  return (
    <div
      className={`row font-2 align-items-center pt-3 pb-2 ps-md-4   border-bottom mb-2`}
    >
      <div className="col-md-4 h5t grayIV">{label}</div>
      <div className="col-md-8 h5t blackI">{name}</div>
    </div>
  );
}
