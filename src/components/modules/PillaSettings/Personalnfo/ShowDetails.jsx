import React from "react";

export default function ShowDetails({ label, name,labelClassName,nameClassName,ShowBorder}) {
  return (
    <div
      className={`row font-2 align-items-center       ${ShowBorder?ShowBorder:'border-bottom ps-md-4 mb-2 pb-2 pt-3 '}`}
    >
      <div className={` ${labelClassName||'h5t grayIV col-md-4'} `}>{label}</div>
      <div className={` ${nameClassName||`h5t blackI col-md-8`}`}>{name}</div>
    </div>
  );
}
