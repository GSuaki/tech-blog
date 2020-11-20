/** @jsx jsx */
import { useEffect, useState } from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const LangToggle = () => {
  const { locale } = useLocalization()
  const { basePath } = useMinimalBlogConfig()
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(location.pathname);
  }, [])
  
  const isEn = locale === 'en'
  const label = isEn ? 'Portuguese' : 'Inglês'
  const lang = isEn ? `/${pathname.replace('/en', '')}` : `/en/${pathname}`

  return (
    <Link
      to={replaceSlashes(`/${basePath}${lang}`)}
      aria-label={isEn ? 'Portuguese' : 'Inglês'}
      sx={{ color: `heading`, position: 'absolute', right: '100px', textDecoration: `none` }}
    >
      {label}
    </Link>
  );  
}

export default LangToggle
