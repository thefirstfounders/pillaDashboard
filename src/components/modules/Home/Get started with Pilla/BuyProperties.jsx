import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { BsChevronRight } from 'react-icons/bs'
import { FaChevronCircleRight, FaChevronRight } from 'react-icons/fa'
import { BuyPropertiesData } from '../Data'

export default function BuyProperties() {
  return (
    <section>
        <section className="mb-5">
      <h4 className="fw-bold">Buy Properties</h4>
 
    </section>

    <section className=''>
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
        
    </section>
    </section>
  )
}
