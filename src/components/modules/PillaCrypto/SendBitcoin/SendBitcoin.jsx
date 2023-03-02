import OffCanvasHeader from "@/components/Common/OffCanvasHeader";
import ButtonComp from "@/components/Ui/Button";
import MoneyInput from "@/components/Ui/MoneyInput";
import TextInput from "@/components/Ui/TextInput";
import React from "react";
import { BiScan } from "react-icons/bi";

export default function SendBitcoin() {
  return (
    <section>
      <OffCanvasHeader title={"Send Bitcoin"} />

      <section>
        <form>
          <div className="mb-4">
            <MoneyInput
              label={"Amount"}
              Extra={
                <div className="d-flex gap-2">
                  <ButtonComp
                    btnStyle={{
                      backgroundColor: "#00665A",
                      padding: "3px 8px",
                    }}
                    btnText={"BTC"}
                    btnClassName="h6tt fw-semibold text-white "
                  />
                  <ButtonComp
                    btnStyle={{
                      backgroundColor: "transparent",
                      padding: "3px 8px",
                      color:'rgba(102, 102, 102, 0.8)',
                      border:'2px solid #D3D3D3'
                    }}
                    btnText={"USD"}
                    btnClassName="h6tt fw-semibold  "
                  />
                 
                </div>
              }
            />
             <div className="text-end blackI fw-bold font-1 h5tt mt-1">Insert Max</div>
          </div>

          <div>
            <TextInput
            label={'Send to address'}
            placeholder='paste or enter address here'
            suffixIcon={<BiScan size={20}/>}
            />
          </div>
          <div className="mt-5">
          <ButtonComp
          btnStyle={{backgroundColor:'#B3B3B3'}}
            // onClick={onNext}
            btnText={<h4 className="mb-0">Continue</h4>}
            btnClassName="py-2 text-white w-100"
          />
        </div>
        </form>
      </section>
    </section>
  );
}
