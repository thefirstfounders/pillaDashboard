import FallbackImage from "@/components/Common/ImageWrapper";
import ButtonComp from "@/components/Ui/Button";
import React from "react";

export default function ButtonAction({ btnText,onClick, Image,btnWrapper,BtnActionStyle,btnTextClassName,bg,border,action }) {
  return (
    <div className={`${btnWrapper || 'col-md-6 col-lg-3'}`}>
      <ButtonComp
      onClick={onClick}
        btnStyle={{ border: border||"2px solid #E6E6E6",...BtnActionStyle }}
        btnClassName={` w-100 py-3 rounded1 ${bg||'bg-white'}`}
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
