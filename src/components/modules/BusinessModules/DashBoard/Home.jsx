import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import Spacer from "@/components/Common/Spacer";
import { TableCompData } from "@/components/Common/TableComp";
import ButtonComp from "@/components/Ui/Button";
import Container from "@/components/Ui/Container";
import DropDown from "@/components/Ui/DropDown";
import {
  ActionNeededButtonData,

 
} from "@/utils/data";
import {
  RecentTransactionsData,
  RecentTransactionsHeader,
} from "@/utils/TableColumns";
import React from "react";
import { useState } from "react";
import ActionNeededButton from "../../Home/ActionNeededButton";
import Banner from "../../Home/Banner";
import ButtonAction from "../../Home/ButtonAction";
import GetStartedWithPillaPage from "../../Home/Get started with Pilla";
import BuyProperties from "../../Home/Get started with Pilla/BuyProperties";
import Message from "../../Home/Message";
import VerificationStatus from "../../Home/VerificationStatus";
import PayRentMain from "../../PillaFinance/PayRent/PayRentMain";
import PaymentSummary from "../../Saving/RentSavingPage/PaymentSummary";
import { BtnActionHome, HomeBannerData, MerchantsCategoriesData } from "./Data";
import FundAccount from "./FundAccount";
import TransferFund from "./TransferFund";




export default function HomeComp() {
  const [pageName, setPageName] = useState('');
  const [getOpt, setOpt] = useState();

  const useOffCanvasPage = [
    {
      name: "Verification_Status",
      component: (
        <VerificationStatus
          title={"Create PIN"}
          desc={"create your 6 digit passcode to authorize transaction."}
          setOpt={setOpt}
          otpData={getOpt}
          onNext={() => setPageName("Confirm_PIN")}
        />
      ),
    },
    {
      name: "Confirm_PIN",
      component: (
        <VerificationStatus
          title={"Confirm PIN"}
          setOpt={setOpt}
          otpData={getOpt}
          onNext={() => setPageName("Message")}
        />
      ),
    },
    {
      name: "Get started with Pilla",
      component: (
        <GetStartedWithPillaPage/>
      ),
    },
    {
      name: "Buy Properties",
      component: (
        <BuyProperties/>
      ),
    },
    {
      name:'Fund Account',
      component:<FundAccount/>
    },
    {
      name:'Transfer Fund',
      component:<TransferFund/>
    },
    {
      name:'Pay Rent',
      component:<PayRentMain onNext={()=>setPageName('PaymentSummary')}/>
    },
    {
      name:'PaymentSummary',
      component:<PaymentSummary/>
    },
    {
      name: "Message",
      component: <Message />,
    },
  ];

  return (
    <main className="pb-5">
      <section className="mb-4">
      <div >
            <div className='d-flex justify-content-start align-items-center gap-2  pb-3'>
                <div className='rounded-circle h5t  d-flex align-items-center justify-content-center font-2' style={{width:'64px',height:'64px',background:'#CCCCCC'}}>P0</div>
                <div>
                    <div className='h3t grayIV  fw-1 font-2'>Hello, <span className="blackI">Peter Simon</span></div>
                    <div className='h6tt success d-flex gap-1 align-items-center'><FallbackImage src='/Images/Icon/warningSuccess.png' width={16} height={16} /> Awaiting verification</div>
                    <Spacer SpacerClassName='py-1'/>
                </div>
                
            </div>
          
        </div>
      </section>
      <section className="mb-5">
      <h5 className="fw-bold mb-4">Overview</h5>
        <div className="row g-3">
          {HomeBannerData()?.map((item, i) => (
            <Banner
            containerWrapper='col-md-6 col-xl-4'
            mainWrapper='py-4'
              key={i}
              title={item?.title}
              // background={item?.bg}
              color={'#4D4D4D'}
              otherColor={"#4D4D4D"}
              icon={<FallbackImage src='/Images/Icon/warning.png' width={20} height={20}/>}
            />
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h5 className="fw-bold mb-4">Actions</h5>
        <div className="row gy-3 gy-lg-4 gx-3 gx-lg-5">
          {BtnActionHome(setPageName)?.map(({ name, image, action }, index) => (
            <ButtonAction 
            onClick={action}
            BtnActionStyle={{ padding: "15px 0" }}
              key={index}
              btnText={name}
              Image={image}
              
            />
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h5 className="fw-bold mb-4">Actions Needed</h5>
        <div className="row gx-5">
          {ActionNeededButtonData(setPageName)?.map(
            ({ name, icon, action }, index) => (
              <ActionNeededButton
                key={index}
                btnText={name}
                icon={icon}
                btnColor="danger"
                action={action}
              />
            )
          )}
        </div>
      </section>

      <section className="mb-5">
        <h5 className="fw-bold mb-4">Merchants Categories</h5>
        <div className="row gx-5">
          {MerchantsCategoriesData(setPageName)?.map(({ name,action }, index) => (
            <ActionNeededButton ActionNeededButtonWrapper='col-md-6 col-xl-4' key={index} btnText={name} action={action} />
          ))}
        </div>
      </section>

      <section className="">
        <div className="row g-4">
          <div className="col-lg-6 ">
            <Container Wrapper={'border'}>
            <div className="d-flex justify-content-between mb-3">
              <p className="mb-0 fw-normal grayIV">Collections</p>
              <div>
              <DropDown title={<span className="me-2">Last 7 Days</span>} DropDownClassName='h6tt border-0 grayII'/>
              </div>
            </div>
            </Container>
          </div>
          <div className="col-lg-6">
          <Container Wrapper={'border'}>
            <div className="d-flex justify-content-between mb-3">
              <p className="mb-0 fw-normal grayIV">Recent Transactions</p>
              <div>
              {/* <DropDown title={<span className="me-2">Last 7 Days</span>} DropDownClassName='h6tt border-0 grayII'/> */}
              </div>
            </div>
            </Container>
          </div>
        </div>
      </section>

      <OffCanvas
        pageName={pageName}
        arrayComp={useOffCanvasPage}
        placement="end"
        onClose={() => setPageName()}
      />
    </main>
  );
}
