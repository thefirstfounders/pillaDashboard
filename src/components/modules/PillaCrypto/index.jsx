import ImageBackGround from "@/components/Common/ImageBackGround";
import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import { TableCompData } from "@/components/Common/TableComp";
import ButtonComp from "@/components/Ui/Button";
import Container from "@/components/Ui/Container";
import DropDown from "@/components/Ui/DropDown";
import {
  CryptoTransactionsData,
  CryptoTransactionsHeader,
} from "@/utils/TableColumns";
import React, { useState } from "react";
import Box from "./Box";
import ConvertEthereum from "./ConvertEthereum/ConvertEthereum";
import ReceiveBitcoin from "./ReceiveBitcoin/ReceiveBitcoin";
import SellCryptoToFundAccount from "./SellCryptoToFundAccount/SellCryptoToFundAccount";
import SendBitcoin from "./SendBitcoin/SendBitcoin";

export default function PillaCrypto() {
  const [pageName, setPageName] = useState("");

  const useCanvas = [
    {
      name: "Sell crypto to fund account",
      component: <SellCryptoToFundAccount />,
    },
    {
      name: "Send Bitcoin",
      component: <SendBitcoin />,
    },
    {
      name: "Receive Bitcoin",
      component: <ReceiveBitcoin />,
    },
    {
      name: "Convert  Ethereum",
      component: <ConvertEthereum />,
    },
  ];

  return (
    <section>
      <section className="mb-5">
        <div
          style={{ backgroundColor: "#0024A8" }}
          className=" py-4 text-white rounded py-3 px-4 position-relative"
        >
          <ImageBackGround image={"/Images/Crypto/bg1.png"} />
          <div className="d-flex justify-content-between align-items-center position-relative">
            <div>
              <div className="h4t fw-bold font-1 mb-2">Current Balance</div>
              <h3 className="fw-bold font-1">$10,000.00</h3>
            </div>

            <div>
              <ButtonComp
              onClick={()=>setPageName('Sell crypto to fund account')}
                btnText={
                  <span className="d-flex h5tt fw-bold font-1 align-items-center">
                    <FallbackImage
                      src={"/Images/Crypto/1.png"}
                      width={24}
                      height={24}
                      className="me-2"
                    />
                    Sell Cryto
                  </span>
                }
                btnClassName="text-black bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h4t fw-bold font-1 mb-4">My Assests</div>

        <section className="mb-5">
          <Box onSend={()=>setPageName('Send Bitcoin')} onReceive={()=>setPageName('Receive Bitcoin')} onConvert={()=>setPageName('Convert  Ethereum')}/>
          <Box />
          <Box />
        </section>

        <section>
          <div className="row g-4">
            <div className="col-lg-6">
              <h5 className="fw-bold mb-4">Transactions</h5>
              <Container>
                <TableCompData
                  columns={CryptoTransactionsHeader()}
                  data={CryptoTransactionsData}
                  noHeader={true}
                  marginBottom={"10px"}
                />
              </Container>
            </div>
            <div className="col-lg-6">
              <h5 className="fw-bold mb-4">Charts</h5>
              <Container Wrapper={""}>
                <div className="d-flex align-items-center justify-content-between px-lg-3">
                  <div>
                    <DropDown
                      title={
                        <span className="fw-bold">
                          {" "}
                          <FallbackImage
                            src="/Images/Crypto/7.png"
                            width={30}
                            height={30}
                            className="me-2"
                          />{" "}
                          BTC
                        </span>
                      }
                      DropDownClassName="blackI h6tt border"
                    />
                  </div>
                  <div
                    style={{ backgroundColor: "#E5EBFF" }}
                    className="d-flex h6tt gap-3 gap-xl-5 px-2 px-xl-4 py-3 rounded"
                  >
                    <div className="">Day</div>
                    <div>Week</div>
                    <div>Month</div>
                    <div>Year</div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </section>
      </section>
      <OffCanvas pageName={pageName} arrayComp={useCanvas} onClose={()=>setPageName()} />
    </section>
  );
}
