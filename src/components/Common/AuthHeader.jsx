import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { BiMenuAltLeft, BiUserCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import {
  HiArrowNarrowRight,
  HiArrowRight,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import CompanyComp from "../modules/AuthHeader/comapny";
import Mobile from "../modules/AuthHeader/mobile";
import ResourcesComp from "../modules/AuthHeader/resources";
import ButtonComp from "../Ui/Button";
import FallbackImage from "./ImageWrapper";


export default function Header() {
  const [onToggle, setOnToggle] = useState("");
  const [signUpToggle, setSignUpToggle] = useState(false);
  let SignUpRef = useRef();

  useEffect(() => {
    if (onToggle === "mobile") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [onToggle]);

  useEffect(() => {
    let handler = (e) => {
      if (!SignUpRef.current?.contains(e.target)) {
        setSignUpToggle(false);
      }
    };
    window.addEventListener("mousedown", handler);
    return () => {
      window.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <header
      className="position-relative shadow-sm"
      onMouseLeave={(e) => setOnToggle(null)}
    >
      <div className="d-flex justify-content-center">
      <div
        className="col-11 col-lg-8 py-4 "
        style={{ padding:'30px 0' }}
        //borderColor: "#F2F2F2", borderWidth: "0.5px",
      >
        
        <div className="d-flex justify-content-between align-items-center ">
          <div>
            <BiMenuAltLeft
              size={30}
              color="#00AA96"
              className="me-3 d-lg-none pointer"
              onClick={() => setOnToggle("mobile")}
            />
            <Link href={"/"}>
              <FallbackImage
                src={"/Images/Auth/Logo.png"}
                width={100}
                height={29}
                blurDataURL="/blurImage/Logo.png"
              />
            </Link>
          </div>
          <div className="d-none d-lg-flex align-items-center gap-5 ">
            <div
              className={`pointer font-3  ${
                onToggle === "company" &&
                "secondaryI animate__animated animate__fadeIn  animate__slow	2s"
              }`}
              style={{ fontWeight: 600 }}
              onMouseEnter={(e) => setOnToggle("company")}
            >
              Company{" "}
              {onToggle === "company" ? (
                <HiOutlineChevronUp size={20} />
              ) : (
                <HiOutlineChevronDown size={20} />
              )}
            </div>
            <div
              className={`pointer font-1 ${
                onToggle === "resources" &&
                "secondaryI animate__animated animate__fadeIn  animate__slow	2s"
              }`}
              style={{ fontWeight: 600 }}
              onMouseEnter={(e) => setOnToggle("resources")}
            >
              Resources{" "}
              {onToggle === "resources" ? (
                <HiOutlineChevronUp size={20} />
              ) : (
                <HiOutlineChevronDown size={20} />
              )}
            </div>
          </div>
          <LoginStyled ref={SignUpRef} className="position-relative">
            <ButtonComp
              onClick={() => {
              setSignUpToggle(!signUpToggle);
                setOnToggle(null);
              }}
              btnText={
                <span className="h6t">
                  <BiUserCircle size={25} className="me-2" />
                  Sign in
                </span>
              }
              btnClassName="primaryI text-white rounded-pill px-3 py-2"
            />
            {signUpToggle && (
              <div className={`dropdownCustom shadow bg-white py-2 `}>
                <div style={{ minWidth: "220px" }}>
                  <Link href={'/login/personal_account'} className="text-black text-decoration-none">
                  <div className="py-2 px-3 d-flex text-nowrap align-items-center h6t pointer text-decoration-none">
                    Personal login <span className="px-4"></span>
                    <HiArrowRight size={20} />
                  </div></Link>
                  <hr
                    style={{ borderTop: "2px solid #CCFFF9" }}
                    className="m-0"
                  />
                    <Link href={'/login/business_account'} className="text-black text-decoration-none">
                  <div className="pointer px-3 py-2 d-flex text-nowrap align-items-center h6t text-decoration-none">
                    Business login<span className="px-4"></span>
                    <HiArrowRight size={20} />
                  </div>

                  </Link>
                </div>
              </div>
            )}
          </LoginStyled>
        </div>
      </div>
      </div>
      {onToggle && (
        <div className="">
            <div
          className="position-absolute start-0 end-0 bg-white r"
          style={{ zIndex: 100, }}
        >
         <div>
            <div className="d-flex justify-content-center">
            <div className="col-11 col-lg-10">
            <div className="py-3" />
            {onToggle === "company" && (
              <div
                className={`${
                  onToggle === "company" && "animate__animated animate__fadeIn"
                }`}
              >
                {" "}
                <CompanyComp />
              </div>
            )}
            {onToggle === "resources" && (
              <div
                className={`${
                  onToggle === "resources" &&
                  "animate__animated animate__fadeIn"
                }`}
              >
                {" "}
                <ResourcesComp />
              </div>
            )}
            <div className="py-3" />
          </div>
            </div>
         </div>
        </div>
        </div>
      )}
      {onToggle === "mobile" && (
        <Mobile onToggle={onToggle} setOnToggle={setOnToggle} setSignUpToggle={setSignUpToggle} signUpToggle={signUpToggle} SignUpRef={SignUpRef}/>
      )}
    </header>
  );
}

const LoginStyled = styled.div`
  position: relative;
  .dropdownCustom {
    inset: auto auto auto 0px;
    z-index: 90;
    position: absolute;
    transform: translate3d(-102px, 27px, 0px);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
