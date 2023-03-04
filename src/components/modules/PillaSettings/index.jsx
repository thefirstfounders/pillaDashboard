import PageSwitch from "@/components/Common/PageSwitch";
import Spacer from "@/components/Common/Spacer";
import Container from "@/components/Ui/Container";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { HiChevronLeft } from "react-icons/hi";
import { SettingData } from "./Data";
import AccountLimit from "./Pages/AccountLimit";
import NotificationSettings from "./Pages/NotificationSettings";
import PersonalInformation from "./Pages/PersonalInformation";
import Security from "./Pages/Security";

export default function PillaSettings() {
  const [pageName, setPageName] = useState("Personal information");
  const [getTitleName,setTitleName] =useState('')

  const usePage = [
    {
      name: "Personal information",
      component: <PersonalInformation pageName={pageName} getTitleName={getTitleName}/>,
    },
    {
      name: "Account Limit",
      component: <AccountLimit pageName={pageName} getTitleName={getTitleName}/>,
    },
    {
      name: "Notifications",
      component: <NotificationSettings pageName={pageName} getTitleName={getTitleName}/>,
    },
    {
      name: "Security",
      component: <Security pageName={pageName} getTitleName={getTitleName}/>,
    },
  ];

  return (
    <section>
      <div className="d-none d-lg-inline-block w-100">
        <div className="row gx-5">
          <div className="col-4">
            <Container Wrapper={"h-100"}>
              {SettingData()?.map(({ name,titleName, action }, i) => (
                <div
                  className={`d-flex justify-content-between font-2 align-items-center pt-3 pb-4 ps-4 ${
                    i !== 5 && " border-bottom"
                  }`}
                  key={i}
                >
                  <div className={`h3t ${pageName === name && "success"}`}>
                    {name}
                  </div>
                  <div className="pointer">
                    <BiChevronRight
                      size={25}
                      onClick={() => {
                        setPageName(name);
                        setTitleName(titleName||name)
                      }}
                    />
                  </div>
                </div>
              ))}
               <Spacer  ReUsableStyle={{height:'15vh'}} />
            </Container>
          </div>
          <div className={`col-8 `} >
            <Container   Wrapper={`h-100 `}>
              <Spacer SpacerClassName="py-2" />
             
              <PageSwitch pageArray={usePage} pageName={pageName} />
             
            </Container>
          </div>
        </div>
      </div>
      {/* MobileView */}
      <div className=" d-lg-none w-100">
        <div className="row">
          {!pageName ? (
            <div className="col-12">
              <Container Wrapper={"h-100"}>
                {SettingData()?.map(({ name, action }, i) => (
                  <div
                    className={`d-flex justify-content-between font-2 align-items-center pt-3 pb-4 ps-4 ${
                      i !== 5 && " border-bottom"
                    }`}
                    key={i}
                  >
                    <div className={`h3t ${pageName === name && "success"}`}>
                      {name}
                    </div>
                    <div className="pointer">
                      <BiChevronRight
                        size={25}
                        onClick={() => setPageName(name)}
                      />
                    </div>
                  </div>
                ))}
              </Container>
              <Spacer minHeightMobile={'10vh'}/>
            </div>
          ) : (
            <div className="col-12 ">
              <Container Wrapper={"h-100"}>
                <Spacer SpacerClassName="py-2" />
                <div className="h4t fw-bold blackIV d-flex align-items-center gap-2 font-1 mb-5">
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
