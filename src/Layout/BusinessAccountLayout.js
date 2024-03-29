import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import SideBarComp from "@/components/SideBar/Index";
import { ProSidebarProvider } from "react-pro-sidebar";
import styled from "styled-components";
import FallbackImage from "@/components/Common/ImageWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import BusinessSideBar from "@/components/BusinessSideBar";
import { HiOutlineUser } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import SwitchInput from "@/components/Ui/SwitchInput";
export default function BusinessAccountLayout({
  title = "",
  active,
  children,
  pageName = "",
}) {
  const [sideBarToggle, setSideBarToggle] = useState(true);
  let signUpToggleRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!signUpToggleRef.current?.contains(e.target)) {
        setSideBarToggle(false);
      }
    };
    window.addEventListener("mousedown", handler);
    return () => {
      window.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{`Business Account | ${title}`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden">
        <ProSidebarProvider>
          <UserLayoutStyled className="" Toggle={sideBarToggle}>
            <div
              className="side min-vh-100"
              style={{ backgroundColor: "", borderRight: "1px solid #E6E6E6" }}
              ref={signUpToggleRef}
            >
              <BusinessSideBar active={active} />
            </div>
            <div className="main" style={{ backgroundColor: "#EBEBEB" }}>
              <div className="" style={{ borderBottom: " 1px solid #E6E6E6" }}>
                <div className="bg-white py-4 text-end px-4 d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-none d-lg-inline-block h3t fw-semibold blackI font-3">
                      {pageName}
                    </div>
                    <span className="d-lg-none">
                      <GiHamburgerMenu
                        onClick={() => setSideBarToggle(!sideBarToggle)}
                        size={30}
                        className="pointer"
                      />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="me-2 me-lg-3 d-flex gap-2 align-items-center px-2  px-lg-4 py-2 primaryII rounded-pill">
                      <SwitchInput
                        checked={true}
                        width={"1.8rem"}
                        height={"1.1rem"}
                        bgColor="#00AA96"
                      />{" "}
                      <span className="h5t font-3">Test Mode</span>
                    </div>
                    <button type="button" className="btn position-relative p-0">
                      <h5
                        style={{ backgroundColor: "#F2F2F2" }}
                        className="font-1 mb-0 fw-bold p-1 rounded-circle d-flex align-items-center justify-content-center"
                      >
                        <IoMdNotificationsOutline size={25} />
                      </h5>

                      <span
                        style={{ backgroundColor: "#00CCB4" }}
                        className="position-absolute top-0 start-100 translate-middle p-2  border border-light rounded-circle"
                      >
                        <span className="visually-hidden">New alerts</span>
                      </span>
                    </button>
                    <div
                      className=" bg-black mx-3 mx-lg-4"
                      style={{ height: "30px", width: "2px" }}
                    ></div>
                    <div className="d-flex gap-1 align-items-center">
                      <HiOutlineUser size={30} /> <BiChevronDown size={25} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="min-vh-100 px-3 pt-3 px-lg-5 pt-lg-5 animate__fadeIn animate__animated pb-5 bg-white">
                {children}
              </div>
            </div>
          </UserLayoutStyled>
        </ProSidebarProvider>
      </div>
    </div>
  );
}

BusinessAccountLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.number,
};

const UserLayoutStyled = styled.div`
  position: relative;
  .side {
    position: fixed;
    width: 247px;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
    scrollbar-width: thin;
  }
  .main {
    margin-left: 247px;
  }
  .sideBar {
    transition: all 1s;

    height: 500px;
    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
  }

  @media only screen and (max-width: 800px) {
    .main {
      margin-left: 0px;
      
    }
    .side {
      visibility: ${(props) => (props?.Toggle ? "visible" : "hidden")};;
      transition: all 0.5s;
      width: ${(props) => (props?.Toggle ? "250px" : "0px")};
      z-index: 89;
    }
  }
`;
