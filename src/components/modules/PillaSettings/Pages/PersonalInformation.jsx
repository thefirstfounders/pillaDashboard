import FallbackImage from '@/components/Common/ImageWrapper'
import Spacer from '@/components/Common/Spacer'
import React from 'react'
import ShowDetails from '../Personalnfo/ShowDetails'

export default function PersonalInformation({pageName,getTitleName}) {
  return (
    <div className={`animate__animated animate__fadeIn`}>
       <div className="h4t fw-bold blackIV font-1 mb-5">{getTitleName||pageName}</div>
    <div className="mb-5">
      <FallbackImage
        src="/Images/Setting/icon.png"
        defaultImage="/Images/Setting/icon.png"
        width={64}
        height={64}
      />
    </div>
    <section className="px-2 px-md-3">
      <ShowDetails label={"First Name"} name={"Seun"} />
      <ShowDetails label={"Last Name"} name={"Ogunyemi"} />
      <ShowDetails
        label={"Email Address"}
        name={"Seunogunyemi@gmail.com"}
      />
      <ShowDetails label={"Phone Number"} name={"08133561111"} />
      <ShowDetails
        label={"Address"}
        name={"Lorem ipsum dolor sit amet consectetur. Q"}
      />
      <ShowDetails label={"City / Town"} name={"Lorem ipsum"} />
      <ShowDetails label={"Local Govern."} name={"Lorem ipsum"} />
      <ShowDetails label={"State"} name={"Lorem ipsum"} />
      <Spacer ReUsableStyle={{ height: "5vh" }} />
    </section>
  </div>
  )
}
