import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
`;

const Footer = () => (
  <FooterStyled>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </FooterStyled>
);

export default Footer;
