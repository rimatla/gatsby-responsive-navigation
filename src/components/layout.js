/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import "normalize.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutStyled = styled.div``;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
            subMenu {
              link
              name
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
      <LayoutStyled>
        <main>{children}</main>
        <Footer />
      </LayoutStyled>
    </>
  );
};

export default Layout;
