import FallbackImage from "@/components/Common/ImageWrapper";
import Spacer from "@/components/Common/Spacer";
import Container from "@/components/Ui/Container";
import React from "react";
import ShowDetails from "../Personalnfo/ShowDetails";

export default function AccountLimit({ getTitleName, pageName }) {
  return (
    <section className={`animate__animated animate__fadeIn`}>
      <div className="h4t fw-bold blackIV font-1 mb-5">
        {getTitleName || pageName}
      </div>

      <section>
        <Container
          Wrapper={"rounded mb-4"}
          WrapperStyle={{ border: " 1px solid #1BCC00", background: "#E9FFE5" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="font-1 fw-bold h4t">Tier 1</div>
            <div>
              <FallbackImage
                src="/Images/Icon/darkSuccess.png"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="h7 grayII mb-3">
            This is the level you enter after BVN Verification
          </div>
          <div>
            <ShowDetails
              label={"Daily transaction limit"}
              name={"₦50,000.00"}
              ShowBorder={"border-0 mb-2"}
              nameClassName="col-5 col-lg-6 text-end h6tt fw-bold font-1"
              labelClassName={"col-7 col-lg-6 text-start h6tt"}
            />

            <ShowDetails
              label={"Maximum balance"}
              name={"₦50,000.00"}
              ShowBorder={"border-0 mb-2"}
              nameClassName="col-6 text-end h6tt fw-bold font-1"
              labelClassName={"col-6 text-start h6tt"}
            />

            <ShowDetails
              label={"Domestic transactions"}
              name={"Limited"}
              ShowBorder={"border-0 mb-2"}
              nameClassName="col-4 col-lg-6 text-end h6tt fw-bold font-1"
              labelClassName={"col-8 col-lg-6 text-start h6tt"}
            />

            <div className="d-flex gap-3 h7 successI">
                <FallbackImage
                src='/Images/Icon/warningSuccess.png'
                width={'12'}
                height={'12'}
                />
                BVN Verification
            </div>
          </div>
        </Container>

        <Container
          Wrapper={"rounded mb-4"}
          WrapperStyle={{ border: " 1px solid #F2F2F2", background: "#F2F2F2" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="font-1 fw-bold h4t">Tier 2</div>
            <div>
              <FallbackImage
                src="/Images/Icon/darkSuccess.png"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="h7 grayII mb-3">
            This is the level you enter after BVN Verification
          </div>
          <div>
            <ShowDetails
              label={"Daily transaction limit"}
              name={"₦50,000.00"}
              ShowBorder={"border-0 mb-2"}
              nameClassName="col-6 text-end h6tt fw-bold font-1"
              labelClassName={"col-6 text-start h6tt"}
            />

            <ShowDetails
              label={"Maximum balance"}
              name={"₦50,000.00"}
              ShowBorder={"border-0 mb-2"}
              nameClassName="col-6 text-end h6tt fw-bold font-1"
              labelClassName={"col-6 text-start h6tt"}
            />

            <ShowDetails
              label={"Domestic transactions"}
              name={"Limited"}
              ShowBorder={"border-0 mb-2"}
              nameClassName="col-6 text-end h6tt fw-bold font-1"
              labelClassName={"col-6 text-start h6tt"}
            />

            <div className="d-flex gap-3 h7 successI">
                <FallbackImage
                src='/Images/Icon/warningSuccess.png'
                width={'12'}
                height={'12'}
                />
                BVN Verification
            </div>
          </div>
        </Container>

        <Container
          Wrapper={"rounded mb-4"}
          WrapperStyle={{ border: " 1px solid #F2F2F2", background: "#F2F2F2" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="font-1 fw-bold h4t">Tier 3</div>
            <div>
              <FallbackImage
                src="/Images/Icon/darkSuccess.png"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="h7 grayII mb-3">
            This is the level you enter after BVN Verification
          </div>
          <div>
            <ShowDetails
              label={"Daily transaction limit"}
              name={"₦50,000.00"}
              ShowBorder={"border-0 mb-2"}
              nameClassName="col-6 text-end h6tt fw-bold font-1"
              labelClassName={"col-6 text-start h6tt"}
            />

            <ShowDetails
              label={"Maximum balance"}
              name={"₦50,000.00"}
              ShowBorder={"border-0 mb-2"}
              nameClassName="col-6 text-end h6tt fw-bold font-1"
              labelClassName={"col-6 text-start h6tt"}
            />

            <ShowDetails
              label={"Domestic transactions"}
              name={"Limited"}
              ShowBorder={"border-0 mb-2"}
              nameClassName="col-6 text-end h6tt fw-bold font-1"
              labelClassName={"col-6 text-start h6tt"}
            />

            <div className="d-flex gap-3 h7 successI">
                <FallbackImage
                src='/Images/Icon/warningSuccess.png'
                width={'12'}
                height={'12'}
                />
                BVN Verification
            </div>
          </div>
        </Container>

        <Spacer SpacerClassName='py-5'/>
      </section>
    </section>
  );
}
