import ButtonComp from "@/components/Ui/Button";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

export default function ActionNeededButton({
  btnText,
  icon,
  image,
  btnClassName,
  ActionNeededButtonWrapper,
  ActionNeededButtonStyle,
  btnColor,
  action,
}) {
  return (
    <div className={`${ActionNeededButtonWrapper || "col-lg-6 mb-3 mb-lg-0"} `}>
      <ButtonComp
        onClick={action}
        btnStyle={{ border: "2px solid #E6E6E6",...ActionNeededButtonStyle}}
        btnClassName={`bg-white w-100  ${btnClassName || "rounded1 py-3 "} `}
        btnText={
          <span className="d-flex justify-content-between  align-items-center">
            <div className="d-flex align-items-center mx-lg-3">
              {icon && icon}
              <p className={`mb-0    ${btnColor}`}>{btnText}</p>
            </div>
            <FaChevronRight />
          </span>
        }
      />
    </div>
  );
}
