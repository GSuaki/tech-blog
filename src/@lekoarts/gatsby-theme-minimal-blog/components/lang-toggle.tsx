/** @jsx jsx */
import { jsx } from "theme-ui"

type Props = {
  isEn: boolean
  toggle: (e: any) => void
}

// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx

const ColorModeToggle = ({ isEn, toggle }: Props) => (
  <button
    onClick={toggle}
    type="button"
    aria-label={isEn ? `Portuguese` : `English`}
    title={isEn ? `Portuguese` : `English`}
    sx={{
      opacity: 0.65,
      position: `relative`,
      borderRadius: `5px`,
      width: `40px`,
      height: `25px`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      transition: `opacity 0.3s ease`,
      border: `none`,
      outline: `none`,
      background: `none`,
      cursor: `pointer`,
      padding: 0,
      appearance: `none`,
      "&:hover, &:focus": { opacity: 1 },
    }}
  >
    {isEn ? `Portuguese` : `English`}
  </button>
)

export default ColorModeToggle
