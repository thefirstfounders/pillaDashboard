import FallbackImage from '@/components/Common/ImageWrapper'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import SwitchInput from '@/components/Ui/SwitchInput'
import React from 'react'

export default function CardDetails({setPageName}) {
  return (
    <section>
    <section className="px-lg-3 mb-5">
      <div className="border rounded p-3">
        <Spacer SpacerClassName='py-2'/>
        <h5 className="fw-bold mb-4">Dollar card</h5>
        <p className="grayIV">Balance.</p>
        <h5 className="fw-bold mb-4">$345.00</h5>
        <div className="row">
          <div className="col-sm-3">
            <div className="h6tt grayIV">Card Holder</div>
            <div className="h3t blackII">Rara Avis</div>
          </div>
          <div className="col-sm-4">
          <div className="h6tt grayIV">Card Number</div>
            <div className="h3t blackII">5472 2842 1823 1234</div>
          </div>
          <div className="col-6 col-sm-2">
          <div className="h6tt grayIV">Valid Thru</div>
            <div className="h3t blackII">03/21</div>
          </div>
          <div className="col-6 col-sm-2">
          <div className="h6tt grayIV">CVV</div>
            <div className="h3t blackII">03/21</div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-5">
      <div className="h6tt mb-2">Billing Address</div>
      <div className="row gy-2 gx-2">
      <div className="col-12 h3t fw-1 borderGeneral bg-grayIII px-3 rounded py-1">
      Roosevelt Street, San Francisco
      </div>
      <div className="col-6">
      <div className=" h3t fw-1 text-center fw-bold borderGeneral bg-grayIII px-3 rounded py-1">
      California
      </div>
      </div>
      <div className="col-6 ">
      <div className="text-center h3t fw-1 fw-bold borderGeneral bg-grayIII px-3 rounded py-1">
      94105
      </div>
      </div>
      </div>
    </section>

    <section className="mb-5">
    <div className="row mb-5">
  <div className="col-6">
    <ButtonComp
    onClick={()=>setPageName('Save Money')}
      btnStyle={{ background: "#00AA96", padding: "12px 0px" }}
      btnText={
        <span className="d-flex align-items-center justify-content-center text-white font-1 h4t fw-bold">
          <FallbackImage
            src="/Images/Icon/pluswhite.png"
            width={24}
            height={24}
            className="me-2 h4t fw-bold"
          />
          Fund
        </span>
      }
      btnClassName="w-100 rounded1 border-0 "
    />
  </div>
  <div className="col-6">
    <ButtonComp
    onClick={()=>setPageName('Withdraw Savings')}
      btnStyle={{
        background: "#fff",
        padding: "12px 0px",
        border: " 2px solid #00AA96",
        color: "#00AA96",
      }}
      btnText={
        <span className="d-flex align-items-center justify-content-center h4t fw-bold  font-1">
          
          Withdraw
        </span>
      }
      btnClassName="w-100 rounded1"
    />
  </div>
</div>
    </section>

    <section>
      <div style={{border:'1px solid #CCCCCC'}} className='rounded py-2 px-3  d-flex align-items-center justify-content-between'>
        <div>Block Card</div>
        <div>
          <SwitchInput/>
        </div>
      </div>
    </section>
    </section>
  )
}
