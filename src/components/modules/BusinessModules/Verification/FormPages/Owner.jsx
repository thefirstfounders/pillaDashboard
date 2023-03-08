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

export default function Owner({onNext,Back}) {
  return (
<section className='animate__fadeIn animate__animated'>
      {/* Heere */}
      <FormTitle
      title={'Owner '}
      desc='Tell us about your owner.'
      />

        <form>
            <div className='row'>
                <div className='col-lg-6 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Full Name'}
                    />
                </div>
                <div className='col-lg-6 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Email Address'}
                    />
                </div>
                <div className='col-lg-12 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'BVN'}
                    />
                </div>
                <div className='col-lg-12 mb-3'>
                    <TextInput
                    required
                    labelClassName={'fw-light mb-2'}
                    label={'Address'}
                    />
                </div>
                <div className='col-lg-6 mb-3'>
                    <FileUploaderComp
                    required
                    labelClassName={'fw-light mb-2'}
                    LabelText={'Identification Document'}
                    bodyText={
                        <div className='py-3 rounded bg-grayIII w-100 d-flex justify-content-between px-3'>
                            <div className='gray'>select file</div>
                            <div><FallbackImage src='/Images/Icon/upload.png' width={24} height={24}/></div>
                        </div>
                    }
                    />
                </div>
                <div className='col-lg-6 mb-3'>
                    <FileUploaderComp
                    required
                    labelClassName={'fw-light mb-2'}
                    LabelText={'Proof of address '}
                    bodyText={
                        <div className='py-3 rounded bg-grayIII w-100 d-flex justify-content-between px-3'>
                            <div className='gray'>select file</div>
                            <div><FallbackImage src='/Images/Icon/upload.png' width={24} height={24}/></div>
                        </div>
                    }
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
