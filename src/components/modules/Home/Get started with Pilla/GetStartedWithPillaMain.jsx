import React from 'react'
import { GetStartedWithPillaData } from '../Data'
import Box from './Box'

export default function GetStartedWithPillaMain({setPageName}) {
  return (
    <section>
    <section className="mb-5">
      <h4 className="fw-bold">Get started with Pilla</h4>
      <div className='font-2'>
        It&#39;s simple—just upload the required documents, to verify your
        account.
      </div>
    </section>
    <section>
      {GetStartedWithPillaData(setPageName)?.map(
        ({ name, desc, action, icon }, i) => (
          <Box key={i} name={name}
          desc={desc}
          action={action}
          icon={icon}
          />
        )
      )}
    </section>
  </section>

  )
}
