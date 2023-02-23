import FallbackImage from '@/components/Common/ImageWrapper';
import PageSwitch from '@/components/Common/PageSwitch';
import ButtonComp from '@/components/Ui/Button'
import CheckTypeInput from '@/components/Ui/CheckTypeInput';
import React, { useState } from 'react'
import { GoPrimitiveDot } from 'react-icons/go';
import { VirtualNairaData } from '../Data';
import DollarCard from './DollarCard';
import NairaCard from './NairaCard';

export default function VirtualCard() {
    const [getVirtual,setVirtual] =useState('Naira Card');


    const usePage = [
      {
        name:'Naira Card',
        component:<NairaCard/>
      },
      {
        name:'Dollar Card',
        component:<DollarCard/>
      },
    ]

  return (
    <section>
            <h4 className="fw-bold mb-5">Virtual Card</h4>
            <section className="row gy-0 gx-0 mb-5">
                <div className="col-6">
                  <ButtonComp
                    onClick={() => setVirtual("Naira Card")}
                    btnStyle={{ padding: "12px 0px" }}
                    btnText={<h5 className="mb-0">Naira Card</h5>}
                    btnClassName={`${
                        getVirtual === "Naira Card"
                        ? "bg-black text-white"
                        : "gray "
                    } rounded-pill fw-semibold   w-100`}
                  />
                </div>
                <div className="col-6">
                  <ButtonComp
                    onClick={() => setVirtual("Dollar Card")}
                    btnStyle={{ padding: "12px 0px" }}
                    btnText={"Dollar Card"}
                    btnClassName={`${
                        getVirtual === "Dollar Card" ? "bg-black text-white" : "gray"
                    } rounded-pill fw-semibold   w-100`}
                  />
                </div>
              
              </section>
                  
                  <section>
                    <PageSwitch pageArray={usePage} pageName={getVirtual}/>
                  </section>

        </section>
  )
}
