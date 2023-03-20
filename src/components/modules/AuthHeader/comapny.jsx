import FallbackImage from '@/components/Common/ImageWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CompanyComp() {
  return (
    <div className="row justify-content-between align-items-center ">
          <div className="col-3">
            <FallbackImage
            src={'/Header/Logo.svg'}
            blurDataURL='/blurImage/bank.png'
            width={181}
            height={140}
            />
          </div>
          <div className="col-9">
            <div className="row gx-5 gy-3">
              <div className="col-lg-6">
               <Link className='text-black' href={'/about'}>
               <div className="d-flex gap-4 align-items-start">
               <div> <FallbackImage
            src={'/Header/bank.svg'}
           
            width={24}
            height={24}
            /></div> 
             <div>
             <h4 className="mb-2 fw-normal">About</h4>
             <p className="h6tt">Online platform that offers payments, and payment service providers (PSPs).</p>

             </div>
                </div></Link>
              </div>
              <div className="col-lg-6">
              <div className="d-flex gap-4 align-items-start">
               <div> <FallbackImage
            src={'/Header/case.svg'}
           
            width={24}
            height={24}
            /></div> 
             <div>
             <h4 className="mb-2 fw-normal">Career</h4>
             <p className="h6tt col-lg-9">we looking to expand our already successful team. </p>

             </div>
                </div>
              </div>
              <div className="col-lg-6">
             <Link href={'/our-team'} className='text-black'>
             <div className="d-flex gap-4 align-items-start">
               <div> <FallbackImage
            src={'/Header/team.svg'}
           
            width={24}
            height={24}
            /></div> 
             <div>
             <h4 className="mb-2 fw-normal">Team</h4>
             <p className="h6tt col-lg-9">We have a highly experienced team of experts and advisors </p>

             </div>
                </div></Link>
              </div>
              <div className="col-lg-6">
                <Link className='text-black' href={'/contact'}>
              <div className="d-flex gap-4 align-items-start">
               <div> <FallbackImage
            src={'/Header/support.svg'}
           
            width={24}
            height={24}
            /></div> 
             <div>
             <h4 className="mb-2 fw-normal">Contact</h4>
             <p className="h6tt col-lg-9">We are looking forward to hearing from you.</p>

             </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
  )
}
