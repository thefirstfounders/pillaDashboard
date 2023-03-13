import Container from '@/components/Ui/Container'
import SwitchInput from '@/components/Ui/SwitchInput'
import React from 'react'
import ShowDetails from '../Personalnfo/ShowDetails'

export default function NotificationSettings({ getTitleName, pageName }) {
  return (
    <section className={`animate__animated animate__fadeIn`}>
         <div className="h4t fw-bold blackIV font-1 mb-5">
        {getTitleName || pageName}
      </div>

      <section>
        <Container Wrapper={'mb-4 border-0'} WrapperStyle={{background:'#F2F2F2'}}>
        <ShowDetails
        ShowBorder={'border-0 px-0'}
        label={'Debit Alerts'}
        labelClassName={'h4t fw-bold font-1 col-6'}
        name={<SwitchInput bgColor={'#1BCC00'}/>}
        nameClassName={'col-6 text-end'}
        />
        
        </Container>
        <Container Wrapper={'mb-4 border-0'} WrapperStyle={{background:'#F2F2F2'}}>
        <ShowDetails
        ShowBorder={'border-0 px-0'}
        label={'Credit Alerts'}
        labelClassName={'h4t fw-bold font-1 col-6'}
        name={<SwitchInput bgColor={'#1BCC00'}/>}
        nameClassName={'col-6 text-end'}
        />
        
        </Container>

        
      </section>
    </section>
  )
}
