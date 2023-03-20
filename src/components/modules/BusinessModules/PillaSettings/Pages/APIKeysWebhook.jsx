import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import React, { useState } from 'react'

export default function APIKeysWebhook({pageName,getTitleName}) {
    const [selectType,setSelectType] =useState('test')
  return (
    <section   className={`border-0   mb-4 animate__animated animate__fadeIn`}>
    

       <section>
       <Container Wrapper={'border border-2 px-lg-2 mb-5'}>
       <div className={``}>
       <div className="h3t  fw-normal grayII font-1 mb-3">{getTitleName||pageName}</div>
       </div>
       <div className='row py-1 bg-grayIII rounded-pill px-2 overflow-hidden mb-4'>
            <div className={`col-6 text-center h5tt  rounded-pill ${selectType==="test" && "bg-white animate__fadeIn animate__animated"}`}>
                <ButtonComp onClick={()=>setSelectType('test')} btnText={'Test Keys'} btnClassName={`py-1 w-100 border-0 ${selectType==="test" && 'fw-bold'}`}/>
            </div>
            <div className={`col-6 text-center h5tt  rounded-pill ${selectType==="live" && "bg-white animate__fadeIn animate__animated"}`}>
                <ButtonComp onClick={()=>{
                    setSelectType('live')
                    // alert('live')
                }} btnText={'Live Keys'} btnClassName={`py-1 w-100 border-0 ${selectType==="key" && 'fw-bold'}`}/>
            </div>
        </div>

        <div>
            <div className='mb-3'>
                <div className='h6t font-1 mb-1'>Test Secret key</div>
                <div className='bg-grayIII py-2 px-3 rounded'>PILLA_TEST-d490f013fbe7cd9d47913a1f97dace59-X</div>
            </div>
            <div className=''>
                <div className='h6t font-1 mb-1'>Test Public key</div>
                <div className='bg-grayIII py-2 px-3 rounded'>PILLA_TEST-d490f013fbe7cd9d47913a1f97dace59-X</div>
            </div>
        </div>
       </Container>

       <Container Wrapper={'border border-2 px-lg-2'}>
       <div className={``}>
       <div className="h3t  fw-normal grayII font-1 mb-3">{"Webhooks"}</div>
       </div>
       <div className='row py-1 bg-grayIII rounded-pill px-2 overflow-hidden mb-4'>
            <div className={`col-6 text-center h5tt  rounded-pill ${selectType==="test" && "bg-white animate__fadeIn animate__animated fw-bold"}`}>
                <ButtonComp onClick={()=>setSelectType('test')} btnText={'Test Keys'} btnClassName={`py-1 w-100 border-0 ${selectType==="test" && 'fw-bold'}`}/>
            </div>
            <div className={`col-6 text-center h5tt  rounded-pill ${selectType==="live" && "bg-white animate__fadeIn animate__animated"}`}>
                <ButtonComp onClick={()=>{
                    setSelectType('live')
                    // alert('live')
                }} btnText={'Live Keys'} btnClassName={`py-1 w-100 border-0 ${selectType==="key" && 'fw-bold'}`}/>
            </div>
        </div>

        <div>
            <div className='mb-3'>
            <div className='mb-3'>
                <div className='h6t font-1 mb-1'>URL</div>
                <div className='bg-grayIII py-2 px-3 rounded'>
                    <div className='invisible'>Hlke</div>
                </div>
            </div>
            </div>
          
        </div>
       </Container>
       </section>
       </section>
  )
}
