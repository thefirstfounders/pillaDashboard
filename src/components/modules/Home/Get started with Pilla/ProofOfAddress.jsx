import FallbackImage from "@/components/Common/ImageWrapper";
import ButtonComp from "@/components/Ui/Button";
import { FileUploaderComp } from "@/components/Ui/FileUploader";
import SelectInput from "@/components/Ui/SelectInput";
import TextInput from "@/components/Ui/TextInput";
import React from "react";
import { DocTypeData } from "../Data";

export default function ProofOfAddress({onNext}) {
  return (
    <section>
      <section className="mb-5">
        <h4 className="fw-bold">Proof of address</h4>
        <div className="font-2">
          We would like to confirm your address with a valid bill.
        </div>
      </section>
      <section>
        <form className="row">
          <div className="col-12 mb-4">
            <TextInput label={"Address"} />
          </div>
          <div className="col-lg-6">
            <TextInput label={"City / Town"} />
          </div>
          <div className="col-lg-6 mb-4">
            <TextInput label={"Local Government"} />
          </div>
          <div className="col-lg-12 mb-4">
            <SelectInput label={"Local Government"} placeholder="select" />
          </div>
          <div className="col-lg-12 mb-4">
            <SelectInput label={"Document Type"} placeholder="select" options={DocTypeData}/>
          </div>
          <div className="col-lg-12 mb-4">
            <FileUploaderComp
              bodyText={
                <section className="d-flex flex-column w-100">
                  <label className="h6tt fw-1 mb-2">Upload Image</label>
                  <div
                    style={{
                      backgroundColor: "#F2F2F2",
                      padding: "12px 16px",
                      border: "1px dashed #E6E6E6",
                    }}
                    className="d-flex justify-content-end w-100 rounded "
                  >
                    <FallbackImage
                      src="/Images/Icon/upload.png"
                      width={24}
                      height={24}
                    />
                  </div>
         
                </section>
              }
            />
          </div>
          <div className='mt-5'>
        <ButtonComp
        onClick={onNext}
        btnText={<h4 className='mb-0'>Submit</h4>}
        btnClassName='primaryI py-2 text-white w-100'
        />
    </div>
        </form>
      </section>
    </section>
  );
}
