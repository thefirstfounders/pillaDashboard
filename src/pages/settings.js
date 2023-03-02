import Container from '@/components/Ui/Container'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function Settings() {
  return (
    <UserLayout active={7} pageName={`Settings`}>
        <section>
            <div className='row'>
                <div className='col-4'>
                    <Container>
                        hello
                    </Container>
                </div>
                <div className='col-8'>
                <Container>
                        hello
                    </Container>
                </div>
            </div>
        </section>
    </UserLayout>
  )
}
