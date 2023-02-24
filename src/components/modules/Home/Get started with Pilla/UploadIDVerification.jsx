import FallbackImage from '@/components/Common/ImageWrapper'
import ButtonComp from '@/components/Ui/Button'
import { FileUploaderComp } from '@/components/Ui/FileUploader'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'

export default function UploadIDVerification({onNext}) {
  return (
    <section>
         <section className="mb-5">
        <h4 className="fw-bold">Upload ID Verification </h4>
        <div className="font-2">
        Upload ID to complete identity verification
        </div>
      </section>
      <section>
        <div className='mb-4'>
          <TextInput
          label={'Enter ID Number'}
          />
        </div>
        <div>
        <FileUploaderComp
        bodyText={
        <section className='d-flex flex-column w-100'>
        <label className='h5t font-2 mb-2 fw-1'>Upload Image</label>
        <div style={{backgroundColor:'#F2F2F2',padding: '12px 16px',border:'1px dashed #E6E6E6'}} className='d-flex justify-content-end w-100 rounded '> 

          <FallbackImage
          src='/Images/Icon/upload.png'
          width={24}
          height={24}
          />
        </div>
        </section>
        }
        />
        </div>
        <div className='mt-5'>
        <ButtonComp
        onClick={onNext}
        btnText={<h4 className='mb-0'>Submit</h4>}
        btnClassName='primaryI py-2 text-white w-100'
        />
    </div>
      </section>
    </section>
  )
}
