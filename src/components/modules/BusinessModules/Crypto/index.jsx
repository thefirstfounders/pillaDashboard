import Banner from '@/components/Common/Banner'
import FallbackImage from '@/components/Common/ImageWrapper'
import { TableCompData } from '@/components/Common/TableComp'
import Container from '@/components/Ui/Container'
import DropDown from '@/components/Ui/DropDown'
import { AccountingTransactionsData, AccountingTransactionsHeader } from '@/utils/TableColumns'
import React from 'react'

export default function PillaCard() {
  return (
    <section>
      <section className='mb-5'>
      <Banner
          borderWidth='1px'
            ContainerWrapper={"col-lg-12 col-xl-12"}
            title={"Crypto Balance"}
            titleStyles={{ fontSize: 16, color: "#4D4D4D",marginBottom:10 }}
            BannerClassName="pb-0 pt-4 pb-3"
            amount={'₦00.00'}
            amountStyles={{fontWeight:700}}
            titleClassName='mb-3'
            // icon={<FallbackImage src={'/Images/Icon/warning.png'} width={17} height={17}/>}
            AlignPosition='align-items-top'
          />
      </section>

      <section className="mb-5">
        <h5 className="fw-bold mb-4">My Assests</h5>
        <div className='row g-3'>
          <div className='col-lg-6 col-xl-4'>
            <Container Wrapper={'border'}>
              <div className='d-flex justify-content-between align-items-center pb-4 border-bottom'>
                <div className='d-flex align-items-center gap-2'>
                <FallbackImage
                  src='/Images/Crypto/2.png'
                  width={40}
                  height={40}
                  className='mb-2'
                  />
                  <div>
                  <h5 className='fw-bold mb-1'>BTC</h5>
                  <div className='h6tt gray'>16,584.8367 USD</div>
                  </div>
                </div>
                <div>
                <h5 className='fw-bold mb-1'>$5,850.15 </h5>
                  <div className='h6tt gray'>0.00000035 BTC</div>
                </div>
              </div>
              <div className='d-flex justify-content-around align-items-center pt-4 pb-2'>
                <div className='text-center'>
                  <FallbackImage
                  src='/Images/Crypto/4.png'
                  width={24}
                  height={24}
                  className='mb-2'
                  />
                  <div className='h6tt fw-1 primaryDark'>Send</div>
                </div>

                <div className='text-center'>
                  <FallbackImage
                  src='/Images/Crypto/5.png'
                  width={24}
                  height={24}
                  className='mb-2'
                  />
                  <div className='h6tt fw-1 primaryDark'>Receive</div>
                </div>

                <div className='text-center'>
                  <FallbackImage
                  src='/Images/Crypto/6.png'
                  width={24}
                  height={24}
                  className='mb-2'
                  />
                  <div className='h6tt fw-1 primaryDark'>Convert</div>
                </div>
              </div>

            </Container>
          </div>

          <div className='col-lg-6 col-xl-4'>
            <Container Wrapper={'border'}>
              <div className='d-flex justify-content-between align-items-center pb-4 border-bottom'>
                <div className='d-flex align-items-center gap-2'>
                <FallbackImage
                  src='/Images/Crypto/9.png'
                  width={40}
                  height={40}
                  className='mb-2'
                  />
                  <div>
                  <h5 className='fw-bold mb-1'>ETH</h5>
                  <div className='h6tt gray'>16,584.8367 USD</div>
                  </div>
                </div>
                <div>
                <h5 className='fw-bold mb-1'>$5,850.15 </h5>
                  <div className='h6tt gray'>0.00000035 BTC</div>
                </div>
              </div>
              <div className='d-flex justify-content-around align-items-center pt-4 pb-2'>
                <div className='text-center'>
                  <FallbackImage
                  src='/Images/Crypto/4.png'
                  width={24}
                  height={24}
                  className='mb-2'
                  />
                  <div className='h6tt fw-1 primaryDark'>Send</div>
                </div>

                <div className='text-center'>
                  <FallbackImage
                  src='/Images/Crypto/5.png'
                  width={24}
                  height={24}
                  className='mb-2'
                  />
                  <div className='h6tt fw-1 primaryDark'>Receive</div>
                </div>

                <div className='text-center'>
                  <FallbackImage
                  src='/Images/Crypto/6.png'
                  width={24}
                  height={24}
                  className='mb-2'
                  />
                  <div className='h6tt fw-1 primaryDark'>Convert</div>
                </div>
              </div>

            </Container>
          </div>

          <div className='col-lg-6 col-xl-4'>
            <Container Wrapper={'border'}>
              <div className='d-flex justify-content-between align-items-center pb-4 border-bottom'>
                <div className='d-flex align-items-center gap-2'>
                <FallbackImage
                  src='/Images/Crypto/9.png'
                  width={40}
                  height={40}
                  className='mb-2'
                  />
                  <div>
                  <h5 className='fw-bold mb-1'>USDT</h5>
                  <div className='h6tt gray'>16,584.8367 USD</div>
                  </div>
                </div>
                <div>
                <h5 className='fw-bold mb-1'>$5,850.15 </h5>
                  <div className='h6tt gray'>0.00000035 BTC</div>
                </div>
              </div>
              <div className='d-flex justify-content-around align-items-center pt-4 pb-2'>
                <div className='text-center'>
                  <FallbackImage
                  src='/Images/Crypto/4.png'
                  width={24}
                  height={24}
                  className='mb-2'
                  />
                  <div className='h6tt fw-1 primaryDark'>Send</div>
                </div>

                <div className='text-center'>
                  <FallbackImage
                  src='/Images/Crypto/5.png'
                  width={24}
                  height={24}
                  className='mb-2'
                  />
                  <div className='h6tt fw-1 primaryDark'>Receive</div>
                </div>

                <div className='text-center'>
                  <FallbackImage
                  src='/Images/Crypto/6.png'
                  width={24}
                  height={24}
                  className='mb-2'
                  />
                  <div className='h6tt fw-1 primaryDark'>Convert</div>
                </div>
              </div>

            </Container>
          </div>
        </div>
        </section>


        <section>
        <Container Wrapper={'border-1 bg-white'}  WrapperStyle={{border:"1px solid #E6E6E6"}}>
          <div className="d-flex justify-content-between mb-3">
            <div className="h5t grayIV">Transactions</div>
            <div>
              <DropDown title={<span className="me-2">Last 7 Days</span>} DropDownClassName='h6tt border-0 grayII'/>
            </div>
          </div>

          <TableCompData marginBottom={'20px'} HeaderBackgroundColor='#F2F2F2' noHeader={true} data={AccountingTransactionsData} columns={AccountingTransactionsHeader()}/>
        </Container>
      </section>
    </section>
  )
}
