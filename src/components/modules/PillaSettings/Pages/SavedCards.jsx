import FallbackImage from '@/components/Common/ImageWrapper'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import React from 'react'
import ShowDetails from '../Personalnfo/ShowDetails'

export default function SavedCards({ getTitleName, pageName }) {
  return (
    <section className={`animate__animated animate__fadeIn`}>
         <div className="h4t fw-bold blackIV font-1 mb-5">
        {getTitleName || pageName}
      </div>

      <section>
       <div className='mb-4'>
       <ButtonComp btnStyle={{border:'2px solid #E6E6E6', padding:'18px 0',borderRadius:'12px'}}
        btnText={<span className='h4t fw-bold font-1 primaryDark d-flex gap-3 justify-content-center align-items-center'>
            <FallbackImage
            src='/Images/Icon/plus1.png'
            width={24}
            height={24}
            />
            Add Card
        </span>}
        btnClassName='w-100 h4t'
        />
       </div>

    <section>
        <Container Wrapper={'border py-2 mb-4'} WrapperStyle={{border:'1px solid #E6E6E6'}}>
        <ShowDetails
        ShowBorder={'border-0 '}
        label={<div>
            <div className='h5t grayIV mb-1'>GT Bank</div>
            <div className='d-flex gap-2 align-items-center'>
                <FallbackImage
                src='/Images/Icon/masterCard.png'
                width={20}
                height={16}
                objectFit={'contain'}
                />   <div className='h4t fw-bold font-1 black'>418745******5465</div>
            </div>
        </div>}
        labelClassName={'col-8 col-lg-6 text-start'}
        name={ <ButtonComp btnText={'Remove'} btnClassName='h5t blue'/>}
        nameClassName='h5t blue col-4 col-lg-6 text-end'
        />
        </Container>

        <Container Wrapper={'border py-2 mb-4'} WrapperStyle={{border:'1px solid #E6E6E6'}}>
        <ShowDetails
        ShowBorder={'border-0 '}
        label={<div>
            <div className='h5t grayIV mb-1'>Access Bank</div>
            <div className='d-flex gap-2 align-items-center'>
                <FallbackImage
                src='/Images/Icon/visa.png'
                width={24}
                height={18}
                objectFit={'contain'}
                />   <div className='h4t fw-bold font-1 black'>418745******5465</div>
            </div>
        </div>}
        labelClassName={'col-8 col-lg-6 text-start'}
        name={ <ButtonComp btnText={'Remove'} btnClassName='h5t blue'/>}
        nameClassName='h5t blue col-4 col-lg-6 text-end'
        />
        </Container>

        <Container Wrapper={'border py-2 mb-4'} WrapperStyle={{border:'1px solid #E6E6E6'}}>
        <ShowDetails
        ShowBorder={'border-0 '}
        label={<div>
            <div className='h5t grayIV mb-1'>Access Bank</div>
            <div className='d-flex gap-2 align-items-center'>
                <FallbackImage
                src='/Images/Icon/visa.png'
                width={24}
                height={18}
                objectFit={'contain'}
                />   <div className='h4t fw-bold font-1 black'>418745******5465</div>
            </div>
        </div>}
        labelClassName={'col-8 col-lg-6 text-start'}
        name={ <ButtonComp btnText={'Remove'} btnClassName='h5t blue'/>}
        nameClassName='h5t blue col-4 col-lg-6 text-end'
        />
        </Container>

        <Spacer  ReUsableStyle={{height:'20vh'}} />
    </section>
      </section>
      </section>
  )
}
