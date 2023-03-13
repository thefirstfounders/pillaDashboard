import OffCanvas from '@/components/Common/OffCanvas'
import PageSwitch from '@/components/Common/PageSwitch'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import CheckTypeInput from '@/components/Ui/CheckTypeInput'
import MoneyInput from '@/components/Ui/MoneyInput'
import React, { useState } from 'react'
import {GoPrimitiveDot} from 'react-icons/go'
import Message from '../../Home/Message'
import { HowFrequentData } from '../Data'
import HowFrequent from '../SavingProcess/HowFrequent'
import HowLong from '../SavingProcess/HowLong'
import HowMuch from '../SavingProcess/HowMuch'
import Progress from '../Progress'
import Review from '../SavingProcess/Review'
import TargetAmount from '../SavingProcess/TargetAmount'

export default function SavingProcess({setPageName1}) {
    const [pageName,setPageName] =useState('TargetAmount')

    const usePage =[
        {
            name:'TargetAmount',
            component:<TargetAmount onNext={()=>setPageName('HowFrequent')}/>
        },
        {
            name:'HowFrequent',
            component:<HowFrequent onNext={()=>setPageName('HowMuch')}/>
            
        },
        {
            name:'HowMuch',
            component:<HowMuch  onNext={()=>setPageName('HowLong')}/>
            
        },
        {
            name:'HowLong',
            component:<HowLong onNext={()=>setPageName('Review')}/>
            
        },
        {
            name:'Review',
            component:<Review onNext={()=>setPageName('Message')}/>
            
        },
        {
            name:'Message',
            component:<Message btnBG='#00AA96' title='Congratulations' desc='You have started your financial goal journey'  onNext={()=>setPageName1()}/>
            
        },
    ]

  return (
    <div className={`${pageName && `animate__animated animate__fadeInRight animate__faster`}`}>
     {pageName==='Message'? null:  <Progress pageName={pageName} arrayList={['TargetAmount','HowFrequent','HowMuch']}
       arrayListI={['TargetAmount','HowFrequent','HowMuch','HowLong','Review']}
       />
  }
       <Spacer SpacerClassName='py-2'/>
        <PageSwitch
        pageArray={usePage}
        pageName={pageName}
        />
  
    </div>
  )
}
