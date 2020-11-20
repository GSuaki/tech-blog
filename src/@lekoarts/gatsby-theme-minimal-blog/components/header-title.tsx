/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import { useLocalization } from "gatsby-theme-i18n"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()
  const { locale, defaultLang } = useLocalization()

  const lang = defaultLang === locale ? '' : `/${locale}`

  return (
    <Link
      to={replaceSlashes(`/${basePath}${lang}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>{siteTitle}</div>
    </Link>
  )
}

export default HeaderTitle
