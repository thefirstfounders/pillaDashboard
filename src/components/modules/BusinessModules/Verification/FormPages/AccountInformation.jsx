import FallbackImage from '@/components/Common/ImageWrapper'
import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import { FileUploaderComp } from '@/components/Ui/FileUploader'
import SelectInput from '@/components/Ui/SelectInput'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'
import { BsUpload } from 'react-icons/bs'
import { AccountType } from '../Data'
import FormTitle from '../FormTitle'

export default function AccountInformation({onNext,Back}) {
  return (
<section className='animate__fadeIn animate__animated'>
      {/* Heere */}
      <FormTitle
      title={'Account Information'}
      desc='TKindly provide the information below'
      />

        <form>
            <div className='row'>
                <div className='col-lg-6 mb-3'>
                    <SelectInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Bank Name '}
                    placeholder='select bank'
                    />
                </div>
                <div className='col-lg-6 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Account Number'}
                    />
                </div>
                <div className='col-lg-12 mb-4'>
                    <TextInput
                    
                    labelClassName={'fw-light mb-2'}
                    label={'Name on Account'}
                    />
                </div>
                
                <div className='col-lg-12 mb-3 h6tt grayIV'>
                To help us verify your account, the name on your bank account should match the name you provided as the owner of your business
                </div>
                <div className='text-end mt-4 d-flex justify-content-end gap-3'>
                <ButtonComp
                    btnText={'Previous'}
                    onClick={Back}
                    btnClassName='h4t fw-1 fw-bold font-1 grayII px-5'
                    />
                    <ButtonComp
                    btnText={'Submit'}
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
