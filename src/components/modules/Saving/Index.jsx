import OffCanvas from "@/components/Common/OffCanvas";
import React, { useState } from "react";
import ButtonAction from "../Home/ButtonAction";
import Banner from "./Banner";
import CreateTargetSavings from "./MainPage/CreateTargetSavings";
import { TargetsData } from "./DummyData";
import SavingProcess from "./MainPage/SavingProcess";
import RentsPage from "./RentSavingPage";
import TargetPage from "./RentSavingPage";
import RentSavingPage from "./RentSavingPage";
import HomeOwnershipSavings from "./MainPage/HomeOwnershipSavings";

export default function Home() {
  const [pageName, setPageName] = useState("");
  const useOffCanvas = [
    {
      name: "Create Target Savings",
      component: (
        <CreateTargetSavings
          pageName={pageName}
          setPageName={setPageName}
          onNext={() => setPageName("Saving")}
        />
      ),
    },
    {
      name: "Saving",
      component: <SavingProcess setPageName1={setPageName} />,
    },
    {
      name: "RentSaving",
      component: <RentSavingPage setPageName1={setPageName} />,
    },
    {
      name: "Home Ownership Savings",
      component: <HomeOwnershipSavings setPageName1={setPageName} />,
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
        <div className="row g-4">
          
            {TargetsData(setPageName).map(({name,amount,targetAmount,action},i)=>
            <div className="col-6 col-xl-3" key={i} onClick={()=>action()}>
            <div className="bg-white px-2 px-lg-3 py-3 rounded1 h-100 pointer"  style={{border: '2px solid #E6E6E6'}}>
            <p className="grayII mb-2">{name}</p>
            <h5 className="fw-bold blackII mb-2 text-nowrap">{amount}</h5>
            <div className="h6tt success">Target:  {targetAmount} </div>
          </div>
          </div>
            )}
            
         
          <div className="col-6 col-xl-3">
          <ButtonAction
            onClick={() => setPageName("Create Target Savings")}
            btnText={"Create Target"}
            BtnActionStyle={{ height: "100%",minHeight:'110px' }}
            btnWrapper={"col-12 h-100"}
          />
        </div>
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
