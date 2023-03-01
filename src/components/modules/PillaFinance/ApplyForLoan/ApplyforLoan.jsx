import PageSwitch from "@/components/Common/PageSwitch";
import React, { useState } from "react";
import Message from "../../Home/Message";
import Progress from "../../Saving/Progress";
import CheckCreditMain from "../CheckCredit/CheckCreditMain";
import LinkSalaryBankAccount from "../CheckCredit/LinkSalaryBankAccount";
import ApplyForLoanForm from "./ApplyForLoanForm";
import ApplyForLoanMain from "./ApplyforLoanMain";
import LoanDetails from "./LoanDetails";

export default function ApplyForLoan({setPageNameMain}) {
  const [pageName, setPageName] = useState("main");
  const usePage =[
    {
      name:'main',
      component:<ApplyForLoanMain onNext={()=>{setPageName('ApplyForLoanForm')}}/>
    },
    {
      name:'ApplyForLoanForm',
      component:<ApplyForLoanForm onNext={()=>setPageName('Loan Details')}/>
    },
    {
      name:'Loan Details',
      component:<LoanDetails onNext={()=>setPageName('Message')}/>
    },
    {
      name: "Message",
      component: (
        <Message
          btnBG="#00AA96"
          title="Loan Application Submitted"
          desc="Verification and Payment takes 24 hours, check your mail for status,"
          onNext={()=>{
            setPageName();
            setPageNameMain()}}
        />
      ),
    },
  ]

  return (
    <section>
      
      <PageSwitch pageArray={usePage} pageName={pageName} />
    </section>
  );
}
