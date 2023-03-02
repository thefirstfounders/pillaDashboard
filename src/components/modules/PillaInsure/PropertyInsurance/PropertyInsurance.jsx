import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { BuyPropertiesData } from "../../Home/Data";

export default function PropertyInsurance() {
  return (
    <section>
      <div>
        <div className="mb-4">
          <h4 className="fw-bold">Property Insurance</h4>
          <div className="h6tt gray">insurance that offers property</div>
        </div>
        {BuyPropertiesData()?.map(({ name, desc }, i) => (
          <div className="RentSavingPageBox1 py-4 px-3 mb-3 pointer" key={i}>
            <div className="d-flex justify-content-between">
              <div>
                <p className="fw-1 mb-2 h5t">{name}</p>
                <div className="h6tt grayIV">{desc}</div>
              </div>
              <div>
                <FaChevronRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
