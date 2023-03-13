import ButtonComp from "@/components/Ui/Button";
import React from "react";

export default function TopButtons({ setCard, getCard }) {
  return (
    <div className="row gy-0 gx-0">
      <div className="col-6">
        <ButtonComp
          onClick={() => setCard("Virtual Card")}
          btnStyle={{ padding: "12px 0px" }}
          btnText={"Virtual Card"}
          btnClassName={`${
            getCard === "Virtual Card" ? "bg-black text-white animate__fadeIn animate__animated" : "gray "
          } rounded-pill fw-semibold   w-100`}
        />
      </div>
      <div className="col-6">
        <ButtonComp
          onClick={() => setCard("Debit Card")}
          btnStyle={{ padding: "12px 0px" }}
          btnText={"Debit Card"}
          btnClassName={`${
            getCard === "Debit Card" ? "bg-black text-white animate__fadeIn animate__animated" : "gray"
          } rounded-pill fw-semibold   w-100`}
        />
      </div>
      <div className="col-12">
        <hr className="text-muted" />
      </div>
    </div>
  );
}
