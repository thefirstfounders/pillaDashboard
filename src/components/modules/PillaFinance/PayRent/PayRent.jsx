import PageSwitch from '@/components/Common/PageSwitch'
import React, { useState } from 'react'
import Message from '../../Home/Message';
import PayRentMain from './PayRentMain';

export default function PayRent() {
    const [pageName, setPageName] = useState("main");
    const usePage =[
      {
        name:'main',
        component:<PayRentMain onNext={()=>{setPageName('ApplyForLoanForm')}}/>
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
              
            }}
          />
        ),
      },
    ]
  return <PageSwitch pageArray={usePage} pageName={pageName} />
}
