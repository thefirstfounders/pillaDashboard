import FallbackImage from "@/components/Common/ImageWrapper";
import PageSwitch from "@/components/Common/PageSwitch";
import ButtonComp from "@/components/Ui/Button";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import ButtonAction from "../Home/ButtonAction";
import Message from "../Home/Message";
import VerificationStatus from "../Home/VerificationStatus";
import PaymentSummary from "./RentSavingPage/PaymentSummary";
import RentSavingMain from "./RentSavingPage/RentSavingMain";
import SaveMoney from "./RentSavingPage/SaveMoney";
import WithdrawSavings from "./RentSavingPage/WithdrawSavings";

export default function RentSavingPage() {
  const [pageName, setPageName] = useState("RentSavingMain");
  const [messagePageTitle,setMessagePageTitle] =useState()

  const usePage = [
    {
      name: "RentSavingMain",
      component: <RentSavingMain setPageName={setPageName} />,
    },
    {
      name: "Save Money",
      component: <SaveMoney onNext={() => setPageName("Payment Summary")} />,
    },
    {
      name: "Withdraw Savings",
      component: <WithdrawSavings  onNext={() => {setPageName("Enter Passcode");setMessagePageTitle('Money Withdarwal')}} />,
    },
    {
      name: "Payment Summary",
      component: (
        <PaymentSummary onNext={() => setPageName("Enter Passcode")} />
      ),
    },
    {
      name: "Enter Passcode",
      component: (
        <VerificationStatus
          btnText={"Verify"}
          title={"Enter Passcode"}
          desc="Input your 6 digit passcode to authorize transaction."
          onNext={()=>setPageName('Message')}
        />
      ),
    },
    {
      name: "Message",
      component: <Message title={messagePageTitle||"Money Save"} desc="Successful" btnBG="#00AA96" onNext={()=>setPageName()}/>,
    },
  ];

  return <PageSwitch pageArray={usePage} pageName={pageName} />;
}
