import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import PageSwitch from "@/components/Common/PageSwitch";

import Container from "@/components/Ui/Container";

import React, { useState } from "react";
import Message from "../../Home/Message";
import { AccountType } from "./Data";
import AccountInformation from "./FormPages/AccountInformation";
import BusinessProfile from "./FormPages/BusinessProfile";
import Contact from "./FormPages/Contact";
import Owner from "./FormPages/Owner";

export default function Verification() {
  const [pageName, setPageName] = useState("Business Profile");
  const [canvasName, setCanvasName] = useState("");

  const usePage = [
    {
      name: "Business Profile",
      component: <BusinessProfile  onNext={()=>{
        setPageName('Contact')
        scroll(0,0)
      }}/>,
    },
    {
      name: "Contact",
      component: <Contact  Back={()=>{
        setPageName('Business Profile')
        scroll(0,0)
      }}  onNext={()=>{
        setPageName('Owner Profile')
        scroll(0,0)
      }}/>,
    },
    {
      name: "Owner Profile",
      component: <Owner Back={()=>{
        setPageName('Contact')
        scroll(0,0)
      }}  onNext={()=>{
        setPageName('Account Information')
        scroll(0,0)
      }}/>,
    },
    {
      name: "Account Information",
      component: <AccountInformation Back={()=>{
        setPageName('Owner Profile')
        scroll(0,0)
      }}  onNext={()=>{
        setCanvasName('Message')
        scroll(0,0)
      }}/>,
    },
  ];

  const useCanvas =[
    {
        name:'Message',
        component :<Message title="Verification Submitted" desc="Verifications takes 1-3 days" onNext={()=>setCanvasName()}/>
    }
  ]

  const currentIndex =AccountType.findIndex((item)=>item?.name===pageName)

  //console.log(AccountType.findIndex((item)=>item?.name===pageName),AccountType,pageName)
  return (
    <section className="container">
      <section className="d-flex justify-content-center">
        <section className="col-xl-10">
          <section className=" ">
            <Container Wrapper={"shadow px-lg-5 py-5 border-0 rounded1"}>
              <div className="col-xl-10 mb-5">
                <div className="d-flex gap-3 gap-xl-4 flex-wrap">
                  {AccountType?.map(({ name }, i) => (
                    <div className="d-flex" key={i}>
                      <div className="d-flex gap-2 align-items-center">
                        {(currentIndex-1)<i ?
                          <div style={{width:'16px',height:'16px',border:`2px solid ${currentIndex>=i?'#159F00':'#666666'} `,borderRadius:100}}></div>
                          : 
                          <FallbackImage
                          src="/Images/Icon/markSuccess.svg"
                          width={16}
                          height={16}
                        /> 
                    }
                     
                        {/* <FallbackImage
                          src="/Images/Icon/markSuccess.svg"
                          width={16}
                          height={16}
                        /> */}
                        <div className="h6tt  font-3">{name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <PageSwitch pageArray={usePage} pageName={pageName} />
            </Container>
          </section>
        </section>
      </section>
      <OffCanvas arrayComp={useCanvas} pageName={canvasName} onClose={()=>setCanvasName()} />
    </section>
  );
}
