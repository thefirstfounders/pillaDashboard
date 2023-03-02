import FallbackImage from '@/components/Common/ImageWrapper'
import OffCanvasHeader from '@/components/Common/OffCanvasHeader'
import ButtonComp from '@/components/Ui/Button'
import React from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'

export default function ReceiveBitcoin() {
  return (
    <section className='pb-5'>
        <OffCanvasHeader
        title={'Recieve Bitcoin'}
        />

        <section className='mb-5'>
          <FallbackImage
          src='/Images/Crypto/barcode.png'
          width={400}
          height={400}
          layout='responsive'
          />
        </section>

        <section>
          <h3 className='fw-bold'>Your Bitcoin address</h3>
          <div className='h5t mb-4'>
         <span className='blackII'> Use this address to deposit Bitcoin (BTC):</span><br/>
<b>3QCSCSLCY2tyuwxtyPnUFvQAcuKbpgC2Pb</b>
          </div>

          <div className='mb-5'>
            <ButtonComp
            btnStyle={{backgroundColor:'#0024A8'}}
            btnText={'Copy Address'}
            btnClassName='h6tt fw-1 py-2 px-4 text-white rounded1'
            />
          </div>

          <section>
            <div style={{backgroundColor:'#FFE5E8'}} className=' py-3 px-3 h6tt d-flex gap-3 rounded'>
              <div><RiErrorWarningLine color='#FF99A5' size={20}/></div>
              <div>
              <b> Only send BTC in the following network(s): Bitcoin.</b> You could lose funds from other currencies or networks.

              </div>
            </div>
          </section>
        </section>
    </section>
  )
}
