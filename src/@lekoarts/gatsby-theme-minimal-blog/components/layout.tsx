/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { Box, Container, jsx } from "theme-ui"
import "typeface-ibm-plex-sans"
import SEO from "./seo"
import Header from "@lekoarts/gatsby-theme-minimal-blog/src/components/header"
import Footer from "@lekoarts/gatsby-theme-minimal-blog/src/components/footer"
import SkipNavLink from "@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav"
import CodeStyles from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code"

const makeStyle = (theme) => ({
  "*": {
    boxSizing: `inherit`,
  },
  html: {
    WebkitTextSizeAdjust: `100%`,
  },
  img: {
    borderStyle: `none`,
  },
  pre: {
    fontFamily: `monospace`,
    fontSize: `1em`,
  },
  "[hidden]": {
    display: `none`,
  },
  "::selection": {
    backgroundColor: theme.colors.text,
    color: theme.colors.background,
  },
  a: {
    transition: `all 0.3s ease-in-out`,
    color: `text`,
  },
});

const Layout = ({ children, className = `` }) => (
  <React.Fragment>
    <Global styles={makeStyle} />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
      <Footer />
    </Container>
  </React.Fragment>
)

export default Layout
