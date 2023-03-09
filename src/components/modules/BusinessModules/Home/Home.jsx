import FallbackImage from "@/components/Common/ImageWrapper";
import ButtonComp from "@/components/Ui/Button";
import Container from "@/components/Ui/Container";
import TextInput from "@/components/Ui/TextInput";
import { useRouter } from "next/router";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import {MdChevronRight} from 'react-icons/md'
export default function Home() {
  const router =useRouter()
  return (
    <section>
      <section className="d-flex justify-content-center">
        <section className="col-xl-10">
        <section className="container py-3 border mb-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5">
            <Container>
              <div className="d-flex gap-2">
                <div className="position-relative">
                  <div
                    className="position-absolute rounded-circle d-flex justify-content-center align-items-center text-white"
                    style={{
                      backgroundColor: "#1BCC00",
                      width: 16,
                      height: 16,
                    }}
                  >
                    +
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center grayII"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "#CCCCCC",
                      borderRadius: 100,
                    }}
                  >
                    PO
                  </div>
                </div>
                <div>
                  <div className="h3t">Welcome, Peter</div>
                  <div className="h6tt gray">{`Here's a few things to help you started  as a business on Pilla`}</div>
                </div>
              </div>
            </Container>
          </div>
          <div className="col-xl-5">
            <Container>
            <p className="fw-semibold d-flex gap-1 align-items-center mb-1">
              <FallbackImage
                src="/Images/Icon/warning.png"
                width={20}
                height={20}
              />
              Account Verification
            </p>
            <div className="h6tt gray mb-3">
              Provide the necessary details and documents. This helps us make
              sure you comply with regulations.
            </div>
            <div>
                <ButtonComp
                btnText={<span className="d-flex gap-2 justify-content-center align-items-center">Verify Account <span><MdChevronRight size={20} style={{marginBottom:'2px'}}/></span></span>}
                btnClassName='bg-successI text-white rounded-pill px-4 py-1'
                />
            </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="container py-3 border mb-5">
      <div className="row g-5 justify-content-between ">
          <div className="col-xl-6">
            <Container>
                <p>API Documentation</p>
                <div className="h6tt gray mb-2">Our documentation includes the necessary libraries, APIs, and SDKs to integrate Pilla into your website or application</div>
                <div>
                    <ButtonComp
                    btnText={'Visit Documentation'}
                    btnClassName='h6tt gray rounded-pill px-3'
                    btnStyle={{border:'1px solid #E6E6E6'}}
                    />
                </div>
            </Container>
            </div>
            <div className="col-xl-6">
            <Container>
                <p>Your Test Keys</p>
                <div>
                    <div className="mb-1">
                        <TextInput
                        labelClassName={'h6tt '}
                        label={'Public key'}
                        labelColor='#4D4D4D'
                        value={'WEYG27EG-nvr58jfwq25y88ol0kmby86f4exvn6'}
                        className='gray py-1 h6tt'
                        suffixIconStyle={{background:'#F2F2F2'}}
                        suffixIcon={<span className="px-2 bg-grayIII">
                            <FallbackImage
                            src='/Images/Icon/copy.png'
                            width={20}
                            height={20}
                            />
                        </span>}
                        />
                    </div>
                    <div>
                        <TextInput
                        labelClassName={'h6tt '}
                        label={'Private key'}
                        labelColor='#4D4D4D'
                        value={'WEYG27EG-nvr58jfwq25y88ol0kmby86f4exvn6'}
                        className='gray py-1 h6tt'
                        suffixIconStyle={{background:'#F2F2F2'}}
                        suffixIcon={<span className="px-2 bg-grayIII">
                            <FallbackImage
                            src='/Images/Icon/copy.png'
                            width={20}
                            height={20}
                            />
                        </span>}
                        />
                    </div>
                </div>
                </Container>
            </div>
            </div>
      </section>

      <section className="text-center">
        <p className="grayII fw-normal text-center">Find answers to questions you <br/> might have or get in touch</p>
        <p className="grayII fw-normal text-center"></p>
        <ButtonComp
        onClick={()=>router.push('/business/verification')}
        btnText={<span className="h5t text-black">Go to Support<span className="ms-2"><MdChevronRight size={20}/></span></span>}
        />
      </section>
        </section>
      </section>
    </section>
  );
}
