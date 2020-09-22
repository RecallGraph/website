import React from "react"
import { ServerStyleSheets } from "@material-ui/core/styles"
import Layout from "./src/components/Layout"

const sheets = new ServerStyleSheets()

export const onRenderBody = ({ setHeadComponents }) => {
  const css = sheets.toString()

  setHeadComponents([
    <script
      key="recaptcha"
      src="https://www.google.com/recaptcha/api.js"
      type="text/javascript"
      async
      defer
    />,
    <style id="jss-server-side">${css}</style>
  ])
}

export const wrapPageElement = ({ element, props }) => {
  return sheets.collect(<Layout {...props}>{element}</Layout>)
}
