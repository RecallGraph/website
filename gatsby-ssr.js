import { ServerStyleSheets } from "@material-ui/core/styles"
import React from "react"
import Layout from "./src/components/Layout"

const sheets = new ServerStyleSheets()

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const css = sheets.toString()

  setHeadComponents([
    <style id={"static-inline"} key={"static"}>
      {`
        body {
          margin: 0
        }
      `}
    </style>,
    <style id="jss-server-side" key={"jss"}>{css}</style>
  ])

  setPostBodyComponents([
    <script
      key="recaptcha"
      src="https://www.google.com/recaptcha/api.js"
      type="text/javascript"
      async
      defer
    />,
    <script
      key={"appointlet"}
      src="https://www.appointletcdn.com/loader/loader.min.js"
      async
      defer
    />
  ])
}

export const wrapPageElement = ({ element, props }) => {
  return sheets.collect(<Layout {...props}>{element}</Layout>)
}
