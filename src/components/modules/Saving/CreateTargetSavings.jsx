import FallbackImage from "@/components/Common/ImageWrapper";
import React from "react";
import ActionNeededButton from "../Home/ActionNeededButton";

export default function CreateTargetSavings({setPageName,pageName}) {
  return (
    <div>
      <div className="mb-4">
        <h4 className="fw-bold">Create Target Savings</h4>
        <p className="blackI font-1">Select any of the saving optional</p>
      </div>
      <div className="mb-4">
        <ActionNeededButton
          ActionNeededButtonStyle={{
            borderColor: "#F2F2F",
            borderWidth: "1px",
          }}
          ActionNeededButtonWrapper={"w-100"}
          btnClassName="py-3 pe-3 ps-0 shadow-none"
          icon={
            <FallbackImage
              src="/Images/Saving/house.png"
              width={24}
              height={24}
              className="me-2"
            />
          }
          btnText={"Rent Savings"}
          btnColor="dark fw-1"
        />
      </div>
      <div>
        <ActionNeededButton
          ActionNeededButtonStyle={{
            borderColor: "#F2F2F",
            borderWidth: "1px",
          }}
          ActionNeededButtonWrapper={"w-100"}
          btnClassName="py-3 pe-3 ps-0 shadow-none "
          icon={
            <FallbackImage
              src="/Images/Saving/building.png"
              width={24}
              height={24}
              className="me-2"
            />
          }
          btnText={"Home Ownership Savings"}
          btnColor="dark fw-1"
        />
      </div>
    </div>
  );
}
