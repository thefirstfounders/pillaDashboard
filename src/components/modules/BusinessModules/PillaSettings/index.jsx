import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import PageSwitch from "@/components/Common/PageSwitch";
import Spacer from "@/components/Common/Spacer";
import Container from "@/components/Ui/Container";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { HiChevronLeft } from "react-icons/hi";
import { SettingData } from "./Data";
import AccountLimit from "./Pages/AccountLimit";
import AddSettlementAccount from "./Pages/AddSettlementAccount";
import BusinessInformation from "./Pages/BusinessInformation";
import NotificationSettings from "./Pages/NotificationSettings";
import PersonalInformation from "./Pages/PersonalInformation";
import SavedCards from "./Pages/SavedCards";
import Security from "./Pages/Security";
import SettlementAccount from "./Pages/SettlementAccount";
import Support from "./Pages/Support";

export default function PillaSettings() {
  const [pageName, setPageName] = useState("Profile");
  const [pageOffCanvas, setPageOffCanvas] = useState("");
  const [getTitleName,setTitleName] =useState('')

  const usePage = [
    {
      name: "Profile",
     
      component: <PersonalInformation pageName={pageName} getTitleName={'Personal Information'}/>,
    },
    {
      name: "Business Information",
      component: <BusinessInformation pageName={pageName} getTitleName={'Business Information'}/>,
    },
    {
      name: "Settlement Account",
      component: <SettlementAccount pageName={pageName} getTitleName={getTitleName} onNext={()=>setPageOffCanvas('Add Settlement Account')}/>,
    },
    {
      name: "Notifications",
      component: <NotificationSettings pageName={pageName} getTitleName={getTitleName}/>,
    },
    {
      name: "Security",
      component: <Security pageName={pageName} getTitleName={getTitleName}/>,
    },
    {
      name: "Cards",
      component: <SavedCards pageName={pageName} getTitleName={getTitleName}/>,
    },
    {
      name: "Support",
      component: <Support pageName={pageName} getTitleName={getTitleName}/>,
    },
  ];

  const useOffCanvas =[
    {
      name:'Add Settlement Account',
      component:<AddSettlementAccount/>
    }
  ]

  return (
    <section className="container">
      <div className="d-none d-lg-inline-block w-100">
        <div className="row gx-5">
          <div className="col-4">
            <Container Wrapper={"min-vh-100 h-100 border"} >
            <Container Wrapper={'bg-grayIII border-0 rounded-0'}>
            <div className='d-flex justify-content-start align-items-center gap-2  '>
                <div className='rounded-circle h5t  d-flex align-items-center justify-content-center font-2' style={{width:'64px',height:'64px',background:'#CCCCCC'}}>P0</div>
                <div>
                    <div className='h3t grayIV  fw-1 font-2'><span className="blackI">Peter Simon</span></div>
                    <div className='h6tt success d-flex gap-1 align-items-center'><FallbackImage src='/Images/Icon/warningSuccess.png' width={16} height={16} /> Awaiting verification</div>
                    <Spacer SpacerClassName='py-1'/>
                </div>
                
            </div>
            </Container>
              {SettingData()?.map(({ name,titleName, action }, i) => (
                <div
                onClick={() => {
                  setPageName(titleName||name);
                  setTitleName(titleName||name)
                }}
                  className={`d-flex justify-content-between font-2 align-items-center pt-3 pb-4 ps-4 pe-2 pointer ${
                   " border-bottom"
                  } ${titleName===pageName ? "primaryII successII" :""}`}
                  key={i}
                >
                  <div className={`h3t ${pageName === name && "successII"}`}>
                    {name}
                  </div>
                  <div className="pointer">
                    <BiChevronRight
                      size={25}
                      
                    />
                  </div>
                </div>
              ))}
               {/* <Spacer  ReUsableStyle={{height:'40vh'}} /> */}
            </Container>
          </div>
          <div className={`col-8 `} >
          
              
             
              <PageSwitch pageArray={usePage} pageName={pageName} />
              <OffCanvas arrayComp={useOffCanvas}  pageName={pageOffCanvas} onClose={()=>setPageOffCanvas()}/>
          
          </div>
        </div>
      </div>
      {/* MobileView */}
      <div className=" d-lg-none w-100">
        <div className="row">
          {!pageName ? (
            <div className="col-12">
              
                {SettingData()?.map(({ name,titleName, action }, i) => (
                 <div
                 onClick={() => {
                   setPageName(titleName||name);
                   setTitleName(titleName||name)
                 }}
                   className={`d-flex justify-content-between font-2 align-items-center pt-3 pb-4 ps-4 pe-2 pointer ${
                    " border-bottom"
                   } ${titleName===pageName ? "primaryII successII" :""}`}
                   key={i}
                 >
                   <div className={`h3t ${pageName === name && "successII"}`}>
                     {name}
                   </div>
                   <div className="pointer">
                     <BiChevronRight
                       size={25}
                       
                     />
                   </div>
                 </div>
                ))}
             
              <Spacer minHeightMobile={'10vh'}/>
            </div>
          ) : (
            <div className="col-12 ">
              <Container Wrapper={"h-100"}>
                <Spacer SpacerClassName="py-2" />
                <div className="h4t fw-bold blackIV d-flex align-items-center gap-2 font-1 mb-3">
                  <span className="mb-1">
                    <HiChevronLeft onClick={() => setPageName("")} />
                  </span>
                  {pageName}
                </div>
                <PageSwitch pageArray={usePage} pageName={pageName} />
              </Container>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
