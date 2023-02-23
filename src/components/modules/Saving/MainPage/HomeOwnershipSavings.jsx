import PageSwitch from "@/components/Common/PageSwitch";

import React, { useState } from "react";
import Message from "../../Home/Message";
import VerificationStatus from "../../Home/VerificationStatus";
import HomeOwnershipSavingsMain from "../HomeOwnershipSavingsPage/HomeOwnershipSavingsMain";
import PaymentSummary from "../RentSavingPage/PaymentSummary";
import SaveMoney from "../RentSavingPage/SaveMoney";
import WithdrawSavings from "../RentSavingPage/WithdrawSavings";



export default function HomeOwnershipSavings() {
  const [pageName, setPageName] = useState("HomeOwnershipSavingsMain");
  const [messagePageTitle,setMessagePageTitle] =useState()

  const usePage = [
    {
      name: "HomeOwnershipSavingsMain",
      component: <HomeOwnershipSavingsMain setPageName={setPageName} />,
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
      component: <Message title={messagePageTitle||"Money Save"} desc="Successful" btnBG="#00AA96"/>,
    },
  ];

  return <PageSwitch pageArray={usePage} pageName={pageName} />;
}
