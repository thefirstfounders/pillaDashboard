import OffCanvas from '@/components/Common/OffCanvas'
import Spacer from '@/components/Common/Spacer'
import Message from '@/components/modules/Home/Message'
import CheckTypeInput from '@/components/Ui/CheckTypeInput'
import Container from '@/components/Ui/Container'
import SwitchInput from '@/components/Ui/SwitchInput'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import ShowDetails from '../Personalnfo/ShowDetails'
import ChangePassword from './Security/ChangePassword'
import EnterYourPIN from './Security/EnterYourPIN'

export default function Security({ getTitleName, pageName }) {

    const [pageNameI,setPageNameI] =useState()

    const useOffCaves =[
        {
            name:'Change Password',
            component:<ChangePassword onNext={()=>setPageNameI('Message')}/>
        },
        {
            name:'Message',
            component:<Message title='Password Changed' desc='You are secured' onNext={()=>setPageNameI('')}/>
        },
        {
            name:'Enter your PIN',
            component:<EnterYourPIN headerName='Enter your PIN' title='Password Changed' desc='You are secured' onNext={()=>setPageNameI('Create New PIN')}/>
        },
        {
            name:'Create New PIN',
            component:<EnterYourPIN headerName={'Create New PIN'}  desc='create your 6 digit passcode to authorize transaction.' onNext={()=>setPageNameI('Confirm New PIN')}/>
        },
        {
            name:'Confirm New PIN',
            component:<EnterYourPIN headerName={'Confirm New PIN'}  desc='create your 6 digit passcode to authorize transaction.' onNext={()=>setPageNameI('Message')}/>
        }
    ]
  return (
   <Container Wrapper={'border px-lg-2'}>
     <section>
     <div className="h3t  fw-normal grayII font-1 mb-4">{getTitleName||pageName}</div>

      <div className='my-4 d-flex align-items-center gap-3'>
        <CheckTypeInput type='radio'/>
        <div>
          <p className='mb-0 fw-normal blackI'>Two factor authentication for login</p>
          <div className='h6tt grayIV font-2'>Require two factor authentication everytime you login.</div>
        </div>
      </div>

      <section>
      <div className="h3t  fw-normal grayII font-1 mb-4">{'Notifications'}</div>

        <Container Wrapper={'mb-4 border'} WrapperStyle={{background:''}}>
        <ShowDetails
        ShowBorder={'border-0 px-0'}
        label={'Change Password'}
        labelClassName={'h4t fw-normal font-1 col-10 col-lg-6'}
        name={<BsArrowRight className='pointer' onClick={()=>setPageNameI('Change Password')} size={30}/>}
        nameClassName={'col-2 col-lg-6 text-end'}
        />
        
        </Container>
        <Container Wrapper={'mb-4 border'} WrapperStyle={{background:''}}>
        <ShowDetails
        ShowBorder={'border-0 px-0'}
        label={'Change Transaction PIN'}
        labelClassName={'h4t fw-normal font-1 col-10 col-lg-6'}
        name={<BsArrowRight className='pointer' size={30} onClick={()=>setPageNameI('Enter your PIN')}/>}
        nameClassName={'col-2 col-lg-6 text-end'}
        />
        
        </Container>

        <OffCanvas
            arrayComp={useOffCaves}
            pageName={pageNameI}
            onClose={()=>setPageNameI()}
        />
        
      </section>
      <Spacer ReUsableStyle={{padding:'10px 0'}} minHeightMobile={'20vh'}/>
      <div className='h-100'>
        
      </div>
    </section>
   </Container>
  )
}
