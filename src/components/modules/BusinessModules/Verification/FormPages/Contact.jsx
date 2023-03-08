import FallbackImage from '@/components/Common/ImageWrapper'
import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import SelectInput from '@/components/Ui/SelectInput'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'
import { AccountType } from '../Data'
import FormTitle from '../FormTitle'

export default function Contact({onNext,Back}) {
  return (
<section className='animate__fadeIn animate__animated'>      {/* Heere */}
      <FormTitle
      title={'Contact'}
      desc='Enter your business contact Information'
      />

        <form>
            <div className='row'>
                <div className='col-12 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Support Email'}
                    />
                </div>
                <div className='col-12 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Support Number'}
                    placeholder='+234'
                    />
                </div>
                <div className='col-12 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Website'}
                    placeholder='+234'
                    />
                </div>
                {/*  */}
                <div className='col-12 mt-4'>
                <FormTitle
                WrapperClassName={'mb-3'}
      title={'Business Address'}
      />
                </div>
{/*  */}
                <div className='col-12 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Address '}
                    
                    />
                </div>
                <div className='col-lg-6 mb-3'>
                <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Address '}
                    
                    />
                </div>
                <div className='col-lg-6 mb-3'>
                    <SelectInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'City/Town'}
                    options={[
                        {
                            label:'Incorporated Company',
                            value:'Incorporated Company'
                        },
                        {
                            label:'Business Name',
                            value:'Business Name'
                        }
                    ]}
                    />
                </div>
                
                <div className='text-end mt-4 d-flex justify-content-end gap-3'>
                <ButtonComp
                    btnText={'Previous'}
                    onClick={Back}
                    btnClassName='h4t fw-1 fw-bold font-1 grayII px-5'
                    />
                    <ButtonComp
                    btnText={'Next'}
                    onClick={onNext}
                    btnStyle={{backgroundColor:'#00AA96'}}
                    btnClassName='h4t fw-1 fw-bold font-1 text-white px-5'
                    />
                </div>
            </div>
        </form>
    </section>
  )
}
