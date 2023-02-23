import FallbackImage from "@/components/Common/ImageWrapper";
import ButtonComp from "@/components/Ui/Button";
import CheckTypeInput from "@/components/Ui/CheckTypeInput";
import React from "react";
import {AiOutlineRight} from 'react-icons/ai'
import { FaChevronRight } from "react-icons/fa";
export default function PaymentSummary({onNext}) {
  return (
    <div>
      <section className="mb-4">
        <h5 className="fw-bold">Payment Summary</h5>
        {/* <p>Enter, how much you want to save. </p> */}
      </section>

      <section className="mb-4">
        <div className="d-flex justify-content-between py-3 py-lg-3   borderColorI h5tt">
          <div className="grayI ">Amount</div>
          <div className="font-4 fw-semibold">₦ 200,000.00</div>
        </div>

        <div className="d-flex justify-content-between py-3 py-lg-3   borderColorI h5tt">
          <div className="grayI ">Service Charge:</div>
          <div className="font-4 fw-semibold">₦ 0.00</div>
        </div>


        <div className="d-flex justify-content-between py-3 py-lg-3   borderColorI h5tt">
          <div className="grayI ">Total</div>
          <div className="font-4 fw-bold h4t">₦ 200,000.00</div>
        </div>
      </section>

      <section>
        <p className="mb-4 blackII">Payment methods</p>
        <div style={{padding:'13px 0'}} className="borderGeneral d-flex justify-content-between  px-3 mb-4">
            <div className="h6tt d-flex align-items-center blackI fw-1"> 
            <FallbackImage
            src='/Images/Icon/wallet.png'
            width={20}
            height={20}
            className='me-2'
            />
            Account Balance (₦ 400,500.00)</div>
            <div>
                <CheckTypeInput name={'bank'} size={'18px'} type="radio"/>
            </div>
        </div>

        <div style={{padding:'13px 0'}}  className="borderGeneral d-flex justify-content-between py-3 px-3 mb-4">
            <div className="h6tt d-flex align-items-center"> 
            <FallbackImage
            src='/Images/Icon/card.png'
            width={20}
            height={20}
            className='me-2'
            />
            <div>
                <div className="blackI  fw-1"> Gt Bank (Card)</div>
                <div className="h7 primaryIII">452739*****6245 Change <FaChevronRight color="#4D4D4D"/></div>
           
            </div>
          </div>
            <div>
                <CheckTypeInput name={'bank'}  size={'18px'} type="radio"/>
            </div>
        </div>

        <div className='mt-5'>
        <ButtonComp
        btnStyle={{background:'#CCCCCC'}}
        onClick={onNext}
        btnText={<h4 className='mb-0'>Pay Now</h4>}
        btnClassName=' py-2 text-white w-100'
        />
    </div>
      </section>
    </div>
  );
}
