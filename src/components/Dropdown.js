/* This is a stale component  */
import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const menuItems = [
  {
    title: "page 1",
    path: "/page-1",
    cName: "dropdown-link",
  },
  {
    title: "page 2",
    path: "/page-2",
    cName: "dropdown-link",
  },
  {
    title: "page 3",
    path: "/page-3",
    cName: "dropdown-link",
  },
];

// TODO: Refactor this classNames to props
const DropdownStyled = styled.div`
  .dropdown-menu {
    background: red;
    width: 200px;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: start;
    padding: 0;
  }

  li {
    background: #1888ff;
    cursor: pointer;
  }

  li:hover {
    background: #5cabff;
  }

  .dropdown-menu.clicked {
    display: none;
  }

  .dropdown-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;
  }

  @media screen and (max-width: 960px) {
    .dropdown-menu {
      width: 100vw;
      position: relative;
      top: 8px;
      text-align: center;
      display: block;
      /* display: none; */
    }
  }
`;

const Dropdown = ({ close }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => setDropdown(!dropdown);
  return (
    <DropdownStyled>
      <ul
        onClick={handleDropdown}
        className={dropdown ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={close}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </DropdownStyled>
  );
};

export default Dropdown;
