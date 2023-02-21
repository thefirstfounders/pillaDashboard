import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import FallbackImage from "../Common/ImageWrapper";
import Spacer from "../Common/Spacer";
import { BsHouse, BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { SideBarData } from "@/utils/data";
import Link from "next/link";
export default function SideBarComp({ active }) {
  return (
    <div>
      <Spacer SpacerClassName="py-4" />
      <div className="text-center">
        <FallbackImage src="/Images/SideBar/logo.png" width={153} height={47} />
      </div>
      <Spacer SpacerClassName="py-5" />
      <div className="sideBar">
        <div className="d-flex ">
          <div className="ms-3 ps-1"></div>
          <ul className="list-unstyled  w-100 me-3 me-lg-4 p-0">
            {SideBarData?.map(({ name, icon1, icon2, activeNo,path }, index) => (
            <Link key={index} href={path} className='text-decoration-none'>
              <li
                className="text-black d-flex align-items-center pointer mb-4 font-1"
                key={index}
              >
                <div
                  style={{
                    height: "35px",
                    padding: "2px",
                    marginRight: "15px",
                  }}
                  className={`${
                    active === activeNo && "bg-white animate__fadeInLeft animate__animated animate__delay-1s animate__faster"
                  }   py-2  rounded`}
                ></div>
                <div
                  className={`${
                    active === activeNo ? "bg-white animate__fadeInLeft animate__animated" : "text-white"
                  }   ps-2 pe-2 py-2 rounded w-100 fw-normal d-flex align-items-center`}
                >
                  <FallbackImage
                    width={24}
                    height={24}
                    src={ active === activeNo?icon1:icon2}
                    className="me-3"
                  />
                  <span className="">{name}</span>
                </div>
              </li>
            </Link>
            ))}
          </ul>
        </div>
        <Spacer ReUsableStyle={{ height: "10vh" }} />

        <div className="text-black d-flex align-items-center pointer mb-4 font-1">
          <div
            style={{ height: "35px", padding: "2px", marginRight: "15px" }}
            className={`${false && "bg-white "}   px-3 py-2  rounded`}
          ></div>
          <div
            className={`mb-5 ${
              false ? "bg-white " : "text-white"
            }   ps-2 pe-2 py-2 rounded w-100 fw-normal d-flex align-items-center`}
          >
            <FallbackImage
              width={24}
              height={24}
              src={"/Images/SideBar/7.svg"}
              className="me-3"
            />
            Log Out
          </div>
          <Spacer ReUsableStyle={{ height: "10vh" }} />

        </div>
      </div>

      <div className="ms-5"></div>
    </div>
  );
}
