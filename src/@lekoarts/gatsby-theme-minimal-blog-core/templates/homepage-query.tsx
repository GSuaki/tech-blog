import { graphql } from "gatsby"
import HomepageComponent from "../components/homepage"

export default HomepageComponent

export const query = graphql`
  query($locale: String! = "pt", $formatString: String!) {
    allPost(
      filter: { tags: { elemMatch: { name: { eq: $locale } } } }
      sort: { fields: date, order: DESC }, limit: 6
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
