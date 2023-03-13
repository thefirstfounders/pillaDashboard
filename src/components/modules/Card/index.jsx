import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import PageSwitch from "@/components/Common/PageSwitch";
import Spacer from "@/components/Common/Spacer";
import { TableCompData } from "@/components/Common/TableComp";
import ButtonComp from "@/components/Ui/Button";
import SwitchInput from "@/components/Ui/SwitchInput";
import { Data1, TransactionsHeader, TransactionsHeader1 } from "@/utils/TableColumns";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ButtonAction from "../Home/ButtonAction";
import AtmCard from "./AtmCard";
import CardDetails from "./CardDetails";
import CardEmptyState from "./CardEmptyState";
import TopButtons from "./TopButtons";
import VirtualCard from "./VirtualCard";

export default function Pilla_Card() {
  //useOffCanvas
  const [pageName, setPageName] = useState();
  const [getCard, setCard] = useState("Virtual Card");
  const [getSide, setSide] = useState("Card Details");
  //usePage
  // const [pageNameI,setPageNameI] =useState();

  const useOffCanvas = [
    {
      name: "Virtual Card",
      component: <VirtualCard />,
    },
  ];
  const usePage = [
    {
      name: "Card Details",
      component: <CardDetails />,
    },
    {
      name: "Transaction",
      component: (
        <div>
          <div className="h4t mb-3">Transactions</div>
          <div>
            <TableCompData columns={TransactionsHeader1()} data={Data1} noHeader={true}/>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="pb-5">
      <div className="row gx-4">
        <div className="col-lg-6 col-xl-4">
          <div className="card border-0 " style={{ minHeight: "85vh" }}>
            <Spacer SpacerClassName="py-3" />
            <section className="card-body font-1">
              <TopButtons setCard={setCard} getCard={getCard} />

              <div className="mb-3">
                <ButtonAction
                  onClick={() => setPageName("Virtual Card")}
                  btnText={"Create Card"}
                  btnTextClassName={"fw-bold h4t"}
                  BtnActionStyle={{ height: "100%" }}
                  btnWrapper={"col-12 h-100 "}
                />
              </div>
              <div
                className=" rounded  mb-5"
                style={{ background: "#E6E6E6", padding: "8px" }}
              >
                <AtmCard
                  bgColor={"#002199"}
                  CardNumber={"2847  ****  ****  8631"}
                  userFullName={"Saheed Osupa"}
                  amount={"$5"}
                />
              </div>
              <div>
                <AtmCard
                  bgColor={"#00665A"}
                  CardNumber={"2847  ****  ****  8631"}
                  userFullName={"Saheed Osupa"}
                  amount={"₦ 5,000"}
                  icon
                />
              </div>
              <Spacer ReUsableStyle={{ height: "20vh" }} />
            </section>
          </div>
        </div>
        <div className="col-lg-6 col-xl-8">
          {true ? (
            <CardEmptyState />
          ) : (
            <div className="card border-0 h-100">
              <div className="card-body px-4">
                <section
                  className="row rounded-pill mb-5"
                  style={{ backgroundColor: "#F2F2F2", padding: "5px" }}
                >
                  <div className="col-6 px-0">
                    <ButtonComp
                      btnText={"Card Details"}
                      btnStyle={{padding:'8px'}}
                      onClick={() => setSide("Card Details")}
                      btnClassName={`h5tt font-1 w-100 border-0 rounded-pill fw-bold ${
                        getSide === "Card Details"
                          ? "bg-white animate__fadeIn animate__animated"
                          : "bg-grayIII"
                      }`}
                    />
                  </div>
                  <div className="col-6 px-0">
                    <ButtonComp
                      btnStyle={{padding:'8px'}}
                      btnText={"Transaction"}
                      onClick={() => setSide("Transaction")}
                      btnClassName={`h5tt font-1 w-100 border-0 rounded-pill fw-bold ${
                        getSide === "Transaction"
                          ? "bg-white animate__fadeIn animate__animated"
                          : "bg-grayIII"
                      }`}
                    />
                  </div>
                </section>
                <PageSwitch pageArray={usePage} pageName={getSide} />
              </div>
            </div>
          )}
        </div>
      </div>
      <OffCanvas
        arrayComp={useOffCanvas}
        pageName={pageName}
        setPageName={setPageName}
        onClose={() => setPageName()}
      />
    </section>
  );
}
