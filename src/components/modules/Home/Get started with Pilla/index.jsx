import PageSwitch from '@/components/Common/PageSwitch'
import React, { useState } from 'react'
import { GetStartedWithPillaData } from '../Data'
import Message from '../Message'
import Box from './Box'
import BVNVerification from './BVNVerification'
import GetStartedWithPillaMain from './GetStartedWithPillaMain'
import IdentityVerification from './IdentityVerification'
import ProofOfAddress from './ProofOfAddress'
import UploadIDVerification from './UploadIDVerification'

export default function GetStartedWithPillaPage() {
    const [pageName,setPageName] =useState('GetStartedWithPillaMain');
    const [message,setMessage] =useState('')
    const usePage =[
        {
            name:'GetStartedWithPillaMain',
            component:<GetStartedWithPillaMain setPageName={setPageName} />
        },
        {
            name:'BVN Verification',
            component:<BVNVerification onNext ={()=>{
                setPageName('Message')
                setMessage('Verification Submitted')
            }}/>
        },
        {
            name:'Identity Verification',
            component:<IdentityVerification   onNext ={()=>{
                setPageName('Upload ID Verification')
                setMessage('Verification Submitted')
            }}/>
        },
        {
            name:'Upload ID Verification',
            component:<UploadIDVerification   onNext ={()=>{
                setPageName('Message')
                setMessage('Verification Submitted')
            }}/>
        },
        {
            name:'Proof of address',
            component:<ProofOfAddress   onNext ={()=>{
                setPageName('Message')
                setMessage('Verification Submitted')
            }}/>
        },
        {
            name:'Message',
            component:<Message  title={message} desc='Verifications takes 1-3 days'
            onNext ={()=>{
                setPageName('GetStartedWithPillaMain')
              
            }}
            />
        }
    ]

  return <PageSwitch pageArray={usePage} pageName={pageName} />
    
}
