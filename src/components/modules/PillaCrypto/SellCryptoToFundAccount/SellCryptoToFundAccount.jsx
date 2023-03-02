import FallbackImage from '@/components/Common/ImageWrapper'
import OffCanvasHeader from '@/components/Common/OffCanvasHeader'
import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import DropDown from '@/components/Ui/DropDown'
import MoneyInput from '@/components/Ui/MoneyInput'
import SelectInput from '@/components/Ui/SelectInput'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'

export default function SellCryptoToFundAccount() {
  return (
    <section>
        <OffCanvasHeader
        title={'Sell crypto to fund account'}
        
        />

        <section>
            <form>
               <div className='mb-5'>
                <TextInput
                value={0}
                label={'Amount to sell'}
                suffixIcon={ <DropDown
                    DropDownClassName={' h-100 py-2'}
                    title={<span className='ht4 fw-bold font-1'>
                        <FallbackImage
                        src='/Images/Crypto/8.png'
                        width={32}
                        height={32}
                        className='me-2'
                        />
                        
                        USDT</span>}
                    />}
                />
               
               </div>

               <div>
                <p className='fw-1 mb-2'>Exchange rate</p>

                <div  className='mb-4'>
                   <Container WrapperStyle={{backgroundColor:'#E5EBFF'}}>
                   <div className='d-flex justify-content-between'>
                    <div>
                        <div className='fw-bold font-1 h4t mb-1'>1 USDT = ₦ 742.83 </div>
                        <p className='h6tt mb-0 blackI'>Refreshing in 30 seconds</p>
                    </div>
                    <div>
                    <FallbackImage
                        src='/Images/Icon/doubleArrow.png'
                        width={24}
                        height={24}
                        className='me-2'
                        />
                    </div>
                    </div>
                   </Container>
                </div>

                <div>
                    <MoneyInput
                    label={'You will recieve in Naira'}
                    />
                </div>

                <div className="mt-5">
          <ButtonComp
          btnStyle={{backgroundColor:'#B3B3B3'}}
            // onClick={onNext}
            btnText={<h4 className="mb-0">Proceed</h4>}
            btnClassName="py-2 text-white w-100"
          />
        </div>
               </div>
            </form>
        </section>
    </section>
  )
}
