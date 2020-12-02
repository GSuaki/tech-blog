/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { useIntl } from "react-intl"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import SEO from "../@lekoarts/gatsby-theme-minimal-blog/components/seo"

const NotFound = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="404" />
      <Box mb={4} mt={4}>
        <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
          <span>{intl.formatMessage({ id: "Page not found" })}</span>
        </p>
      </Box>
    </Layout>
  )
}

export default NotFound