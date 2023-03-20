import OffCanvas from "@/components/Common/OffCanvas";
import { TableCompData } from "@/components/Common/TableComp";
import Container from "@/components/Ui/Container";
import DropDown from "@/components/Ui/DropDown";
import React, { useState } from "react";
import ButtonAction from "../../Home/ButtonAction";
import Banner from "../Saving/Banner";
import { BtnActionHome, data, Data1, PaymentLinkHeader } from "./Data";
import PaymentDetails from "./offCanvas/PaymentDetails";

export default function PaymentLink() {

    const [pageName,setPageName] =useState('')
  const useOffCanvas = [
    {
      name: "Payment Details",
      component: <PaymentDetails />,
    },
  ];

  return (
    <section>
      <section className="mb-5">
        <div className="row">
          {Data1?.map(({ title }, i) => (
            <Banner
              containerWrapper={"col-xl-3 mb-3 xl-mb-0"}
              key={i}
              title={title}
              BannerClassName={"py-4"}
              // background={item?.bg}
              // color={item?.color}
              otherColor={"#000"}
              // desc={item?.desc}
              descShow={true}
              // action={item?.action}
              amount={"₦ 0.00"}
            />
          ))}
        </div>
      </section>
      {/*  */}
      <section className="mb-5">
        <h5 className="fw-bold mb-4">Actions</h5>
        <div className="row gy-3 gy-lg-4 gx-3 gx-lg-5">
          {BtnActionHome()?.map(({ name, image, action }, index) => (
            <ButtonAction
              btnTextClassName={"py-2 primaryDark fw-bold"}
              BtnActionStyle={{ padding: "10px 0" }}
              key={index}
              btnText={name}
              Image={image}
              onClick={()=>setPageName('Payment Details')}
            />
          ))}
        </div>
      </section>
      {/*  */}
      <section>
        <Container Wrapper={"border-2 rounded-2 h-100"}>
          <div className="bg-white  rounded1 h-100">
            <div className="d-flex align-items-center justify-content-between ">
              <div className="h5t" style={{ color: "#666666" }}>
                Payment Links
              </div>
              <div>
                <DropDown title={"See All"} DropDownClassName="grayII h5t" />
              </div>
            </div>
            <TableCompData
              noHeader={true}
              data={[]}
              fontWeight={"500"}
              HeaderBackgroundColor="#F2F2F2"
              columns={PaymentLinkHeader}
              message={
                <div className="py-5">
                  <div className="text-center gray h6tt">
                    No link history, create new payment <br /> link to get
                    started
                  </div>
                </div>
              }
            />
            {/* <div className="text-center mt-5 d-flex justify-content-center align-items-center">
              
              <div className="text-center h7 gray">No Repayment history, apply to get loan</div>
            </div> */}
          </div>
        </Container>
      </section>
      <OffCanvas
      arrayComp={useOffCanvas}
      pageName={pageName}
      onClose={()=>setPageName()}
      
      />
    </section>
  );
}
