/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { useLocalization } from "gatsby-theme-i18n"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => {
  const { locale, defaultLang } = useLocalization()

  const lang = defaultLang === locale ? '' : `/${locale}`

  return (
    <Box mb={4}>
      <TLink as={Link} to={`${lang}${post.slug}`} sx={{ fontSize: [1, 2, 3], color: `text` }}>
        {post.title}
      </TLink>
      <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
        <time>{post.date}</time>
        {post.tags && showTags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
      </p>
    </Box>
  )
}

export default BlogListItem
