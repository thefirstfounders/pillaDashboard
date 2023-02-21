import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import OtpComp from "@/components/Common/OptCodeComp";
import Spacer from "@/components/Common/Spacer";
import ButtonComp from "@/components/Ui/Button";
import {
  ActionNeededButtonData,
  BtnActionHome,
  HomeBannerData,
  MerchantsCategoriesData,
} from "@/utils/data";
import React from "react";
import { useState } from "react";
import ActionNeededButton from "./ActionNeededButton";
import Banner from "./Banner";
import ButtonAction from "./ButtonAction";
import VerificationStatus from "./VerificationStatus";

export default function HomeComp() {
    const [pageName,setPageName] =useState();
    const [getOpt,setOpt] =useState();

    const useOffCanvasPage = [
      {
        name:'Verification_Status',
        component:<VerificationStatus
        title={'Create PIN'}
        desc={'create your 6 digit passcode to authorize transaction.'}
        setOpt={setOpt}
        otpData={getOpt}
        onNext={()=>setPageName('Confirm_PIN')}
        />
      },
      {
        name:'Confirm_PIN',
        component:<VerificationStatus
        title={'Confirm PIN'}
        setOpt={setOpt}
        otpData={getOpt}
        onNext={()=>setPageName('Message')}

        />
      },
      {
        name:'Message',
        component:<div className="text-center">
            <h4 className="text-center fw-bold mb-5">PIN Creatr</h4>
            <Spacer SpacerClassName='py-2'/>
            <div className="text-center mb-3">
              <FallbackImage
              src='/Images/Icon/success.svg'
              width={74}
              height={74}
              />
            </div>
            <p className="mb-5">You are secured</p>
            <ButtonComp
          btnStyle={{backgroundColor:'#1A1A1A'}}
          btnText={<h4 className="mb-0 fw-bold">Done</h4>}
          btnClassName='w-100 text-center  rounded text-white py-2'
          />
        </div>
      },
    ]
  return (
    <>
      <section className="mb-5">
        <div className="row">
          {HomeBannerData()?.map((item, i) => (
            <Banner
              key={i}
              title={item?.title}
              background={item?.bg}
              color={item?.color}
              otherColor={i === 0 ? "#FFFFFF" : "#020202"}
            />
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h5 className="fw-bold mb-4">Actions</h5>
        <div className="row gy-3 gy-lg-4 gx-3 gx-lg-5">
          {BtnActionHome()?.map(({ name, image, action }, index) => (
            <ButtonAction key={index} btnText={name} Image={image} />
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h5 className="fw-bold mb-4">Actions Needed</h5>
        <div className="row gx-5">
          {ActionNeededButtonData(setPageName)?.map(({ name, icon,action }, index) => (
            <ActionNeededButton key={index} btnText={name} icon={icon} btnColor='danger' action={action}/>
          ))}
        </div>
      </section>

      <section className="">
        <h5 className="fw-bold mb-4">Merchants Categories</h5>
        <div className="row gx-5">
          {MerchantsCategoriesData()?.map(({ name }, index) => (
            <ActionNeededButton key={index} btnText={name} />
          ))}
        </div>
      </section>

      <OffCanvas pageName={pageName} arrayComp={useOffCanvasPage} placement='end' onClose={()=>setPageName()}/>

    </>
  );
}
