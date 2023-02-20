import React from "react";
import { Offcanvas } from "react-bootstrap";
import {IoCloseCircleOutline, IoIosCloseCircleOutline} from 'react-icons/io'
import Spacer from "./Spacer";

export default function OffCanvas({show,handleClose,arrayComp,pageName,placement,onClose}) {
  return (
    <div>
      <Offcanvas show={pageName} onHide={onClose} placement={placement}>
        <Offcanvas.Header  className="text-end d-flex justify-content-end">
          <Spacer SpacerClassName='py-5'/>
          <IoIosCloseCircleOutline onClick={onClose} size={50} className='pointer'/>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          {arrayComp?.find((item)=>item?.name===pageName)?.component}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
