import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import FallbackImage from "../Common/ImageWrapper";
import Spacer from "../Common/Spacer";
import { BsHouse, BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { SideBarData } from "@/utils/data";
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
            {SideBarData?.map(({ name, icon1, icon2, activeNo }, index) => (
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
                    active === activeNo && "bg-white "
                  }   py-2  rounded`}
                ></div>
                <div
                  className={`${
                    active === activeNo ? "bg-white " : "text-white"
                  }   ps-2 pe-2 py-2 rounded w-100 fw-normal d-flex align-items-center`}
                >
                  <FallbackImage
                    width={24}
                    height={24}
                    src={icon1 || icon2}
                    className="me-3"
                  />
                  {name}
                </div>
              </li>
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
            className={`${
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
        </div>
      </div>

      <div className="ms-5"></div>
    </div>
  );
}
