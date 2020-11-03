import styled from "styled-components";
// TODO: Turn these colors into CSS Variables
export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  border: 1px solid cyan;
`;

export const LogoStyled = styled.div`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  a {
    text-decoration: none;
  }
`;

export const MenuIconStyled = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    margin-left: auto;
    padding-right: 10px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const ListContainerStyled = styled.div`
  margin-left: auto;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 38px;
    /* wire drawer here */
    left: ${({ open }) => (open ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.7s ease;
    margin: 0;
    background: rgb(105, 105, 105);
    z-index: 1;
  }

  .nav-menu {
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .nav-menu.active {
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
`;

export const MainListStyled = styled.ul`
  background: rebeccapurple;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 2px;
  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 960px) {
    background: green;
    padding: 0;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const MainListItemStyled = styled.li`
  color: white;
  background-color: darkorange;
  display: block;
  padding: 1rem 0;
  position: relative;
  transition-duration: 0.5s;
  & :hover {
    background-color: red;
    cursor: pointer;
  }
  & :hover > ul,
  & :focus-within > ul {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

export const ListItemNotLinkStyled = styled.div`
  @media screen and (max-width: 960px) {
    padding-left: 15px;
  }
`;

export const SubMenuStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: darkorange;
  visibility: hidden;
  opacity: 0;
  display: none;
  min-width: 8rem;
  position: absolute;
  margin-top: 8px;
  left: -2px;
  & :hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  li {
    clear: both;
    width: 100%;
    padding: 1rem;
    & :hover {
      background: #cd5c5c;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 960px) {
    position: relative;
    li {
      padding: 0;
    }

    a {
      display: block;
      background: #000;
      padding: 15px;
      margin-bottom: 3px;
    }
  }
`;
