import { title } from "../material-kit-react"

const productStyle = {
  section: {
    padding: "30px 0",
    textAlign: "center",
    '@media only screen and (min-width: 1920px)': {
      h2: {
        fontSize: "2.2rem !important" 
      },
      p:{
        fontSize:"2.2rem !important",
        textAlign:`center !important`,
        fontFamily:"sans-serif",
        lineHeight:"1.3"
      },
      h4:{
        fontSize:"1.4rem"
      },
      description:{
        textAlign:"center !important"
      }
    },
    '@media only screen and (-webkit-min-device-pixel-ratio: 2)': {
      h2: {
        fontSize: "2.2rem !important" 
      },
      p:{
        fontSize:"2.2rem !important",
        textAlign:`center !important`,
        fontFamily:"sans-serif",
        lineHeight:"1.3"
      },
      h4:{
        fontSize:"1.4rem"
      },
      description:{
        textAlign:"center !important"
      }
    },
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
    textAlign:"left"
  },
}

export default productStyle
