const parallaxStyle = {
  parallax: {
    height: "450px",
    maxHeight: "600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50% 50%",
    backgroundSize: "contain",
    backgroundColor: "#2F4F4F",
    backgroundRepeat: "no-repeat",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      // zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "380px",
  },
}

export default parallaxStyle
