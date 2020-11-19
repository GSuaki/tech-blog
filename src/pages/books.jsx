/** @jsx jsx */
import React from "react"
import { jsx, Heading, Box, Flex, Link as TLink } from "theme-ui"
import { graphql, Link } from "gatsby"
import { useIntl } from "react-intl"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

const ListItem = ({ item }) => {
  const intl = useIntl()
  return (
    <Box mb={4} mt={4}>
      <TLink as={Link} to={item.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
        {item.title}
      </TLink>
      <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
        <span>{intl.formatMessage({ id: "Rating" })}: {item.rating}</span>
        {` — `}
        {item.tags && item.tags.map((tag, i) => (
          <React.Fragment key={tag}>
            {!!i && `, `}
            <span>{tag}</span>
          </React.Fragment>
        ))}
      </p>
    </Box>
  )
}

const Books = ({ books }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="Books" />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          {intl.formatMessage({ id: "Books" })}
        </Heading>
      </Flex>
      {books.nodes.map(book => (
        <ListItem key={book.slug} item={book} />
      ))}
    </Layout>
  )
}

export default ({ data }) => {
  return <Books books={data.allBook} />
}

export const query = graphql`
    query {
        allBook {
            nodes {
                title
                tags
                slug
                rating
            }
        }
    }
`