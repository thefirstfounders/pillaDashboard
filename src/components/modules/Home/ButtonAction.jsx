import FallbackImage from "@/components/Common/ImageWrapper";
import ButtonComp from "@/components/Ui/Button";
import React from "react";

export default function ButtonAction({ btnText,onClick, Image,btnWrapper,BtnActionStyle,btnTextClassName }) {
  return (
    <div className={`${btnWrapper || 'col-6 col-lg-3'}`}>
      <ButtonComp
      onClick={onClick}
        btnStyle={{ border: "2px solid #E6E6E6",...BtnActionStyle }}
        btnClassName={"bg-white w-100 py-3 rounded1"}
        btnText={
          <span className="d-flex justify-content-center  mx-lg-3 align-items-center">
            <FallbackImage
              src={Image || "/Images/Home/1.svg"}
              width={24}
              height={24}
              className="me-1 me-lg-3"
            />
            <span className={`mb-0 font-1 ${btnTextClassName}`}>{btnText}</span>
          </span>
        }
      />
    </div>
  );
}
