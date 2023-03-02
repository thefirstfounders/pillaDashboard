import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import Spacer from "@/components/Common/Spacer";
import ButtonComp from "@/components/Ui/Button";
import DropDown from "@/components/Ui/DropDown";
import React, { useState } from "react";
import Banner from "../Home/Banner";
import ButtonAction from "../Home/ButtonAction";
import ApplyForLoan from "./ApplyForLoan/ApplyforLoan";
import CheckCredit from "./CheckCredit/CheckCredit";
import { PillaFinanceData } from "./Data";
import PayRent from "./PayRent/PayRent";

export default function PillaFinance() {
  const [pageName,setPageName] =useState('');

  const useOffCanvas =[
    {
      name:'Check Credit',
      component:<CheckCredit setPageNameMain={()=>setPageName()} />
    },
    {
      name:'Apply for Loan',
      component:<ApplyForLoan setPageNameMain={()=>setPageName()} />
    },
    {
      name:'Pay Rent',
      component:<PayRent setPageNameMain={()=>setPageName()} />
    },
  ]
  return (
    <section>
      <section className="row g-4">
     <div className="col-lg-6">
     <div className="row g-3 ">
            {PillaFinanceData(setPageName)?.map((item, i) => (
              <Banner
                containerWrapper={"col-xl-6"}
                key={i}
                title={item?.title}
                background={item?.bg}
                color={item?.color}
                otherColor={"#000"}
                desc={item?.desc}
                descShow={true}
                action={item?.action}
              />
            ))}
          </div>
     </div>
          <div className="  col-lg-6">
            <div className="rounded1 p-3 p-lg-4 " style={{background:'#0024A8'}}>
              <Spacer SpacerClassName='py-2'/>
            <div className="d-flex justify-content-between text-white">
                <div>
                  <div className="h5t">Instant loan to</div>
                  <h2 className="mb-0">Finance Rent</h2>
                </div>
                <div>
                  <ButtonComp
                  onClick={()=>setPageName('Apply for Loan')}
                  btnText={<>
                  <FallbackImage
                  src='/Images/Finance/hand.png'
                  width={24}
                  height={24}
                  className='me-2'
                  />
                  <span className="h5tt fw-bold font-1 primaryDark">Apply for loan</span></>}
                  btnClassName='bg-white py-3'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-6">
            <Banner
              containerWrapper={"col-xl-12"}
              mainWrapper={"pt-4 pb-5"}
              title={"Outstanding loan balance"}
              background={"#FFFFFF"}
              color={"#00332D"}
              otherColor={"#00332D"}
            />
          </div>
          <div className="col-lg-6">
            <div className="font-1 fw-bold h4t mb-4">Actions</div>
            <div className="row gx-3">
            <ButtonAction
            btnWrapper={'col-6'}
            bg={'bg-blackII text-white py-4'}
              BtnActionStyle={{ padding: "15px 0",backgroundColor:'#333333' }}
              // key={index}
              btnText={'Repay Loan'}
              Image={'/Images/Icon/pluswhite.png'}
              btnTextClassName='fw-bold'
            />
            <ButtonAction
            btnWrapper={'col-6'}
            bg={' py-4'}
              BtnActionStyle={{ padding: "15px 0",backgroundColor:'#fff' }}
              // key={index}
              onClick={()=>setPageName('Pay Rent')}
              btnText={'Pay Rent'}
              Image={'/Images/Icon/arrow-up.png'}
              btnTextClassName='fw-bold'
              border={'2px solid #333333'}
            />
            </div>
          </div>
          <div className="col-lg-6">
          <div className="bg-white px-4 py-4 rounded1">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="h5tt" style={{ color: "#0D0D0D" }}>
                Loan History
              </div>
              <div>
                <DropDown title={"See All"} DropDownClassName="grayII h5t" />
              </div>
            </div>

            <div className="text-center">
              <FallbackImage
                src={"/Images/Finance/LoanEmptyState.png"}
                width={126}
                height={119}
              />
              <div className="text-center h7 gray">No loan history, apply to get loan</div>
            </div>
          </div>
          </div>

          <div className="col-lg-6">
          <div className="bg-white px-4 py-4 rounded1 h-100">
            <div className="d-flex align-items-center justify-content-between ">
              <div className="h5tt" style={{ color: "#0D0D0D" }}>
              Payment History
              </div>
              <div>
                <DropDown title={"See All"} DropDownClassName="grayII h5t" />
              </div>
            </div>

            <div className="text-center mt-5 d-flex justify-content-center align-items-center">
              
              <div className="text-center h7 gray">No Repayment history, apply to get loan</div>
            </div>
          </div>
          </div>
      </section>
      <OffCanvas
      arrayComp={useOffCanvas}
      pageName={pageName}
      onClose={()=>setPageName()}
      />
    </section>
  );
}
