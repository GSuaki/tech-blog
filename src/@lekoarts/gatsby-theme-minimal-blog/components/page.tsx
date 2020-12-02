/** @jsx jsx */
import { jsx, Flex, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useIntl } from "react-intl"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import SEO from "./seo"

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
  [key: string]: any
}

const Page = ({ data: { page } }: PageProps) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={page.title} description={page.excerpt} />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          {intl.formatMessage({ id: page.title })}
        </Heading>
      </Flex>
      <section sx={{ my: 5, variant: `layout.content` }}>
        <MDXRenderer>{page.body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export default Page
