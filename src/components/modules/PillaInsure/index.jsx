import FallbackImage from "@/components/Common/ImageWrapper";
import OffCanvas from "@/components/Common/OffCanvas";
import ButtonComp from "@/components/Ui/Button";
import Container from "@/components/Ui/Container";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { BuyPropertiesData } from "../Home/Data";
import { PillaInsureData } from "./Data";

export default function PillaInsure() {
  const [pageName, setPageName] = useState('Property Insurance');

  const useOffCanvas = [
    {
      name: "Property Insurance",
      component: (
        <div>
          <div className="mb-4">
            <h4 className="fw-bold">Property Insurance</h4>
            <div className="h6tt gray">insurance that offers property</div>
          </div>
          {BuyPropertiesData()?.map(({name,desc},i)=>
        <div className='RentSavingPageBox1 py-4 px-3 mb-3 pointer' key={i}>
        <div className='d-flex justify-content-between'>
            <div>
            <p className='fw-1 mb-2 h5t'>{name}</p>
            <div className='h6tt grayIV'>{desc}</div>
            </div>
            <div><FaChevronRight/></div>
        </div>
       
    </div>
        )}
        </div>
      ),
    },
  ];
  return (
    <section>
      <section className="mb-5">
        <div className="px-3 px-lg-4 py-3 py-lg-4 bg-blackI text-white rounded1 d-flex">
          <div className="px-3"></div>
          <div>
            <div className="h5t font-1 fw-bold mb-2">
              Get insurance for anything and everything
            </div>
            <div className="h1t fw-bold font-1">Be insured, be secure</div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="row g-4">
          {PillaInsureData(setPageName)?.map(
            ({ image, action, name, desc }, i) => (
              <div className="col-md-6 col-lg-3  " key={i}>
                <Container Wrapper={"h-100"}>
                  <div className="mb-3">
                    <FallbackImage src={image} width={79} height={100} />
                  </div>
                  <div className="h4t fw-bold font-1 mb-2">{name}</div>
                  <div className="h6tt blackI mb-4">{desc}</div>
                  <div className=" mb-3">
                    <ButtonComp
                      onClick={() => action()}
                      btnText={"See Details"}
                      btnClassName="h6tt fw-semibold text-decoration-underline"
                    />
                  </div>
                </Container>
              </div>
            )
          )}
        </div>
      </section>
      <OffCanvas
        arrayComp={useOffCanvas}
        pageName={pageName}
        onClose={() => setPageName()}
      />
    </section>
  );
}
