// @jsx jsx
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import React from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import {
  NavbarStyled,
  ListContainerStyled,
  MainListItemStyled,
  SubMenuStyled,
  MenuIconStyled,
  LogoStyled,
  ListItemNotLinkStyled,
  MainListStyled,
} from "../styles/NavbarStyles";

const Navbar = ({ menuLinks }) => {
  const [menu, setMenu] = React.useState(false);
  const handleMenu = () => setMenu(!menu);
  const handleDropdown = () => setMenu(true);
  const closeMobileMenu = () => setMenu(false);

  return (
    <NavbarStyled>
      {/* Logo */}
      <LogoStyled>
        <Link to="/">LOGO</Link>
      </LogoStyled>

      {/* hamburger menu */}
      <MenuIconStyled onClick={handleMenu}>
        {menu ? <FaTimes /> : <FaBars />}
      </MenuIconStyled>

      {/* this the navigation menu side drawer relying on CSS transition */}
      <ListContainerStyled open={menu}>
        <MainListStyled>
          {menuLinks.map(link => (
            <MainListItemStyled key={link.name}>
              {link.subMenu ? (
                <ListItemNotLinkStyled onClick={handleDropdown}>
                  {link.name}
                  <span>
                    <FaCaretDown />
                  </span>
                </ListItemNotLinkStyled>
              ) : (
                <Link
                  onClick={closeMobileMenu}
                  to={link.link}
                  aria-haspopup={link.subMenu ? true : false}
                >
                  {link.name}
                </Link>
              )}
              {link.subMenu && link.subMenu.length > 0 ? (
                <SubMenuStyled aria-label="submenu">
                  {link.subMenu.map(subLink => (
                    <li key={subLink.name} onClick={closeMobileMenu}>
                      <Link to={subLink.link}>{subLink.name}</Link>
                    </li>
                  ))}
                </SubMenuStyled>
              ) : null}
            </MainListItemStyled>
          ))}
        </MainListStyled>
      </ListContainerStyled>
    </NavbarStyled>
  );
};

export default Navbar;
