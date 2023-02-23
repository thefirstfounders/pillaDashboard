/* eslint-disable react/display-name */
import ButtonComp from "@/components/Ui/Button";
import React, { useState, forwardRef } from "react";
import { HowFrequentButtonState, HowLongData } from '../Data';
import DatePicker from "react-datepicker";
import { BsCalendar4Event } from "react-icons/bs";
export default function HowLong({onNext}) {
  const [selectTime, setSelectTime] = useState();
  const [startDate, setStartDate] = useState();

  const ExampleCustomInput =forwardRef ((props,ref) => (
    
    <>
      <ButtonComp
        ref={ref}
        onClick={()=>{
          setSelectTime(5)
          props?.onClick()
          
        }}
        btnText={props?.value||<span><BsCalendar4Event size={20} className="me-2"/> Let me choose</span>}
        btnClassName="w-100 fw-semibold h5tt"
        btnStyle={{
          ...HowFrequentButtonState[selectTime === 5 ? 0 : 1],
          padding: "10px 0",
        }}
      />
    </>
  ));

  return (
    <div>
      <div className="mb-5">
        <h4 className="fw-bold mb-5">How long do you want to save?</h4>
      </div>
      <div className="row gy-3">
        {HowLongData()?.map(({ name, action, id }, i) => (
          <div className={i > 2 ? "col-6 col-lg-6" : "col-6 col-lg-4"} key={i}>
            {id === 5 ? (
              <DatePicker
                key={i}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput value={'hello'} />}
              />
            ) : (
              <ButtonComp
                onClick={() => setSelectTime(id)}
                btnText={name}
                btnClassName="w-100 fw-semibold h5tt"
                btnStyle={{
                  ...HowFrequentButtonState[selectTime === id ? 0 : 1],
                  padding: "10px 0",
                }}
              />
            )}
          </div>
        ))}

        <div className="mt-5">
          <ButtonComp
            onClick={onNext}
            btnText={<h4 className="mb-0">Continue</h4>}
            btnClassName="primaryI py-2 text-white w-100"
          />
        </div>
      </div>
    </div>
  );
}
