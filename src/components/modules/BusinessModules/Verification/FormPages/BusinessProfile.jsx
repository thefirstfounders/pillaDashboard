import FallbackImage from '@/components/Common/ImageWrapper'
import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import SelectInput from '@/components/Ui/SelectInput'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'
import { AccountType } from '../Data'
import FormTitle from '../FormTitle'

export default function BusinessProfile({onNext}) {
  return (
<section className='animate__fadeIn animate__animated'>
      {/* Heere */}
      <FormTitle
      title={'Business Profile'}
      desc='Please tell us about your business'
      />

        <form>
            <div className='row'>
                <div className='col-12 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Business name'}
                    />
                </div>
                <div className='col-lg-6 mb-3'>
                    <SelectInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Business Type'}
                    options={[
                        {
                            label:'Not Registered',
                            value:'Not Registered'
                        },
                        {
                            label:'Registered',
                            value:'Registered'
                        }
                    ]}
                    />
                </div>
                <div className='col-lg-6 mb-3'>
                    <SelectInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Registration Type'}
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
                <div className='col-lg-6 mb-3'>
                    <SelectInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Categories of business'}
                    options={[
                        {
                            label:'Rental Property',
                            value:'Rental Property'
                        },
                        {
                            label:'Property Development',
                            value:'Property Development'
                        },
                        {
                            label:'Insurance',
                            value:'Insurance'
                        }
                    ]}
                    />
                </div>
                <div className='text-end mt-4'>
                    <ButtonComp
                    onClick={onNext}
                    btnText={'Next'}
                    btnStyle={{backgroundColor:'#00AA96'}}
                    btnClassName='h4t fw-1 fw-bold font-1 text-white px-5'
                    />
                </div>
            </div>
        </form>
    </section>
  )
}
