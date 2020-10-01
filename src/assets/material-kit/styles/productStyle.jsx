import { title, grayColor } from "../material-kit-react"

const productStyle = {
  section: {
    padding: "30px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: grayColor,
    textAlign:"left",
    fontSize:"1.1rem"
  }
}

export default productStyle
