/** @jsx jsx */
import { jsx} from "theme-ui"
import { useIntl } from "react-intl"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()
  const intl = useIntl()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} {intl.formatMessage({ id: 'by' })} {siteTitle}. {intl.formatMessage({ id: 'All rights reserved' })}.
      </div>
    </footer>
  )
}

export default Footer
