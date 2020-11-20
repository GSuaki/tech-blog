import { graphql } from "gatsby"
import BlogComponent from "../components/blog"

export default BlogComponent

export const query = graphql`
  query($locale: String!, $formatString: String!) {
    allPost(
      filter: { tags: { elemMatch: { name: { eq: $locale } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
