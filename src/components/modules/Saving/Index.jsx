import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import ButtonComp from "@/components/Ui/Button";
import React, { useState } from "react";
import ActionNeededButton from "../Home/ActionNeededButton";
import ButtonAction from "../Home/ButtonAction";
import Banner from "./Banner";
import CreateTargetSavings from "./CreateTargetSavings";

export default function Home() {
  const [pageName, setPageName] = useState();
  const useOffCanvas = [
    {
      name: "Create Target Savings",
      component: <CreateTargetSavings />,
    },
  ];
  return (
    <>
      <section className="mb-5">
        <div className="row g-3">
          <Banner
            title={"Total Savings"}
            amount={"₦ 0.00"}
            BannerClassName="text-white py-4"
            bgColor={"#159F00"}
          />
          <Banner
            title={"Set your target and save towards it."}
            titleStyles={{ fontSize: "13px", color: "#4D4D4D" }}
            amount={"With Pilla Savings"}
            amountStyles={{ color: "#149900" }}
            BannerClassName="text-black"
            icon={"/Images/Saving/1.png"}
            bgColor={"#fff"}
          />
        </div>
      </section>

      <section className="">
        <div className="d-flex justify-content-between">
          <h5 className="fw-bold mb-4">Targets</h5>
        </div>
        <div className="">
          <ButtonAction
            onClick={() => setPageName("Create Target Savings")}
            btnText={"Create Target"}
            BtnActionStyle={{ height: "80px" }}
            btnWrapper={"col-lg-6 col-xl-3"}
          />
        </div>
      </section>

      <OffCanvas
        arrayComp={useOffCanvas}
        pageName={pageName}
        onClose={() => setPageName()}
        placement="end"
      />
    </>
  );
}
