import FallbackImage from '@/components/Common/ImageWrapper'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import React from 'react'
import ShowDetails from '../Personalnfo/ShowDetails'

export default function SavedCards({ getTitleName, pageName,onNext }) {
  return (
    <section className={`animate__animated animate__fadeIn`}>
        <Container Wrapper={'border'}>
        <div className='d-flex justify-content-between align-items-center mb-4'>
      <div className="h3t  fw-normal grayII font-1 ">{getTitleName||pageName}</div>
      <div>
      <ButtonComp
    //   onClick={onNext}
            btnText={<span className='d-flex gap-2 align-items-center'> <FallbackImage src='/Images/Icon/pluswhite.png' width={20} height={20}/>Add Account</span>}
            btnClassName='text-white primaryI px-4 py-2 font-1 h4t fw-bold'
            />
      </div>
      </div>

      <section>
       

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
        name={ <ButtonComp btnText={'Remove'} btnClassName='h5t danger'/>}
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
        name={ <ButtonComp btnText={'Remove'} btnClassName='h5t danger'/>}
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
        name={ <ButtonComp btnText={'Remove'} btnClassName='h5t danger'/>}
        nameClassName='h5t blue col-4 col-lg-6 text-end'
        />
        </Container>

        {/* <Spacer  ReUsableStyle={{height:'20vh'}} /> */}
    </section>
      </section>
        </Container>
      </section>
  )
}
