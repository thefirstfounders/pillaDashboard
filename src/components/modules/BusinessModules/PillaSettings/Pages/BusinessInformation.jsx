import FallbackImage from '@/components/Common/ImageWrapper'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'
import ShowDetails from '../Personalnfo/ShowDetails'

export default function BusinessInformation({pageName,getTitleName}) {
  return (
    <>
    <Container   Wrapper={` border mb-4`}>
    <div className={`animate__animated animate__fadeIn`}>
       <div className="h3t  fw-normal grayII font-1 mb-3">{getTitleName||pageName}</div>
    {/* <div className="mb-5">
      <FallbackImage
        src="/Images/Setting/icon.png"
        defaultImage="/Images/Setting/icon.png"
        width={64}
        height={64}
      />
    </div> */}
    <section className="px-2 px-md-3">
      
      <div className='row g-2'>
      <div className='col-12 '>
        <TextInput
        label={'Business Name'}
        // value={'Seun'}
        />
      </div>
      <div className='col-12 '>
        <TextInput
        label={'Business Address'}
        // value={'Ogunyemi'}
        />
      </div>
      <div className='col-12 '>
        <TextInput
        label={'Business Type'}
        // value={'Seunogunyemi@gmail.com'}
        />
      </div>
      <div className='col-12 '>
        <TextInput
        label={'Industry'}
        // value={'+234 7012345678'}
        />
      </div>
      <div className='col-12 '>
        <TextInput
        label={'Registration Type'}
        // value={'+234 7012345678'}
        />
      </div>
      {/* <div className='col-12  mt-4 text-end'>
            <ButtonComp
            btnText={'Save Changes'}
            btnClassName='text-white primaryI px-4 py-2 font-1 h4t fw-bold'
            />
      </div> */}
      </div>
      
      
    </section>
  </div>
  </Container>
  <Container   Wrapper={` border`}>
    <div className={`animate__animated animate__fadeIn`}>
       <div className="h3t  fw-normal grayII font-1 mb-3">{'Support Channel'}</div>
    {/* <div className="mb-5">
      <FallbackImage
        src="/Images/Setting/icon.png"
        defaultImage="/Images/Setting/icon.png"
        width={64}
        height={64}
      />
    </div> */}
    <section className="px-2 px-md-3">
      
      <div className='row g-2'>
      <div className='col-12 '>
        <TextInput
        label={'Email Address'}
        // value={'Seun'}
        />
      </div>
      <div className='col-12 '>
        <TextInput
        label={'Phone Number'}
        placeholder='+234'
        // value={'Ogunyemi'}
        />
      </div>
      
        
      {/* <div className='col-12  mt-4 text-end'>
            <ButtonComp
            btnText={'Save Changes'}
            btnClassName='text-white primaryI px-4 py-2 font-1 h4t fw-bold'
            />
      </div> */}
      </div>
      
      
    </section>
  </div>
  </Container>
  </>
  )
}
