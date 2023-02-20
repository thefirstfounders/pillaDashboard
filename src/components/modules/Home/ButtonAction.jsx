import FallbackImage from "@/components/Common/ImageWrapper";
import ButtonComp from "@/components/Ui/Button";
import React from "react";

export default function ButtonAction({ btnText, Image }) {
  return (
    <div className="col-6 col-lg-3">
      <ButtonComp
        btnStyle={{ border: "2px solid #E6E6E6" }}
        btnClassName={"bg-white w-100 py-3 rounded1"}
        btnText={
          <span className="d-flex justify-content-center  mx-lg-3">
            <FallbackImage
              src={Image || "/Images/Home/1.svg"}
              width={24}
              height={24}
              className="me-3"
            />
            <p className="mb-0 font-1">{btnText}</p>
          </span>
        }
      />
    </div>
  );
}
