import Banner from "@/components/Common/Banner";
import FallbackImage from "@/components/Common/ImageWrapper";
import { TableCompData } from "@/components/Common/TableComp";
import Container from "@/components/Ui/Container";
import DropDown from "@/components/Ui/DropDown";
import { AccountingTransactionsData, AccountingTransactionsHeader } from "@/utils/TableColumns";
import React, { useState } from "react";
import ButtonAction from "../../Home/ButtonAction";
import { BtnActionHome } from "./Data";

export default function Account() {
  const [pageName,setPageName] =useState()
  return (
    <section>
      <section className="row mb-5">
        <div className="row">
          <Banner
          borderWidth='1px'
            ContainerWrapper={"col-lg-6 col-xl-4"}
            title={"Available Balance"}
            titleStyles={{ fontSize: 16, color: "#4D4D4D",marginBottom:10 }}
            BannerClassName="pb-0 pt-4 pb-3"
            amount={'₦00.00'}
            amountStyles={{fontWeight:700}}
            titleClassName='mb-3'
            icon={<FallbackImage src={'/Images/Icon/warning.png'} width={17} height={17}/>}
            AlignPosition='align-items-top'
          />
          <Banner
            borderWidth='1px'
            ContainerWrapper={"col-lg-6 col-xl-4"}
            title={"Total Collection"}
            titleStyles={{ fontSize: 16, color: "#4D4D4D",marginBottom:10 }}
            BannerClassName="pb-0 pt-4 pb-3"
            amount={'₦00.00'}
            amountStyles={{fontWeight:700}}
            titleClassName='mb-3'
            icon={<FallbackImage src={'/Images/Icon/warning.png'} width={17} height={17}/>}
            AlignPosition='align-items-top'
          />
          <Banner
            borderWidth='1px'
            ContainerWrapper={"col-lg-6 col-xl-4"}
            title={"Total Payout"}
            titleStyles={{ fontSize: 16, color: "#4D4D4D",marginBottom:10 }}
            BannerClassName="pb-0 pt-4 pb-3"
            amount={'₦00.00'}
            amountStyles={{fontWeight:700}}
            titleClassName='mb-3'
            icon={<FallbackImage src={'/Images/Icon/warning.png'} width={17} height={17}/>}
            AlignPosition='align-items-top'
          />
        </div>
      </section>

      <section className="mb-5">
        <h5 className="fw-bold mb-4">Actions</h5>
        <div className="row gy-3 gy-lg-4 gx-3 gx-lg-5">
          {BtnActionHome(setPageName)?.map(({ name, image, action }, index) => (
            <ButtonAction
              BtnActionStyle={{ padding: "10px 0" }}
              key={index}
              btnText={name}
              Image={image}
            />
          ))}
        </div>
      </section>

      <section>
        <Container Wrapper={'border-1'}  WrapperStyle={{border:"1px solid #E6E6E6"}}>
          <div className="d-flex justify-content-between mb-3">
            <div className="h5t grayIV">Transactions</div>
            <div>
              <DropDown title={<span className="me-2">Last 7 Days</span>} DropDownClassName='h6tt border-0 grayII'/>
            </div>
          </div>

          <TableCompData marginBottom={'20px'} HeaderBackgroundColor='#F2F2F2' noHeader={true} data={AccountingTransactionsData} columns={AccountingTransactionsHeader()}/>
        </Container>
      </section>
    </section>
  );
}
