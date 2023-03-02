import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import {HiOutlineChevronDown} from 'react-icons/hi'
export default function DropDown({ title, arrayComp,DropDownClassName }) {
  return (
    <DropDownStyled>
      <Dropdown>
        <Dropdown.Toggle className={` ${DropDownClassName ||'border-0'} `} variant="" id="dropdown-basic">
          {title}<HiOutlineChevronDown/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </DropDownStyled>
  );
}

const DropDownStyled = styled.span`
.dropdown-toggle::after {
display:none;
}

`;
