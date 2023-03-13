import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import React from 'react'
import ShowDetails from '../Personalnfo/ShowDetails'

export default function Support({ getTitleName, pageName }) {
  return (
    <section className={`animate__animated animate__fadeIn`}>
       <Container Wrapper={'border'}>
       <div className="h3t fw-normal grayII font-1 mb-5">
        {getTitleName || pageName}
      </div>

      <section>
      <Container Wrapper={'border py-2 mb-4'} WrapperStyle={{border:'1px solid #E6E6E6'}}>
        <ShowDetails
        ShowBorder={'border-0 '}
        label={<div>
            <div className='h5t grayIV mb-1'>Call Us</div>
            <div className='d-flex gap-2 align-items-center'>
                  <h4 className=' fw-bold font-1 black mb-0'>+234 901 234 5678</h4>
            </div>
        </div>}
        labelClassName={'col-8 col-lg-6 text-start'}
        name={ <ButtonComp btnText={'Copy'} btnClassName='h5t blue'/>}
        nameClassName='h5t blue col-4 col-lg-6 text-end'
        />
        </Container>
        <Container Wrapper={'border py-2 mb-4'} WrapperStyle={{border:'1px solid #E6E6E6'}}>
        <ShowDetails
        ShowBorder={'border-0 '}
        label={<div>
            <div className='h5t grayIV mb-1'>Email Us</div>
            <div className='d-flex gap-2 align-items-center'>
                  <h4 className=' fw-bold font-1 black mb-0'>help@pilla.cc</h4>
            </div>
        </div>}
        labelClassName={'col-8 col-lg-6 text-start'}
        name={ <ButtonComp btnText={'Copy'} btnClassName='h5t blue'/>}
        nameClassName='h5t blue col-4 col-lg-6 text-end'
        />
        </Container>
        </section>
       </Container>
      </section>
  )
}
