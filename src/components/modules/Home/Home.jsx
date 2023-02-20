import OffCanvas from "@/components/Common/OffCanvas";
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

export default function HomeComp() {
    const [pageName,setPageName] =useState();
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

      <OffCanvas pageName={pageName} placement='end' onClose={()=>setPageName()}/>

    </>
  );
}
