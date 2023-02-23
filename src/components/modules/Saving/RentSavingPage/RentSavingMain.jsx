import FallbackImage from '@/components/Common/ImageWrapper'
import ButtonComp from '@/components/Ui/Button'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

export default function RentSavingMain({setPageName}) {
  return (
    <div>
          <div className="primaryII py-4 px-3 rounded mb-4">
            <p className="grayII mb-1">Rent Savings</p>
            <h4 className="fw-bold blackII mb-1">₦ 50,000.00</h4>
            <div className="h6tt success">Target: ₦ 400,000.00 </div>
          </div>

          <div className="row mb-5">
            <div className="col-6">
              <ButtonComp
              onClick={()=>setPageName('Save Money')}
                btnStyle={{ background: "#00AA96", padding: "12px 0px" }}
                btnText={
                  <span className="d-flex align-items-center justify-content-center h5t text-white font-1">
                    <FallbackImage
                      src="/Images/Icon/plus.svg"
                      width={24}
                      height={24}
                      className="me-2"
                    />
                    Save Money
                  </span>
                }
                btnClassName="w-100 rounded1 "
              />
            </div>
            <div className="col-6">
              <ButtonComp
              onClick={()=>setPageName('Withdraw Savings')}
                btnStyle={{
                  background: "#fff",
                  padding: "12px 0px",
                  border: " 2px solid #00AA96",
                  color: "#00332D",
                }}
                btnText={
                  <span className="d-flex align-items-center justify-content-center h5t fw-bold  font-1">
                    <FallbackImage
                      src="/Images/Icon/withdraw.svg"
                      width={24}
                      height={24}
                      className="me-2"
                    />
                    Withdraw
                  </span>
                }
                btnClassName="w-100 rounded1"
              />
            </div>
          </div>
          <p className="mb-3 font-2">Transactions</p>
          <div>
            <div className="RentSavingPageBox d-flex justify-content-between px-4 py-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <FallbackImage
                      src='/Images/Icon/credit.png'
                      width={24}
                      height={24}
                      />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Saving</h5>
                      <div className="h6tt gray">Today, 5:20pm</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <h5 className="fw-bold blackII mb-0">₦ 20,000.00 </h5>
                    <FaChevronRight className="ms-1" />
                  </div>
            </div>
          </div>
        </div>
  )
}
