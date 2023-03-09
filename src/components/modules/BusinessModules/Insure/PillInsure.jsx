import FallbackImage from '@/components/Common/ImageWrapper';
import OffCanvas from '@/components/Common/OffCanvas';
import ButtonComp from '@/components/Ui/Button';
import Container from '@/components/Ui/Container';
import React, { useState } from 'react'
import PropertyInsurance from '../../PillaInsure/PropertyInsurance/PropertyInsurance';
import { PillaInsureData } from './Data';

export default function PillInsure() {
    const [pageName, setPageName] = useState('');

    const useOffCanvas = [
      {
        name: "Property Insurance",
        component: <PropertyInsurance/>
      },
    ];
    return (
      <section>
        <section className="mb-5">
          <div style={{border:'1px solid #E6E6E6'}} className="px-3 px-lg-4 py-3 py-lg-4  text-black  rounded1 d-flex">
            <div className="px-3"></div>
            <div>
              <div className="h5t font-1 grayII mb-2">
              Get insurance for anything and everything
              </div>
              <h4 className=" fw-bold font-1">Be insured, be secure</h4>
            </div>
          </div>
        </section>
  
        <section className="pb-5">
          <div className="row g-4">
            {PillaInsureData(setPageName)?.map(
              ({ image, action, name, desc }, i) => (
                <div className="col-md-6 col-lg-4 col-xl-3  " key={i}>
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
                        btnClassName="h6tt fw-semibold text-decoration-underline px-0 border-0"
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
