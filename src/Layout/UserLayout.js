import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import SideBarComp from "@/components/SideBar/Index";import {ProSidebarProvider} from 'react-pro-sidebar'
import styled from 'styled-components'
import FallbackImage from "@/components/Common/ImageWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
export default function UserLayout({ title='',active, children }) {
  const [sideBarToggle,setSideBarToggle] =useState(false);
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
        <title>{`DashBoard | ${title}`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden">
      <ProSidebarProvider
      
      >
        <UserLayoutStyled className="" Toggle={sideBarToggle}>
          <div
            className="side min-vh-100"
            style={{ backgroundColor: "#1A1A1A" }}
            ref={signUpToggleRef}
          >
            <SideBarComp active={active} />
          </div>
          <div className="main" style={{ backgroundColor: "#EBEBEB" }}>
          <div className="">
          
          <div className="bg-white py-4 text-end px-4 d-flex justify-content-between align-items-center">
          <div>
            <span ><GiHamburgerMenu  onClick={()=>setSideBarToggle(!sideBarToggle)} size={30} className='pointer'/></span>

          </div>
              <div className="d-flex justify-content-between align-items-center">
              <h5 className="font-1 mb-0 fw-bold">Hi Seun 👋</h5> <div className=" bg-black mx-3" style={{height:'30px',width:'3px'}}></div>
              <FallbackImage
              src='/Images/Icon/notification.svg'
              width={35}
              height={35}
              />
              </div>
            </div>
          </div>
          
            <div className="min-vh-100 px-3 pt-3 px-lg-5 pt-lg-5 animate__fadeIn animate__animated">{children}</div>
          </div>
        </UserLayoutStyled>
        </ProSidebarProvider>
      </div>
    </div>
  );
}

UserLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.number,
};

const UserLayoutStyled = styled.div`
position:relative;
.side{
    position:fixed;
    width:247px;
    overflow-y: scroll;
    top:0;
    bottom:0;
    scrollbar-width: thin;
}
.main{
    margin-left:247px;
}
.sideBar{
  transition:all 1s;

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
  .main{
    margin-left:0px;
}
.side{
  transition:all 0.5s;
  width:${props=>props?.Toggle?'250px':'0px'} ;
  z-index:89;
  
}
}

`
