import FallbackImage from "@/components/Common/ImageWrapper";
import ButtonComp from "@/components/Ui/Button";
import Container from "@/components/Ui/Container";
import React from "react";

export default function Box({ onSend, onReceive,onConvert }) {
  return (
    <Container Wrapper={"mb-4"}>
      <div className="row ">
        <div className="col-xl-8 d-flex align-items-center justify-content-between gap-lg-5 border-end pe-5 flex-wrap">
          <div className="d-flex align-items-center gap-3 mb-3  mb-lg-0">
            <FallbackImage src="/Images/Crypto/2.png" width={40} height={40} />
            <div className="">
              <div className="h4t font-1 fw-bold">BTC</div>
              <div className="h6tt gray">+1 BTC = 16,584.8367 USD</div>
            </div>
          </div>
          <div className="mb-3  mb-lg-0">
            <FallbackImage src="/Images/Crypto/3.png" width={90} height={37} />
          </div>
          <div className="h4t grayIV font-1 fw-bold">0.00000035 BTC</div>
          <div className="h4t black font-1 fw-bold mb-3  mb-lg-0">
            $5,850.15{" "}
          </div>
        </div>
        <div className="col-xl-4 d-flex align-items-center px-3 px-lg-4 justify-content-around">
          <ButtonComp
            onClick={onSend}
            btnText={
              <div className="text-center">
                <div className="mb-2">
                  <FallbackImage
                    src="/Images/Crypto/4.png"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="h6tt fw-1 primaryDark">Send</div>
              </div>
            }
          />
          <ButtonComp
            onClick={onReceive}
            btnText={
              <div className="text-center">
                <div className="mb-2 ">
                  <FallbackImage
                    src="/Images/Crypto/5.png"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="h6tt fw-1 primaryDark">Receive</div>
              </div>
            }
          />
          <ButtonComp
          onClick={onConvert}
            btnText={
              <div className="text-center">
                <div className="mb-2">
                  <FallbackImage
                    src="/Images/Crypto/4.png"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="h6tt fw-1 primaryDark">Convert</div>
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
}
