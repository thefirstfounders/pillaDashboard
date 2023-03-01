import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import { TableCompData } from "@/components/Common/TableComp";
import ButtonComp from "@/components/Ui/Button";
import {
  ActionNeededButtonData,
  BtnActionHome,
  HomeBannerData,
  MerchantsCategoriesData,
} from "@/utils/data";
import {
  RecentTransactionsData,
  RecentTransactionsHeader,
} from "@/utils/TableColumns";
import React from "react";
import { useState } from "react";
import ActionNeededButton from "./ActionNeededButton";
import Banner from "./Banner";
import ButtonAction from "./ButtonAction";
import { GetStartedWithPillaData } from "./Data";
import GetStartedWithPillaPage from "./Get started with Pilla";
import GetStartedWithPillaMain from "./Get started with Pilla";
import Box from "./Get started with Pilla/Box";
import BuyProperties from "./Get started with Pilla/BuyProperties";
import Message from "./Message";
import VerificationStatus from "./VerificationStatus";

export default function HomeComp() {
  const [pageName, setPageName] = useState();
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
      name: "Message",
      component: <Message />,
    },
  ];

  return (
    <main className="pb-5">
      <section className="mb-5">
        <div className="row">
          {HomeBannerData()?.map((item, i) => (
            <Banner
              key={i}
              title={item?.title}
              background={item?.bg}
              color={item?.color}
              otherColor={i === 0 ? "#FFFFFF" : "#020202"}
            />
          ))}
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
            <ActionNeededButton key={index} btnText={name} action={action} />
          ))}
        </div>
      </section>

      <section className="">
        <div className="d-flex justify-content-between">
          <h5 className="fw-bold mb-4">Recent Transactions</h5>
          <ButtonComp btnText={"See all"} btnClassName="font-1 fw-bold" />
        </div>

        <div className="card px-lg-4 border-0">
          <div className="card-body">
            <TableCompData
              data={RecentTransactionsData}
              columns={RecentTransactionsHeader()}
              marginBottom="10px"
            />
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
