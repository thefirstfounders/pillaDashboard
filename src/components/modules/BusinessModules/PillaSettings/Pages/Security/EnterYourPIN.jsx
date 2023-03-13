import OffCanvasHeader from "@/components/Common/OffCanvasHeader";
import OtpComp from "@/components/Common/OptCodeComp";
import ButtonComp from "@/components/Ui/Button";
import React from "react";

export default function EnterYourPIN({ onNext,headerName,desc }) {
  return (
    <section>
      <OffCanvasHeader
        title={headerName}
        desc={desc||"Enter your 6 digit passcode."}
        decClassName="gray"
      />

      <section>
        <OtpComp />
        <div className="mt-5">
          <ButtonComp
            onClick={onNext}
            btnText={<h4 className="mb-0">Proceed</h4>}
            btnClassName="primaryI py-2 text-white w-100"
          />
        </div>
      </section>
    </section>
  );
}
