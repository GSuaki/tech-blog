/** @jsx jsx */
import { jsx } from "theme-ui"
import { useLocalization } from "gatsby-theme-i18n"
import LangToggle from "./lang-toggle"

const Locales = () => {
  const local = useLocalization()
  console.log(local);
  return (
    <LangToggle isEn={true} toggle={ (r) => console.log('toggle') } />
  )
}

export default Locales
